// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [
      {
        iconPath:'../../image/location.png',
        id: 0,
        latitude: 34.2741,
        longitude: 107.74992,
        width:30,
        height:30,
        label: {
          content:'我在这里',
          color:'#00f',
          fontSize:20,
          // bgColor:"#000"
        }
      }
    ]
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