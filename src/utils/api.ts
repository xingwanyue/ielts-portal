export const api = `https://api.ieltspractice.ai`;
import { fetchMy } from '@/utils/request';
export const login = async (args: any) => {
  const res = await fetchMy(`${api}/common/login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...args,
    }),
  });

  return res;
}
export const sesCodeSend = (args: any) =>
  fetchMy(`${api}/common/sesCode`, {
    method: 'post',
    body: JSON.stringify(args),
  });
export const sesCodeVerify = (args: any) =>
  fetchMy(`${api}/common/sesCodeVerify`, {
    method: 'post',
    body: JSON.stringify(args),
  });
export const register = (args: any) =>
  fetchMy(`${api}/common/register`, {
    method: 'post',
    body: JSON.stringify(args),
  });
export const findPassword = (args: any) =>
  fetchMy(`${api}/common/findPassword`, {
    method: 'post',
    body: JSON.stringify(args),
  });
