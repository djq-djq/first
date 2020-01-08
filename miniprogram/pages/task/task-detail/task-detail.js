var tasksData=require('../../../data/task-data.js')
Page({

  /**
   * 页面的初始数据
   */
   data: {
    status:'',//任务状态
    weekWorkhour:0,//本周工作量
    finishrate:0,//任务完成比
    report:'',//周报内容
    selectArray: [{
      "id": "10",
      "text": "进行中"
    }, {
      "id": "21",
      "text": "已完成"
    }]
  },

  
  getStatus: function (e) {
    this.setData({
      status:e.detail.value
    })
    console.log(e.detail)
  },

   //input输入框
   weekWorkHourInput: function (e) {
    this.setData({
      weekWorkhour: e.detail.value
    })
  },

  finishRateInput: function (e) {
    this.setData({
      finishrate: e.detail.value
    })
  },

  reportInput: function (e) {
    this.setData({
      report: e.detail.value
    })
  },

   //上传文件
   upLoadAction:function(event){
    wx.chooseMessageFile({
      count:1,
      type:'file',
      success(res){
        const tempFilePaths=res.tempFilePaths
        console.log('选择',res)
      }
    })
  },


  reportSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  /**
   * 生命周期函数--监听页面加载
   */
   onLoad: function (options) {
    var taskId = options.id;
    var taskData = tasksData.taskList[taskId];
    this.setData({
      taskData:taskData
    })

    
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