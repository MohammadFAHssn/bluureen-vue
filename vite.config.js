import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { fileURLToPath } from "node:url"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import {
  VueRouterAutoImports,
  getPascalCaseRouteName,
} from "unplugin-vue-router"
import VueRouter from "unplugin-vue-router/vite"
import { defineConfig } from "vite"
import VueDevTools from "vite-plugin-vue-devtools"
import Layouts from "vite-plugin-vue-layouts"
import vuetify from "vite-plugin-vuetify"
import svgLoader from "vite-svg-loader"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Docs: https://github.com/posva/unplugin-vue-router
    // ℹ️ This plugin should be placed before vue plugin
    VueRouter({
      getRouteName: routeNode => {
        // Convert pascal case to kebab case
        return getPascalCaseRouteName(routeNode)
          .replace(/([a-z\d])([A-Z])/g, "$1-$2")
          .toLowerCase()
      },
      beforeWriteFiles: root => {
        // root.insert("/apps/email/:filter", "/src/pages/apps/email/index.vue")
        // root.insert("/apps/email/:label", "/src/pages/apps/email/index.vue")
      },
    }),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag =>
            tag === "swiper-container" || tag === "swiper-slide",
        },
      },
    }),
    VueDevTools(),
    vueJsx(),

    // Docs: https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin
    vuetify({
      styles: {
        configFile: "src/assets/styles/variables/_vuetify.scss",
      },
    }),

    // Docs: https://github.com/johncampionjr/vite-plugin-vue-layouts#vite-plugin-vue-layouts
    Layouts({
      layoutsDirs: "./src/layouts/",
    }),

    // Docs: https://github.com/antfu/unplugin-vue-components#unplugin-vue-components
    Components({
      dirs: ["src/@core/components", "src/views/demos", "src/components"],
      dts: true,
      resolvers: [
        componentName => {
          // Auto import `VueApexCharts`
          if (componentName === "VueApexCharts")
            return {
              name: "default",
              from: "vue3-apexcharts",
              as: "VueApexCharts",
            }
        },
      ],
    }),

    // Docs: https://github.com/antfu/unplugin-auto-import#unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        VueRouterAutoImports,
        "@vueuse/core",
        "@vueuse/math",
        "vue-i18n",
        "pinia",
      ],
      dirs: [
        "./src/@core/utils",
        "./src/@core/composable/",
        "./src/composables/",
        "./src/utils/",
        "./src/plugins/*/composables/*",
      ],
      vueTemplate: true,

      // ℹ️ Disabled to avoid confusion & accidental usage
      ignore: ["useCookies", "useStorage"],
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
      },
    }),

    // Docs: https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n#intlifyunplugin-vue-i18n
    VueI18nPlugin({
      runtimeOnly: true,
      compositionOnly: true,
      include: [
        fileURLToPath(
          new URL("./src/plugins/i18n/locales/**", import.meta.url),
        ),
      ],
    }),
    svgLoader(),
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@themeConfig": fileURLToPath(
        new URL("./themeConfig.js", import.meta.url),
      ),
      "@core": fileURLToPath(new URL("./src/@core", import.meta.url)),
      "@layouts": fileURLToPath(new URL("./src/@layouts", import.meta.url)),
      "@images": fileURLToPath(
        new URL("./src/assets/images/", import.meta.url),
      ),
      "@styles": fileURLToPath(
        new URL("./src/assets/styles/", import.meta.url),
      ),
      "@configured-variables": fileURLToPath(
        new URL(
          "./src/assets/styles/variables/_template.scss",
          import.meta.url,
        ),
      ),
      "@db": fileURLToPath(
        new URL("./src/plugins/fake-api/handlers/", import.meta.url),
      ),
      "@api-utils": fileURLToPath(
        new URL("./src/plugins/fake-api/utils/", import.meta.url),
      ),
    },
  },
  build: {
    chunkSizeWarningLimit: 5000,
  },
  optimizeDeps: {
    exclude: ["vuetify"],
    entries: ["./src/**/*.vue"],
  },

  server: {
    host: true,
    port: 5173,
  },
})
