/*@jsxRuntime automatic @jsxImportSource react*/
import {jsx as _jsx} from "react/jsx-runtime";
import {useMDXComponents as _provideComponents} from "@/src/content/mdx-components";
function _createMdxContent(props) {
  return _jsx("iframe", {
    width: "640",
    height: "360",
    src: "https://www.youtube.com/embed/asKQbk7AcJU",
    title: "崔伟立原唱《战马》完整版 歌曲旋律优美，句句入耳入心超好听",
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    referrerpolicy: "strict-origin-when-cross-origin",
    allowfullscreen: true
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, _provideComponents(), props.components);
  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {
    children: _jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
export default MDXContent;
