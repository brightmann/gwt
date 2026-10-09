import { allBlogs } from '@/src/content/blog-data'
import BlogCard from './blog-card'
import Pagination from './pagination'
import redis from '@/lib/redis'
import { use } from 'react'

export const POSTS_PER_PAGE = 5

export function getSortedBlogs() {
  return [...allBlogs].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1
    }
    return 1
  })
}

export function getTotalPages() {
  return Math.max(1, Math.ceil(getSortedBlogs().length / POSTS_PER_PAGE))
}

export default function BlogList({ page }: { page: number }) {
  const posts = getSortedBlogs().slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  )

  const views = use(
    redis.mget<number[]>(...posts.map(({ slug }) => slug))
  ).reduce((acc, v, index) => {
    acc[posts[index].slug] = v ?? 0
    return acc
  }, {} as Record<string, number>)

  return (
    <section>
      {posts.map((item) => (
        <BlogCard key={item._id} {...item} view={views[item.slug] ?? 0} />
      ))}
      <Pagination currentPage={page} totalPages={getTotalPages()} />
    </section>
  )
}
