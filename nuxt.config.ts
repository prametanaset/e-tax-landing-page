// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@shuriken-ui/nuxt', 
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      "IBM Plex Sans Thai": {
        wght: [100, 200, 300, 400, 500, 600, 700],
      },
      Poppins: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
    display: "swap",
  },
  css: [
    '~/assets/main.css',
  ],
})
