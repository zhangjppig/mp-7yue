// pages/posts/posts.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        
       
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // setData,更新、创建+更新
        // 条件渲染，用wx:if=" "

        // 列表渲染，用wx:for。用<block> </block>包裹起来要渲染的。注意item.

        let content=[{
            title:"2020观看指南",
            content:" 这里有一大段文字,小程序提供了一个简单、高效的应用开发框架和丰富的组件及API，帮助开发者在微信中开发具有原生 APP 体验的服务。本章分主题的介绍了小程序的开发语言、框架、能力、调试等内容，帮助开发者快速全面的了解小程序开发的方方面面。",
            avatar:"/images/2.png",
            reading:133,
            collection:22,
            author:"猫吃鱼",
            detail:"这里有一大段文字,小程序提供了一个简单、高效的应用开发框架和丰富的组件及API，帮助开发者在微信中开发具有原生 APP 体验的服务。本章分主题的介绍了小程序的开发语言、框架、能力、调试等内容，帮助开发者快速全面的了解小程序开发的方方面面。",
            dateTime:"24小时前",
            date:"Nov 12 2020",
            headImgsrc:"/images/1.png",
            imgSrc:"/images/1.jpg",

    // 从服务器获取的资料
        },  {
            date:"Sep 18 2020",
            title:"大好河山",
            imgSrc:"/images/2.jpg",
            avatar:"/images/2.png",
            content:"菊黄蟹正肥，巴拉巴拉巴拉……",
            reading:"112",
            collection:"96",
            headImgsrc:"/images/2.jpg",
            author:"黑衣人",
            dateTime:"24小时前",
        }]

        this.setData({
            posts:content
        })
        // this.setData(content)
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