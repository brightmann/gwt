import { notFound } from 'next/navigation'
import PreviewProvider from './blog/preview-photo'
import { getMdxComponent } from '@/src/content/compiled/registry'

type MdxProps = {
  readonly slug: string
}

// Post bodies are precompiled at build time (scripts/compile-mdx.mjs) into
// static components. next-contentlayer's useMDXComponent evaluates code with
// new Function(), which is forbidden on Cloudflare Workers.
export default function Mdx({ slug }: MdxProps) {
  const Component = getMdxComponent(slug)
  if (!Component) {
    notFound()
  }
  return (
    <article className="prose prose-stone dark:prose-invert">
      <PreviewProvider>
        <Component />
      </PreviewProvider>
    </article>
  )
}
