const {
  request,baseURL
} = require('../utils/request')

//  测评
//  测评方案一或者方案二
const CycleGet = (data) => request('GET', '/member?s=Member.Diagnosis.Cycle', data)

//  下面循环
const CycleGetList = (data) => request('GET', '/member?s=Member.Diagnosis.Dimension', data)


// vip会员权益
const vipRights = (data) => request('GET', '/member?s=Member.Rights.Rights', data)


// 诊断题 
const subjectMany = (data) => request('POST', '/member?s=Member.Diagnosis.Subject', data)

// 提交题  (填空，单选，日期)
const subjectSumbit = (data) => request('POST', '/member?s=Member.Diagnosis.SubAnswer', data)


// 提交题  (城市)
const subjectSumbitArr = (data) => request('POST', '/member?s=Member.Diagnosis.SubAnswerArr', data)

// 单个图片  /zuul/crm/upload/add
const subjectSumbitImg = baseURL+'/zuul/crm/upload/add'



// 多个图片上传
const subjectSumbitImgs = baseURL+'/zuul/crm/upload/adds'


//  服务接口  左边根目录
const serviceRoot = (data) => request('POST', '/app/product/listRootProductType', data)
//  服务接口  右边列表 
const serviceRootList = (data) => request('POST', '/app/product/listProductByTypeRootIdGroupByType', data)

// 服务接口  搜索页面 
const serviceRootSerach = (data) => request('POST', '/app/product/search', data)

// 培训 活动报名
const userSignupT = (data) => request('POST', '/member?s=Member.UserLog.UserSignup', data)



// 广告位
const swiperAdvertising = (data) => request('POST', '/member?s=Member.Testing.Advertisement', data)



module.exports={
  CycleGet,
  CycleGetList,
  vipRights,
  subjectMany,
  subjectSumbit,
  subjectSumbitArr,
  subjectSumbitImg,
  subjectSumbitImgs,
  serviceRoot,
  serviceRootList,
  userSignupT,
  serviceRootSerach,
  swiperAdvertising
}