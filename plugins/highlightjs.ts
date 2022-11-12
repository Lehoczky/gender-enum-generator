import "highlight.js/styles/atom-one-dark.css"

import hljsVuePlugin from "@highlightjs/vue-plugin"
import hljs from "highlight.js/lib/core"
import csharp from "highlight.js/lib/languages/csharp"
import java from "highlight.js/lib/languages/java"
import python from "highlight.js/lib/languages/python"
import typescript from "highlight.js/lib/languages/typescript"

hljs.registerLanguage("typescript", typescript)
hljs.registerLanguage("python", python)
hljs.registerLanguage("csharp", csharp)
hljs.registerLanguage("java", java)

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(hljsVuePlugin)
})
