const {
  request
} = require('../utils/request')
// 培训模块
//  文章列表
const articleNews = (data,token) => request('GET', '/member?s=Member.Train.ArticleIndex', data,token)
// const articleNews = (data) => request('GET', '/member?s=Member.Train.ArticleIndex', data)
// 文章详情
const articleNewsDetails = (data) => request('POST', '/member?s=Member.Train.ArticleInfo', data)
// 视频列表
const videoList = (data,token) => request('GET', '/member?s=Member.Train.VideoIndex', data,token)
// 视频详情
const videoDetails = (data) => request('POST', '/member?s=Member.Train.VideoInfo', data)

// 播放详情的记录提交播放了多少
const videoDetailsHowMany = (data) => request('POST', '/member?s=Member.UserLog.VideoRecord', data)

// 线下培训列表
const unlineTraining = (data) => request('POST', '/member?s=Member.Train.TrainingIndex', data)
// 线下培训详情
const unlineTrainingDetails = (data) => request('POST', '/member?s=Member.Train.TrainingInfo', data)
//  添加知识列表 
const addKnowledge = (data) => request('POST', '/member?s=Member.UserLog.InquiryAdd', data)
// 知识列表 
const KnowledgeListFast= (data) => request('POST', '/member?s=Member.UserLog.Inquiry', data)

//  知识列表 
const KnowledgeListM = (data,token) => request('POST', '/member?s=Member.UserLog.Knowledge', data)

//  知识分享分类 
const KnowledgeCategoryList = (data,token) => request('POST', '/member?s=Member.UserLog.KnowledgeCategory', data)

// 专家列表
const expertListM = (data,token) => request('POST', '/member?s=Member.Train.ExpertList', data,token)

// 专家详情
const expertDetails = (data) => request('POST', '/member?s=Member.Train.ExpertInfo', data)


// 查看视频详情量
const seeVideoDetails = (data) => request('POST', '/member?s=Member.Train.VideoSee', data)

// 查看咨询详情量
const seeNewsDetails = (data) => request('POST', '/member?s=Member.Train.ArticleSee', data)

// 查看培训报名详情量
const seeExpersDetails = (data) => request('POST', '/member?s=Member.Train.TrainingSee', data)

// 我的活动报名  
const mySeeExpersDetails = (data) => request('POST', '/member?s=Member.UserLog.UserSignupMy', data)

// 评论列表
const discussList = (data) => request('POST', '/member?s=Member.Train.DiscussList', data)

// 评论提交
const discussSumbit = (data) => request('POST', '/member?s=Member.Train.Discuss', data)

// 我的课程列表
const maclassList = (data) => request('POST', '/member?s=Member.UserLog.Uservideo', data)


// 快速问答列表Member.UserLog.Inquiry
const  quickQuestion = (data) => request('POST', '/member?s=Member.UserLog.Inquiry', data)


module.exports = {
  articleNews,
  articleNewsDetails,
  videoList,
  videoDetails,
  unlineTraining,
  unlineTrainingDetails,
  expertListM,
  expertDetails,
  addKnowledge,
  KnowledgeListFast,
  KnowledgeListM,
  KnowledgeCategoryList,
  seeVideoDetails,
  seeNewsDetails,
  seeExpersDetails,
  discussList,
  discussSumbit,
  videoDetailsHowMany,
  maclassList,
  mySeeExpersDetails,
  quickQuestion
}