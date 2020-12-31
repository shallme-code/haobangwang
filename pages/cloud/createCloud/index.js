// pages/cloud/createCloud/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    basicsList: [{
      icon: 'edit',
      name: '填写信息'
    }, {
      icon: 'assistant',
      name: '选择助理'
    }, {
      icon: 'expert',
      name: '选择专家'
    }, {
      icon: 'checkround',
      name: '完成创建'
    }, ],
    basics: 2,  
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
    checkIndex:'',
    expert: [
    {
      title:'财务专家',
      show:0,
      checkId:'',
    },{
      title:'行政专家',
      show:0,
      checkId:'',
    },{
      title:'法务专家',
      show:0,
      checkId:'',
    },{
      title:'人事专家',
      show:0,
      checkId:'',
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
  numSteps() {
    this.setData({
      num: this.data.num == this.data.numList.length - 1 ? 0 : this.data.num + 1
    })
  },
  basicsSteps(e) { 
    this.setData({
      basics: this.data.basics == this.data.basicsList.length - 1 ? 0 : this.data.basics + 1
    })
  },
  assistantChoose(e){
    let curIndex=Number(e.currentTarget.dataset.index);
    this.setData({
      checkIndex: curIndex
    })
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