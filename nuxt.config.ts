// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: "/gender-enum-generator/",
  },
  css: ["@/assets/css/main.css", "@/assets/css/tailwind.css"],
  modules: ["@vueuse/nuxt"],
  typescript: {
    shim: false,
    strict: false,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
