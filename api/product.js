const {
  request,
  baseURL
} = require('../utils/request')

// 通讯录 查询在服项目的服务团队成员
const teamAddressBook = (data) => request('POST', '/app/service/instance/listByInstanceId', data)
// 通讯录 查询会员所有的服务团队成员
const allAddressBook = (data) => request('POST', '/app/service/instance/listByMemberId', data)
// 通讯录 只查询在服项目的名称及ID，用于通讯录显示使用
const onlyAddressBook = (data) => request('POST', '/app/service/instance/listNameByMemberId', data)

// 产品详情 
const productDetailA = (data) => request('POST', '/app/product/getByProductId', data)

// 产品详情城市选择 
const productDetailArea = (data) => request('POST', '/app/product/getPriceAttrByProductId', data)

// 提交到购物车POST
const sumbitCart = (data) => request('POST', '/app/cart/addProductToCart', data)

// 获取产品价格
const getPricePro = (data) => request('POST', '/app/product/getPriceByProductId', data)

// 购物车列表 
const listProCart = (data) => request('POST', '/app/cart/listProductByCart', data)

// 购物车列表移除   
const listProCartRemove = (data) => request('POST', '/app/cart/delProductFromCart', data)


// 订单接口   创建订单
const orderAdd = (data) => request('POST', '/app/order/add', data)

// 获取订单列表
const orderList = (data) => request('POST', '/app/order/list', data)


// 我的订单详情
const myOrderDetails = (data) => request('POST', '/app/order/get', data)

// 我的订单详情  获取订单下的产品实例列表
const myOrderDetailsProduct = (data) => request('POST', '/app/order/listOrderProductInstance', data)

// 获取订单下的产品实例列表
const orderListOrderProductInstance = (data) => request('POST', '/app/order/listOrderProductInstance', data)

// 订单里的去支付
const orderToPay = (data) => request('POST', '/app/order/toPay', data)


// 卡券分类  卡券中心
const cardCategoryType = (data) => request('POST', '/member?s=Member.Card.CardCategory', data)

// 卡券分类   我的卡券
const myCardCategory = (data) => request('POST', '/member?s=Member.Card.MyCard', data)

// 卡券分类   卡券列表
const cardCategoryList = (data) => request('POST', '/member?s=Member.Card.CardList', data)

// 卡券分类   会员权益卡券领券
const consumerVip = (data) => request('POST', '/member?s=Member.Card.Consumer', data)

// 优惠券使用
const useDVip = (data) => request('POST', '/member?s=Member.Card.Carduse', data)

// 卡券中心过期 
const cardedExpire = (data) => request('POST', '/member?s=Member.Card.MyCardexpire', data)

// 卡券中心已使用 
const cardedHave = (data) => request('POST', '/member?s=Member.Card.MyCarduse', data)

module.exports = {
  productDetailA,
  productDetailArea,
  sumbitCart,
  getPricePro,
  listProCart,
  listProCartRemove,
  orderAdd,
  orderList,
  orderListOrderProductInstance,
  cardCategoryType,
  myCardCategory,
  cardCategoryList,
  consumerVip,
  cardedExpire,
  cardedHave,
  teamAddressBook,
  allAddressBook,
  onlyAddressBook,
  useDVip,
  myOrderDetails,
  myOrderDetailsProduct,
  orderToPay
}