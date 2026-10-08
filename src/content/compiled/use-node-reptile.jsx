/*@jsxRuntime automatic @jsxImportSource react*/
import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
import {useMDXComponents as _provideComponents} from "@/src/content/mdx-components";
function _createMdxContent(props) {
  const _components = Object.assign({
    h2: "h2",
    a: "a",
    span: "span",
    p: "p",
    blockquote: "blockquote",
    ul: "ul",
    li: "li",
    code: "code",
    div: "div",
    pre: "pre"
  }, _provideComponents(), props.components), {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
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
    }), "\n", _jsx(_components.p, {
      children: "why is node?"
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: ["通过", _jsx(_components.a, {
          href: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
          children: "Nodejs官网"
        }), "介绍可以知道，Nodejs 在浏览器外部运行 V8 JavaScript 引擎，这是 Google Chrome 的核心。这使得 Nodejs 具有非常高的性能。"]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "源码地址我会放到文章末，请自取"
    }), "\n", _jsx(_components.p, {
      children: "通过这篇文章，希望你看完有以下收获"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "https://nodejs.org/docs/latest-v21.x/api/cluster.html",
          children: "Cluster"
        }), "子进程与主进程间通信"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "https://github.com/axios/axios",
          children: "Axios"
        }), "下载图片到本地"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "https://github.com/cheeriojs/cheerio",
          children: "Cheerio"
        }), "服务端操作html"]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "node"
      }), "本身提供了", _jsx(_components.code, {
        children: "cluster"
      }), "和", _jsx(_components.code, {
        children: "child_process"
      }), "模块创建子进程，本质上", _jsx(_components.code, {
        children: "cluster.fork()"
      }), "是", _jsx(_components.code, {
        children: "child_process.fork()"
      }), "的上层实现，", _jsx(_components.code, {
        children: "cluster"
      }), "带来的好处是可以监听共享端口，否则建议使用", _jsx(_components.code, {
        children: "child_process"
      }), "，本文主要通过", _jsx(_components.code, {
        children: "cluster"
      }), "模块创建子进程"]
    }), "\n", _jsxs(_components.h2, {
      id: "架构图",
      children: [_jsx(_components.a, {
        className: "anchor",
        href: "#架构图",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "架构图"]
    }), "\n", _jsx(Image, {
      src: `/images/use-node-reptile/architecture.png`,
      width: 400,
      height: 400
    }), "\n", _jsxs(_components.h2, {
      id: "目标分析",
      children: [_jsx(_components.a, {
        className: "anchor",
        href: "#目标分析",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "目标分析"]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "作为二次元爱好者，怎么能错过每次收藏图片的机会呢"
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://e-shuushuu.net/",
        children: "打开网站"
      })
    }), "\n", _jsx("div", {
      className: "flex justify-center items-center",
      children: _jsx(Image, {
        src: `/images/use-node-reptile/2d.png`,
        width: 800,
        height: 800
      })
    }), "\n", _jsxs(_components.p, {
      children: ["本次我们来爬取", _jsx(_components.a, {
        href: "https://e-shuushuu.net/",
        children: "二次元网站"
      }), "的小姐姐，并且把获取到的图片下载到本地"]
    }), "\n", _jsxs(_components.h2, {
      id: "安装依赖",
      children: [_jsx(_components.a, {
        className: "anchor",
        href: "#安装依赖",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "安装依赖"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "https://github.com/axios/axios",
          children: "Axios"
        }), "主要请求页面，以及下载图片"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "https://github.com/cheeriojs/cheerio",
          children: "Cheerio"
        }), "在服务端像Jq操作html一样"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "https://github.com/caolan/async",
          children: "Async"
        }), "批量下载图片"]
      }), "\n"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        className: "one-dark-pro",
        tabIndex: "0",
        "data-language": "sh",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "sh",
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
              children: "# 安装依赖"
            })
          }), "\n", _jsxs(_components.span, {
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
              children: "axios"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "cheerio"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "asnyc"
            })]
          })]
        })
      })
    }), "\n", _jsxs(_components.h2, {
      id: "实战操作",
      children: [_jsx(_components.a, {
        className: "anchor",
        href: "#实战操作",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "实战操作"]
    }), "\n", _jsxs(_components.p, {
      children: ["新建 ", _jsx(_components.code, {
        children: "index.js"
      }), "文件，通过 ", _jsx(_components.code, {
        children: "cluster"
      }), " 的 ", _jsx(_components.code, {
        children: "isPrimary"
      }), " 方法判断是否是主进程。通过 ", _jsx(_components.a, {
        href: "https://nodejs.org/docs/latest-v21.x/api/cluster.html#clustersetupprimarysettings",
        children: "setupPrimary"
      }), " 方法设置子进程运行的文件路径，通过 ", _jsx(_components.code, {
        children: "cluster"
      }), " 的 ", _jsx(_components.code, {
        children: "fork"
      }), " 方法创建子进程，获取当前机器的cpu数量，表示可以开启多少个子进程，", _jsx(_components.code, {
        children: "fork"
      }), " 出来的worker进程通过 ", _jsx(_components.code, {
        children: "send"
      }), " 方法向子进程发送参数，通过监听 ", _jsx(_components.code, {
        children: "message"
      }), " 事件，可以获取子进程传来的数据"]
    }), "\n", _jsxs(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: [_jsx(_components.div, {
        "data-rehype-pretty-code-title": "",
        "data-language": "js",
        "data-theme": "default",
        children: "index.js"
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
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "#!/usr/bin/env node"
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
              children: "cluster"
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
              children: "'node:cluster'"
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
              children: "cpuNums"
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
              children: "'node:os'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ")."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "cpus"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "length"
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
              children: "allPage"
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
                color: "#D19A66"
              },
              children: "10"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 需要爬取的页数"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "let"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "curPage"
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
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 当前爬取的页数"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "let"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "images"
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
              children: " [] "
            }), _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 爬取的图片"
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
              children: "// 是否是主进程"
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
                color: "#E5C07B"
              },
              children: "cluster"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "isPrimary"
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
                color: "#E5C07B"
              },
              children: "cluster"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "setupPrimary"
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
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "exec"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'worker.js'"
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
              children: "// 子进程文件的文件路径"
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
              children: "args"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'--use'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'https'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "], "
            }), _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 传给工作进程的字符串参数。 默认值： process.argv.slice(2)"
            })]
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
              children: "for"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "let"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "i"
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
                color: "#D19A66"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "; "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "i"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "Math"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "min"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "allPage"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "cpuNums"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "); "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "i"
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "++"
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
              children: "worker"
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
              children: "cluster"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "fork"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()"
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
              children: "curPage"
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "++"
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
              children: "// 发送当前页给子进程"
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
              children: "worker"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "send"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "curPage"
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
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 监听子进程发送来的消息"
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
              children: "worker"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "on"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'message'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", ("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: "data"
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
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "images"
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
              children: " [..."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "images"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", ..."
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "JSON"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "parse"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ")]"
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
              children: "curPage"
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "++"
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
              children: "// 判断当前页是否大于需要爬取的页数"
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
              children: "curPage"
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
                color: "#E06C75"
              },
              children: "allPage"
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
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 关闭当前进程"
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
              children: "worker"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "disconnect"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()"
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
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 判断当前是否存在子进程，如果不存在，证明爬取完成，开始下载图片"
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
                color: "#E5C07B"
              },
              children: "Object"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "keys"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "cluster"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "workers"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ")."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "length"
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
              children: "          "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "cluster"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "disconnect"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()"
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
                color: "#61AFEF"
              },
              children: "download"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "images"
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
              children: "        }"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      } "
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
              children: "        "
            }), _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 子进程继续爬取数据"
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
              children: "worker"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "send"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "curPage"
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
              children: "      }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    })"
            })
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
                color: "#E5C07B"
              },
              children: "cluster"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "on"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'fork'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", ("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: "worker"
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
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    "
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
              children: "`cluster fork worker "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "${"
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "worker"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
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
              children: "pid"
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "\\n"
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "`"
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
              children: "  })"
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
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 监听子进程异常退出"
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
              children: "cluster"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "on"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'exit'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", ("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: "worker"
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
              children: "code"
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
              children: "signal"
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
              children: "code"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "!=="
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
                color: "#E5C07B"
              },
              children: "cluster"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "fork"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    } "
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
                color: "#98C379"
              },
              children: "`子进程 "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "${"
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "worker"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
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
              children: "pid"
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: " 关闭`"
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
              children: "    }"
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
            children: " "
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
    }), "\n", _jsxs(_components.p, {
      children: ["新建 ", _jsx(_components.code, {
        children: "worker.js"
      }), " 文件，通过监听 ", _jsx(_components.code, {
        children: "message"
      }), " 获取父进程传来的参数，进行爬取，获取数据后通过 ", _jsx(_components.code, {
        children: "send"
      }), " 方法发送数据通知父进程"]
    }), "\n", _jsxs(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: [_jsx(_components.div, {
        "data-rehype-pretty-code-title": "",
        "data-language": "js",
        "data-theme": "default",
        children: "worker.js"
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
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "#!/usr/bin/env node"
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
              children: "cluster"
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
              children: "'node:cluster'"
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
              children: "spider"
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
              children: "'./spider'"
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
              children: "cluster"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "isWorker"
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
              children: "on"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'message'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "async"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: "page"
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
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    "
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
              children: "`当前爬取第 "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "${"
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "page"
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: " 页`"
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
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "try"
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
              children: "data"
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
              children: "await"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "spider"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "page"
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
                color: "#98C379"
              },
              children: "`子进程 "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "${"
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
              children: "pid"
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: " 成功爬取第 "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "${"
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "page"
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: " 页 "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "${"
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "length"
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "条数据`"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      )"
            })
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
              children: "send"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "JSON"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "stringify"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "data"
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
              children: "    } "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "catch"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "error"
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
                color: "#E06C75"
              },
              children: "error"
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
              children: "    }"
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
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })]
    }), "\n", _jsxs(_components.p, {
      children: ["新建 ", _jsx(_components.code, {
        children: "spider.js"
      }), " 文件，主要通过", _jsx(_components.a, {
        href: "https://github.com/axios/axios",
        children: "Axios"
      }), "进行数据爬取，然后通过", _jsx(_components.a, {
        href: "https://github.com/cheeriojs/cheerio",
        children: "Cheerio"
      }), "解析出爬取到的图片链接"]
    }), "\n", _jsxs(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: [_jsx(_components.div, {
        "data-rehype-pretty-code-title": "",
        "data-language": "js",
        "data-theme": "default",
        children: "spider.js"
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
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "#!/usr/bin/env node"
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
              children: "axios"
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
              children: "'axios'"
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
              children: "cheerio"
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
              children: "'cheerio'"
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
              children: "baseUrl"
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
                color: "#98C379"
              },
              children: "'https://e-shuushuu.net'"
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
              children: "spider"
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
              children: "page"
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
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "axios"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "`"
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "${"
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "baseUrl"
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "?page="
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "${"
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "page"
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
                color: "#ABB2BF"
              },
              children: ", { "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "responseType"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'text'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " })."
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
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    ("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: "res"
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
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      "
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
              children: "$"
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
              children: "cheerio"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "load"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "res"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "data"
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
              children: "      "
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
              children: "data"
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
              children: " []"
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
              children: "$"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'#content .image_thread .thumb_image'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ")."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "each"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: "index"
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
                color: "#E06C75"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "["
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "index"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "] "
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
              children: "$"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "this"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ")."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "attr"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'href'"
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
              children: "      })"
            })
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
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "data"
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
              children: "baseUrl"
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
              children: "spider"
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
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })]
    }), "\n", _jsxs(_components.p, {
      children: ["新建 ", _jsx(_components.code, {
        children: "download.js"
      }), " 文件，通过", _jsx(_components.a, {
        href: "https://github.com/axios/axios",
        children: "Axios"
      }), "的流方式下载图片，通过", _jsx(_components.a, {
        href: "https://github.com/caolan/async",
        children: "Async"
      }), "批量下载"]
    }), "\n", _jsxs(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: [_jsx(_components.div, {
        "data-rehype-pretty-code-title": "",
        "data-language": "js",
        "data-theme": "default",
        children: "download.js"
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
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "#!/usr/bin/env node"
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
              children: "axios"
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
              children: "'axios'"
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
              children: "asnyc"
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
              children: "'async'"
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
              children: ")"
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
              children: "http"
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
              children: "'http'"
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
              children: "https"
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
              children: "'https'"
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
              children: "join"
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
              children: "'path'"
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
              children: "baseUrl"
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
              children: "'./spider'"
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
              children: "imagesPath"
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
              children: "join"
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
                color: "#61AFEF"
              },
              children: "cwd"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "(), "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'./images/'"
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
              children: "downloadField"
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
              children: "url"
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
                color: "#98C379"
              },
              children: "''"
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
              children: "callback"
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
              children: "fileName"
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
              children: "url"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "split"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'/'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ")."
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
              children: ")["
            }), _jsx(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "]"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
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
              children: "`图片: "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "${"
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "fileName"
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: " 开始下载`"
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
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "axios"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "baseUrl"
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
              children: "url"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "   "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "responseType"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "'stream'"
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
              children: "   "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "timeout"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "10000"
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
              children: "   "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "httpAgent"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
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
                color: "#E5C07B"
              },
              children: "http"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "Agent"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "keepAlive"
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
              children: " }),"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "   "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "httpsAgent"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
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
                color: "#E5C07B"
              },
              children: "https"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "Agent"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "keepAlive"
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
              children: " }),"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " })"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "   ."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "then"
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
              children: "res"
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
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "     "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "res"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "data"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "pipe"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
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
              children: "createWriteStream"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "`./images/"
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "${"
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "fileName"
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
              children: "     "
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
              children: "'"
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "\\x1B"
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "[32m'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "`图片: "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "${"
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "fileName"
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: " 下载成功`"
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
              children: "     "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "callback"
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
                color: "#61AFEF"
              },
              children: "callback"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "fileName"
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
              children: "   })"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "   ."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "catch"
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
              children: "error"
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
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "     "
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
              children: "'"
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "\\x1B"
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "[31m%s"
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "\\x1B"
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "[0m'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "`图片: "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "${"
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "fileName"
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: " 下载失败`"
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
              children: "     "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "callback"
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
                color: "#61AFEF"
              },
              children: "callback"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "error"
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
              children: "   })"
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
                color: "#C678DD"
              },
              children: "async"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: "images"
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
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "let"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "imageDirExist"
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
                color: "#D19A66"
              },
              children: "false"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "try"
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
              children: "   "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "imageDirExist"
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
                color: "#56B6C2"
              },
              children: "!!"
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
              children: "readdirSync"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "imagesPath"
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
              children: " } "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "catch"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "error"
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
              children: "   "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "imageDirExist"
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
                color: "#D19A66"
              },
              children: "false"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " }"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
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
              children: "imageDirExist"
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
              children: "   "
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
              children: "mkdirSync"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "imagesPath"
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
              children: " }"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "asnyc"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "map"
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
              children: "   "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "images"
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
              children: "   "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: "url"
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
              children: "callback"
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
              children: "     "
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "setTimeout"
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
              children: "       "
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "downloadField"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "url"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "callback"
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
              children: "     }, "
            }), _jsx(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "1000"
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
              children: "   },"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "   "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: "error"
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
              children: "results"
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
              children: "     "
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
              children: "error"
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
              children: "       "
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
              children: "error"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "`download file error:"
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "${"
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "error"
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
              children: "     } "
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
              children: "       "
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
              children: "'"
            }), _jsx(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "\\x1B"
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "[32m'"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: "`download "
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "${"
            }), _jsx(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "results"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "length"
            }), _jsx(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                color: "#98C379"
              },
              children: " file success`"
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
              children: "     }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "   }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " )"
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
          })]
        })
      })]
    }), "\n", _jsxs(_components.h2, {
      id: "效果",
      children: [_jsx(_components.a, {
        className: "anchor",
        href: "#效果",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "效果"]
    }), "\n", _jsxs(_components.p, {
      children: ["终端运行 ", _jsx(_components.code, {
        children: "node index.js"
      }), " 查看效果"]
    }), "\n", _jsx(Image, {
      src: `/images/use-node-reptile/fork.png`,
      width: 400,
      height: 400
    }), "\n", _jsx(_components.p, {
      children: "下载图片日志"
    }), "\n", _jsx(Image, {
      src: `/images/use-node-reptile/download.png`,
      width: 400,
      height: 400
    }), "\n", _jsxs(_components.h2, {
      id: "问题总结",
      children: [_jsx(_components.a, {
        className: "anchor",
        href: "#问题总结",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "问题总结"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["在ESmodule使用 ", _jsx(_components.code, {
          children: "cluster.fork"
        }), " 出来的进程，直接发送消息不生效，需要使用 ", _jsx(_components.code, {
          children: "setTimeout"
        }), " 包含，详见", _jsx(_components.a, {
          href: "https://github.com/nodejs/node/issues/34785",
          children: "Issues"
        })]
      }), "\n", _jsx(_components.li, {
        children: "在下载图片到本地的时候会出现失败的情况，建议设置如下参数"
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
          children: [_jsxs(_components.span, {
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
              children: "http"
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
              children: "'http'"
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
              children: "https"
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
              children: "'https'"
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
                color: "#61AFEF"
              },
              children: "axios"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "url"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", {"
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
              children: "timeout"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "10000"
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
              children: "httpAgent"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
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
                color: "#E5C07B"
              },
              children: "http"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "Agent"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "keepAlive"
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
              children: " }),"
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
              children: "httpsAgent"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ": "
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
                color: "#E5C07B"
              },
              children: "https"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "Agent"
            }), _jsx(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "keepAlive"
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
              children: " }),"
            })]
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
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "https://github.com/gwt9502-project/node-reptile",
        children: "源码地址"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
