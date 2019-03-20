// question.js
var app = getApp()

Page({
  // 页面的初始数据
  data: {
    motto: '知乎--微信小程序版',
    userInfo: {}
  },
  // 监听页面加载
  onLoad: function () {
    console.log('onLoad')
  },
  // 列表中一条回答点击查看回答详情
  bindItemTap: function() {
    wx.navigateTo({
      url: '../answer/answer'
    })
  },
  
})
