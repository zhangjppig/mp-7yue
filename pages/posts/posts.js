// pages/posts/posts.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        a: "2020观看指南",
       
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // setData,更新、创建+更新

        let content={
            title:"2020观看指南",
            context:" 这里有一大段文字,小程序提供了一个简单、高效的应用开发框架和丰富的组件及API，帮助开发者在微信中开发具有原生 APP 体验的服务。本章分主题的介绍了小程序的开发语言、框架、能力、调试等内容，帮助开发者快速全面的了解小程序开发的方方面面。",
            
            dataNum:{
                reading:133,
                collection:22,
            },

            detail:"这里有一大段文字,小程序提供了一个简单、高效的应用开发框架和丰富的组件及API，帮助开发者在微信中开发具有原生 APP 体验的服务。本章分主题的介绍了小程序的开发语言、框架、能力、调试等内容，帮助开发者快速全面的了解小程序开发的方方面面。",
            dateTime:"24小时前",
            date:"Nov 12 2020",
    // 从服务器获取的资料
        }
        this.setData(content)
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