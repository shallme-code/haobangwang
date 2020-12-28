// pages/cloud/contract/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      serviceType:[{
        typeid:1,
        title:'审合同',
        subtitle:'提供审核结果和审核意见',        
      },{
        typeid:2,
        title:'改合同',
        subtitle:'提供改合同 2天交付 可加急',        
      }
    ],
    nowType:1,
    principal:[{
      id:1,
      title:'甲方'
    },{
      id:2,
      title:'乙方'
    },{
      id:3,
      title:'丙方'
    },{
      id:4,
      title:'丁方'
    },{
      id:5,
      title:'其他'
    },],
    nowPrip:2
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