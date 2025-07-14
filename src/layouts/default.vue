<script setup lang="ts">
import vFooter from "./footer.vue";
import vHeader from "./header.vue";

const props = defineProps({
  errorPage: Boolean,
}) as any;

const state = reactive({
  visible: false,
});
const requestUrl = useRequestURL();
const route = useRoute();
const { locale } = useI18n();

/**
 * 开启语言后请放开
 */
const locales = {
  en: "US",
  // id: "ID",
  // jp: "JP",
  // kr: "KR",
  // ru: "RU",
  // tr: "TR",
  // de: "DE",
  // es: "ES",
  // fr: "FR",
  // it: "IT",
  // th: "TH",
  // zh: "CN",
};
const meta = [
  // 当前语言
  {
    property: "og:locale",
    content: () => `${locale.value}_${locales[locale.value]}`,
  },
] as any;

if (requestUrl.host !== "ieltspractice.ai") {
  meta.push({ name: "robots", content: "noindex" });
}

const currentPathWithoutLocale =
  route.path.replace(new RegExp(`^/${locale.value}`), "") || "/";
// 如果多语言 每种语言
const alternates = Object.keys(locales).map((hreflang: string) => ({
  rel: "alternate",
  hreflang: hreflang,
  href: () =>
    `https://${requestUrl.host}${
      hreflang === "en" ? "" : `/${hreflang}`
    }${currentPathWithoutLocale}`,
}));

useHead({
  meta,
  link: props.errorPage
    ? []
    : [
        {
          rel: "canonical",
          href: () => requestUrl.href,
        },
        ...alternates,
      ],
});
</script>
<template>
  <header class="header" @click="state.visible = true">
    <vHeader />
    <login></login>
  </header>
  <main class="main">
    <div class="content">
      <slot />
    </div>
    <footer class="footer">
      <v-footer />
    </footer>
  </main>
</template>
<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
}
.main {
  height: calc(100vh - 60px);
  width: 100%;
  padding-top: 104px;
  display: flex;
  flex-direction: column;
  .content {
    flex: auto;
  }
  .footer {
    flex: none;
    margin-top: 80px;
  }
}
</style>
