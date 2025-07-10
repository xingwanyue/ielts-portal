<script setup lang="ts">
import Layout from "./layouts/default.vue";

useHead({
  meta: [{ name: "robots", content: "noindex" }],
});
</script>

<template>
  <Layout errorPage>
    <div class="errPage">
      <div class="errContent">
        <img src="/image/404.jpg" alt="empty" class="left" />
        <div class="right">
          <h1 class="text-404">404</h1>
          <div class="text-desc">Page Not Found</div>
          <a href="/" class="goHomeBtn">Return to Homepage</a>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
.errPage {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  .errContent {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 80px 30px;
  }

  .left {
    width: 50%;
  }

  .right {
    width: calc(50% - 80px);
    margin-left: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .text-404 {
      font-weight: 700;
      font-size: 64px;
      line-height: 1.25;
      margin: 0;
    }

    .text-desc {
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 2.25rem;
      padding-bottom: 1.25rem;
    }
  }

  .goHomeBtn {
    padding: 9px 18px;
    width: fit-content;
    text-align: center;
    background-color: #0058fe;
    border-radius: 8px;
    font-weight: 500;
    font-size: 18px;
    color: #ffffff;
    &:hover {
      filter: brightness(0.9);
    }
  }

  @media screen and (max-width: 600px) {
    .left {
      display: none;
    }

    .right {
      width: 100%;
      margin: 0;
      align-items: center;
    }
  }
}
</style>
