// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    baseURL: "/gender-enum-generator/",
    head: {
      htmlAttrs: {
        lang: "en-US",
      },
      title: "Gender Enum Generator",
      meta: [
        {
          name: "description",
          content:
            "Create ENUMs for every gender in different programming languages",
        },
      ],
      link: [
        {
          rel: "icon",
          href: "/gender-enum-generator/favicon.ico",
        },
      ],
      bodyAttrs: {
        class: "bg-base-700 font-roboto text-base-100",
      },
    },
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
