// pages/post-detail/post-detail.js

import { postList } from '../../data/data.js'
const app = getApp()  // 调用全局变量的
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData: {},
    collected: false,
    isPlaying: false,
    musicStopUrl: '/images/music/music-stop.png',
    musicStartUrl: '/images/music/music-start.png',
    _pid: null,
    _postsCollected: {}, // 编程习惯：不用做数据绑定的加上下划线_，做数据绑定的正常驼峰写法。
    _mgr: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    const postData = postList[options.pid]
    this.data._pid = options.pid
    const postsCollected = wx.getStorageSync('posts_collected')
    this.data._postsCollected = postsCollected
    let collected = postsCollected[this.data._pid]
    if (collected === undefined) { //如果是undefined,说明文章没有被收藏过
      collected = false
    }

    this.setData({
      postData,
      collected,
      isPlaying: app.gIsPlayingMusic
    })
    const mgr = wx.getBackgroundAudioManager()
    this.data._mgr = mgr
    mgr.onPlay(this.onMusicStart)
    // mgr.onStop(this.onMusicStop) 监听音乐停止
    mgr.onPause(this.onMusicStop)  // 背景音乐暂停
  },

  onMusicStart() {
    const mgr = this.data._mgr

    // mgr.onPlay(() => {
    //   console.log(1111)
    // })
    const music = postList[this.data._pid].music
    mgr.src = music.url
    mgr.title = music.title
    mgr.coverImgUrl = music.coverImgUrl

    app.gIsPlayingMusic = true

    this.setData({
      isPlaying: true
    })
  },

  onMusicStop() {
    const mgr = wx.getBackgroundAudioManager()
    mgr.stop()
    app.gIsPlayingMusic = false
    this.setData({
      isPlaying: false
    })
  },
  // 音乐停止--start
  // 音乐播放--stop

  async onShare() {
    const result1 = await wx.showActionSheet({
      itemList: ['分享到QQ', '分享给微信好友', '弹出菜单'],
    })
    console.log(result1)
  },

  async onCollect() {
    // 文章收藏分析思路：
    // 假设未收藏->收藏
    // 哪篇被收藏
    // 数据结构，多篇文章是否被收藏
    const postsCollected = this.data._postsCollected
    postsCollected[this.data._pid] = !this.data.collected //js的动态访问属性
    // this.data.collected=true

    this.setData({
      collected: !this.data.collected
    })
    wx.setStorageSync('posts_collected', postsCollected)

    wx.showToast({
      title: this.data.collected ? '收藏成功' : '取消收藏',
      duration: 3000  // '收藏成功'的停留时间。3000毫秒
    })
    // setData做数据绑定的，还会对data下面的同名属性进行赋值。所有数据绑定的值都在data里面，执行setData之后，data中数据绑定的值就会被覆盖掉。上面的this.setData({collected:!this.data.collected})已经取反，并赋值给了data下的同名属性collected。

    // 模态对话框
    // const result =await wx.showModal({
    //   title: '是否收藏此文章',
    //   // success(res){
    //   //   console.log(res)
    //   // }
    // }) 
    // if(result.confirm){
    //   const postsCollected = this.data._postsCollected
    //   wx.getStorageSync('key')
    //   postsCollected[this.data._pid] = !this.data.collected
    //   this.setData({
    //     collected:!this.data.collected 
    //   })
    //   wx.setStorageSync('posts_collected',postsCollected)
    // } 
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