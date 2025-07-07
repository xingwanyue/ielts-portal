import { useState } from '#app';

export function useLoginState() {
  const loginVisible = useState('loginVisible', () => false);
  const loginType = useState('loginType', () => 'login');

  return {
    loginVisible,
    loginType,
    setLoginType(type: string) {
      loginType.value = type;
    },
    setLoginVisible(value: boolean) {
      loginVisible.value = value;
    },
  };
}