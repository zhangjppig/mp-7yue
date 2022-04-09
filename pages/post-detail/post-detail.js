// pages/post-detail/post-detail.js

import {postList} from '../../data/data.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
   postData:{},
   _pid:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */  
  onLoad: function (options) {
    
    const postData = postList[options.pid]
    console.log(postData)
    this.data._pid = options.pid
    this.setData({
      postData:postData
    })
  },
  
  onCollect(){
    // 假设未收藏->收藏
    // 哪篇被收藏
    // 数据结构，多篇文章是否被收藏
    wx.StorageSync('posts_collected',{
     pid:true  //获取pid在上面，利用data中转
    })
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