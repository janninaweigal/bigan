// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search:[
      {
        keyword:'搜索历史',
        label: ['UI', 'VI设计', '企业形象设计', '企业形象设计']
      },
      {
        keyword: '搜索历史1',
        label: ['UI', 'VI设计', '企业形象设计']
      },
      {
        keyword: '搜索历史2',
        label: ['UI', 'VI设计', '企业形象设计']
      }
    ],
    postList: [
      {
        title: '甲方需求标题',
        money: '¥200',
        label: '标签',
        publishtime: '2018-09-20 00:00:00',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
        firstheadimg: '/images/new.png',
        firstname: '甲方名称 (企业加注企业标)',
        firstcontent: '甲方内容(企业加注企业标)'
      },
      {
        title: '甲方需求标题',
        money: '¥200',
        label: '标签',
        publishtime: '2018-09-20 00:00:00',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
        firstheadimg: '/images/new.png',
        firstname: '甲方名称 (企业加注企业标)',
        firstcontent: '甲方内容(企业加注企业标)'
      },
      {
        title: '甲方需求标题',
        money: '¥200',
        label: '标签',
        publishtime: '2018-09-20 00:00:00',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
        firstheadimg: '/images/new.png',
        firstname: '甲方名称 (企业加注企业标)',
        firstcontent: '甲方内容(企业加注企业标)'
      },
      {
        title: '甲方需求标题',
        money: '¥200',
        label: '标签',
        publishtime: '2018-09-20 00:00:00',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
        firstheadimg: '/images/new.png',
        firstname: '甲方名称 (企业加注企业标)',
        firstcontent: '甲方内容(企业加注企业标)'
      }
    ],
    array: ['全部', '中国', '巴西', '日本'],
    index: 0,
    array1: ['综合排序', '中国', '巴西', '日本'],
    index1: 0,
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
  bindPickerChange: function (e) {
    console.log(e)
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange1: function (e) {
    console.log(e)
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
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