// components/titletag/index.js
const app=getApp()
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true
  },
  properties: {
     title:{
       type:String,
       value:''
     },
     rightMore:{
       type:String,
       value:''
     },
     isRightmore:{
       type:Boolean,
       value:false
     },
     isRightBtn:{
       type:Boolean,
       value:false
     },
     subtitle:{
       type:String,
       value:''
     },
     price:{
       type:Number,
       value:''
     },
     btnText:{
      type:String,
      value:''
     },
     titleColor:{
       type:String,
       value:""
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
