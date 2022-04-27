// pages/posts/posts.js


// 导入
// let postData = require("../../data/data.js")
// console.log( postData )

import { postList } from '../../data/data.js'
console.log(postList)

Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        // setData,更新、创建+更新
        // 条件渲染，用wx:if=" "。
        // 列表渲染，用wx:for。用<block> </block>包裹起来要渲染的。注意item.

        wx.setStorageSync('flag', 2)
        const flag = await wx.getStorage({
            key: 'flag',
            // success(value){
            //     console.log(value.data)
            // }
        })
        // flag.then((value)=>{
        //     console.log(value)
        // })

        console.log(flag);




        // this.setData 只有在page页面的js才能调用，其他js页面不行
        this.setData({
            postList // postList:postList(ES6语法)
        })
    },

    onGoToDetail(event) {
        // console.log(event)
        // const pid = event.currentTarget.dataset.postId   es6的语法const定义变量
        const pid = event.currentTarget.dataset.postId | event.detail.pid  // event.detail.pid从自定义组件那里接收到的pid。
        wx.navigateTo({
            url: '/pages/post-detail/post-detail?pid=' + pid
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