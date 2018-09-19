// pages/second/otherdata/otherdata.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    auth:[{
      name:'实名认证',
      auth:true,
      src:'/images/iqiyi.png'
    },
    {
      name: '学生认证',
      auth: false,
      src: '/images/iqiyi.png'
    },
    {
      name: '企业认证',
      auth: true,
      src: '/images/iqiyi.png'
    }],
    demand: [{
      text: '我的派单',
      checked: true
    },
    {
      text: '合作伙伴',
      checked: false
    },
    {
      text: '评价',
      checked: false
    }]
  },
  demandtap(e) {
    var text = e.target.dataset.text;
    var demand=this.data.demand
    for(var i in demand){
      if(demand[i].text==text){
        demand[i].checked=true;
      }else{
        demand[i].checked = false;
      }
    }
    this.setData({
      demand:demand
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