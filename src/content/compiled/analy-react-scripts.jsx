/*@jsxRuntime automatic @jsxImportSource react*/
import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
import {useMDXComponents as _provideComponents} from "@/src/content/mdx-components";
function _createMdxContent(props) {
  const _components = Object.assign({
    h2: "h2",
    a: "a",
    span: "span",
    p: "p",
    code: "code",
    div: "div",
    pre: "pre",
    blockquote: "blockquote",
    ul: "ul",
    li: "li"
  }, _provideComponents(), props.components);
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.h2, {
      id: "前言",
      children: [_jsx(_components.a, {
        className: "anchor",
        href: "#前言",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "前言"]
    }), "\n", _jsxs(_components.p, {
      children: ["我们通过", _jsx(_components.a, {
        href: "https://create-react-app.dev/",
        children: "CRA"
      }), "在初始化一个 ", _jsx(_components.code, {
        children: "React"
      }), " 项目的时候，通过在终端执行 ", _jsx(_components.code, {
        children: "npm run start"
      }), " 运行项目，然后浏览器打开 ", _jsx(_components.code, {
        children: "https:localhost:3000"
      }), " 就可以直接运行我们的项目，背后的原理是什么呢？"]
    }), "\n", _jsxs(_components.h2, {
      id: "入口文件",
      children: [_jsx(_components.a, {
        className: "anchor",
        href: "#入口文件",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "入口文件"]
    }), "\n", _jsxs(_components.p, {
      children: ["通过在 ", _jsx(_components.code, {
        children: "package.json"
      }), " 文件找到，我们运行 ", _jsx(_components.code, {
        children: "npm run start"
      }), " 背后是通过运行 ", _jsx(_components.code, {
        children: "react-scripts start"
      }), " 启动项目，我们执行命令行把项目下载到本地"]
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
              children: "git"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "clone"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "https://github.com/facebook/create-react-app.git"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            })]
          })
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["下载完成后，打开文件 ", _jsx(_components.code, {
        children: "react-scripts/bin/react-scripts.js"
      })]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: ["该文件主要解析参数并执行对应的 ", _jsx(_components.code, {
          children: ".js"
        }), " 文件"]
      }), "\n"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
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
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 跨平台的spawn"
            })
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
              children: "spawn"
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
              children: "'react-dev-utils/crossSpawn'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 获取构建命令参数 如start、build、test、eject"
            })
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
              children: "args"
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
              children: "process"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "argv"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "slice"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "2"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
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
              children: "scriptIndex"
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
              children: "args"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "findIndex"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
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
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: "x"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
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
                color: "#E06C75"
              },
              children: "x"
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
                color: "#98C379"
              },
              children: "'build'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "||"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "x"
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
                color: "#98C379"
              },
              children: "'eject'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "||"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "x"
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
                color: "#98C379"
              },
              children: "'start'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "||"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "x"
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
                color: "#98C379"
              },
              children: "'test'"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })
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
              children: "script"
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
                color: "#E06C75"
              },
              children: "scriptIndex"
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
                color: "#56B6C2"
              },
              children: "-"
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
                color: "#C678DD"
              },
              children: "?"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "args"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "["
            }), _jsx(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "args"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "["
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "scriptIndex"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "];"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 获取node命令的参数"
            })
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
              children: "nodeArgs"
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
                color: "#E06C75"
              },
              children: "scriptIndex"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
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
                color: "#D19A66"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "?"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "args"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "slice"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "scriptIndex"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " [];"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 根据构建参数执行对应的文件"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "if"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " (["
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'build'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'eject'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'start'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'test'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "]."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "includes"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "script"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ")) {"
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
              children: "result"
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
              children: "spawn"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "sync"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
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
                color: "#E5C07B"
              },
              children: "process"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "execPath"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 绝对路径"
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
              children: "nodeArgs"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      ."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "concat"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "require"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "resolve"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'../scripts/'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "script"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "))"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      ."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "concat"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "args"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "slice"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "scriptIndex"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "+"
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
              children: ")),"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    { "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "stdio"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'inherit'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " }"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  );"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  ..."
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "} "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "else"
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
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 打印一些错误"
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
                color: "#E5C07B"
              },
              children: "console"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'Unknown script \"'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "script"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'\".'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
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
                color: "#E5C07B"
              },
              children: "console"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'Perhaps you need to update react-scripts?'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
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
                color: "#E5C07B"
              },
              children: "console"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
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
              children: "'See: https://facebook.github.io/create-react-app/docs/updating-to-new-releases'"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  );"
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
    }), "\n", _jsxs(_components.h2, {
      id: "分析文件",
      children: [_jsx(_components.a, {
        className: "anchor",
        href: "#分析文件",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "分析文件"]
    }), "\n", _jsxs(_components.p, {
      children: ["打开 ", _jsx(_components.code, {
        children: "scripts/start.js"
      }), " 文件"]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: ["主要初始化 ", _jsx(_components.code, {
          children: "webpack"
        }), " 配置，通过 ", _jsx(_components.code, {
          children: "webpack-dev-server"
        }), " 本地启动一个node服务"]
      }), "\n"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
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
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "..."
            })
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
              children: "fs"
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
              children: "'fs'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
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
              children: "chalk"
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
              children: "'react-dev-utils/chalk'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
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
              children: "webpack"
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
              children: "'webpack'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
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
              children: "WebpackDevServer"
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
              children: "'webpack-dev-server'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
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
              children: "clearConsole"
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
              children: "'react-dev-utils/clearConsole'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
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
              children: "checkRequiredFiles"
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
              children: "'react-dev-utils/checkRequiredFiles'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
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
                color: "#E5C07B"
              },
              children: "choosePort"
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
                color: "#E5C07B"
              },
              children: "createCompiler"
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
                color: "#E5C07B"
              },
              children: "prepareProxy"
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
                color: "#E5C07B"
              },
              children: "prepareUrls"
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
              children: "} "
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
              children: "'react-dev-utils/WebpackDevServerUtils'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
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
              children: "openBrowser"
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
              children: "'react-dev-utils/openBrowser'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
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
              children: "paths"
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
              children: "'../config/paths'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
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
              children: "configFactory"
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
              children: "'../config/webpack.config'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
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
              children: "createDevServerConfig"
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
              children: "'../config/webpackDevServer.config'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 判断nodejs是否在终端运行"
            })
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
              children: "isInteractive"
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
              children: "process"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "stdout"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "isTTY"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 校验入口文件"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
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
                color: "#61AFEF"
              },
              children: "checkRequiredFiles"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "(["
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "paths"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "appHtml"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "paths"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "appIndexJs"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "])) {"
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
                color: "#E5C07B"
              },
              children: "process"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "exit"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
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
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 设置默认的端口和HOST"
            })
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
              children: "DEFAULT_PORT"
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
              children: "parseInt"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "process"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "env"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "PORT"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "10"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "||"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "3000"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
              children: "HOST"
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
              children: "process"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "env"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "HOST"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "||"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'0.0.0.0'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "/**"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: " * checkBrowsers内部使用browserslist，会从can-i-use数据库判断css、js支持的版本"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: " * 会先校验package.json文件里面有没有browserslist字段"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: " * 1.如果有直接返回promise"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: " * 2.没有的话会在终端询问是否要添加browserslist"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "*/"
            })
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
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "checkBrowsers"
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
              children: "'react-dev-utils/browsersHelper'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "checkBrowsers"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "paths"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "appPath"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "isInteractive"
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
              children: "  ."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "then"
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
              children: " {"
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
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "/**"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "     * detect-port-alt校验当前端口是否被占用"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "     * 如果被占用，提示是否使用另外的端口"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "    */"
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
                color: "#61AFEF"
              },
              children: "choosePort"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "HOST"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "DEFAULT_PORT"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  })"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  ."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "then"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: "port"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
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
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 返回当前端口"
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
                color: "#E06C75"
              },
              children: "port"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "=="
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "null"
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
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// We have not found a port."
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
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    }"
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
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "/**"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "     * configFactory有以下功能"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "     * 初始化webpack配置"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "     * 1.定义入口文件、输出文件"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "     * 2.定义规则：处理图片、字体、css、jsx"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "     * 3.使用插件"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "     *  - HtmlWebpackPlugin 为html自动插入输出的js"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "     *  - MiniCssExtractPlugin css压缩插件"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "     *  - WebpackManifestPlugin 生成manifest.json"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "     *  - ESLintPlugin 配置一些eslint规则"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "    */"
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
              children: "configFactory"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'development'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
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
              children: "protocol"
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
              children: "process"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "env"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "HTTPS"
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
                color: "#98C379"
              },
              children: "'true'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "?"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'https'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'http'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
              children: "appName"
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
              children: "require"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "paths"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "appPackageJson"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ")."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "name"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 判断是否使用ts"
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
              children: "useTypeScript"
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
              children: "fs"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "existsSync"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "paths"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "appTsConfig"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
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
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 通过协议、域名、端口组合成完成的地址字符串"
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
              children: "urls"
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
              children: "prepareUrls"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
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
              children: "protocol"
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
                color: "#E5C07B"
              },
              children: "HOST"
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
              children: "port"
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
                color: "#E5C07B"
              },
              children: "paths"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "publicUrlOrPath"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "slice"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
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
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    );"
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
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 内部通过调用webpack(config) 生成一个compiler实例"
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
              children: "compiler"
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
              children: "createCompiler"
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
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "appName"
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
              children: "config"
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
              children: "urls"
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
              children: "useYarn"
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
              children: "useTypeScript"
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
              children: "webpack"
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
              children: "    });"
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
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 获取package.json文件中的proxy字段"
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
              children: "proxySetting"
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
              children: "require"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "paths"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "appPackageJson"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ")."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "proxy"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 配置一些代理相关的信息"
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
              children: "proxyConfig"
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
              children: "prepareProxy"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
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
              children: "proxySetting"
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
                color: "#E5C07B"
              },
              children: "paths"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "appPublic"
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
                color: "#E5C07B"
              },
              children: "paths"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "publicUrlOrPath"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    );"
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
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 配置WebpackDevServer参数"
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
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// https://github.com/webpack/webpack-dev-server"
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
              children: "serverConfig"
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
              children: "      ..."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "createDevServerConfig"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "proxyConfig"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "urls"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "lanUrlForConfig"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "),"
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
              children: "host"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "HOST"
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
              children: "port"
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
              children: "    };"
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
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 创建本地服务器"
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
              children: "devServer"
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
              children: "WebpackDevServer"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "serverConfig"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "compiler"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
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
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 服务启动后的回调"
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
                color: "#E5C07B"
              },
              children: "devServer"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "startCallback"
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
              children: " {"
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
              children: "if"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "isInteractive"
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
              children: "        "
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "clearConsole"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "();"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      }"
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
              children: "      "
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
                color: "#E5C07B"
              },
              children: "env"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "raw"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "FAST_REFRESH"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "&&"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "semver"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "lt"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "react"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "version"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'16.10.0'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ")) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "        "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "console"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
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
                color: "#E5C07B"
              },
              children: "chalk"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "yellow"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
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
                color: "#98C379"
              },
              children: "`Fast Refresh requires React 16.10 or higher. You are using React "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "${"
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "react"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "version"
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: ".`"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "          )"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "        );"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      }"
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
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "console"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "chalk"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "cyan"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'Starting the development server..."
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "\\n"
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "));"
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
              children: "openBrowser"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "urls"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "localUrlForBrowser"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    });"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  })"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "..."
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.h2, {
      id: "总结",
      children: [_jsx(_components.a, {
        className: "anchor",
        href: "#总结",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "总结"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["如果想透彻的了解脚手架，必须读懂 ", _jsx(_components.a, {
          href: "https://github.com/facebook/create-react-app/tree/main/packages/react-dev-utils",
          children: "react-dev-uilts"
        }), " 库"]
      }), "\n", _jsxs(_components.li, {
        children: ["内部原理为通过 ", _jsx(_components.a, {
          href: "https://github.com/webpack/webpack-dev-server",
          children: "webpack-dev-server"
        }), "创建一个 ", _jsx(_components.code, {
          children: "express"
        }), " 服务，然后和浏览器建立一个 ", _jsx(_components.code, {
          children: "webSocket"
        }), " 链接进行通讯。", _jsx(_components.a, {
          href: "https://github.com/jantimon/html-webpack-plugin",
          children: "html-webpack-plugin"
        }), " 负责为本地的 ", _jsx(_components.code, {
          children: "html"
        }), " 文件注入 ", _jsx(_components.code, {
          children: "js"
        })]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "https://github.com/node-modules/detect-port",
          children: "detect-port-alt"
        }), "会校验当前端口是否被占用"]
      }), "\n", _jsxs(_components.li, {
        children: ["在启动项目时，会检测 ", _jsx(_components.code, {
          children: "process.env.BROWSERSLIST、process.env.BROWSERSLIST_CONFIG、browserslist、.browserslistrc、package.json"
        }), " 文件中是否有 ", _jsx(_components.code, {
          children: "browserslist"
        }), " 信息，如果不存在会在 ", _jsx(_components.code, {
          children: "package.json"
        }), " 文件中自动添加默认值"]
      }), "\n"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        className: "one-dark-pro",
        tabIndex: "0",
        "data-language": "json",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "json",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "\"browserslist\""
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
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "\"production\""
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "\">0.2%\""
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "\"not dead\""
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "\"not op_mini all\""
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
              children: "\"development\""
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
              children: "\"last 1 chrome version\""
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
              children: "\"last 1 firefox version\""
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
              children: "\"last 1 safari version\""
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
