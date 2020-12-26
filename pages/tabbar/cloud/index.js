// pages/tabar/cloud/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    assistantInfo:{
      thumb:'../../../static/test/thumb-ava.jpg',
      name:'刘助理',
      wechat:'xiaoliuzhuli',
      profile:' 审合同提供审核结果和审核意见,购买成功后会有专业人员联系您进行确认，请您注意消息查收。'
    },
    state:0,
    accountant:[{
      thumb:'../../../static/test/02.jpg',
      name:'黄丽丽黄丽丽黄丽丽黄丽丽黄丽丽黄丽丽黄丽丽',
      score:5,
      qualifications:'国家一级资深会计师，从业8年',
      serverTag:
        ['税务统筹','税务统筹','税务统筹',] 
    },
    {
      thumb:'../../../static/test/05.jpg',
      name:'黄丽丽',
      score:4,
      qualifications:'国家一级资深会计师，从业8年',
      serverTag:
        ['税务统筹','税务统筹','税务统筹',] 
    },
    {
      thumb:'../../../static/test/06.jpg',
      name:'黄丽丽',
      score:4.4,
      qualifications:'国家一级资深会计师，从业8年,国家一级资深会计师，从业8年,国家一级资深会计师，从业8年',
      serverTag:
        ['税务统筹','税务统筹','税务统筹',] 
    },
    {
      thumb:'../../../static/test/07.jpg',
      name:'黄丽丽',
      score:4.5,
      qualifications:'国家一级资深会计师，从业8年',
      serverTag:
        ['税务统筹','税务统筹','税务统筹'] 
    }],
    serverPackage:[{
      name:'商标知产会员专享包',
      content:'商标申请×5 + 专利申报×3',
      oriPrice:12888,
      price:5188 
    },{
      name:'合同审改会员专享包',
      content:'改合同×10 + 写文件×3，赠税筹方案×1',
      oriPrice:12888,
      price:5188 
    },{
      name:'合同审改会员专享包',
      content:'改合同×10 + 写文件×3，赠税筹方案×1',
      oriPrice:12888,
      price:5188 
    },{
      name:'合同审改会员专享包合同审改会员专享包合同审改会员专享包',
      content:'改合同×10 + 写文件×3，赠税筹方案×1改合同×10 + 写文件×3，',
      oriPrice:12888,
      price:5188 
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
   
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
   changeState:function(t){ 
    let newState=Number(t.currentTarget.dataset.state),
    oldState=this.data.state;
    if(newState!==oldState){
      this.setData({
        state:newState
      })
    } 
   },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})