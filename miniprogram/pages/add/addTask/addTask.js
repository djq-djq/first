var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
   data: {
    taskName:'',
    status:'',
    step:'',
    taskSort:'',
    statusArray: [{
      "id": "10",
      "text": "进行中"
    }, {
      "id": "21",
      "text": "已完成"
    }],

    stepArray: [{
      "id": "10",
      "text": "需求阶段"
    }, {
      "id": "21",
      "text": "系统分析与设计阶段"
    },{
      "id": "32",
      "text": "设计阶段"
    },{
      "id": "43",
      "text": "实现阶段"
    },{
      "id": "54",
      "text": "组装测试阶段"
    },{
      "id": "65",
      "text": "配置项测试阶段"
    },{
      "id": "76",
      "text": "验收交付阶段"
    },{
      "id": "87",
      "text": "运行维护阶段"
    }],

    taskSortArray: [{
      "id": "10",
      "text": "工程活动"
    }, {
      "id": "21",
      "text": "测试活动"
    },{
      "id": "32",
      "text": "管理活动"
    },{
      "id": "43",
      "text": "质量活动"
    },{
      "id": "54",
      "text": "配置管理活动"
    },{
      "id": "65",
      "text": "测量活动"
    },{
      "id": "76",
      "text": "培训活动"
    },{
      "id": "87",
      "text": "外协供方活动"
    }],

    titles: [],
    cols: [],
    modelsData: [],
    id: 0,
    show: false,
    create: false,
    tables: [
    ['任务成员', '计划工作量']
    ],
    startDate: '2019-09-01',
    endDate: '2019-09-01',
    managerName:'',
  },


   //input输入框
   bindtaskNameInput: function (e) {
    // var taskName=this.data.taskName;
    this.setData({
      taskName: e.detail.value
    })
    // console.log(taskName);
  },

  bindmanagerNameInput: function (e) {
    this.setData({
      managerName: e.detail.value
    })
  },


  //状态选择下拉框
  getStatus: function (e) {
    this.setData({
      status:e.detail.value
    })
    console.log(e.detail)
  },

  //阶段选择下拉框
  getStep: function (e) {
    this.setData({
      step:e.detail.value
    })
    console.log(e.detail)
  },

  //任务类型选择下拉框
  gettaskSort: function (e) {
    this.setData({
      taskSort:e.detail.value
    })
    console.log(e.detail)
  },

   //日期选择器
   bindstartDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      startDate: e.detail.value
    })
  },

  bindendDateChange: function (e) {
    console.log('pickerend发送选择改变，携带值为', e.detail.value)
    this.setData({
      endDate: e.detail.value
    })
  },


addTSubmit: function (e) {
  console.log('form发生了submit事件，携带数据为：', e.detail.value)
   // 提交表单中的数据
      var that = this;
      wx.request({
        url: '',
        data: {
          content: that.data.tables
        }, // 请求的参数
        header: {
          'Content-Type': 'application/json',
         
        }, // HTTP Header , header 中不能设置 Referer
        method: 'POST', // 默认为 GET，有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        success(res) { // 接口调用成功的回调函数
          if (res.data.code === 0) {
            wx.showToast({
              title: "成功",
              icon: "suceess",
              duration: 1000
            })
          }
        },
      })
},

  /**
   * 生命周期函数--监听页面加载
   */
   onLoad: function (options) {
    // 初始化的时候尝试获取存储的table,否则新建tables
    let that = this;
    let id = options.id;
    wx.request({
      url: app.globalData.apiUrl + '/table/' + id,
      header: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + wx.getStorageSync('dm_token')
      },
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function(res) {
              // 
            },
          })

  },

   //任务成员及计划工作量
   openModel(e) {
    let id = e.target.dataset.id;
    this.setData({
      titles: this.data.tables[0],
      cols: this.data.tables[id],
      id: id,
      show: true
    });
  },
  editModel(e) {
    let tables = this.data.tables;
    tables[this.data.id] = this.data.cols;

    this.setData({
      tables: tables,
      show: false
    });

  },
  deleteModel(e){
    let tables = this.data.tables;
    tables.splice(this.data.id,1);
    this.setData({
      tables:tables,
      show:false
    })
  },
  openAddModel(e) {
    let newData = ["", ""];
    this.setData({
      titles: this.data.tables[0],
      cols: newData,
      create: true
    })
  },
  addModel() {
    let table = this.data.tables;
    table.push(this.data.cols);
    this.setData({
      tables: table,
      create: false
    })
  },
  closeModel() {
    this.setData({
      show: false,
      create: false
    })
  },
  dataChange(e) {
    let cols = this.data.cols;
    cols[e.target.dataset.id] = e.detail.value;
    console.log(cols);
    this.setData({
      cols: cols
    });

  },
 
    clearModel() {
      let tables = []
      tables.push(this.data.tables[0])
      this.setData({
        tables: tables
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