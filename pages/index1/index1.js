// 导入
// let postData = require("../../data/data.js")
// console.log( postData )

import {postList} from '../../data/data.js'
console.log(postList)



Page({
   

// 跳转页面
    toPostPage() {
        wx.navigateTo({
            url: '/pages/posts/posts',
        })
    },
// wx.redirectTo会卸载当前页面，然后跳转页面
//  wx.navigateTo会保留当前页面，然后跳转页面
})