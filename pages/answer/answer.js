// answer.js
var app = getApp()

Page({
  // 页面的初始数据
  data: {
    userInfo: {}
  },
  // 监听页面加载
  onLoad: function () {
    console.log('onLoad')
  },
  // 问题名称点击查看问题页
  toQuestion: function() {
    wx.navigateTo({
      url: '../question/question'
    })
  },
  
})
