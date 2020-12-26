const {
  request
} = require('../utils/request')
// 专家诊断
//  企业诊断模型
const category = (data) => request('POST', '/member?s=Member.Diagnosis.Category', data)
//  企业诊断方式
const cycleM = (data) => request('POST', '/member?s=Member.Diagnosis.Cycle', data)
//  企业诊断维度（方向）
const DimensionL = (data) => request('POST', '/member?s=Member.Diagnosis.Dimension', data)
//  获取生命周期阶段节点
const LifeNodeL = (data) => request('POST', '/member?s=Member.Diagnosis.LifeNode', data)
//  获取生命周期阶段
const LifeStageL = (data) => request('POST', '/member?s=Member.Diagnosis.LifeStage', data)
//  确认企业发展阶段
const StageL = (data) => request('POST', '/member?s=Member.Diagnosis.Stage', data)
//  	提交答题答案
const SubAnswerL = (data) => request('POST', '/member?s=Member.Diagnosis.SubAnswer', data)
//  	选择答题诊断维度
const SubjectL = (data) => request('POST', '/member?s=Member.Diagnosis.Subject', data)

// 获取评论列表接口 
const commentList = (data) => request('POST', '/member?s=Member.Train.LnquiryDiscuss', data)


// 获取企业名片数据
const companyCard = (data) => request('POST', '/member?s=Member.BusinessCard.CardInfo', data)

// 获取行业分类数据
const companyCardIndustry = (data) => request('POST', '/member?s=Member.BusinessCard.Industry', data)

// 创建企业名片 
const companyCardCreated = (data) => request('POST', '/member?s=Member.BusinessCard.CardEdit', data)

//  提交个人资料
const personCardCreated = (data) => request('POST', '/member?s=Member.BusinessCard.UserEdit', data)


// 分享查看企业名片  
const shareCreatedCard = (data) => request('POST', '/member?s=Member.Testing.UserCardInfo', data)

// 帮助中心  分类 
const doubtCategoryHelp = (data) => request('POST', '/member?s=Member.Testing.DoubtCategory', data)

// 帮助中心列表  
const doubtCategoryHelpList = (data) => request('POST', '/member?s=Member.Testing.DoubtList', data)

//  我的合同列表POST 
const getContractL = (data) => request('POST', '/app/contract/list', data)


// 合同详情
const getContractDetails = (data) => request('POST', '/app/contract/get', data)

//  钱包首页数据
const getWalletIndex = (data) => request('POST', '/app/wallet/getByCompany', data)

// 钱包 查询指定在服项目明细
const getBySerInstanceId = (data) => request('POST', '/app/wallet/getBySerInstanceId', data)

// 钱包 查询会员的所有在服项目的钱包总览 

const getSerInstanceByCompany = (data) => request('POST', '/app/wallet/getSerInstanceByCompany', data)



// 钱包 查询会员的钱包变动日志 
const listWalletLog = (data) => request('POST', '/app/wallet/listWalletLog', data)


// 我的报告  
const myReportId = (data) => request('POST', '/app/report/service/listByMemberId', data)

// 我的消息  列表
const messageList = (data) => request('POST', '/app/message/service/list', data)
 
// 更改状态   
const messageListStatus = (data) => request('POST', '/app/message/service/updateReadStatus', data)

// 合同详情  POST 图片 
const listContactImg = (data) => request('POST', '/app/contract/listContractImg', data)
// 在服项目  POST 图片  
const listContractImgBySerId = (data) => request('POST', '/app/contract/listContractImgBySerId', data)

module.exports = {
  category,
  commentList,
  companyCard,
  companyCardIndustry,
  companyCardCreated,
  shareCreatedCard,
  doubtCategoryHelp,
  doubtCategoryHelpList,
  personCardCreated,
  getContractL,
  getWalletIndex,
  getBySerInstanceId,
  getSerInstanceByCompany,
  listWalletLog,
  myReportId,
  messageList,
  messageListStatus,
  listContactImg,
  listContractImgBySerId,
  getContractDetails
}