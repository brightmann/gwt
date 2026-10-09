import { notFound, redirect } from 'next/navigation'
import BlogList, { getTotalPages } from '@/app/components/blog/blog-list'

export function generateStaticParams() {
  const total = getTotalPages()
  return Array.from({ length: Math.max(0, total - 1) }, (_, i) => ({
    page: String(i + 2),
  }))
}

export default function PaginatedPage({
  params,
}: {
  params: { page: string }
}) {
  const page = parseInt(params.page, 10)
  if (isNaN(page) || page < 1) notFound()
  if (page === 1) redirect('/')
  if (page > getTotalPages()) notFound()
  return <BlogList page={page} />
}
