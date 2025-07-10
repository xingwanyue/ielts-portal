<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useLoginState } from "@/store";
const { t } = useI18n();
const { setLoginVisible, setLoginType } = useLoginState();

const { locale } = useI18n();
const localePath = useLocalePath();

const route = useRoute();
const pathname = computed(() => {
  const pathParts = route.path.split("/");
  const newPathParts =
    pathParts[pathParts.length - 1] === locale.value
      ? pathParts.slice(0, -1)
      : pathParts;
  if (!newPathParts || newPathParts.length === 0) {
    return "/";
  }
  return `/${newPathParts[newPathParts.length - 1]}`;
});
const menus = computed(
  () =>
    [
      // {
      //   name: t('Home'),
      //   path: '/',
      // },
      // {
      //   name: t('IELTS'),
      //   path: '/IELTS',
      // },
      // {
      //   name: t('Case'),
      //   path: '/case',
      // },
      // {
      //   name: t('Q&A'),
      //   path: '/questionAndAnswer',
      // },
    ] as any
);
const state = reactive({
  showDrawer: false,
});
const login = () => {
  state.showDrawer = false;
  setLoginVisible(true);
  setLoginType("login");
};
const signUp = () => {
  setLoginVisible(true);
  setLoginType("register");
};
watch(
  () => state.showDrawer,
  (newVal) => {
    if (newVal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
);
</script>

<template>
  <div class="header_box">
    <nuxt-link :to="localePath('/')">
      <div class="logo">
        <img src="../assets/logo.svg" alt="IELTSPractice" loading="lazy">
      </div>
    </nuxt-link>
    <div class="menus">
      <nav
        v-for="menu in menus"
        :key="menu.path"
        :class="`menu ${pathname === menu.path ? 'active' : ''}`"
      >
        <nuxt-link :to="localePath(menu.path)" :title="menu.name"
          >{{ menu.name }}
        </nuxt-link>
      </nav>
    </div>
    <div class="rightBtn">
      <div class="login btn" @click="login">{{ $t("header.logIn") }}</div>
      <div class="signUP" @click="signUp">{{ $t("header.signUp") }}</div>
    </div>
    <div class="mobile_menu btn" @click="state.showDrawer = true">
      <img src="../assets/menu.svg" class="mobileMenus" alt="menu" />
    </div>
  </div>
  <MyDrawer v-model:showDrawer="state.showDrawer" class="drawer">
    <template #title>
      <nuxt-link :to="localePath('/')" @click="state.showDrawer = false">
        <div class="logo">
          <img src="../assets/logo.svg" alt="IELTSPractice" loading="lazy" />
        </div>
      </nuxt-link>
    </template>
    <template #content>
      <div class="content">
        <div class="menu_list">
          <div v-for="menu in menus" :key="menu.path" class="mobile_menu_item">
            <nuxt-link
              class="item"
              :href="menu.path"
              @click="state.showDrawer = false"
              :title="menu.name"
            >
              {{ menu.name }}
            </nuxt-link>
          </div>
        </div>
        <div @click="login" class="mobile_login">log in</div>
      </div>
    </template>
  </MyDrawer>
</template>
<style lang="scss" scoped>
.header_box {
  max-width: 1280px;
  margin: 0 auto;
  height: 104px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  background-color: #ffffff;

  .btn {
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
      color: #0058fe;
    }
  }

  .logo {
    img {
      width: 100%;
      height: 100%;
    }
  }

  .menus {
    display: flex;
    align-items: center;
    gap: 80px;
    font-weight: 400;
    font-size: 18px;
    color: #171c1d;
    line-height: 18px;
    box-sizing: border-box;

    .menu {
      &:hover {
        color: #0058fe !important;
      }
    }

    .active {
      color: #0058fe;
      font-weight: bold;
    }
  }

  .rightBtn {
    display: flex;
    align-items: center;

    .login {
      margin-right: 39px;
    }

    .signUP {
      padding: 9px 20px;
      background: #0058fe;
      border-radius: 8px 8px 8px 8px;
      font-weight: bold;
      font-size: 16px;
      color: #ffffff;
      line-height: 16px;
      text-align: left;
      box-sizing: border-box;
      cursor: pointer;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  .mobile_menu {
    width: 20px;
    height: 20px;
    display: none;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.drawer {
  .logo {
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100%;

    .menu_list {
      .mobile_menu_item {
        width: 100%;
        box-sizing: border-box;

        &:hover {
          background: #f2f4f6;
        }

        .item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
          border-bottom: 2px solid #e9e9e9;
          width: 100%;
          padding: 15px 5px;
          color: #201515;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
        }
      }
    }

    .mobile_login {
      margin-bottom: 15px;
      background-color: #0058fe;
      border-radius: 25px;
      color: #fff;
      display: block;
      font-size: 16px;
      font-weight: 500;
      height: 40px;
      line-height: 40px;
      text-align: center;
      width: 100%;
      cursor: pointer;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
}

@media screen and (max-width: 1280px) {
  .header_box {
    padding: 0 30px;
  }
}

@media screen and (max-width: 1000px) {
  .header_box {
    justify-content: space-between;

    .menus {
      display: none;
    }

    .rightBtn {
      display: none;
    }

    .mobile_menu {
      display: block;
    }
  }
}
</style>
