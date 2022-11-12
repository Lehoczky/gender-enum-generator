const { defineConfig } = require("eslint-define-config")

module.exports = defineConfig({
  root: true,
  extends: ["@lehoczky/eslint-config-vue"],
  rules: {
    "vue/v-on-function-call": "off",
  },
})
