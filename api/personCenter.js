const {
  request
} = require('../utils/request')
// 反馈意见
const feedbackD = (data) => request('POST', '/member?s=Member.Configure.Opinion', data)


// 在服项目 列表
const listInproject = (data) => request('POST', '/app/service/instance/list', data)

// 在服项目服务进度管理 
const listBySerId = (data) => request('POST', '/app/process/listBySerId', data)

// POST 通讯录的个人主页

const homepagePerson = (data) => request('POST', '/app/homepage/get', data)

// 协议
const getAgreement = (data) => request('POST', '/member?s=Member.Configure.AgreementInfo', data)
module.exports = {
  feedbackD,
  listInproject,
  listBySerId,
  homepagePerson,
  getAgreement
}