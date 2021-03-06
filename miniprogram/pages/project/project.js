// miniprogram/pages/project/project.js
var proData=require('../../data/pro-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pro_key:[],
    containerShow: true,
    searchPanelShow: false,
  },

  onClick(event) {
   
  },

  //搜索
  onSearch() {
    this.setData({
      containerShow: false,
      searchPanelShow: true,
    })
  },

  onCancel() {
    this.setData({
      containerShow: true,
      searchPanelShow: false,
    })
  },

//页面跳转到详情
  proTap:function(event){
    var proId = event.currentTarget.dataset.proid
    //console.log(proId);
    wx.navigateTo({
      url: "pro-detail/pro-detail?id=" + proId
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     //获取服务器内的数据
    //获取数据文件pro-data.js
    this.setData({
      pro_key: proData.proList
      });
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