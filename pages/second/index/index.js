// pages/second/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:3,
    demand:[{
      text:'推荐',
      checked:true
    },
    {
      text: '最新',
      checked: false
    }],
    sflag:true
  },
  selecttab(e){
    var that=this;
    var id=e.target.dataset.id;
    if(id!=undefined){
      switch(id){
        case '1':
          that.designIndex(1);
          wx.setNavigationBarTitle({
            title: '首页'
          })
          break;
        case '2':
          that.designIndex(2);
          wx.setNavigationBarTitle({
            title: '消息'
          })
          break;
        case '3':
          that.designIndex(3);
          wx.setNavigationBarTitle({
            title: '我的'
          })
          break;
        default:
          console.log("none")
          break;
      }
    }
  },
  designIndex(param){
    this.setData({
      index:param
    })
  },
  demandtap(e){
    var text=e.target.dataset.text;
    if(text=="推荐"){
      this.setData({
        demand: [{
          text: '推荐',
          checked: true
        },
        {
          text: '最新',
          checked: false
        }]
      })
    }else{
      this.setData({
        demand: [{
          text: '推荐',
          checked: false
        },
        {
          text: '最新',
          checked: true
        }]
      })
    }
  },
  // 清除搜索框
  appearsearch(){
    this.setData({
      sflag: false
    })
  },
  clearsearch(e){
    console.log(123)
    console.log(e)
    this.setData({
      sflag:true
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