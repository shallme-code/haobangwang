// pages/tabbar/knowledge/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state: 1,
    thinknews: [{
        img: '../../../static/test/new1.png',
        date: '2020-12-18',
        title: '2020缴税需要注意的事项！',
        abstract: '测算一下公司2020年应纳税所得额，重点关注可能导致税负巨大波动的临界点100万、300万所得，企业应采取较为谨慎的措施应对。注意是应纳税所得额，而非利润总额。',
        times: 23
      }, {
        img: '../../../static/test/new2.png',
        date: '2020-12-18',
        title: '2020缴税需要注意的事项！',
        abstract: '测算一下公司2020年应纳税所得额，重点关注可能导致税负巨大波动的临界点100万、300万所得，企业应采取较为谨慎的措施应对。注意是应纳税所得额，而非利润总额。',
        times: 11
      }, {
        img: '../../../static/test/new3.png',
        date: '2020-12-18',
        title: '2020缴税需要注意的事项！',
        abstract: '测算一下公司2020年应纳税所得额，重点关注可能导致税负巨大波动的临界点100万、300万所得，企业应采取较为谨慎的措施应对。注意是应纳税所得额，而非利润总额。',
        times: 22
      },
      {
        img: '../../../static/test/new1.png',
        date: '2020-12-18',
        title: '2020缴税需要注意的事项！',
        abstract: '测算一下公司2020年应纳税所得额，重点关注可能导致税负巨大波动的临界点100万、300万所得，企业应采取较为谨慎的措施应对。注意是应纳税所得额，而非利润总额。',
        times: 23
      },
      {
        img: '../../../static/test/new1.png',
        date: '2020-12-18',
        title: '2020缴税需要注意的事项！',
        abstract: '测算一下公司2020年应纳税所得额，重点关注可能导致税负巨大波动的临界点100万、300万所得，企业应采取较为谨慎的措施应对。注意是应纳税所得额，而非利润总额。',
        times: 23
      },
      {
        img: '../../../static/test/new1.png',
        date: '2020-12-18',
        title: '2020缴税需要注意的事项！',
        abstract: '测算一下公司2020年应纳税所得额，重点关注可能导致税负巨大波动的临界点100万、300万所得，企业应采取较为谨慎的措施应对。注意是应纳税所得额，而非利润总额。',
        times: 23
      },
      {
        img: '../../../static/test/new1.png',
        date: '2020-12-18',
        title: '2020缴税需要注意的事项！',
        abstract: '测算一下公司2020年应纳税所得额，重点关注可能导致税负巨大波动的临界点100万、300万所得，企业应采取较为谨慎的措施应对。注意是应纳税所得额，而非利润总额。',
        times: 23
      },
      {
        img: '../../../static/test/new1.png',
        date: '2020-12-18',
        title: '2020缴税需要注意的事项！',
        abstract: '测算一下公司2020年应纳税所得额，重点关注可能导致税负巨大波动的临界点100万、300万所得，企业应采取较为谨慎的措施应对。注意是应纳税所得额，而非利润总额。',
        times: 23
      },
      {
        img: '../../../static/test/new1.png',
        date: '2020-12-18',
        title: '2020缴税需要注意的事项！',
        abstract: '测算一下公司2020年应纳税所得额，重点关注可能导致税负巨大波动的临界点100万、300万所得，企业应采取较为谨慎的措施应对。注意是应纳税所得额，而非利润总额。',
        times: 23
      },
      {
        img: '../../../static/test/new1.png',
        date: '2020-12-18',
        title: '2020缴税需要注意的事项！',
        abstract: '测算一下公司2020年应纳税所得额，重点关注可能导致税负巨大波动的临界点100万、300万所得，企业应采取较为谨慎的措施应对。注意是应纳税所得额，而非利润总额。',
        times: 23
      },
    ],
    questions:[{
      title:'如何选择公司（企业）的注册类型',
      content:'1A如何选择公司（企业）的注册类型如何选择公司2的注册类型如何选择公司（企业）的册类型的注册类型如何选择公司的注册类型如何选择公司。'
    },{
      title:'如何选择公司（企业）的注册类型',
      content:'1A如何选择公司（企业）的注册类型如何选择公司2的注册类型如何选择公司（企业）的册类型的注册类型如何选择公司的注册类型如何选择公司。'
    },{
      title:'如何选择公司（企业）的注册类型',
      content:'1A如何选择公司（企业）的注册类型如何选择公司2的注册类型如何选择公司（企业）的册类型的注册类型如何选择公司的注册类型如何选择公司。'
    },{
      title:'如何选择公司（企业）的注册类型',
      content:'1A如何选择公司（企业）的注册类型如何选择公司2的注册类型如何选择公司（企业）的册类型的注册类型如何选择公司的注册类型如何选择公司。'
    },{
      title:'如何选择公司（企业）的注册类型',
      content:'1A如何选择公司（企业）的注册类型如何选择公司2的注册类型如何选择公司（企业）的册类型的注册类型如何选择公司的注册类型如何选择公司。'
    },],
    answering: [{
      id: 1,
      title: '工商服务',
      content: ['公司名称', '注册地址', '注册地址', '个人所得税']
    }, {
      id: 2,
      title: '财税知识',
      content: ['个人所得税', '公司名称', '注册地址', '注册地址']
    }, {
      id: 3,
      title: '工商服务',
      content: ['公司名称', '注册地址', '注册地址', '个人所得税']
    }],
    answeringChild: [],
    answerFaId: -1,
    answerChId: -1,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let answer = this.data.answering;

    let allContent = [];
    for (let a in answer) {
      allContent = allContent.concat(answer[a].content);
    }
    this.setData({
      answeringChild: allContent,
      answerFaId: -1,
      answerChId: -1
    })
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
  changeState: function (t) {
    let newState = Number(t.currentTarget.dataset.state),
      oldState = this.data.state;
    if (newState !== oldState) {
      this.setData({
        state: newState
      })
    }
  },
  selectFaAnswer: function (t) {
    let newId = Number(t.currentTarget.dataset.index),
      oldId = this.data.answerFaId;

    if (newId === oldId) {
      return;
    }
    let answer = this.data.answering;
    if (newId === -1) {
      let allContent = [];
      for (let a in answer) {
        allContent = allContent.concat(answer[a].content);
      }
      this.setData({
        answeringChild: allContent,
        answerFaId: -1,
        answerChId: -1
      })
    }
    if (!answer.length > 0) {
      return;
    }
    for (let a in answer) {
      if (answer[a].id === newId) {
        this.setData({
          answeringChild: answer[a].content,
          answerFaId: answer[a].id,
          answerChId: -1
        })
        return;
      }
    }
  },
  selectChAnswer: function (t) {
    let newId = Number(t.currentTarget.dataset.index),
      oldId = this.data.answerChId;
    console.log(newId);
    if (newId === oldId) {
      return;
    }
    if (newId === -1) {
      this.setData({
        answerChId: -1
      })
    }
    let answeringChild = this.data.answeringChild;
    if (!answeringChild.length > 0) {
      return;
    }
    console.log(oldId)
    for (let a in answeringChild) { 
      if (Number(a) === newId) {
        this.setData({
          answerChId: Number(a)
        })
        return;
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