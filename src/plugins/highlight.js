import Vue from "vue";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/atom-one-dark.css";

import typescript from "highlight.js/lib/languages/typescript";
import python from "highlight.js/lib/languages/python";

hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("python", python);
Vue.use(hljs.vuePlugin);
