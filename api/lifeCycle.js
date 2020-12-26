const {
  request
} = require('../utils/request')
// 生命周期
//  生命周期阶段列表
const fourStage = (data,token) => request('POST', '/member?s=Member.Diagnosis.LifeStage', data,token)


//  生命周期阶段节点
const fourStageNumber = (data,token) => request('POST', '/member?s=Member.Diagnosis.LifeNode', data,token)

//  生命周期阶段提交题
const sumbitDtStage = (data) => request('POST', '/member?s=Member.Diagnosis.Stage', data)


// 生命周期阶段点亮 
const sumbitDtLightUp= (data) => request('POST', '/member?s=Member.Diagnosis.UserNode', data)

// 生命周期优惠券 生命周期卡券列表 
const TaskCard= (data) => request('POST', '/member?s=Member.Card.TaskCard', data)

// 生命周期优惠券  卡券领取
const TaskConsumer= (data) => request('POST', '/member?s=Member.Card.TaskConsumer', data)


module.exports = {
  fourStage,
  fourStageNumber,
  sumbitDtStage,
  sumbitDtLightUp,
  TaskCard,
  TaskConsumer
}