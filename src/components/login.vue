<script setup lang="ts">
import { googlePopupLogin } from "@/utils/googleAuth";
import {
  login,
  sesCodeSend,
  register,
  sesCodeVerify,
  findPassword,
} from "@/utils/api";
import { useLoginState } from "@/store";
const { t } = useI18n();
const { loginVisible, loginType, setLoginVisible, setLoginType } =
  useLoginState();
const googleLogin = async () => {
  const res: any = await googlePopupLogin();
  const arg = {
    google: true,
  };
  const res2 = await login({ ...arg, ...res });
  if (res2?.errCode === 0) {
    saveToken(res2.data.token);
    alert("登录成功");
    setLoginVisible(false);
  }
  setLoginVisible(false);
};

const state = reactive({
  type: "login",
  step: 1,
  errShow: false,
  errMessage: "",
  pwdShow: false,
  pwdShow1: false,
  loading: false,
  formData: {
    email: "",
    password: "",
    password1: "",
    code: "",
    nickname: "",
  },
});
const loginSubmit = async () => {
  if (state.loading) return;
  const { email, password } = state.formData;
  state.errShow = false;
  if (!email) {
    state.errShow = true;
    state.errMessage = t("login.peyea");
    return false;
  }
  const pan = /\w+[@][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)+/;
  if (!pan.test(email)) {
    state.errShow = true;
    state.errMessage = t("login.ie");
    return false;
  }
  if (!password) {
    state.errShow = true;
    state.errMessage = t("login.peyp");
    return false;
  }
  state.loading = true;
  const res = await login({ email, password });
  state.loading = false;
  if (res?.errCode === 0) {
    saveToken(res.data.token);
    alert("登录成功");
    setLoginVisible(false);
  } else {
    state.errShow = true;
    state.errMessage = res.message;
  }
};
const registerSubmit = async () => {
  if (state.loading) return;
  const { email, password, code, nickname } = state.formData;
  if (state.step === 1) {
    if (!email) {
      state.errShow = true;
      state.errMessage = t("login.peyea");
      return false;
    }
    const pan = /\w+[@][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)+/;
    if (!pan.test(email)) {
      state.errShow = true;
      state.errMessage = t("login.ie");
      return false;
    }
    state.loading = true;
    const res = await sesCodeSend({ email: email, type: "register" });
    state.loading = false;
    if (res?.errCode == 0) {
      state.step++;
      state.errShow = false;
      state.formData.nickname = state.formData.email;
    } else {
      state.errShow = true;
      state.errMessage = res.message;
    }
  } else {
    if (!code) {
      state.errShow = true;
      state.errMessage = t("login.peyc");
      return false;
    }
    if (!password) {
      state.errShow = true;
      state.errMessage = t("login.peyp");
      return false;
    }
    if (password.length < 6) {
      state.errShow = true;
      state.errMessage = t("login.pts");
      return false;
    }
    if (!nickname) {
      state.errShow = true;
      state.errMessage = t("login.peyfn");
      return false;
    }
    state.loading = true;
    const res = await register({ email, password, nickname, code });
    state.loading = false;
    if (res?.errCode === 0) {
      setLoginType("login");
    } else {
      state.errShow = true;
      state.errMessage = res.message;
    }
  }
};
const forgetPwdSubmit = async () => {
  if (state.loading) return;
  const { email, password, password1, code } = state.formData;
  if (state.step === 1) {
    if (!email) {
      state.errShow = true;
      state.errMessage = t("login.peyea");
      return false;
    }
    const pan = /\w+[@][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)+/;
    if (!pan.test(email)) {
      state.errShow = true;
      state.errMessage = t("login.ie");
      return false;
    }
    state.loading = true;
    const res = await sesCodeSend({ email, type: "findPassword" });
    state.loading = false;
    if (res?.errCode === 0) {
      state.step++;
      state.errShow = false;
    } else {
      state.errShow = true;
      state.errMessage = res.message;
    }
  } else if (state.step === 2) {
    if (!code) {
      state.errShow = true;
      state.errMessage = t("login.peyc");
      return false;
    }
    state.loading = true;
    const res = await sesCodeVerify({ email, code });
    state.loading = false;
    if (res?.errCode === 0) {
      state.step++;
      state.errShow = false;
      state.formData.nickname = state.formData.email;
    } else {
      state.errShow = true;
      state.errMessage = res.message;
    }
  } else if (state.step === 3) {
    if (!password) {
      state.errShow = true;
      state.errMessage = t("login.peyp");
      return false;
    }
    if (password.length < 6) {
      state.errShow = true;
      state.errMessage = t("login.pts");
      return false;
    }
    if (password !== password1) {
      state.errShow = true;
      state.errMessage = t("login.pi");
      return false;
    }
    state.loading = true;
    const res = await findPassword({ email, password });
    state.loading = false;
    if (res?.errCode === 0) {
      setLoginType("login");
      state.errShow = false;
    } else {
      state.errShow = true;
      state.errMessage = res.message;
    }
  }
};
const changeType = (type: string) => {
  setLoginType(type);
};
const textObject: any = computed(() => {
  if (loginType.value === "login") {
    return {
      t1: t("login.WelcomeBack"),
      t2: t("login.LoginToPractice"),
      t3: t("login.LoginWithGoogle"),
    };
  }
  if (loginType.value === "register") {
    return {
      t1: t("login.SignUp"),
      t2: t("login.cyfda"),
      t3: t("login.SignUPWithGoogle"),
    };
  }
  if (loginType.value === "forgetPwd") {
    return {
      t1: t("login.ForgotPassword"),
      t2: t("login.peteutcya"),
    };
  }
});
watch(
  () => loginType.value,
  (newValue, oldValue) => {
    reset();
  },
  { deep: true }
);
watch(
  () => loginVisible.value,
  (newValue, oldValue) => {
    reset();
  }
);
const reset = () => {
  state.formData.email = "";
  state.formData.password = "";
  state.formData.code = "";
  state.formData.nickname = "";
  state.pwdShow = false;
  state.errShow = false;
  state.step = 1;
};
</script>
<template>
  <Dialog v-model:visible="loginVisible" class="dialog">
    <div class="content">
      <div class="login">
        <template v-if="loginType === 'login' || loginType === 'register'">
          <div class="t1">{{ textObject.t1 }}</div>
          <div class="t2">{{ textObject.t2 }}</div>
          <div class="loginGoogle" @click="googleLogin">
            <img src="../assets/login/google.png" :alt="$t('login.googleImgAlt')" loading="lazy" />
            <span style="margin-left: 16px">{{ textObject.t3 }}</span>
          </div>
          <div class="fengeline">
            <span>{{ $t("login.OrContinueWith") }}</span>
          </div>
        </template>
        <template v-else>
          <div class="LockImg">
            <div class="img">
              <img src="../assets/login/lock.svg" :alt="$t('login.lockImgAlt')" loading="lazy" />
            </div>
          </div>
          <div class="t1 tlc">{{ textObject.t1 }}</div>
          <div class="t2">{{ textObject.t2 }}</div>
        </template>
        <form
          v-if="loginType === 'login'"
          class="login_form"
          @submit.prevent="loginSubmit"
          novalidate
        >
          <div class="form_item">
            <label>{{ $t("login.EmailAddress") }}</label>
            <input
              v-model="state.formData.email"
              type="email"
              placeholder="you@example.com"
            />
          </div>
          <div class="form_item">
            <label>{{ $t("login.Password") }}</label>
            <div class="password_wrapper">
              <input
                v-model="state.formData.password"
                :type="state.pwdShow ? 'text' : 'password'"
                placeholder="Password"
              />
              <img
                v-if="state.pwdShow"
                src="../assets/login/look.png"
                :alt="$t('login.eyeImgAlt')"
                class="toggle_pwd"
                @click="state.pwdShow = !state.pwdShow"
              />
              <img
                v-else="state.pwdShow"
                src="../assets/login/unlook.png"
                :alt="$t('login.eyeSlashImgAlt')"
                class="toggle_pwd"
                @click="state.pwdShow = !state.pwdShow"
              />
            </div>
          </div>
          <div class="form_item" style="margin-top: 24px; margin-bottom: 16px">
            <div v-if="state.errShow" class="err_message_common">
              <img src="../assets/login/errIcon.png" class="errIcon" :alt="$t('login.errorImgAlt')" />
              <span class="err_font">{{ state.errMessage }}</span>
            </div>
            <button type="submit" class="submit">
              <span>{{ $t("login.Login") }}</span>
              <div v-if="state.loading" class="overlay">
                <span class="loading_spinner"></span>
              </div>
            </button>
          </div>
          <div class="footer">
            <div class="go_forget">
              <span style="cursor: pointer" @click="changeType('forgetPwd')">{{
                $t("login.ForgotPassword")
              }}</span>
            </div>
            <div class="go_register">
              {{ $t("login.DontHaveAnAccount") }}
              <span
                style="color: #0058fe; cursor: pointer"
                @click="changeType('register')"
                >{{ $t("login.SignUpHere") }}</span
              >
            </div>
          </div>
        </form>
        <form
          v-if="loginType === 'register'"
          class="register_form"
          @submit.prevent="registerSubmit"
          novalidate
        >
          <div v-if="state.step === 1" class="step1">
            <div class="form_item">
              <label>{{ $t("login.EmailAddress") }}</label>
              <input
                v-model="state.formData.email"
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div class="tips">{{ $t("login.ywryacbe") }}</div>
          </div>
          <div v-else class="step2">
            <div class="form_item">
              <label>{{ $t("login.RegisterCode") }}</label>
              <input
                v-model="state.formData.code"
                type="email"
                placeholder="Enter your code"
              />
            </div>
            <div class="form_item">
              <label>{{ $t("login.FullName") }}</label>
              <input
                v-model="state.formData.nickname"
                type="email"
                placeholder="Full name"
              />
            </div>
            <div class="form_item">
              <label>{{ $t("login.Password") }}</label>
              <div class="password_wrapper">
                <input
                  v-model="state.formData.password"
                  :type="state.pwdShow ? 'text' : 'password'"
                  placeholder="Password"
                />
                <img
                  v-if="state.pwdShow"
                  src="../assets/login/look.png"
                  :alt="$t('login.eyeImgAlt')"
                  class="toggle_pwd"
                  @click="state.pwdShow = !state.pwdShow"
                />
                <img
                  v-else="state.pwdShow"
                  src="../assets/login/unlook.png"
                  :alt="$t('login.eyeSlashImgAlt')"
                  class="toggle_pwd"
                  @click="state.pwdShow = !state.pwdShow"
                />
              </div>
            </div>
          </div>
          <div class="form_item" style="margin-top: 24px; margin-bottom: 16px">
            <div v-if="state.errShow" class="err_message_common">
              <img src="../assets/login/errIcon.png" class="errIcon" :alt="$t('login.errorImgAlt')" />
              <span class="err_font">{{ state.errMessage }}</span>
            </div>
            <button type="submit" class="submit" :disabled="state.loading">
              <span>{{
                state.step === 1 ? "Continue With Email" : "Create Account"
              }}</span>
              <div v-if="state.loading" class="overlay">
                <span class="loading_spinner"></span>
              </div>
            </button>
          </div>
          <div class="footer">
            <div class="go_register">
              {{ $t("login.ahaa") }}
              <span
                style="color: #0058fe; cursor: pointer"
                @click="changeType('login')"
                >{{ $t("login.LoginHere") }}</span
              >
            </div>
          </div>
        </form>
        <form
          v-if="loginType === 'forgetPwd'"
          class="forgetPwd_form"
          @submit.prevent="forgetPwdSubmit"
          novalidate
        >
          <template v-if="state.step === 1">
            <div class="form_item">
              <input
                v-model="state.formData.email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div class="tips">{{ $t("login.wsyaewtrc") }}</div>
          </template>
          <template v-if="state.step === 2">
            <div class="form_item">
              <input
                v-model="state.formData.code"
                type="email"
                placeholder="Enter your code"
              />
            </div>
            <div class="tips">{{ $t("login.pwf1strc") }}</div>
          </template>
          <template v-if="state.step === 3">
            <div class="form_item">
              <label>{{ $t("login.NewPassword") }}</label>
              <div class="password_wrapper">
                <input
                  v-model="state.formData.password"
                  :type="state.pwdShow ? 'text' : 'password'"
                  placeholder="Enter a new password"
                />
                <img
                  v-if="state.pwdShow"
                  src="../assets/login/look.png"
                  :alt="$t('login.eyeImgAlt')"
                  class="toggle_pwd"
                  @click="state.pwdShow = !state.pwdShow"
                />
                <img
                  v-else="state.pwdShow"
                  src="../assets/login/unlook.png"
                  :alt="$t('login.eyeSlashImgAlt')"
                  class="toggle_pwd"
                  @click="state.pwdShow = !state.pwdShow"
                />
              </div>
            </div>
            <div class="form_item">
              <label>{{ $t("login.ConfirmNewPassword") }}</label>
              <div class="password_wrapper">
                <input
                  v-model="state.formData.password1"
                  :type="state.pwdShow1 ? 'text' : 'password'"
                  placeholder="Confirm your new password"
                />
                <img
                  v-if="state.pwdShow1"
                  src="../assets/login/look.png"
                  :alt="$t('login.eyeImgAlt')"
                  class="toggle_pwd"
                  @click="state.pwdShow1 = !state.pwdShow1"
                />
                <img
                  v-else="state.pwdShow1"
                  src="../assets/login/unlook.png"
                  :alt="$t('login.eyeSlashImgAlt')"
                  class="toggle_pwd"
                  @click="state.pwdShow1 = !state.pwdShow1"
                />
              </div>
            </div>
          </template>
          <div class="form_item" style="margin-top: 24px; margin-bottom: 16px">
            <div v-if="state.errShow" class="err_message_common">
              <img src="../assets/login/errIcon.png" class="errIcon" :alt="$t('login.errorImgAlt')" />
              <span class="err_font">{{ state.errMessage }}</span>
            </div>
            <button type="submit" class="submit" :disabled="state.loading">
              <span>{{
                state.step === 1 ? "Send Reset Code" : "Request Password Reset"
              }}</span>
              <div v-if="state.loading" class="overlay">
                <span class="loading_spinner"></span>
              </div>
            </button>
          </div>
          <div class="footer">
            <div class="go_login">
              <span style="cursor: pointer" @click="changeType('login')">
                {{ $t("login.BackTOLogin") }}</span
              >
            </div>
          </div>
        </form>
      </div>
      <div class="close_btn" @click="setLoginVisible(false)">
        <img src="../assets/mobile-close.svg" :alt="$t('login.closeImgAlt')" />
      </div>
    </div>
  </Dialog>
</template>
<style scoped lang="scss">
.dialog {
  ::v-deep(.dialog-content) {
    border-radius: 16px;
  }
}

.content {
  display: flex;
  flex-direction: row;
  padding: 56px;
  background: #ffffff;
  border-radius: 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  .login {
    width: 400px;
    flex: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .tlc {
      text-align: center;
    }

    .t1 {
      width: 400px;
      font-size: 32px;
      font-weight: 600;
      color: #333333;
      line-height: 45px;

      @media screen and (max-width: 958px) {
        font-size: 24px;
      }
    }

    .t2 {
      width: 400px;
      font-size: 16px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.45);
      line-height: 22px;
      margin-top: 8px;
    }

    .loginGoogle {
      width: 400px;
      height: 50px;
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      font-size: 18px;
      font-weight: 600;
      color: #333333;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 49px;
    }

    .fengeline {
      width: 400px;
      text-align: center;
      color: #303133;
      margin-top: 39px;
      position: relative;
      font-size: 14px;
      font-weight: 500;

      &:before,
      &:after {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        height: 1px;
        width: 38%;
        background-color: #ebebeb;
      }

      &:before {
        left: 0;
      }

      &:after {
        right: 0;
      }

      span {
        display: inline-block;
        padding: 0 16px;
        background: white;
        z-index: 1;
        position: relative;
      }
    }

    .LockImg {
      width: 120px;
      height: 120px;
      background-color: #0058fe;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      .img {
        width: 37px;
        height: 47px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .login_form,
    .register_form,
    .forgetPwd_form {
      width: 400px;
      margin-top: 14px;

      .form_item {
        width: 100%;
        margin-bottom: 22px;

        label {
          display: block;
          font-size: 14px;
          color: #606266;
          line-height: 40px;
        }

        input[type="email"],
        input[type="text"],
        input[type="password"] {
          width: 100%;
          height: 40px;
          padding: 0 12px;
          border: 1px solid #dcdfe6;
          border-radius: 4px;
          font-size: 14px;
          box-sizing: border-box;
        }

        input:focus {
          outline: none;
          border-color: #0058fe;
          box-shadow: 0 0 0 2px rgba(0, 88, 254, 0.1);
        }
      }

      .password_wrapper {
        position: relative;
        display: flex;
        align-items: center;

        input {
          padding-right: 40px;
        }

        .toggle_pwd {
          position: absolute;
          right: 10px;
          width: 20px;
          height: 20px;
          cursor: pointer;
        }
      }

      .submit {
        position: relative;
        width: 100%;
        height: 40px;
        background-color: #0058fe;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #0046c6;
        }

        &:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }

        .overlay {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background-color: rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #0058fe;
          border-radius: 4px;

          .loading_spinner {
            display: inline-block;
            width: 35px;
            height: 35px;
            border: 2px solid #0058fe;
            border-left-color: transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            vertical-align: middle;
            box-sizing: border-box;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }

            100% {
              transform: rotate(360deg);
            }
          }
        }
      }
    }

    .register_form,
    .forgetPwd_form {
      .tips {
        font-size: 14px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.45);
        line-height: 20px;
      }
    }

    .forgetPwd_form {
      margin-top: 80px;
    }

    .footer {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;
      margin-bottom: 16px;

      .go_forget {
        color: #0058fe !important;
        cursor: pointer;
      }

      .go_forget,
      .go_register {
        line-height: 40px;
        font-size: 14px;
        color: #000000;
      }

      .go_login {
        font-size: 14px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.45);
        line-height: 20px;

        &:hover {
          color: #0058fe;
        }
      }
    }

    .err_message_common {
      display: flex;
      align-items: center;
      width: 100%;
      background: #fef7f5;
      border-radius: 4px;
      border: 1px solid rgba(246, 100, 66, 0.1);
      color: #f66442;
      font-size: 14px;
      margin-bottom: 8px;
      padding: 10px 12px;
      box-sizing: border-box;

      .errIcon {
        width: 16px;
        height: 16px;
        margin-right: 8px;
        margin-left: 8px;
      }
    }
  }

  .close_btn {
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
    width: 18px;
    height: 18px;
    font-size: 24px;
    font-weight: 600;
    color: #333333;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: #f7f8f9;
      border-radius: 11px;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
}

@media screen and (max-width: 958px) {
  ::v-deep(.dialog-content) {
    border-radius: 16px;
    width: 90%;
  }

  .content {
    width: 100%;
    padding: 12px;

    .login {
      width: calc(100% - 18px);

      .t1,
      .t2,
      .loginGoogle,
      .fengeline {
        width: calc(100% - 18px);
      }

      .login_form,
      .register_form,
      .forgetPwd_form {
        width: calc(100% - 18px);
      }

      .submit {
        width: 100%;
      }
    }
  }
}
</style>
