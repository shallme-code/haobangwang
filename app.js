//app.js
const throttleDebounce = require('./utils/throttleDebounce')
const {
  loginCode
} = require('./api/requestYcx')
App({
  onLaunch: function () {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // console.log(res);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        loginCode({
            code: res.code
          })
          .then(res => {
            // console.log(res);
            //请求成功
            // console.log(res.data.o.memberInfo);  // 如果为0则为游客
            wx.setStorage({
              data: res.data.o.memberInfo,
              key: 'userInfoYcx',
            })
            // this.globalData.grade = res.data.o
            // this.globalData.token = 
            this.globalData.token = res.data.o.token
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            if (this.tokenReadyCallback) {
              this.tokenReadyCallback(res)
            }
            wx.setStorage({
              data: res.data.o.token,
              key: 'x-auth-token',
            })
          })
          .catch(err => {
            //请求失败
            console.log(err);
          })
      }
    })
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo
    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  globalData: {
    userInfo: null,
    token: '',
    grade: null,
    cartNumberTotal:0
  },
  //  节流与防抖挂载
  throttle: throttleDebounce.throttle,
  debounce: throttleDebounce.debounce
})