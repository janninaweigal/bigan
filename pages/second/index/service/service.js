Page({
  data: {
    userInfo: {},
    inputValue: "",
    mesArray: []
  },

  onLoad: function (options) {
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value,
      inputSign: true
    });
  },
  sendMes: function (e) {
    console.log(e)
    var oriMesArr = this.data.mesArray;
    var newMes = this.data.inputValue;
    console.log(oriMesArr)
    if (newMes != "") {
      // youItem   myItem
      var myNewMes = {
        mesType: "myItem",
        mesitem: {
          userInfo: e.detail.userInfo,
          mes: newMes
        }
      };

      oriMesArr.push(myNewMes);

      this.setData({ mesArray: oriMesArr });
      this.setData({ inputValue: "" });
      setTimeout(() => {
        var mesArray = ['您好！', '很高兴为您服务', '现在还是测试阶段', '有什么可以为您服务的吗？']
        var num = Math.floor(Math.random() * 4);
        var youNewMes = {
          mesType: "youItem",
          mesitem: {
            userInfo: {
              avatarUrl: "/images/wx.png"
            },
            mes: mesArray[num]
          }
        }
        oriMesArr.push(youNewMes);
        this.setData({ mesArray: oriMesArr });
      }, 1200)


    }
  }


})
