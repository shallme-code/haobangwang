// pages/tabar/mine/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      nickname:'一天似一天',
      phone:'151****1154'
    },
    userOp:[{title:'我的订单',icon:'../../../static/tabbar/1.png'},
    {title:'我的卡券',icon:'../../../static/tabbar/2.png'},
    {title:'我的资产',icon:'../../../static/tabbar/3.png'},
    {title:'我的顾问',icon:'../../../static/tabbar/4.png'},
    {title:'我的预约',icon:'../../../static/tabbar/5.png'}    
    ],
    options:[{iconsrc:'../../../static/tabbar/notice.png',title:'消息中心'},
    {iconsrc:'../../../static/tabbar/ticket.png',title:'卡券中心'},
    {iconsrc:'../../../static/tabbar/contact.png',title:'联系我们'},
    {iconsrc:'../../../static/tabbar/about.png',title:'关于我们'},
    {iconsrc:'../../../static/tabbar/agreement.png',title:'用户协议'},
    {iconsrc:'../../../static/tabbar/setting.png',title:'设置'}]

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