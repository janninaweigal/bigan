// pages/second/index/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabar:[{
      text:'全部',
      checked:true
    },
    {
      text: '待付款',
      checked: false
    },
    {
      text: '交易中',
      checked: false
    }, {
      text: '待评价',
      checked: false
    },
    {
      text: '退款/申述',
      checked: false
    }
    ],
    postList:[
      {
        title:'甲方需求标题',
        money:'¥200',
        label:'标签',
        publishtime:'2018-09-20 00:00:00',
        content:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
        firstheadimg:'/images/new.png',
        firstname:'甲方名称 (企业加注企业标)',
        firstcontent:'甲方内容(企业加注企业标)'
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
    ]
  },
  demandtap(e) {
    var text = e.target.dataset.text;
    var demand = this.data.tabar
    for (var i in demand) {
      if (demand[i].text == text) {
        demand[i].checked = true;
      } else {
        demand[i].checked = false;
      }
    }
    this.setData({
      tabar: demand
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