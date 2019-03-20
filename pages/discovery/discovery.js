//discovery.js
var util = require('../../utils/util.js')

Page({
  // 页面的初始数据
  data: {
    navTab: ["推荐", "圆桌", "热门", "收藏"],
    currentNavtab: "0",
    imgUrls: [
      '../../images/24213.jpg',
      '../../images/24280.jpg',
      '../../images/1444983318907-_DSC1826.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    feed: [],
    feed_length: 0
  },
  // 监听页面加载
  onLoad: function () {
    console.log('onLoad')
    var that = this
    // 调用应用实例的方法获取全局数据
    this.refresh();
  },

  // tab点击切换
  switchTab: function(e){
    console.log(e);
    this.setData({
      // 当前tab赋值
      currentNavtab: e.currentTarget.dataset.idx
    });
  },

  // 问题标题点击
  bindQueTap: function () {
    wx.navigateTo({
      url: '../question/question'
    })
  },

  // 问题内容点击
  bindItemTap: function() {
    wx.navigateTo({
      url: '../answer/answer'
    })
  },
 
  // 碰头更新
  upper: function () {
    wx.showNavigationBarLoading()
    this.refresh();
    console.log("upper");
    setTimeout(function(){
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    }, 2000);
  },

  // 触底更新
  lower: function (e) {
    wx.showNavigationBarLoading();
    var that = this;
    setTimeout(function(){
      wx.hideNavigationBarLoading();
      that.nextLoad();
    }, 1000);
    console.log("lower")
  },
  //scroll: function (e) {
  //  console.log("scroll")
  //},

  //网络请求数据, 实现刷新
  refresh0: function(){
    var index_api = '';
    util.getData(index_api)
        .then(function(data){
          //this.setData({
          //
          //});
          console.log(data);
        });
  },

  // 刷新列表内容（使用本地 fake 数据实现刷新效果）
  refresh: function(){
    var feed = util.getDiscovery();
    console.log("loaddata");
    var feed_data = feed.data;
    this.setData({
      feed:feed_data,
      feed_length: feed_data.length
    });
  },

  // 加载列表内容（使用本地 fake 数据实现继续加载效果）
  nextLoad: function(){
    var next = util.discoveryNext();
    console.log("continueload");
    var next_data = next.data;
    this.setData({
      feed: this.data.feed.concat(next_data),
      feed_length: this.data.feed_length + next_data.length
    });
  }
});
