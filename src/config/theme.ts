import { toMerged } from 'es-toolkit'

import type { Theme } from '@/types'

const cleanTheme: Theme = {
  base: {
    '--md-primary-color': `#000000`,
    'text-align': `left`,
    'line-height': `1.75`,
  },
  block: {
    // 一级标题
    h1: {
      'margin': `32px 0 8px`,
      'color': `var(--md-primary-color)`,
      'font-size': `1.5em`,
      'font-weight': `700`,
      'line-height': `1.35`,
      'font-family': `'Menlo','Monaco','Source Code Pro','Consolas','Inconsolata','Ubuntu Mono','DejaVu Sans Mono','Courier New','Droid Sans Mono','Hiragino Sans GB','微软雅黑',monospace !important`,
    },

    // 二级标题
    h2: {
      'margin': `32px 0 8px`,
      'color': `var(--md-primary-color)`,
      'font-size': `1.4em`,
      'font-weight': `700`,
      'line-height': `1.35`,
      'font-family': `'Menlo','Monaco','Source Code Pro','Consolas','Inconsolata','Ubuntu Mono','DejaVu Sans Mono','Courier New','Droid Sans Mono','Hiragino Sans GB','微软雅黑',monospace !important`,
    },

    // 三级标题
    h3: {
      // 'padding-left': `8px`,
      // 'border-left': `3px solid var(--md-primary-color)`,
      'margin': `32px 0 8px`,
      'color': `var(--md-primary-color)`,
      'font-size': `1.3em`,
      'font-weight': `700`,
      'line-height': `1.35`,
      'font-family': `'Menlo','Monaco','Source Code Pro','Consolas','Inconsolata','Ubuntu Mono','DejaVu Sans Mono','Courier New','Droid Sans Mono','Hiragino Sans GB','微软雅黑',monospace !important`,
    },

    // 四级标题
    h4: {
      // 'padding-left': `8px`,
      // 'border-left': `3px solid var(--md-primary-color)`,
      'margin': `32px 0 8px`,
      'color': `var(--el-text-color-regular)`,
      'font-size': `1.2em`,
      'font-weight': `700`,
      'line-height': `1.35`,
      'font-family': `'Menlo','Monaco','Source Code Pro','Consolas','Inconsolata','Ubuntu Mono','DejaVu Sans Mono','Courier New','Droid Sans Mono','Hiragino Sans GB','微软雅黑',monospace !important`,
    },

    // 段落
    p: {
      'margin': `15px 0 15px`,
      'color': `var(--el-text-color-regular)`,
      'white-space': `pre-line`,
      'line-height': `30px`,
    },

    // 引用
    blockquote: {
      'padding': `15px 15px`,
      'font-size': `14px`,
      'line-height': `18px`,
      'color': `#819198`,
      'border-left': `6px solid #607d8b`,
      'background': `#f2f7fb`,
      'margin': `1em 2px`,
    },

    // 引用内容
    blockquote_p: {
      // 'display': `block`,
      'color': `rgb(16, 12, 12)`,
      'font-size': `14px`,
      'white-space': `pre-line`,
      'line-height': `30px`,
    },

    // 代码块
    code_pre: {
      'font-size': `13px`,
      'overflow-x': `auto`,
      'border-radius': `4px`,
      'padding': `0.5em`,
      'margin': `10px 2px`,
      'box-shadow': `inset 0 0 10px rgba(0,0,0,0.05)`,
    },

    // 行内代码
    code: {
      'margin': `0`,
      'white-space': `nowrap`,
      'line-height': `1.2`,
      'font-family': `Menlo, Operator Mono, Consolas, Monaco, monospace`,
    },

    // 图片
    image: {
      'border-radius': `6px`,
      'border': `2px solid #EEE`,
      'max-width': `100% !important`,
    },

    // 有序列表
    ol: {
      'margin': `15px 0 15px`,
      'list-style-type': `decimal`,
      'padding-left': `1.5em`,
      'margin-left': `0`,
      'color': `var(--el-text-color-regular)`,
    },

    // 无序列表
    ul: {
      'margin': `15px 0 15px`,
      'list-style-type': `square`,
      'padding-left': `1.5em`,
      'margin-left': `0`,
      'color': `var(--el-text-color-regular)`,
    },

    footnotes: {
      'margin': `0.5em 2px`,
      'font-size': `80%`,
      'color': `var(--el-text-color-regular)`,
    },

    figure: {
      margin: `15px 0px`,
      color: `var(--el-text-color-regular)`,
    },

    hr: {
      'border-style': `solid`,
      'border-width': `1px 0 0`,
      'border-color': `rgba(0,0,0,0.1)`,
      '-webkit-transform-origin': `0 0`,
      '-webkit-transform': `scale(1, 0.5)`,
      'transform-origin': `0 0`,
      'transform': `scale(1, 0.5)`,
    },
  },
  inline: {
    listitem: {
      // 'text-indent': `-1em`,
      'display': `list-item`,
      'margin': `6px 2px`,
      'color': `var(--el-text-color-regular)`,
    },

    codespan: {
      // 'font-size': `95%`,
      // 'color': `#d14`,
      'background': `rgba(27,31,35,.05)`,
      'padding': `3px 4px`,
      'border-radius': `2px`,
      'font-weight': `500`,
      // 'word-break': `break-all`,
    },

    em: {
      'font-style': `italic`,
      'font-size': `inherit`,
    },

    link: {
      color: `#576b95`,
    },

    wx_link: {
      'color': `#576b95`,
      'text-decoration': `none`,
    },

    // 字体加粗样式
    strong: {
      // 'color': `var(--md-primary-color)`,
      'font-weight': `bold`,
      'font-size': `inherit`,
    },

    table: {
      'border-collapse': `collapse`,
      'text-align': `center`,
      // 'margin': `1em 2px`,
      'color': `var(--el-text-color-regular)`,
      'display': `table`,
      'width': `100%`,
      'overflow': `auto`,
      'word-break': `keep-all`,
    },

    thead: {
      // 'background': `rgba(0, 0, 0, 0.05)`,
      // 'color': `var(--el-text-color-regular)`,

      'font-weight': `bold`,
      'padding': `0.5rem 1rem`,
      'border': `1px solid #e9ebec`,
    },

    td: {
      'border': `1px solid #dfdfdf`,
      // 'padding': `0.25em 0.5em`,
      'color': `#3f3f3f`,
      'word-break': `keep-all`,
      // 'padding': `0.5rem 1rem`,
      // 'border': `1px solid #e9ebec`,
    },

    footnote: {
      'font-size': `14px`,
      'color': `var(--el-text-color-regular)`,
    },

    figcaption: {
      'text-align': `center`,
      'color': `#888`,
      'font-size': `0.8em`,
    },
  },
}

const defaultTheme: Theme = {
  base: {
    '--md-primary-color': `#000000`,
    'text-align': `left`,
    'line-height': `1.75`,
  },
  block: {
    // 一级标题
    h1: {
      'display': `table`,
      'padding': `0 1em`,
      'border-bottom': `2px solid var(--md-primary-color)`,
      'margin': `2em auto 1em`,
      'color': `var(--el-text-color-regular)`,
      'font-size': `1.2em`,
      'font-weight': `bold`,
      'text-align': `center`,
    },

    // 二级标题
    h2: {
      'display': `table`,
      'padding': `0 0.2em`,
      'margin': `4em auto 2em`,
      'color': `#fff`,
      'background': `var(--md-primary-color)`,
      'font-size': `1.2em`,
      'font-weight': `bold`,
      'text-align': `center`,
    },

    // 三级标题
    h3: {
      'padding-left': `8px`,
      'border-left': `3px solid var(--md-primary-color)`,
      'margin': `2em 8px 0.75em 0`,
      'color': `var(--el-text-color-regular)`,
      'font-size': `1.1em`,
      'font-weight': `bold`,
      'line-height': `1.2`,
    },

    // 四级标题
    h4: {
      'margin': `2em 8px 0.5em`,
      'color': `var(--md-primary-color)`,
      'font-size': `1em`,
      'font-weight': `bold`,
    },

    // 段落
    p: {
      'margin': `1.5em 8px`,
      'letter-spacing': `0.1em`,
      'color': `var(--el-text-color-regular)`,
      'text-align': `justify`,
    },

    // 引用
    blockquote: {
      'font-style': `normal`,
      'padding': `1em`,
      'border-radius': `8px`,
      'color': `rgba(0,0,0,0.5)`,
      'background': `#f7f7f7`,
      'margin': `2em 8px`,
    },

    // 引用内容
    blockquote_p: {
      'display': `block`,
      'font-size': `1em`,
      'letter-spacing': `0.1em`,
      'color': `rgb(80, 80, 80)`,
    },

    // 代码块
    code_pre: {
      'font-size': `14px`,
      'overflow-x': `auto`,
      'border-radius': `8px`,
      'padding': `1em`,
      'line-height': `1.5`,
      'margin': `10px 8px`,
    },

    // 行内代码
    code: {
      'margin': 0,
      'white-space': `nowrap`,
      'font-family': `Menlo, Operator Mono, Consolas, Monaco, monospace`,
    },

    // 图片
    image: {
      'display': `block`,
      'width': `100% !important`,
      'margin': `0.1em auto 0.5em`,
      'border-radius': `4px`,
    },

    // 有序列表
    ol: {
      'padding-left': `1em`,
      'margin-left': `0`,
      'color': `var(--el-text-color-regular)`,
    },

    // 无序列表
    ul: {
      'list-style': `circle`,
      'padding-left': `1em`,
      'margin-left': `0`,
      'color': `var(--el-text-color-regular)`,
    },

    footnotes: {
      'margin': `0.5em 8px`,
      'font-size': `80%`,
      'color': `var(--el-text-color-regular)`,
    },

    figure: {
      margin: `1.5em 8px`,
      color: `var(--el-text-color-regular)`,
    },

    hr: {
      'border-style': `solid`,
      'border-width': `1px 0 0`,
      'border-color': `rgba(0,0,0,0.1)`,
      '-webkit-transform-origin': `0 0`,
      '-webkit-transform': `scale(1, 0.5)`,
      'transform-origin': `0 0`,
      'transform': `scale(1, 0.5)`,
    },
  },
  inline: {
    listitem: {
      'text-indent': `-1em`,
      'display': `block`,
      'margin': `0.2em 8px`,
      'color': `var(--el-text-color-regular)`,
    },

    codespan: {
      'font-size': `90%`,
      'color': `#d14`,
      'background': `rgba(27,31,35,.05)`,
      'padding': `3px 5px`,
      'border-radius': `4px`,
      // 'word-break': `break-all`,
    },

    em: {
      'font-style': `italic`,
      'font-size': `inherit`,
    },

    link: {
      color: `#576b95`,
    },

    wx_link: {
      'color': `#576b95`,
      'text-decoration': `none`,
    },

    // 字体加粗样式
    strong: {
      'color': `var(--md-primary-color)`,
      'font-weight': `bold`,
      'font-size': `inherit`,
    },

    table: {
      'border-collapse': `collapse`,
      'text-align': `center`,
      'margin': `1em 8px`,
      'color': `var(--el-text-color-regular)`,
    },

    thead: {
      'background': `rgba(0, 0, 0, 0.05)`,
      'font-weight': `bold`,
      'color': `var(--el-text-color-regular)`,
    },

    td: {
      'border': `1px solid #dfdfdf`,
      'padding': `0.25em 0.5em`,
      'color': `#3f3f3f`,
      'word-break': `keep-all`,
    },

    footnote: {
      'font-size': `12px`,
      'color': `var(--el-text-color-regular)`,
    },

    figcaption: {
      'text-align': `center`,
      'color': `#888`,
      'font-size': `0.8em`,
    },
  },
}

const graceTheme = toMerged(defaultTheme, {
  base: {
  },
  block: {
    h1: {
      'padding': `0.5em 1em`,
      'border-bottom': `2px solid var(--md-primary-color)`,
      'font-size': `1.4em`,
      'text-shadow': `2px 2px 4px rgba(0,0,0,0.1)`,
    },

    h2: {
      'padding': `0.3em 1em`,
      'border-radius': `8px`,
      'font-size': `1.3em`,
      'box-shadow': `0 4px 6px rgba(0,0,0,0.1)`,
    },

    h3: {
      'padding-left': `12px`,
      'font-size': `1.2em`,
      'border-left': `4px solid var(--md-primary-color)`,
      'border-bottom': `1px dashed var(--md-primary-color)`,
    },

    h4: {
      'font-size': `1.1em`,
    },

    p: {
    },

    blockquote: {
      'font-style': `italic`,
      'padding': `1em 1em 1em 2em`,
      'border-left': `4px solid var(--md-primary-color)`,
      'border-radius': `6px`,
      'color': `rgba(0,0,0,0.6)`,
      'background': `linear-gradient(to right, #f7f7f7, #ffffff)`,
      'box-shadow': `0 4px 6px rgba(0,0,0,0.05)`,
    },

    blockquote_p: {
    },

    code_pre: {
      'box-shadow': `inset 0 0 10px rgba(0,0,0,0.05)`,
    },

    code: {
      'white-space': `pre-wrap`,
      'font-family': `'Fira Code', Menlo, Operator Mono, Consolas, Monaco, monospace`,
    },

    image: {
      'border-radius': `8px`,
      'box-shadow': `0 4px 8px rgba(0,0,0,0.1)`,
    },

    ol: {
      'padding-left': `1.5em`,
    },

    ul: {
      'list-style': `none`,
      'padding-left': `1.5em`,
    },

    footnotes: {

    },

    figure: {

    },

    hr: {
      height: `1px`,
      border: `none`,
      margin: `2em 0`,
      background: `linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0))`,
    },
  },
  inline: {
    listitem: {
      margin: `0.5em 8px`,
    },

    codespan: {
    },

    em: {
    },

    link: {
    },

    wx_link: {
    },

    strong: {
    },

    table: {
      'border-collapse': `separate`,
      'border-spacing': `0`,
      'border-radius': `8px`,
      'margin': `1em 8px`,
      'color': `var(--el-text-color-regular)`,
      'box-shadow': `0 4px 6px rgba(0,0,0,0.1)`,
      'overflow': `hidden`,
    },

    thead: {
      color: `#fff`,
    },

    td: {
      padding: `0.5em 1em`,
    },

    footnote: {
      color: `rgba(0,0,0,0.5)`,
    },

    figcaption: {

    },
  },
})

export const themeOptions = [
  {
    label: `简洁`,
    value: `clean`,
    desc: ``,
  },
  {
    label: `经典`,
    value: `default`,
    desc: ``,
  },
  {
    label: `优雅`,
    value: `grace`,
    desc: ``,
  },
]

export const themeMap = {
  clean: cleanTheme,
  default: defaultTheme,
  grace: graceTheme,
}
