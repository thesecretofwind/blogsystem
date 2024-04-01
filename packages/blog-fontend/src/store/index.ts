import { defineStore } from 'pinia';


export const useGlobalStore = defineStore('global', {
  state: () => {
    return {
      loading: false,
      themeObj: {
        user_start: '',
        top_image: '',
        head_portrait: '',
        autograph: ''
      },//主题
      keywords:'',//关键词
      errorImg: 'this.onerror=null;this.src="' + new URL('../../static/img/tou.jpg', import.meta.url).href  + '"',
      baseURL:'http://localhost:7777/'
    }
  }
})