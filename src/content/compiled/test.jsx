/*@jsxRuntime automatic @jsxImportSource react*/
import {jsx as _jsx} from "react/jsx-runtime";
import {useMDXComponents as _provideComponents} from "@/src/content/mdx-components";
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p"
  }, _provideComponents(), props.components);
  return _jsx(_components.p, {
    children: "这是测试。"
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, _provideComponents(), props.components);
  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {
    children: _jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
export default MDXContent;
