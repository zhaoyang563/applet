// pages/scenery/scenery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:'图片测试',
    dIndex:0,
    sArray:[
      {"title":"太白山喷泉","content":"这个喷泉位于陕西省宝鸡市眉县太白山脚下，喷泉的形状是一个大圆，有“太白之眼”之称，这个喷泉不仅包含水元素，而且还包含了火元素，在“太白之眼”上不仅可以喷水，而且还可以喷火，改变了人们以往对喷泉的认知，是一个非常有创意的改变和创新。"},
      { "title": "青海湖日出", "content": "这个喷泉位于陕西省宝鸡市眉县太白山脚下，喷泉的形状是一个大圆，有“太白之眼”之称，这个喷泉不仅包含水元素，而且还包含了火元素，在“太白之眼”上不仅可以喷水，而且还可以喷火，改变了人们以往对喷泉的认知，是一个非常有创意的改变和创新。" },
      { "title": "青海湖边", "content": "这个喷泉位于陕西省宝鸡市眉县太白山脚下，喷泉的形状是一个大圆，有“太白之眼”之称，这个喷泉不仅包含水元素，而且还包含了火元素，在“太白之眼”上不仅可以喷水，而且还可以喷火，改变了人们以往对喷泉的认知，是一个非常有创意的改变和创新。" }
    ]
  },
  /** 事件处理函数 */
  textShow: function(e) {
    let index = e.target.dataset.index;
    this.setData({
      dIndex: index
    })
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