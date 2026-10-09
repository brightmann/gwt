import Link from 'next/link'

const pill =
  'inline-block py-1.5 px-4 rounded-full border border-neutral-300 dark:border-neutral-700 hover:scale-105 transition-all ease duration-200 m-1 text-sm'

export default function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number
  totalPages: number
}) {
  if (totalPages <= 1) return null

  const pageLink = (pageNum: number) =>
    pageNum === 1 ? '/' : `/page/${pageNum}`

  const items: Array<number | string> = []
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) items.push(i)
  } else {
    items.push(1)
    if (currentPage > 3) items.push('ellipsis-start')
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      items.push(i)
    }
    if (currentPage < totalPages - 2) items.push('ellipsis-end')
    items.push(totalPages)
  }

  return (
    <nav className="flex items-center justify-center flex-wrap mt-10 px-5">
      {currentPage > 1 && (
        <Link
          href={pageLink(currentPage - 1)}
          className={`${pill} bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100`}
        >
          Previous
        </Link>
      )}
      {items.map((item) =>
        typeof item === 'string' ? (
          <span key={item} className="mx-1 text-neutral-500 dark:text-neutral-400">
            …
          </span>
        ) : item === currentPage ? (
          <span
            key={item}
            className={`${pill} bg-neutral-800 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-800`}
          >
            {item}
          </span>
        ) : (
          <Link
            key={item}
            href={pageLink(item)}
            className={`${pill} bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100`}
          >
            {item}
          </Link>
        )
      )}
      {currentPage < totalPages && (
        <Link
          href={pageLink(currentPage + 1)}
          className={`${pill} bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100`}
        >
          Next
        </Link>
      )}
    </nav>
  )
}
