// miniprogram/pages/add/addPro/addPro.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      proName: '',
      pleader:'',
      pstartDate: '2019-09-01',
      pendDate: '2019-09-01',
  },

  //input输入框
  bindproNameInput: function (e) {
    this.setData({
      proName: e.detail.value
    })
  },

    bindpleaderInput: function (e) {
    this.setData({
      pleader: e.detail.value
    })
  },

  //日期选择器
   bindpstartDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      pstartDate: e.detail.value
    })
  },

   bindpendDateChange: function (e) {
    console.log('pickerend发送选择改变，携带值为', e.detail.value)
    this.setData({
      pendDate: e.detail.value
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

  //下载模板
  downloadfile(e){
    var url = e.currentTarget.dataset.url;//？
    //下载文件，生成临时地址
    wx.downloadFile({
      url: url, //服务器的url
      success(res) {
        // console.log(res)
        //保存到本地
        wx.saveFile({
          tempFilePath: res.tempFilePath,
          success: function (res) {
            const savedFilePath = res.savedFilePath;
            // 打开文件
            wx.openDocument({
              filePath: savedFilePath,
              success: function (res) {
                console.log('打开文档成功')
              },
            });
          },
          fail: function (err) {
            console.log('保存失败：', err)
          }
        });
      }
    })
  },


//提交表单数据
  formSubmit: function (e) {
    var that = this;
    var formData = e.detail.value; //获取表单所有input的值  
    wx.request({
      url: '',
      data: formData,
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res.data)
      }
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