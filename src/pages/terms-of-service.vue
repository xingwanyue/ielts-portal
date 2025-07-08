<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
useSeoMeta({
  title: t('termsOfService.SeoMeta.title'),
  description: t('termsOfService.SeoMeta.description'),
});
</script>

<template>
  <div class="termsOfService">
    <h1 class="title">{{ $t('termsOfService.h1') }}</h1>
    <div class="updated">{{ $t('termsOfService.updated') }}</div>
    <div class="content">
      <div>{{ $t('termsOfService.p0') }}</div>
      <div>{{ $t('termsOfService.p1') }}</div>
      <div>{{ $t('termsOfService.p2') }}</div>
      <div>
        <div>{{ $t('termsOfService.p3.text1') }}</div>
        <div>{{ $t('termsOfService.p3.text2') }}</div>
        <div>{{ $t('termsOfService.p3.text3') }}</div>
      </div>
      <div>
        <div>{{ $t('termsOfService.p4.text1') }}</div>
        <div>{{ $t('termsOfService.p4.text2') }}</div>
      </div>
      <div>
        <div>{{ $t('termsOfService.p5.text1') }}</div>
        <div>{{ $t('termsOfService.p5.text2') }}</div>
      </div>
      <div>
        <div>{{ $t('termsOfService.p6.text1') }}</div>
        <div>{{ $t('termsOfService.p6.text2') }}</div>
      </div>
      <div>
        <div>{{ $t('termsOfService.p7.text1') }}</div>
        <div>{{ $t('termsOfService.p7.text2') }}</div>
        <div>{{ $t('termsOfService.p7.text3') }}</div>
      </div>
      <div>
        <div>{{ $t('termsOfService.p8.text1') }}</div>
        <div>{{ $t('termsOfService.p8.text2') }}</div>
      </div>
      <div>
        <div>{{ $t('termsOfService.p9.text1') }}</div>
        <div>{{ $t('termsOfService.p9.text2') }}</div>
      </div>
      <div>
        <div>{{ $t('termsOfService.p10.text1') }}</div>
        <div>{{ $t('termsOfService.p10.text2') }}</div>
      </div>
      <div>
        <div>{{ $t('termsOfService.p11.text1') }}</div>
        <div>{{ $t('termsOfService.p11.text2') }}</div>
        <div>{{ $t('termsOfService.p11.text3') }}</div>
      </div>
      <div>
        <div>{{ $t('termsOfService.p12.text1') }}</div>
        <div>{{ $t('termsOfService.p12.text2') }}</div>
      </div>
      <div>{{ $t('termsOfService.p13') }}</div>
      <div>{{ $t('termsOfService.p14') }}</div>
      <div>{{ $t('termsOfService.p15') }}</div>
      <div>
        <div>{{ $t('termsOfService.p16.text1') }}</div>
        <div>{{ $t('termsOfService.p16.text2') }}</div>
        <div>{{ $t('termsOfService.p16.text3') }}</div>
      </div>
      <div>
        <div>{{ $t('termsOfService.p17.text1') }}</div>
        <div>{{ $t('termsOfService.p17.text2') }}</div>
      </div>
      <div>
        <div>{{ $t('termsOfService.p18.text1') }}</div>
        <div>{{ $t('termsOfService.p18.text2') }}</div>
        <div>{{ $t('termsOfService.p18.text3') }}</div>
      </div>
      <div>
        <div>{{ $t('termsOfService.p19.text1') }}</div>
        <div>{{ $t('termsOfService.p19.text2') }}</div>
      </div>
      <div>
        <div>{{ $t('termsOfService.p20.text1') }}</div>
        <div>{{ $t('termsOfService.p20.text2') }}</div>
        <div>{{ $t('termsOfService.p20.text3') }}</div>
      </div>
      <div>
        <div>{{ $t('termsOfService.p21.text1') }}</div>
        <div>{{ $t('termsOfService.p21.text2') }}</div>
      </div>
      <div>
        <div>{{ $t('termsOfService.p22.text1') }}</div>
        <div>{{ $t('termsOfService.p22.text2') }}</div>
      </div>
      <div>
        <div>{{ $t('termsOfService.p23.text1') }}</div>
        <div>{{ $t('termsOfService.p23.text2') }}</div>
        <div>{{ $t('termsOfService.p23.text3') }}</div>
      </div>
      <div>
        <div>{{ $t('termsOfService.p24.text1') }}</div>
        <div>{{ $t('termsOfService.p24.text2') }}</div>
      </div>
      <div>
        <div>{{ $t('termsOfService.p25.text1') }}</div>
        <div>{{ $t('termsOfService.p25.text2') }}</div>
      </div>
      <div>
        <div>{{ $t('termsOfService.p26.text1') }}</div>
        <div>{{ $t('termsOfService.p26.text2') }}</div>
        <div>{{ $t('termsOfService.p26.text3') }}</div>
      </div>
      <div>
        <div>{{ $t('termsOfService.p27.text1') }}</div>
        <div>{{ $t('termsOfService.p27.text2') }}</div>
      </div>
      <div>
        <div>{{ $t('termsOfService.p28.text1') }}</div>
        <div>{{ $t('termsOfService.p28.text2') }}</div>
        <div>{{ $t('termsOfService.p28.text3') }}</div>
      </div>
      <div>
        <div>{{ $t('termsOfService.p29.text1') }}</div>
        <div>{{ $t('termsOfService.p29.text2') }}</div>
      </div>
      <div>
        <div>{{ $t('termsOfService.p30.text1') }}</div>
        <div v-html="$t('termsOfService.p30.text2')"></div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.termsOfService {
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
  }
}
</style>
