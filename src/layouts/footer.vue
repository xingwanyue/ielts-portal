<script setup lang="ts">
import { useI18n } from "vue-i18n";
const localePath = useLocalePath();

</script>

<template>
  <div class="footer_box">
    <div class="left">
      © 2025 IELTSPractice.ai
    </div>
    <div class="right">
      <nuxt-link :to="localePath('/refund-policy')" class="btn">
        {{ $t('footer.RefundPolicy') }}
      </nuxt-link>
      <nuxt-link :to="localePath('/terms-of-service')" class="btn">
        {{ $t('footer.TermsOfService') }}
      </nuxt-link>
      <nuxt-link :to="localePath('/Privacy-policy')" class="btn">
        {{ $t('footer.PrivacyPolicy') }}
      </nuxt-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer_box {
  border-top: 1px solid #EDEDED;
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  @media screen and (max-width: 1280px) {
    padding: 30px;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }

  .left {
    font-weight: 400;
    font-size: 16px;
    color: #3D3F40;
    line-height: 56px;
    text-align: left;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 50px;
    font-weight: 400;
    font-size: 16px;
    color: #171C1D;
    line-height: 56px;
    text-align: left;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
      gap: 20px;
      line-height: 16px;
    }
  }

  .btn {
    cursor: pointer;

    &:hover {
      color: #0058FE;
    }
  }
}
</style>