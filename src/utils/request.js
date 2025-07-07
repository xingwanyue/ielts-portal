const CONTENT_TYPE = 'Content-Type';
const getType = (res) => res.headers.get(CONTENT_TYPE);
const jsonType = (x) => `application/json${x}`;
const isText = (res, type) => {
  type = type || getType(res);
  if (type && (type.indexOf('text') > -1 || type.indexOf('plain') > -1)) {
    res.isText = true;
    return true;
  }
  return false;
};
const isJson = (res, type) => {
  type = type || getType(res);
  if (type && type.indexOf('json') > -1) {
    res.isJson = true;
    return true;
  }
  return false;
};
const typeJsonx = jsonType('x');
const isJsonX = (res, type) => {
  type = type || getType(res);
  if (type === typeJsonx) {
    res.isJson = true;
    return true;
  }
  return false;
};
const parseResponse = (res) => {
  let body;
  const type = getType(res);
  if (isJsonX(res, type)) {
    body = decrypt(res);
  } else if (isJson(res, type)) {
    body = res.json();
  } else if (isText(res, type)) {
    body = res.text();
  } else {
    body = res.arrayBuffer();
  }
  return body.then((data) => ({
    res,
    data,
  }));
};
const checkStatus = (result) => {
  const { res, data } = result;
  if (res.ok) {
    return result;
  }
  let err = {};
  if (res.isJson) {
    err = parseError(data);
  } else if (isText(res)) {
    err.message = data;
  }
  if (!err.status) {
    err.status = res.status;
  }
  if (!err.message) {
    err.message = res.statusText;
  }
  return {
    res,
    err,
  };
};

export const fetchMy = (url, options) => {
  const defaultHeaders = {
    'Content-Type': 'application/json; charset=utf-8',
  };
  const headers = Object.assign({}, defaultHeaders, options.headers);
  return fetch(url, {
    headers,
    ...options,
  })
    .then(parseResponse)
    .then(checkStatus)
    .then((data) => {
      const { data: data1, res } = data;
      if (res?.status === 401) {
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = '/';
      }
      return data1;
    });
};
