// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  features: {
    inlineStyles: false,
  },
  runtimeConfig: {
    // 私有变量，服务端可用，客户端不可用
    public: {
      googleClientId: process.env.GOOGLE_CLIENT_ID,
    },
  },
  pages: true,
  sourcemap: false,
  experimental: {
    writeEarlyHints: true,
  },
  build: {
    analyze: {
      analyzerMode: "static",
    },
  },
  css: ["@/assets/main.scss"],
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: ["en"].map((locale) => ({
      code: locale,
      file: `${locale}.json`,
    })),
    lazy: true,
    defaultLocale: "en",
    langDir: "locales",
    compilation: {
      strictMessage: false,
    },
    detectBrowserLanguage: false,
  },
  vite: {
    build: {
      rollupOptions: {
        preserveEntrySignatures: "strict",
        output: {
          chunkFileNames: "_nuxt/[hash].js",
          entryFileNames: "_nuxt/[hash].js",
          manualChunks(id: string) {
            if (id.includes('node_modules')) {
              if (id.includes('nuxt')) {
                return 'nuxt';
              }
              if (id.includes('vue')) {
                return 'vue';
              }
              return 'vendor';
            }
          },
        },
      },
    },
  },
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
      ],
      script: [
        {
          src: "https://accounts.google.com/gsi/client",
          async: true,
        },
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-3KGB3XGBQB",
          async: true,
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-3KGB3XGBQB');`,
        },
      ],
    },
  },
});
