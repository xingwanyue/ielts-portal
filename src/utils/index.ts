const TOKEN = "IELTS_TOKEN";

export function getToken(forHeader?: boolean): string {
  try {
    const token = localStorage[TOKEN];
    let res;
    if (token) {
      res = forHeader ? `Bearer ${token}` : token;
    } else {
      res = forHeader ? "" : token;
    }
    return res;
  } catch (e) {
    return "";
  }
}

export function saveToken(token: any) {
  try {
    localStorage[TOKEN] = token;
  } catch (e) {}
}
