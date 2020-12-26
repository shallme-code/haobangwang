//index.js
//获取应用实例
const app = getApp()
// const throttle = app.throttle
// const debounce = app.debounce
// const {demoRequest,demoRequest2} =require('../../../api/demo')
const {
  throttle
} = require('../../../utils/throttleDebounce')
const {
  baseURLImg
} = require('../../../utils/request')
const {
  articleNews,
  videoList,
  expertListM
} = require('../../../api/list')
//  是否需要登录
const {
  loginGradeIs,
  DimensionpIndex
} = require('../../../api/requestYcx')

const {
  fourStage,
  fourStageNumber,
  sumbitDtStage
} = require('../../../api/lifeCycle')

const {
  CycleGet,
  CycleGetList
} = require('../../../api/tabar')
const {
  callPhoneF,
  loadingIs
} = require('../../../utils/util')
Page({
  data: {
    background:[{
      url:'../../../static/test/banner.png'
    },{
      url:'../../../static/test/banner2.jpg'
    }],
    guidFunc:[{
      icon:"../../../static/tabbar/clocompany.png",
      title:'云端企业',
      isDot:false
    },{
      icon:"../../../static/tabbar/dialog.png",
      title:'对话',
      isDot:true
    }],
    commend:[{
      name:'问会计',
      price:299,
      title:'会计师文字、电话咨询',
      merberPrice:0
    },{
      name:'见会计',
      price:599,
      title:'会计师文字、电话咨询',
      merberPrice:0
    },{
      name:'问会计',
      price:399,
      title:'会计师文字、电话咨询',
      merberPrice:0
    },{
      name:'问会计',
      price:800,
      title:'会计师文字、电话咨询',
      merberPrice:5
    },{
      name:'问会计',
      price:299,
      title:'会计师文字、电话咨询',
      merberPrice:5
    },{
      name:'问会计',
      price:'可议价',
      title:'会计师文字、电话咨询',
      merberPrice:8,
     }],
     ad:[{
       url:'../../../static/test/banner1.png'
     }],
     benefits:[{
       name:'限时优惠',
       title:'专项服务限时促销',
       icon:'../../../static/tabbar/gift.png',
       bgcolor:'#FAE8CE'
     },{
      name:'专项服务',
      title:'更多服务供你选择',
      icon:'../../../static/tabbar/spacial.png',
      bgcolor:'#E4F1FF'
     }],
     thinknews:[{
       img:'../../../static/test/new1.png',
       date:'2020-12-18',
       title:'2020缴税需要注意的事项！',
       abstract:'测算一下公司2020年应纳税所得额，重点关注可能导致税负巨大波动的临界点100万、300万所得，企业应采取较为谨慎的措施应对。注意是应纳税所得额，而非利润总额。',
       times:23
     },{
      img:'../../../static/test/new2.png',
      date:'2020-12-18',
      title:'2020缴税需要注意的事项！',
      abstract:'测算一下公司2020年应纳税所得额，重点关注可能导致税负巨大波动的临界点100万、300万所得，企业应采取较为谨慎的措施应对。注意是应纳税所得额，而非利润总额。',
      times:11
    },{
      img:'../../../static/test/new3.png',
      date:'2020-12-18',
      title:'2020缴税需要注意的事项！',
      abstract:'测算一下公司2020年应纳税所得额，重点关注可能导致税负巨大波动的临界点100万、300万所得，企业应采取较为谨慎的措施应对。注意是应纳税所得额，而非利润总额。',
      times:22
    }

    ],
    isTrueNext: false, // 下一步是禁用
    chooseId: null, // 选择Id
    idToLife: null, //提交ID
    isModalShow: false, // 模态框是否显示
    TabCur: 0,
    scrollLeft: 0,
    currentData: 0, // http://47.92.82.192:8093
    token: "", // token 是否存在
    imgIp: baseURLImg,
    tenLink: [{
        img: '1',
        url: '../../product/ordersList/ordersList',
        text: '我的订单'
      },
      {
        img: '2',
        url: '../../tenMore/myContract/myContract',
        text: '我的合同'
      },
      {
        img: '3',
        url: '../../tenMore/myReport/home/home',
        text: '我的报告'
      },
      {
        img: '4',
        url: '../../tenMore/myClass/home/home',
        text: '我的课程'
      },

      {
        img: '5',
        url: '../../tenMore/expertDiagnosis5/expertDiagnosis5',
        text: '专家诊断'
      }, {
        img: '6',
        url: '../../tenMore/helpCenter/home/home',
        text: '帮助中心'
      }, {
        img: '7',
        url: '',
        text: '在线客服'
      }, {
        img: '8',
        url: '../../tenMore/companyCard/companyCard',
        text: '企业名片'
      }, {
        img: '9',
        url: '../../personalCenter/cardTicketCenter/homeCtc/homeCtc',
        text: '卡券中心'
      }, {
        img: '10',
        url: '../../tenMore/moreMore/moreMore',
        text: '更多'
      }
    ],
    imgAv: 'http://47.92.82.192:8093/static/index/av.png',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    newsList: [],
    videoListD: [],
    fourStageM: [], // 4个阶段
    // 四个节点数组
    openDoor: [],
    eagleTwo: [],
    flyThree: [],
    fourDevelopment: [],
    isShow: false,
    openDoorLightA: false,
    flyThreeLightA: false,
    eagleTwoLightA: false,
    fourDevelopmentLightA: false,

  },
  // 企业天眼跳转页面
  toMoneyThree: throttle(function (e) {
    if (this.data.userInfo.grade > 0) {
      wx.navigateTo({
        url: '../../product/topicCompany/topicCompanyThree/topicCompanyThree' + '?id=' + e.currentTarget.dataset.id,
      })
    } else {
      wx.showToast({
        title: '请先注册哦',
      })
    }
  }, 3000),
  // 去性能优化页面
  toMoneyB: throttle(function () {
    if (this.data.userInfo.grade > 0) {
      CycleGet().then(res => {
        CycleGetList({
          cyc_id: res.data.data[1].id
        }).then(res => {
          let idTo = 7
          if (res.data.data.data[0].id) {
            idTo = res.data.data.data[0].id
          }
          wx.navigateTo({
            url: '../../product/topicCompany/topicCompanyOne/topicCompanyOne' + '?id=' + idTo,
          })
        })
      })
    } else {
      wx.showToast({
        title: '请先注册哦',
      })
    }
  }, 3000),

  onLoad: function () {
    // console.log("onLoad更新");
    loadingIs()
    //判断是用户是否绑定了
    // if (app.globalData.token) {
    //   this.setData({
    //     bindDisabled: true
    //   });
    //   this.loginGradeIsL(app.globalData.token) // 是否需要登录
    //   this.DimensionpIndexL(app.globalData.token) // 天眼查
    //   this.articleNewsList(app.globalData.token)
    //   this.videoListList(app.globalData.token)
    //   this.expertListList(app.globalData.token)
    //   this.fourStageList(app.globalData.token)
    //   this.fourStageNumber(1, app.globalData.token) // 生命周期节点ID
    //   this.fourStageNumber(2, app.globalData.token) // 生命周期节点ID
    //   this.fourStageNumber(3, app.globalData.token) // 生命周期节点ID
    //   this.fourStageNumber(4, app.globalData.token) // 生命周期节点ID
    // } else {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.tokenReadyCallback = res => {
    //     wx.setStorage({
    //       data: res.data.o.token,
    //       key: 'x-auth-token',
    //     })
    //     if (res != '') {
    //       this.setData({
    //         bindDisabled: true
    //       });
    //       this.loginGradeIsL(res.data.o.token) // 是否需要登录
    //       this.DimensionpIndexL(res.data.o.token)
    //       this.articleNewsList(res.data.o.token)
    //       this.videoListList(res.data.o.token)
    //       this.expertListList(res.data.o.token)
    //       this.fourStageList(res.data.o.token)
    //       this.fourStageNumber(1, res.data.o.token) // 生命周期节点ID
    //       this.fourStageNumber(2, res.data.o.token) // 生命周期节点ID
    //       this.fourStageNumber(3, res.data.o.token) // 生命周期节点ID
    //       this.fourStageNumber(4, res.data.o.token) // 生命周期节点ID
    //     }
    //   }
    // }
  },
  // 已登录授权信息
  loginGradeIsL: function (token) {
    loginGradeIs('', token).then(res => {
      wx.setStorageSync('userInfo', res.data.data)
      let stage = res.data.data.stage
      // console.log(res);
      if (stage == 0) {
        this.setData({
          isModalShow: true,
        })
      }
      this.setData({
        grade: res.data.data.grade,
        userInfo: res.data.data
      })
      wx.setStorage({
        data: res.data.data,
        key: 'userInfo',
      })

    })
  },
  //  天眼查
  DimensionpIndexL: function (token) {
    DimensionpIndex('', token).then(res => {
      // console.log(res.data.data);
      this.setData({
        fourDimen: res.data.data
      })
    })

  },

  //  文章列表页
  articleNewsList: function (token) {
    articleNews({
      page: 1,
      page_number: 10
    }, token).then(res => {
      this.setData({
        newsList: res.data.data.lists
      })
    }).catch(err => {
      console.log(err)
    })
  },
  // 视频播放列表页
  videoListList(token) {
    videoList({
      page: 1,
      page_number: 10
    }, token).then(res => {
      // console.log(res);
      this.setData({
        videoListD: res.data.data.lists
      })
    }).catch(err => {
      console.log(err)
    })
  },
  // 专家列表
  expertListList(token) {
    expertListM({
      page: 1,
      page_number: 3
    }, token).then(res => {
      this.setData({
        expertListD: res.data.data.lists
      })
    }).catch(err => {
      console.log(err)
    })
  },

  //  生命周期阶段
  fourStageList(token) {
    fourStage("", token).then(res => {
      // console.log(res);
      this.setData({
        fourStageM: res.data.data
      })
    })
  },
  fourStageNumber(stageId, token) {
    fourStageNumber({
      stage_id: stageId
    }, token).then(res => {
      // console.log(res);
      let lightAllUp = res.data.data
      switch (stageId) {
        case 1:
          this.setData({
            openDoor: lightAllUp
          })
          let allTatel = 0
          lightAllUp.forEach(el => {
            if (el.type == 1) {
              allTatel += 1
            }
          });
          if (allTatel == lightAllUp.length) {
            this.setData({
              openDoorLightA: true
            })
          }
          break;
        case 2:
          this.setData({
            flyThree: lightAllUp
          })
          let allTatelTwo = 0
          lightAllUp.forEach(el => {
            if (el.type == 1) {
              allTatelTwo += 1
            }
          });
          if (allTatelTwo == lightAllUp.length) {
            this.setData({
              flyThreeLightA: true
            })
          }
          break;
        case 3:
          this.setData({
            eagleTwo: lightAllUp
          })
          let allTatelThree = 0
          lightAllUp.forEach(el => {
            if (el.type == 1) {
              allTatelThree += 1
            }
          });
          if (allTatelThree == lightAllUp.length) {
            this.setData({
              eagleTwoLightA: true
            })
          }
          break;
        case 4:
          this.setData({
            fourDevelopment: lightAllUp
          })
          let allTatelFour = 0
          lightAllUp.forEach(el => {
            if (el.type == 1) {
              allTatelFour += 1
            }
          });
          if (allTatelFour == lightAllUp.length) {
            this.setData({
              fourDevelopmentLightA: true
            })
          }
          break;
      }
    }).catch(err => {
      console.log(err)
    })
  },
  // 点击生命周期节点详情
  toDetailsF(e) {
    let idMe = e.currentTarget.dataset.id
    let idName
    switch (idMe) {
      case 1:
        idName = this.data.fourStageM[0].title
        break;
      case 2:
        idName = this.data.fourStageM[1].title
        break;
      case 3:
        idName = this.data.fourStageM[2].title
        break;
      case 4:
        idName = this.data.fourStageM[3].title
        break;
    }
    if (this.data.userInfo.grade > 0) {
      if (idMe > this.data.userInfo.stage) {
        wx.showToast({
          title: '公司年限还没到哦',
          icon: 'none'
        })
      } else {
        wx.navigateTo({
          url: '../../product/fourStageDetails/fourStageDetails' + '?id=' + idMe + '&name=' + idName,
        })
      }
    } else {
      wx.showToast({
        title: '请先注册',
      })
    }
    //  选择id去详情带上参数

  },
  //  去我的列表页
  toListAll() {
    // console.log(this.data.currentData);
    if (this.data.userInfo.mobile) {
      switch (this.data.currentData) {
        case 0:
          wx.navigateTo({
            url: '../../newsVideoMore/videoList/VideoHome',
          })
          break;
        case 1:
          wx.navigateTo({
            url: '../../newsVideoMore/newsList/newsList?id=2',
          })
          break;
        case 2:
          wx.navigateTo({
            url: '../../newsVideoMore/experts/expersList',
          })
          break;
      }
    } else {
      wx.showToast({
        title: '请先注册哦',
      })
    }
  },

  onShow: function () {
    //  如果token存在再调用一次请求用户信息接口
    // if (wx.getStorageSync('x-auth-token')) {
    //   // console.log("onShow更新");
    //   this.loginGradeIsL()
    //   this.fourStageNumber(1)
    //   this.fourStageNumber(2)
    //   this.fourStageNumber(3)
    //   this.fourStageNumber(4)
    //   this.fourStageList()
    // }

    //判断是用户是否绑定了
    if (app.globalData.token) {
      this.setData({
        bindDisabled: true
      });
      this.loginGradeIsL(app.globalData.token) // 是否需要登录
      this.DimensionpIndexL(app.globalData.token) // 天眼查
      this.articleNewsList(app.globalData.token)
      this.videoListList(app.globalData.token)
      this.expertListList(app.globalData.token)
      this.fourStageList(app.globalData.token)
      this.fourStageNumber(1, app.globalData.token) // 生命周期节点ID
      this.fourStageNumber(2, app.globalData.token) // 生命周期节点ID
      this.fourStageNumber(3, app.globalData.token) // 生命周期节点ID
      this.fourStageNumber(4, app.globalData.token) // 生命周期节点ID
    } else {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.tokenReadyCallback = res => {
        wx.setStorage({
          data: res.data.o.token,
          key: 'x-auth-token',
        })
        if (res != '') {
          this.setData({
            bindDisabled: true
          });
          this.loginGradeIsL(res.data.o.token) // 是否需要登录
          this.DimensionpIndexL(res.data.o.token)
          this.articleNewsList(res.data.o.token)
          this.videoListList(res.data.o.token)
          this.expertListList(res.data.o.token)
          this.fourStageList(res.data.o.token)
          this.fourStageNumber(1, res.data.o.token) // 生命周期节点ID
          this.fourStageNumber(2, res.data.o.token) // 生命周期节点ID
          this.fourStageNumber(3, res.data.o.token) // 生命周期节点ID
          this.fourStageNumber(4, res.data.o.token) // 生命周期节点ID
        }
      }
    }

  },
  //  节流测试
  // clickDemo: throttle( (e) =>{
  //   console.log(e)
  // }),
  clickDemoD() {
    articleNews({
      page: 1,
      page_number: 10
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err)
    })
  },
  toNewUrl: throttle(function (e) {
    if (this.data.userInfo.grade == 0 || !this.data.userInfo.grade) {
      wx.showToast({
        title: '请先注册哦',
        icon: 'none'
      })
    } else {
      if (e.currentTarget.dataset.url) {
        // console.log(11111);
        wx.navigateTo({
          url: e.currentTarget.dataset.url,
        })
      } else {
        //  console.log(111);
        callPhoneF()

      }
    }
  }, 3000),
  // 去我的卡券
  // toMyticket() {
  //   if (this.data.userInfo.grade === 0) {
  //     wx.showToast({
  //       title: '请先注册',
  //       icon: 'none'
  //     })
  //   } else {
  //     //  先判断登录没有再跳转
  //     wx.navigateTo({
  //       url: '../../personalCenter/cardTicketCenter/myTicket/myTicket',
  //     })
  //   }

  // },
  //获取当前滑块的index
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;
    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },
  //  开门大吉切换
  tabSelect(e) {
    // console.log(e.currentTarget.dataset.id)
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id) * 260
    })
  },
  bindchangeOne(e) {
    const that = this;
    that.setData({
      TabCur: e.detail.current,
      scrollLeft: (e.detail.current) * 260
    })
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 模态框
  chooseOne(e) {

    this.setData({
      chooseId: e.currentTarget.dataset.index,
      idToLife: e.currentTarget.dataset.id,
      isTrueNext: true
    })
  },



  //  提交参数
  sumbitTo() {
    let idToLife = this.data.idToLife
    // console.log(idToLife);
    if (idToLife) {
      sumbitDtStage({
        stage_id: this.data.idToLife
      }).then(res => {
        this.setData({
          isModalShow: false
        })
        wx.showToast({
          title: res.data.msg,
        })
      }).catch(err => {
        console.log(err);

      })
    } else {
      wx.showToast({
        title: '请先选择您的企业阶段',
        icon: 'none'
      })
    }
  },



  // getUserInfo: function (e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})