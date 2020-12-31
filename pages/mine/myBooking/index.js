// pages/mine/myBooking/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navStatus:[{
      id:0,
      title:'全部'
    },{
     id:1,
     title:'待审核'
   },{
     id:2,
     title:'已通过'
   },{
     id:3,
     title:'未通过'
   }],
   status:0,
   booking:[{
     bookId:123,
     status:1,
     title:'见导师',
     meeting:' 四川省成都市武侯区',
     date:' 2020.11.17  14:21',
     description:'股东商量好出资比例，需要在公司章程中载明，是具法律效力股东商量好出资比例，是具有法律效力法律力股东商量好出资比例。' 
   },{
    bookId:123,
    status:2,
    title:'见导师',
    meeting:' 四川省成都市武侯区',
    date:' 2020.11.17  14:21',
    description:'股东商量好出资比例，需要在公司章程中载明，是具法律效力股东商量好出资比例，是具有法律效力法律力股东商量好出资比例。' 
  },{
    bookId:122,
    status:2,
    title:'见导师',
    meeting:' 四川省成都市武侯区',
    date:' 2020.11.17  14:21',
    description:'股东商量好出资比例，需要在公司章程中载明，是具法律效力股东商量好出资比例，是具有法律效力法律力股东商量好出资比例。' 
  },{
    bookId:125,
    status:-1,
    title:'见导师',
    meeting:' 四川省成都市武侯区',
    date:' 2020.11.17  14:21',
    description:'股东商量好出资比例，需要在公司章程中载明，是具法律效力股东商量好出资比例，是具有法律效力法律力股东商量好出资比例。' 
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
    let newState = Number(t.currentTarget.dataset.state),
    oldState = this.data.status;
  if (newState !== oldState) {
    this.setData({
      status: newState
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