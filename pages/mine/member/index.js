// pages/mine/member/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommend: [{
        id: 1,
        title: '连续包年',
        totalPrice: 3600,
        permonth: 300
      }, {
        id: 2,
        title: '连续两年',
        totalPrice: 6000,
        permonth: 250
      }, {
        id: 3,
        title: '连续三年',
        totalPrice: 8000,
        permonth: 220
      },

    ],
    choose: '',
    benefits: [{
      id: 1,
      title: '云端企业 一键拥有专业云端团队',
      subtitle: '云端企业 助力经营',
      thumb: '../../../static/img/cloud.png',
      tag: ['团队在线','顾问在线','能力在线'],
      content: ['1 、一键可为企业建立1个云端企业事业部，配置1名云端企业行政助理，协助企业处理企业日常经营事项。',
        '2、大数据匹配，为企业提供5位云端顾问及运营专家，覆盖企业日常经营中业务、财务、税务、管理4大专业领域，包括财务、税务、法务、力等方面。',
        '3、精确筛选2000余位领域专业人士，10s快速响应，360°满足企业各类经营需求。'
      ]
    }, {
      id: 2,
      title: '会计/税务师在线咨询',
      subtitle: '随时随地 免费咨询',
      thumb: '../../../static/img/phone.png',
      tag: ['文字咨询','电话沟通','文字咨询','电话沟通','文字咨询','电话沟通'],
      content: ['1 、企业可在会员期内享有无限次/免费专家咨询。',
        '2、快速解决会员各类业财税管问题，10s快速响应，随时随地可咨询。',
        '3、会员支持自选专家咨询，及历史咨询过的专家再次咨询。',
        '4、保留所有咨询记录，方便一键随时回看。'
      ]
    },
    {
      id: 3,
      title: '专家1对1咨询',
      subtitle: '免费面谈 不限次数',
      thumb: '../../../static/img/interview.png',
      tag: ['在线视频','线下预约'],
      content: ['1 、企业可在会员期内享有无限次/免费专家面谈。',
        '2、企业可选择在线视频发起面谈，快速咨询及处理问题。',
        '3、企业可通过云端企业行政助理选择线下预约专家面谈（1工作日内完成预约）。'
      ]
    },
    {
      id:4,
      title: '合同审核',
      subtitle: '合同协议 免费审查',
      thumb: '../../../static/img/contract.png',
      tag: ['在线审核','风险评估','专业指导'],
      content: ['1 、企业可在会员期内享有无限次/免费合同审核。',
        '2、企业可随时上传合同，提出审核要求。',
        '3、系统依据合同内容自动派单，专家在线审核。',
        '4、专家提供专业意见及风险评估，4小时内完成审核。'
      ]
    },{
      id:5,
      title: '写文件等文书服务',
      subtitle: '文件撰写 会员享惠',
      thumb: '../../../static/img/file.png',
      tag: ['合同修改','风险评估','专业指导'],
      content: ['1 、企业可在会员期内享有购买撰写各类文件服务5折优惠。',
        '2、会员可依据自身文件撰写要求，购买更多会员专享套餐优惠，享受1-4折优惠。', 
      ]
    },{
      id:6,
      title: '专项服务/人才服务',
      subtitle: '专案服务 更多折扣',
      thumb: '../../../static/img/discount.png',
      tag: ['筹划诊断','规划计划','专兼职人才'],
      content: ['1 、企业可在会员期内进行财务规划/税务筹划/找兼职会计/找财务管理等服务，享受5-8折会员优惠。',
        '2、企业可通过云端企业行政助理进行专项代理托管服务，协助企业筛选专家、筛选服务商、磋商价格及监督专项服务进程等。', 
      ]
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
  changRecd: function (t) {
    let newState = Number(t.currentTarget.dataset.id),
      oldState = this.data.choose;
    if (newState !== oldState) {
      this.setData({
        choose: newState
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