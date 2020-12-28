// components/option/index.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true
  },
  properties: {
    iconsrc:{
      type:String,
      value:''
    },
    title:{
      type:'string',
      value:''
    },
    rightTitle:{
      type:'string',
      value:''
    },
    isRigntIcon:{
      type:Boolean,
      value:true
    },
    titleSize:{
      type:Number,
      value:26
    },
    titleColor:{
      type:String,
      value:'#ffffff'  
    },
    titleWeight:{
      type:String,
      value:'400'
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
