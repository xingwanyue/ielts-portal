<script setup lang="ts">

const props = defineProps({
  visible: Boolean,
  style: String,
});
const emit = defineEmits(["update:visible"]);

function close() {
  emit("update:visible", false);
}
</script>
<template>
  <div v-if="props.visible" class="dialog-overlay" @click.self="close">
    <div class="dialog-content" :style="props.style">
      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  .dialog-content {
    background: #ffffff;
  }
}
</style>
