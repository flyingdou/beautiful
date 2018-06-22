//app.js
App({
  onLaunch: function () {
    // 初始化
    wx.setStorageSync('memberId', null);
    wx.setStorageSync('clubId', 433);
  },
   constant: {
    base_pic_url: 'https://www.ecartoon.com.cn/picture',
    base_img_url: 'https://www.ecartoon.com.cn/miniProgram/club/img/'
  },
  request_url: 'https://www.ecartoon.com.cn/beautifulclubmp!'
  
})