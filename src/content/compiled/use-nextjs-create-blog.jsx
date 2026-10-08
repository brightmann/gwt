/*@jsxRuntime automatic @jsxImportSource react*/
import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
import {useMDXComponents as _provideComponents} from "@/src/content/mdx-components";
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    a: "a",
    br: "br",
    h2: "h2",
    span: "span",
    ul: "ul",
    li: "li",
    div: "div",
    pre: "pre",
    code: "code"
  }, _provideComponents(), props.components), {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "https://nextjs.org/",
        children: "Nextjs"
      }), " 是一个基于React的服务端渲染框架.", _jsx(_components.br, {}), "\n", _jsx(_components.a, {
        href: "https://tailwindcss.com/",
        children: "Tailwind"
      }), " 无需书写 CSS，即可快速构建美观的网站的组件库.", _jsx(_components.br, {}), "\n", _jsx(_components.a, {
        href: "https://contentlayer.dev/",
        children: "Contentlayer"
      }), " 将内容转换成JSON并导入应用程序."]
    }), "\n", _jsxs(_components.h2, {
      id: "前期准备",
      children: [_jsx(_components.a, {
        className: "anchor",
        href: "#前期准备",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "前期准备"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "https://nodejs.org/",
          children: "Nodejs"
        }), " >= 18.17.x"]
      }), "\n"]
    }), "\n", _jsxs(_components.h2, {
      id: "初始化项目",
      children: [_jsx(_components.a, {
        className: "anchor",
        href: "#初始化项目",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "初始化项目"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        className: "one-dark-pro",
        tabIndex: "0",
        "data-language": "bash",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "bash",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "# 使用命令行"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "npx"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "create-next-app@latest"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "npx:"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "安装成功，用时"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "5.568"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "秒"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "# 选择配置如下"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "✔"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "What"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "is"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "your"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "project"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "named?"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "…"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              "data-highlighted-chars": "",
              "data-chars-id": "v",
              children: "my-app"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "✔"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "Would"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "you"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "like"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "to"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "use"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "TypeScript?"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "…"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "No"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              "data-highlighted-chars": "",
              "data-chars-id": "v",
              children: "Yes"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "✔"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "Would"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "you"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "like"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "to"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "use"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "ESLint?"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "…"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "No"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              "data-highlighted-chars": "",
              "data-chars-id": "v",
              children: "Yes"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "✔"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "Would"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "you"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "like"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "to"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "use"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "Tailwind"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "CSS?"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "…"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "No"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              "data-highlighted-chars": "",
              "data-chars-id": "v",
              children: "Yes"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "✔"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "Would"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "you"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "like"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "to"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "use"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "`"
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "src/"
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "`"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "directory?"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "…"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              "data-highlighted-chars": "",
              "data-chars-id": "v",
              children: "No"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "Yes"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "✔"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "Would"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "you"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "like"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "to"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "use"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "App"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "Router?"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " (recommended) … No / "
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              "data-highlighted-chars": "",
              "data-chars-id": "v",
              children: "Yes"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "✔"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "Would"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "you"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "like"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "to"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "customize"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "the"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "default"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "alias"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " (@/*)? … "
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              "data-highlighted-chars": "",
              "data-chars-id": "v",
              children: "No"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " / Yes"
            })]
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "Nextjs"
      }), "应用页面层次如下"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "layout.js"
      }), "\n", _jsx(_components.li, {
        children: "template.js"
      }), "\n", _jsx(_components.li, {
        children: "error.js (React error boundary)"
      }), "\n", _jsx(_components.li, {
        children: "loading.js (React suspense boundary)"
      }), "\n", _jsx(_components.li, {
        children: "not-found.js (React error boundary)"
      }), "\n", _jsx(_components.li, {
        children: "page.js"
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["对应", _jsx(_components.code, {
        children: "React"
      }), "渲染路由如下"]
    }), "\n", _jsx(Image, {
      src: `/images/use-nextjs-create-blog/render-router.png`,
      width: 1600,
      height: 840
    }), "\n", _jsx(_components.p, {
      children: "嵌套路由只需要嵌套父应用里面即可"
    }), "\n", _jsx(Image, {
      src: `/images/use-nextjs-create-blog/sub-router.png`,
      width: 1600,
      height: 840
    }), "\n", _jsxs(_components.h2, {
      id: "新建博客页面",
      children: [_jsx(_components.a, {
        className: "anchor",
        href: "#新建博客页面",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "新建博客页面"]
    }), "\n", _jsxs(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: [_jsx(_components.div, {
        "data-rehype-pretty-code-title": "",
        "data-language": "tsx",
        "data-theme": "default",
        children: "app/blog/[slug]/page.tsx"
      }), _jsx(_components.pre, {
        className: "one-dark-pro",
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "type"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "BlogSlugProps"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "params"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "slug"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "string"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "default"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "BlogSlug"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: "params"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " }: "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "BlogSlugProps"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ") {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "section"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "params"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "slug"
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "}"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "section"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  )"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "}"
            })
          })]
        })
      })]
    }), "\n", _jsxs(_components.h2, {
      id: "新建mdx文件",
      children: [_jsx(_components.a, {
        className: "anchor",
        href: "#新建mdx文件",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "新建MDX文件"]
    }), "\n", _jsxs(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: [_jsx(_components.div, {
        "data-rehype-pretty-code-title": "",
        "data-language": "mdx",
        "data-theme": "default",
        children: "content/template.mdx"
      }), _jsx(_components.pre, {
        className: "one-dark-pro",
        tabIndex: "0",
        "data-language": "mdx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "mdx",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "---"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "title"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'template'"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "publishedAt"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'2023-11-11'"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "summary"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'This is your first blog post.'"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "---"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "first blog"
            })
          })]
        })
      })]
    }), "\n", _jsxs(_components.h2, {
      id: "解析mdx",
      children: [_jsx(_components.a, {
        className: "anchor",
        href: "#解析mdx",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "解析MDX"]
    }), "\n", _jsxs(_components.p, {
      children: ["使用", _jsx(_components.a, {
        href: "https://contentlayer.dev/",
        children: "Contentlayer"
      }), "来解析mdx文件，新建", _jsx(_components.code, {
        children: "contentlayer.config.ts"
      }), "文件"]
    }), "\n", _jsx(_components.p, {
      children: "安装以下依赖"
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        className: "one-dark-pro",
        tabIndex: "0",
        "data-language": "sh",
        "data-theme": "default",
        children: _jsx(_components.code, {
          "data-language": "sh",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "pnpm"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "add"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "contentlayer"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "next-contentlayer"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "@tailwindcss/typography"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "reading-time"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "remark-gfm"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "rehype-slug"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "rehype-autolink-headings"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "rehype-pretty-code"
            })]
          })
        })
      })
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "https://github.com/tailwindcss/typography",
          children: "@tailwindcss/typography"
        }), ": tailwind风格的HTML排版"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "https://github.com/ngryman/reading-time",
          children: "reading-time"
        }), ": 解析文档内容字符数量，并计算预计阅读时间"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "https://github.com/remarkjs/remark-gfm",
          children: "remark-gfm"
        }), ": mdx转成html插件"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "https://github.com/rehypejs/rehype-slug",
          children: "rehype-slug"
        }), ": h1-h6标签添加id"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "https://github.com/rehypejs/rehype-autolink-headings",
          children: "rehype-autolink-headings"
        }), ": 添加锚点"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "https://rehype-pretty-code.netlify.app/",
          children: "rehype-pretty-code"
        }), ": 美化代码"]
      }), "\n"]
    }), "\n", _jsxs(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: [_jsx(_components.div, {
        "data-rehype-pretty-code-title": "",
        "data-language": "ts",
        "data-theme": "default",
        children: "contentlayer.config.ts"
      }), _jsx(_components.pre, {
        className: "one-dark-pro",
        tabIndex: "0",
        "data-language": "ts",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "ts",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "defineDocumentType"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "makeSource"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " } "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'contentlayer/source-files'"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "readingTime"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'reading-time'"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "remarkGfm"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'remark-gfm'"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "rehypeSlug"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'rehype-slug'"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "rehypeAutolinkHeadings"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'rehype-autolink-headings'"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "rehypePrettyCode"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'rehype-pretty-code'"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "Blog"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "defineDocumentType"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "(() "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " ({"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "name"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'Blog'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ","
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "filePathPattern"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'**/*.mdx'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ","
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "contentType"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'mdx'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ","
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 定义入口字段"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "fields"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "title"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "type"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'string'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ","
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "required"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "true"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ","
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    },"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "summary"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "type"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'string'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ","
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "required"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "true"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ","
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    },"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "publishedAt"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "type"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'string'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ","
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "required"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "true"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ","
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    },"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  },"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 定义额外出参"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "computedFields"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "slug"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "type"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'string'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ","
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "resolve"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": ("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: "doc"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "doc"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "_raw"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "flattenedPath"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ","
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    },"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "readingTime"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "type"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'nested'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ","
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "resolve"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": ("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: "doc"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "readingTime"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "doc"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "body"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "code"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "),"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    },"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  },"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "}))"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "default"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "makeSource"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "({"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "contentDirPath"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'content'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ","
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "documentTypes"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "Blog"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "],"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "mdx"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "remarkPlugins"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "remarkGfm"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "],"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "rehypePlugins"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": ["
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "rehypeSlug"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ","
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      ["
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "        "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "rehypePrettyCode"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ","
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "        {"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "          "
            }), _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 代码主题类型 https://unpkg.com/browse/shiki@0.14.2/themes/"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "          "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "theme"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'one-dark-pro'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ","
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "          "
            }), _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// To apply a custom background instead of inheriting the background from the theme"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "          "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "keepBackground"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "false"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ","
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "        },"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      ],"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      ["
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "        "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "rehypeAutolinkHeadings"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ","
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "        {"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "          "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "properties"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "            "
            }), _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 锚点类名"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "            "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "className"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'anchor'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "],"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "          },"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "        },"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      ],"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    ],"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  },"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "})"
            })
          })]
        })
      })]
    }), "\n", _jsxs(_components.p, {
      children: ["修改", _jsx(_components.code, {
        children: "next.config.js"
      }), "文件"]
    }), "\n", _jsxs(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: [_jsx(_components.div, {
        "data-rehype-pretty-code-title": "",
        "data-language": "js",
        "data-theme": "default",
        children: "next.config.js"
      }), _jsx(_components.pre, {
        className: "one-dark-pro",
        tabIndex: "0",
        "data-language": "js",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "js",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            "data-highlighted-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "withContentlayer"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " } "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "require"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'next-contentlayer'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "/** "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD",
                fontStyle: "italic"
              },
              children: "@type"
            }), _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B",
                fontStyle: "italic"
              },
              children: "{import('next').NextConfig}"
            }), _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: " */"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "nextConfig"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " {}"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "module"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "exports"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              "data-highlighted-chars": "",
              "data-chars-id": "v",
              children: "withContentlayer"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "nextConfig"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ")"
            })]
          })]
        })
      })]
    }), "\n", _jsxs(_components.p, {
      children: ["运行 ", _jsx(_components.code, {
        children: "pnpm dev"
      }), " 会发现项目中新增一个 ", _jsx(_components.code, {
        children: ".contentlayer"
      }), " 文件夹，打开后可以找到我们编写的 ", _jsx(_components.code, {
        children: ".mdx"
      }), " 文件已经被解析成对应的 ", _jsx(_components.code, {
        children: ".json"
      }), " 文件。由于 ", _jsx(_components.code, {
        children: ".contentlayer"
      }), " 该文件夹是运行的时候生成的，我们需要在提交代码的时候忽略掉，需要在 ", _jsx(_components.code, {
        children: ".gitignore"
      }), " 文件中增加 ", _jsx(_components.code, {
        children: ".contentlayer"
      })]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "tailwind.config.ts"
      }), " 文件需要配置 ", _jsx(_components.code, {
        children: "@tailwindcss/typography"
      }), " 插件"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        className: "one-dark-pro",
        tabIndex: "0",
        "data-language": "ts",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "ts",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "type"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "Config"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " } "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'tailwindcss'"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "typography"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'@tailwindcss/typography'"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "config"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "Config"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "darkMode"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'class'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ","
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "content"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": ["
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'./app/**/*.{ts,tsx}'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ","
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'./components/**/*.{ts,tsx}'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ","
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'./content/**/*.mdx'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ","
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  ],"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "theme"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "extend"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": {},"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  },"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "plugins"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "typography"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "],"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "}"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "default"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "config"
            })]
          })]
        })
      })
    }), "\n", _jsxs(_components.h2, {
      id: "解析数据",
      children: [_jsx(_components.a, {
        className: "anchor",
        href: "#解析数据",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "解析数据"]
    }), "\n", _jsxs(_components.p, {
      children: ["我们打开 ", _jsx(_components.code, {
        children: "app/page.tsx"
      }), " 文件，修改代码如下"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        className: "one-dark-pro",
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            "data-highlighted-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "allBlogs"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " } "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'contentlayer/generated'"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            "data-highlighted-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "Link"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'next/link'"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "default"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "Home"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "() {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "section"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            "data-highlighted-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "allBlogs"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            "data-highlighted-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "        ."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "sort"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: "a"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: "b"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            "data-highlighted-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "          "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "if"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "new"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "Date"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "a"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "publishedAt"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "new"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "Date"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "b"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "publishedAt"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ")) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            "data-highlighted-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "            "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "1"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            "data-highlighted-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "          }"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            "data-highlighted-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "          "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "1"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            "data-highlighted-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "        })"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            "data-highlighted-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "        ."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "map"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: "item"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            "data-highlighted-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "          <"
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "Link"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            "data-highlighted-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "            "
            }), _jsx(_components.span, {
              style: {
                color: "#D19A66",
                fontStyle: "italic"
              },
              children: "key"
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "item"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "slug"
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "}"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            "data-highlighted-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "            "
            }), _jsx(_components.span, {
              style: {
                color: "#D19A66",
                fontStyle: "italic"
              },
              children: "href"
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "`/blog/"
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "${"
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "item"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "sulg"
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "`"
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "}"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            "data-highlighted-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "            "
            }), _jsx(_components.span, {
              style: {
                color: "#D19A66",
                fontStyle: "italic"
              },
              children: "className"
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'mb-5'"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            "data-highlighted-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "          >"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            "data-highlighted-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "            "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "item"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "title"
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "}"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            "data-highlighted-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "          </"
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "Link"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            "data-highlighted-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "        ))"
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "}"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "section"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  )"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "页面展示如下"
            })
          })]
        })
      })
    }), "\n", _jsx(Image, {
      src: `/images/use-nextjs-create-blog/allBlogs.png`,
      width: 1600,
      height: 840,
      className: "border"
    }), "\n", _jsxs(_components.p, {
      children: ["修改 ", _jsx(_components.code, {
        children: "app/blog/[slug]/page.tsx"
      }), " 文件"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        className: "one-dark-pro",
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "allBlogs"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " } "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'contentlayer/generated'"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "notFound"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " } "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'next/navigation'"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "useMDXComponent"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " } "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'next-contentlayer/hooks'"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "type"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "BlogSlugProps"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "params"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "slug"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "string"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "default"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "BlogSlug"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: "params"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " }: "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "BlogSlugProps"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ") {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "post"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "allBlogs"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "find"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: "post"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "post"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "slug"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "params"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "slug"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "if"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "!"
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "post"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ") {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "notFound"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "Component"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "useMDXComponent"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "post"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "body"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "code"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "section"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#D19A66",
                fontStyle: "italic"
              },
              children: "className"
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "\"prose prose-stone\""
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "Component"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " />"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "section"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  )"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "页面展示如下"
    }), "\n", _jsx(Image, {
      src: `/images/use-nextjs-create-blog/blog-slug.png`,
      width: 1600,
      height: 840,
      className: "border"
    }), "\n", _jsx(_components.p, {
      children: "目前为止，整个博客结构体系搭建完成，可以愉快的编写MDX文件来写博客了"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, _provideComponents(), props.components);
  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {
    children: _jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
export default MDXContent;
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
