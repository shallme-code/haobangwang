// pages/cloud/infodetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infodetail:{
      photo:'http://photo.yeziiot.top/test/23.jpg',
      name:'李明霞',
      organization:'四川天有一家会计事务所',
      profile:'国门打开后很多会计人热衷于考ACCA等洋证。目前，市场上对会计人员最认可的是注册会计师证书。对会计人员最认可的是注册会计师证书。', 
      score:5,
      price:25,
      qualifications:['国家一级资深会计师','国家一级资深会计师'],
      cscount:200,
      apcount:302,
      serverTag:
        ['税务统筹','税务统筹','税务统筹',]  
    },
    comment:[
      {
        name:'红尘滚滚',
        thumb:'http://photo.yeziiot.top/test/thumb1.jpg',
        score:'4.5',
        vip:true, 
        date:'2020-12-12',
        content:'国门打开后很多会计人热衷于考ACCA等洋证目前，市场上对会计人员最认可的是注册会计师证书。'
      },
      {
        name:'红尘滚滚',
        thumb:'http://photo.yeziiot.top/test/thumb2.jpg',
        score:'4.5',
        vip:true, 
        date:'2020-12-12',
        content:'国门打开后很多会计人热衷于考ACCA等洋证目前，市场上对会计人员最认可的是注册会计师证书。'
      },
      {
        name:'民兵钙尔丹',
        thumb:'http://photo.yeziiot.top/test/thumb3.jpg',
        score:'4.5',
        vip:false, 
        date:'2020-12-12',
        content:'国门打开后很多会计人热衷于考ACCA等洋证目前，市场上对会计人员最认可的是注册会计师证书。'
      } 
    ],
    nowNav:0,
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
  changeState(t){
    let newState = Number(t.currentTarget.dataset.nav),
      oldState = this.data.nowNav;
     if (newState !== oldState) {
      this.setData({
        nowNav: newState
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