// Precompiles content/*.mdx to static React components at build time.
//
// Replaces next-contentlayer's useMDXComponent (which evaluates the compiled
// MDX with new Function(), forbidden on Cloudflare Workers) with plain
// importable modules. Mirrors the remark/rehype pipeline from
// contentlayer.config.ts so rendered output stays identical.
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises'
import { join, basename } from 'node:path'
import { compile } from '@mdx-js/mdx'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const root = new URL('../', import.meta.url).pathname
const contentDir = join(root, 'content')
const outDir = join(root, 'src', 'content', 'compiled')

const files = (await readdir(contentDir)).filter((f) => f.endsWith('.mdx'))
await mkdir(outDir, { recursive: true })

const entries = []
for (const file of files) {
  const slug = basename(file, '.mdx')
  const raw = await readFile(join(contentDir, file), 'utf8')
  // Strip frontmatter — contentlayer consumes it separately for metadata.
  const body = raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')
  const { value } = await compile(body, {
    outputFormat: 'program',
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: 'one-dark-pro', keepBackground: false }],
      [rehypeAutolinkHeadings, { properties: { className: ['anchor'] } }],
    ],
    providerImportSource: '@/src/content/mdx-components',
  })
  const outName = `${slug}.jsx`
  await writeFile(join(outDir, outName), String(value))
  const varName = `Mdx_${slug.replace(/[^a-zA-Z0-9_$]/g, '_')}`
  entries.push({ slug, varName, outName })
  console.log(`compiled ${file} -> src/content/compiled/${outName}`)
}

const registry =
  entries.map(({ varName, outName }) => `import ${varName} from './${outName}'`).join('\n') +
  `\n\nconst registry: Record<string, React.ComponentType> = {\n` +
  entries.map(({ slug, varName }) => `  ${JSON.stringify(slug)}: ${varName},`).join('\n') +
  `\n}\n\nexport function getMdxComponent(slug: string): React.ComponentType | null {\n  return registry[slug] ?? null\n}\n`

await writeFile(join(outDir, 'registry.ts'), registry)
console.log(`wrote registry with ${entries.length} components`)
