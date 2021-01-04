import Vue from "vue";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/atom-one-dark.css";

import typescript from "highlight.js/lib/languages/typescript";
import python from "highlight.js/lib/languages/python";
import csharp from "highlight.js/lib/languages/csharp";
import java from "highlight.js/lib/languages/java";

hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("python", python);
hljs.registerLanguage("csharp", csharp);
hljs.registerLanguage("java", java);
Vue.use(hljs.vuePlugin);
