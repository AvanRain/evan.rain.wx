// toastFn.js

function toastFn(that, iconType, title, position, fn) {
  that.setData({
    isToast: true,
    iconType: iconType, //warn叹号/okay打钩
    title: title,
    position: position ? 'box-top' : '', //弹框位置
  });
  new Promise(function(resolve, reject) {
    setTimeout(function(e) {
      that.setData({
        isToast: false
      });
      resolve();
    }, 1500);
  }).then(function() {
    if (fn) {
      fn();
    }
  })

}
module.exports = {
  toastFn: toastFn
}