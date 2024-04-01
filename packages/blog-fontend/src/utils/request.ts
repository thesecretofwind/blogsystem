import axios from 'axios';

import { useGlobalStore } from '@/store/index';
import { getToken } from './auth';
import _ from 'lodash';
import errorMessage from '@/constants/error-message';
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus';
import router from '@/router';
import pinia from '@/store/pinia';

const globalStatus = useGlobalStore(pinia);


axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

const instance = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: globalStatus.baseURL,
    // 超时
    timeout: 10000
});

// request拦截器

instance.interceptors.request.use(config => {
  // 是否需要设置token
  const isToken = config.headers?.isToken === false;
  const token = getToken();

  if (token && !isToken) {
    config.headers['token'] = token;
  }

  // get请求映射params参数

  if (config.method === 'get' && config.params) {
    let url = config.url + '?';
    const paramsKeys = Object.keys(config.params || {});

    for (const propName of paramsKeys) {
      const value = config.params[propName];
      const part = encodeURIComponent(propName);
      if (value !== null && typeof value === 'object') {
        for (const key of Object.keys(value)) {
          if (value[key]) {
            const params = `${propName}[${key}]`;
            const subPart = encodeURIComponent(params) + '=';
            url += subPart + encodeURIComponent(value[key]) + '&';
          }
        }
      } else {
        url += part + encodeURIComponent(value) + '&'
      }
    }

    url = url.slice(0, -1);
    config.params = {};
    config.url = url;
  }

    return config;
}, error => {
  return Promise.reject(error);
});

// 响应拦截器

instance.interceptors.response.use(res => {
  const code = res.data.code || 200;

  let msg;

  if (code in errorMessage) {
    msg = errorMessage[ code as keyof typeof errorMessage];
  } else {
    msg = res.data.msg || errorMessage['default'];
  }

  if (code === 401) {
    ElMessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
      confirmButtonText: '重新登录',
      cancelButtonText: '取消',
      type: 'warning'
    })
    .then(() => {

      localStorage.setItem('logUrl', router.currentRoute.value.fullPath);
      router.push({
        path: '/Login?login=1'
      });
    })
    .catch(() => { });

    return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
  }


  if (code === 500) {
    ElMessage({
      message: msg,
      type: 'error'
    });

    return Promise.reject(new Error(msg))
  }

  if (code !== 200) {
    ElNotification.error({
      title: msg
    })

    return Promise.reject('error')
  }

    // 把字符串total 转换成 数字 total
    if (res.data.data && res.data.data.total) {
      res.data.data.total = parseInt(res.data.data.total)
    }
    return res.data.data

}, error => {
  const { message } = error;

  let errorMsg;

  if (message === 'Network Error') {
    errorMsg = '后端接口连接异常'
  } else if (message.includes('timeout')) {
    errorMsg = '系统接口请求超时'
  } else if (message.includes('Request failed with status code')) {
    errorMsg = '系统接口' + message.substr(message.length - 3) + '异常'
  }

  ElMessage({
    message: errorMsg,
    type: 'error',
    duration: 5 * 1000
  });

  return Promise.reject(error);
});

export default instance;