const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const callPhoneF = (telNumber='4000005177')=>{
  wx.makePhoneCall({
    phoneNumber: telNumber //仅为示例，并非真实的电话号码
  })
}

const toRegisterD =()=>{
  wx.showModal({
    title: '提示',
    content: '你还没有注册，快去注册吧！',
    confirmColor: '#FF5D5B',
    confirmText: '去注册',
    success(res) {
      if (res.confirm) {
        wx.navigateTo({
          url: '../../tabar/login/login',
        })
      } else if (res.cancel) {
        wx.switchTab({
          url: '../../tabar/home/index',
        })
      }
    }
  })
}
const loadingIs = () =>{
  wx.showLoading({
    title: '正在加载中',
    mask: true
  })
  setTimeout(function () {
    wx.hideLoading()
  }, 2000)
}
 
module.exports = {
  formatTime,
  callPhoneF,
  toRegisterD,
  loadingIs,
   
}
