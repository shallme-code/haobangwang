// components/commentcard/index.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true
  },
  properties: {
    headUrl:{
      type:String,
      value:'../../static/tabbar/head.png'
    },
    name:{
      type:String,
      value:'匿名用户'
    }, 
    score:{
      type:Number,
      value:5
    }, 
    date:{
      type:String,
      value:''
    }, 
    comment:{
      type:String,
      value:' '
    },
    isvip:{
      type:Boolean,
      value:false
    },
    vipicon:{
      type:String,
      value:'../../static/tabbar/vip.png'
    },
    margintop:{
      type:Number,
      value:''
    }   
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
