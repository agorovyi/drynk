import trim from 'lodash/trim';

const tryStringify = value => (value ? value.toString() : null);

const createAuthorizedRequest = (method, url, contentType = 'application/json; charset=UTF-8') => {
  const http = new XMLHttpRequest();
  http.open(method, url, true);

  // send the proper header information along with the request
  http.setRequestHeader('Content-type', contentType);
  http.setRequestHeader('Accept', 'application/json, text/javascript, */*');
  http.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

  return http;
};

const extractErrorMessage = ({ responseText, status, statusText }) => {
  try {
    const { message } = JSON.parse(responseText).errors[0];
    return trim(message || `${status}: ${statusText}`);
  } catch (error) {
    if (status >= 200 && status < 400) {
      return trim(tryStringify(responseText), ' "');
    }
    return `${status} ${statusText}`;
  }
};

const createJsonHandler = (http, resolve, reject) => () => {
  if (http.readyState === http.DONE) {
    const { status, responseText } = http;
    if (status >= 200 && status < 400) {
      resolve(JSON.parse(responseText || '{}'));
    } else {
      reject(extractErrorMessage(http));
    }
  }
};

export const tryFetchData = () => {
  console.log('tryFetchData...');
  const fetchUrl = () => {
    if (process.env.NODE_ENV === 'production') {
      return 'http://localhost:1337/api/items';
    }
    return '/stubs/data.json';
  };

  return new Promise((resolve, reject) => {
    const url = fetchUrl();
    const http = createAuthorizedRequest('GET', url);

    http.onreadystatechange = createJsonHandler(http, resolve, reject);
    http.send();
  });
};
