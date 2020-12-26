// const { log } = require("util");
const baseURL = 'https://manager.hibon.cn';
// const baseURL = 'http://192.168.100.118:8000';


const baseURLImg='http://47.92.82.192:8093'

const app = getApp()

// function request(method, url, data) {
  function request(method, url, data,token) {
  return new Promise(function (resolve, reject) {
    let header
    if (token) {
    // if (wx.getStorageSync('x-auth-token')) {
      header = {
        'content-type': 'application/json',
        'x-auth-token': token
        // 'x-auth-token': wx.getStorageSync('x-auth-token')
      };
    } else {
      header = {
        'content-type': 'application/json',
        'x-auth-token': wx.getStorageSync('x-auth-token')
      };
    }
   
    wx.request({
      url: baseURL + url,
      method: method,
      data: data,
      header: header,
      success(res) {
        resolve(res);
      },
      fail(err) {
        //请求失败
        reject(err)
      }
    })
  })
}
module.exports = {
  request,
  baseURL,
  baseURLImg
}