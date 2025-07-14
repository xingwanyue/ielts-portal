<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  showDrawer: boolean,
  width?: string | number
}>()

const emit = defineEmits<{
  (e: 'update:showDrawer', val: boolean): void
}>()
const drawerWidth = computed(() => {
  return typeof props.width === 'number' ? `${props.width}px` : props.width || '100%'
})
const closeDrawer = () => {
  emit('update:showDrawer', false)
}
</script>
<template>
  <div class="my-drawer" @wheel.prevent>
    <transition name="slide">
      <div v-show="showDrawer" class="drawer-content" :style="{ width: drawerWidth }">
        <div class="drawer-header">
          <slot name="title"></slot>
          <div class="close-btn" @click="closeDrawer">
            <img src="../assets/mobile-close.svg" alt="close" loading="lazy">
          </div>
        </div>
        <div class="drawer-body">
          <slot name="content"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
.my-drawer {

  .drawer-content {
    position: fixed;
    top: 0;
    left: 0;
    right: auto;
    bottom: 0;
    height: 100%;
    background-color: #fff;
    transition: transform 0.3s ease-in-out;
    z-index: 1001;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 3px;
    }
  }

  .drawer-header {
    padding: 20px;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;

  }

  .close-btn {
    font-size: 20px;
    color: #999;
    background: none;
    border: none;
    cursor: pointer;
    width: 18px;
    height: 18px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .drawer-body {
    padding: 0 20px;
    height: 100%;
  }

  .slide-enter-active {
    transition: transform .3s ease;
  }

  .slide-leave-active {
    transition: transform .3s ease;
  }

  .slide-enter-from {
    transform: translateX(-100%);
  }

  .slide-leave-to {
    transform: translateX(-100%);
  }
}
</style>