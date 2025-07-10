<script setup lang="ts">
import vFooter from "./footer.vue";
import vHeader from "./header.vue";
const state = reactive({
  visible: false,
});
// 禁止索引 上限后需判断处理
useHead({
  meta: [
    {
      name: "robots",
      content: "noindex",
    },
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
