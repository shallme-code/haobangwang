// 防抖是控制次数（比如：2s内点击100次，上一次点击离上一次大于等于2s即算一次，否则不算），节流是控制频率（10秒内点击了100次，节流时间为2s，则算点击5次）
//  节流 购物车结算或者跳转页面
const throttle = function (fn, interval) {
  if (interval == null || interval == undefined) {
    interval = 2000
  }
  let last = 0;
  return function (...args) {
    let context = this;
    let now = +new Date();
    // 还没到时间
    if (now - last < interval) return;
    last = now;
    fn.apply(this, args)
  }
};
//  防抖  用于实时搜索的时候
function debounce(fn, delay) {
  if (delay == null || delay == undefined) {
    delay = 2000
  }
  let timer = null;
  return function (...args) {
    let context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  }
}
// 导出
module.exports = {
  throttle,
  debounce
}