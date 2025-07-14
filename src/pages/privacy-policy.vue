<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
useSeoMeta({
  title: t('privacyPolicy.SeoMeta.title'),
  description: t('privacyPolicy.SeoMeta.description'),
});
</script>

<template>
  <div class="privacyPolicy">
    <h1 class="title">{{ $t('privacyPolicy.h1') }}</h1>
    <div class="updated">{{ $t('privacyPolicy.updated') }}</div>
    <div class="content">
      <div>{{ $t('privacyPolicy.p0') }}</div>
      <div>
        <div class="fontWeight">{{ $t('privacyPolicy.p1.text1') }}</div>
        <div>{{ $t('privacyPolicy.p1.text2') }}</div>
        <div class="fontWeight">{{ $t('privacyPolicy.p1.text3') }}</div>
        <div>{{ $t('privacyPolicy.p1.text4') }}</div>
        <div class="fontWeight">{{ $t('privacyPolicy.p1.text5') }}</div>
        <div>{{ $t('privacyPolicy.p1.text6') }}</div>
        <div class="fontWeight">{{ $t('privacyPolicy.p1.text7') }}</div>
        <div>{{ $t('privacyPolicy.p1.text8') }}</div>
      </div>
      <div>
        <div class="fontWeight">{{ $t('privacyPolicy.p2.text1') }}</div>
        <div>{{ $t('privacyPolicy.p2.text2') }}</div>
        <div>{{ $t('privacyPolicy.p2.text3') }}</div>
        <div>{{ $t('privacyPolicy.p2.text4') }}</div>
        <div>{{ $t('privacyPolicy.p2.text5') }}</div>
        <div>{{ $t('privacyPolicy.p2.text6') }}</div>
        <div>{{ $t('privacyPolicy.p2.text7') }}</div>
        <div>{{ $t('privacyPolicy.p2.text8') }}</div>
        <div>{{ $t('privacyPolicy.p2.text9') }}</div>
      </div>
      <div>
        <div class="fontWeight">{{ $t('privacyPolicy.p3.text1') }}</div>
        <div>{{ $t('privacyPolicy.p3.text2') }}</div>
        <div>{{ $t('privacyPolicy.p3.text3') }}</div>
      </div>
      <div>
        <div class="fontWeight">{{ $t('privacyPolicy.p4.text1') }}</div>
        <div>{{ $t('privacyPolicy.p4.text2') }}</div>
      </div>
      <div>
        <div class="fontWeight">{{ $t('privacyPolicy.p5.text1') }}</div>
        <div>{{ $t('privacyPolicy.p5.text2') }}</div>
      </div>
      <div>
        <div class="fontWeight">{{ $t('privacyPolicy.p6.text1') }}</div>
        <div>{{ $t('privacyPolicy.p6.text2') }}</div>
      </div>
      <div>
        <div class="fontWeight">{{ $t('privacyPolicy.p7.text1') }}</div>
        <div>{{ $t('privacyPolicy.p7.text2') }}</div>
      </div>
      <div>
        <div class="fontWeight">{{ $t('privacyPolicy.p8.text1') }}</div>
        <div v-html="$t('privacyPolicy.p8.text2')"></div>
      </div>
      <div>{{ $t('privacyPolicy.p9') }}</div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.privacyPolicy {
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

    .fontWeight {
      font-weight: bold;
    }

    :deep(.email_address) {
      color: #0058fe;
    }
  }
}
</style>
