import Mdx_analy_react_scripts from './analy-react-scripts.jsx'
import Mdx_ce from './ce.jsx'
import Mdx_decorator from './decorator.jsx'
import Mdx_fh from './fh.jsx'
import Mdx_test from './test.jsx'
import Mdx_use_nextjs_create_blog from './use-nextjs-create-blog.jsx'
import Mdx_use_node_reptile from './use-node-reptile.jsx'

const registry: Record<string, React.ComponentType> = {
  "analy-react-scripts": Mdx_analy_react_scripts,
  "ce": Mdx_ce,
  "decorator": Mdx_decorator,
  "fh": Mdx_fh,
  "test": Mdx_test,
  "use-nextjs-create-blog": Mdx_use_nextjs_create_blog,
  "use-node-reptile": Mdx_use_node_reptile,
}

export function getMdxComponent(slug: string): React.ComponentType | null {
  return registry[slug] ?? null
}
