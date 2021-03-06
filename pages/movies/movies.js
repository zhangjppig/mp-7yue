const app = getApp() // 获取到全局的app 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters: [],
    comingSoon: [],
    top250: [],
    searchResult: false,
    searchData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: app.gBaseUrl + 'in_theaters',
      // url即服务器API地址
      // method: 'GET',没写就默认了method: 'GET'
      // 当method时是'GET'方法，data:{ start: 0,count: 3,}等同于url后面加上查询参数?start=0&count=3。
      data: {
        start: 0,
        count: 3,
      },
      success: (res) => {
        console.log(res)
        this.setData({
          inTheaters: res.data.subjects
        })
      },
    })
    wx.request({
      url: app.gBaseUrl + 'coming_soon',
      // url即服务器API地址
      data: {
        start: 0,
        count: 3,
      },
      success: (res) => {
        console.log(res)
        this.setData({
          comingSoon: res.data.subjects
        })
      },
    })
    wx.request({
      url: app.gBaseUrl + 'top250',
      // url即服务器API地址
      data: {
        start: 0,
        count: 3,
      },
      success: (res) => {
        console.log(res)
        this.setData({
          top250: res.data.subjects
        })
      },
    })
  },
  onGotoMore(event) {
    const type = event.currentTarget.dataset.type
    wx.navigateTo({
      url: '/pages/more-movie/more-movie?type=' + type,
    })
  },
  onGonfirm(event) {
    this.setData({
      searchResult: true
    })
    wx.request({
      url: app.gBaseUrl + 'search',
      data: {
        q: event.detail.value
      },
      success: (res) => {
        this.setData({
          searchData:res.data.subjects
        })
      }
    })
  },
  onSearchCancel(event){
    this.setData({
      searchResult:false
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