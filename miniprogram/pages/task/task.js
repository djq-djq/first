var taskData=require('../../data/task-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    task_key:[],
    containerShow: true,
    searchPanelShow: false,
  },

  onClick(event) {
   
  },

  //搜索
  onSearch(){
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
  taskTap:function(event){
    var taskId=event.currentTarget.dataset.taskid//注意此处taskid要小写！
    //console.log(taskId);
    wx.navigateTo({
      url:"task-detail/task-detail?id=" + taskId//相对路径
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取服务器内的数据
    //获取数据文件task-data.js
    this.setData({
      task_key: taskData.taskList
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