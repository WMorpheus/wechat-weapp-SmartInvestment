App({
  onLaunch: function () {

  },
  getUserInfo: function (cb) {
    var that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      });
    }
  },
  globalData: {
    userInfo: null,
    ip:'http://192.168.43.165:10010'
  },
  jumpToStock: function (e) {
    var id = e.detail.value;
    // console.log('../singleStock/singlestock?id='+id);
    wx.navigateTo({
      url: '../singleStock/singlestock?id=' + id,
    })
  }
})
