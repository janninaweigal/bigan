// pages/second/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:1,
    demand:[{
      text:'推荐',
      checked:true
    },
    {
      text: '最新',
      checked: false
    }],
    search: [
      {
        keyword: '搜索历史',
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
    sflag:true,
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
      }
    ]
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