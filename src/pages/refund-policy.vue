<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
useSeoMeta({
  title: t('refundPolicy.SeoMeta.title'),
  description: t('refundPolicy.SeoMeta.description'),
});
</script>

<template>
  <div class="refundPolicy">
    <h1 class="title">{{ $t('refundPolicy.h1') }}</h1>
    <div class="updated">{{ $t('refundPolicy.updated') }}</div>
    <div class="content">
      <div>{{ $t('refundPolicy.p0') }}</div>
      <div>
        <div class="fontWeight">{{ $t('refundPolicy.p1.text1') }}</div>
        <div>{{ $t('refundPolicy.p1.text2') }}</div>
        <div>{{ $t('refundPolicy.p1.text3') }}</div>
        <div>{{ $t('refundPolicy.p1.text4') }}</div>
      </div>
      <div>
        <div class="fontWeight">{{ $t('refundPolicy.p2.text1') }}</div>
        <div>{{ $t('refundPolicy.p2.text2') }}</div>
        <div>{{ $t('refundPolicy.p2.text3') }}</div>
        <div>{{ $t('refundPolicy.p2.text4') }}</div>
        <div v-html="$t('refundPolicy.p2.text5')"></div>
        <div>{{ $t('refundPolicy.p2.text6') }}</div>
      </div>
      <div>
        <div class="fontWeight">{{ $t('refundPolicy.p3.text1') }}</div>
        <div>{{ $t('refundPolicy.p3.text2') }}</div>
        <div>{{ $t('refundPolicy.p3.text3') }}</div>
        <div>{{ $t('refundPolicy.p3.text4') }}</div>
      </div>
      <div>
        <div class="fontWeight">{{ $t('refundPolicy.p4.text1') }}</div>
        <div>{{ $t('refundPolicy.p4.text2') }}</div>
        <div v-html="$t('refundPolicy.p5.text1')"></div>
        <div>{{ $t('refundPolicy.p5.text2') }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.refundPolicy {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  box-sizing: border-box;

  @media screen and (max-width: 1280px) {
    padding: 0 30px;
  }

  .title {
    margin-top: 80px;
    font-weight: bold;
    font-size: 48px;
    color: #171C1D;
    line-height: 64px;
    text-align: center;
  }

  .updated {
    font-weight: 400;
    font-size: 16px;
    color: #171C1D;
    line-height: 64px;
    text-align: center;
    margin: 16px 0 48px;
  }

  .content {
    font-weight: 400;
    font-size: 18px;
    color: #3D3F40;
    line-height: 28px;
    text-align: left;
    gap: 30px;
    display: flex;
    flex-direction: column;
    :deep(.email_address) {
      color: #0058fe;
    }
    .fontWeight {
      font-weight: bold;
    }
  }
}
</style>
