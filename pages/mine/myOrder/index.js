// pages/mine/myOrder/index.js
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
    title:'待服务'
  },{
    id:2,
    title:'服务中'
  },{
    id:3,
    title:'已完成'
  },{
    id:4,
    title:'已终止'
  }],
  status:0,
  orderInfo:[{
    orderId:30,
    status:2,
    type:1,
    thumb:'../../../static/test/05.jpg',
    orderNo:1595545215451545,
    orderName:'电话咨询',
    info:['服务会计：张明晓','服务内容：1小时电话咨询  12小时图文咨询','到期时间：2020-10-10  14:11'] ,
    payTime:'2020-10-10',
    pay:28,
    comment:{}
  },{
    orderId:31,
    status:1,
    type:1,
    thumb:'../../../static/test/05.jpg',
    orderNo:1595545215451545,
    orderName:'电话咨询',
    info:['合同名称：某某科技公司员工保密合同','合同主项：乙方','附件名称：员工保密合同.doc'] ,
    payTime:'2020-10-10',
    pay:28,
    comment:{}
  },{
    orderId:33,
    status:3,
    type:1,
    thumb:'../../../static/test/05.jpg',
    orderNo:1595545215451545,
    orderName:'电话咨询',
    info:['服务会计：张明晓','见面时间：2020-10-10  14:11','见面地点：成都市武侯区台上科技大厦'] ,
    payTime:'2020-10-10',
    pay:28,
    showComt:false,
    comment:{
      score:5,
      remark:'国门打开后很多会计人热衷于考ACCA等洋证。目前，市场上对会计人员最认可的是注册会计师证书。',
      tag:['服务周到','态度良好','专业性强']
    }
  },
  {
    orderId:34,
    status:3,
    type:1,
    thumb:'../../../static/test/05.jpg',
    orderNo:1595545215451545,
    orderName:'电话咨询',
    info:['服务会计：张明晓','见面时间：2020-10-10  14:11','见面地点：成都市武侯区台上科技大厦'] ,
    payTime:'2020-10-10',
    pay:28,
    showComt:false,
    comment:{
      score:5,
      remark:'国门打开后很多会计人热衷于考ACCA等洋证。目前，市场上对会计人员最认可的是注册会计师证书。',
      tag:['服务周到','态度良好','专业性强']
    }
  },]
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
  showComment:function(t){
    let showid = Number(t.currentTarget.dataset.id),
    orders = this.data.orderInfo,_this=this;
    for(let o in orders){
       if(orders[o].orderId===showid){ 
        orders[o].showComt=!orders[o].showComt; 
        _this.setData({
          orderInfo:orders
        });
      }
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