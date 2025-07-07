declare global {
  interface Window {
    google: any;
  }
}

export const googlePopupLogin = () => {
  return new Promise((resolve) => {
    const config = useRuntimeConfig();
    const client = window.google.accounts.oauth2.initTokenClient({
      client_id: config.public.googleClientId,
      scope: "https://www.googleapis.com/auth/userinfo.profile email",
      callback: async (res: any) => {
        const response = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${res.access_token}`,
            },
          }
        );
        const data = await response.json();
        const { email, picture, name } = data;
        resolve({
          email,
          avatar: picture,
          nickname: name,
        });
      },
    });
    client.requestAccessToken();
  });
};
export default {};
