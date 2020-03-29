import { getCookieValue } from './util/cookie';
import Axios, { AxiosStatic } from 'axios';

declare global {
  interface Window {
    axios: AxiosStatic;
  }
}

export default function bootstrap() {
  window.axios = Axios;
  window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  window.axios.interceptors.request.use(config => {
    config.headers['X-XSRF-TOKEN'] = getCookieValue('XSRF-TOKEN');
    return config;
  });
  window.axios.interceptors.response.use(
    response => response,
    error => error.response || error
  );
}
