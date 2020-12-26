const {request} = require('../utils/request')

// 获取token  线上版本
const loginCode = (data) => request('POST', '/auth/auth/login/loginByMiniapp/wx9eba3a8998b8cfa1',data)

// 本地调试
// const loginCode = (data) => request('POST', '/auth/auth/login/loginByMiniapp/wx64e727a21e06f380',data)

// 授权登录获取用户信息
const loginUserInfo = (data) => request('POST', '/member?s=Member.UserLog.UsersEdit',data)
// 授权是否是游客或者会员或者是VIP
const loginGradeIs = (data,token) => request('POST', '/member?s=Member.UserLog.UserInfo',data,token)

// 获取微信授权手机号码
const loginGetTel = (data) => request('POST', '/member?s=Member.UserLog.LoginPhone',data)
// 获取手机号短信授权
const loginRegisterTel = (data) => request('POST', '/member?s=Member.UserLog.Register',data)

// 获取验证码  
const loginCodeTel = (data) => request('POST', '/member?s=Member.UserLog.SetPhone',data)


// 首页天眼查
const DimensionpIndex = (data,token) => request('POST', '/member?s=Member.Diagnosis.DimensionpIndex',data,token)

module.exports = {
  loginCode,
  loginUserInfo,
  loginGradeIs,
  DimensionpIndex,
  loginGetTel,
  loginRegisterTel,
  loginCodeTel
}