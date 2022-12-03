import Vue from 'vue';
import moment from 'moment';

Vue.filter('dateFormat', (value) => {
  // let date = new Date(value*1000);
  // const year = date.getFullYear();
  // const month = date.getMonth() + 1;
  // const day = date.getDate(); // 日
  // const hour = date.getHours(); // 时
  // const min = date.getMinutes(); // 分
  // const second = date.getSeconds();

  // return `${year}-${month}-${day} ${hour}:${min}:${second}`;
  // YYYY 年 MM 月 DD 日 hh （24）小时 mm 分 ss秒
  return moment(value*1000).format('YYYY 年 MM-DD hh:mm:ss')
});