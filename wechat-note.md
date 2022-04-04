pages下新建文件夹，设一个文件名，右键“新建page”会出来带同样名称后缀的4个子文件夹 .js  .json  .wxml  .wxss
## 第一页：开启小程序之旅 初始页面
wxml
```js
// wxml里面

<view class="container">  
    <view class="avatar">
        <open-data type="userAvatarUrl"></open-data>
    </view>

    <view class="motto">
        hello,
        <open-data type="userNickName"></open-data>
    </view>

    // bind：  捕捉事件执行的回调函数
    <view bind:tap="toPostPage" class="journey-container">
        <l-button disabled="{{false}}"  size="large">开启小程序之旅
        </l-button>  
    </view>
</view>

// js文件里 跳转页面
Page({
    toPostPage() {
        wx.navigateTo({
            url: '/pages/posts/posts',
        })
    },
// wx.redirectTo会卸载当前页面，然后跳转页面
//  wx.navigateTo会保留当前页面，然后跳转页面
})

// <l-button> </l-button> 自定义的组件，要在.json文件里引用
```
wxss里面添加细节，排版
```js
/* pages/index1/index1.wxss */
// flex容器布局
.container{
    display: flex;
    flex-direction: column;
    align-items:center;
    background-color:#b3d4db;
}

.avatar{
    width: 200rpx;
    height: 200rpx;
    margin-top: 160rpx;
    border-radius: 50%;
    overflow: hidden;
}

.motto{
    margin-top: 100rpx;
    font-size: 32rpx;
    font-weight: bold;
    color: darkslategrey;
}
/* 小边框,button */
.journey-container{
    margin-top: 200rpx;
}

page{
    background-color: #b3d4db;
}
```
json  全局
```js
{
  "usingComponents": {
    "l-avatar":"/miniprogram_npm/lin-ui/avatar/index",
    "l-button":"/miniprogram_npm/lin-ui/button/index"   // 引用自定义的组件
  },
  "navigationBarBackgroundColor": "#b3d4db"  // 顶部的颜色设置
}
```

## 第二页：内容页
再次在pages下新建文件夹，右键“新建page”

改变编译的地方：普通编译--> pages/posts/posts (内容页的所在)

```js
<view>
 <!-- swiper 轮播,滑动 -->
    <swiper circular="trues" indicator-dots="{{true}}" autoplay="{{true}}">
        <swiper-item>
            <image src="/images/1.jpg"></image> 
        </swiper-item>
        <swiper-item>
            <image src="/images/猪.jpg"></image>
        </swiper-item>
        <swiper-item>
            <image src="/images/5.jpg"></image>
        </swiper-item>
    </swiper>
</view>

// wxss里添加细节
swiper {
    width: 100%;
    height: 460rpx;
}
swiper image {
    width: 100%;
    height: 460rpx;
}
```

```js
// 页面所拥有的
<view>
  <view class="post-container">
    <!-- 最大的容器 -->
        <view class="post-author-data">
            <image class="post-author" src="{{avatar}}"></image>
            <text class="post-data">{{date}}</text>
        </view>

        <text class="post-title">{{title}}</text>

        <image class="post-image" src="{{imgSrc}}"></image>

        <text class="post-content">{{content}} </text>

        <view class="post-like">
            <l-icon size="28" color="#666" name="like" />   
            <image class="post-like-image" src="/images/xx.jpg"></image>
            <text class="post-like-font">{{ collection}}</text>
            <l-icon size="32" color="#666" name="eye" />
            <image class="post-like-image" src="/images/like.jpg"></image>
            <text class="post-like-font">{{ reading }}</text>
        </view>
    </view>
</view>
// 记得在json文件里引用组件 l-icon

// wxss添加细节
.post-container {
    display: flex;
    flex-direction: column;
    margin-top: 20rpx;
    margin-bottom: 40rpx;
    background-color: #fff;
    border-top: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
    padding-top: 10rpx;
    padding-bottom: 10rpx;
}

.post-author-data {
    /* margin-top: 10rpx;
    margin-bottom: 20rpx;
    margin-left: 10rpx;*/
    margin: 10rpx 0 20rpx 10rpx;
    /* 上面三个合起来顺序为:上右下左 */
    display: flex;
    flex-direction: row;
    align-items: center;
}

.post-author {
    width: 60rpx;
    height: 60rpx;
    /* vertical-align: middle; 居中用一般flex */
}

.post-data {
    margin-left: 20rpx;
    /* vertical-align: middle; */
    font-size: small;
}

.post-title {
    font-size: 30rpx;
    font-weight: 600;
    color: blue;
    margin-left: 10rpx;
    margin-bottom: 20rpx;
}

.post-image {
    width: 100%;
    height: 460rpx;
    margin-bottom: 30rpx;
}

.post-context {
    color: #666;
    font-size: 28rpx;
    margin-bottom: 20rpx;
    margin-left: 20rpx;
    line-height: 40rpx;
    letter-spacing: 1rpx;
}

.post-like {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 26rpx;
}

.post-like-image{
    width: 32rpx;
    height: 32rpx;
    margin-left: 16rpx;
    margin-right: 16rpx;
}

.post-like-font {
    margin-right: 40rpx;
    font-size: 26rpx;
}
```

条件渲染 列表渲染
* 条件渲染，用wx:if=" "
* 列表渲染，用wx:for。用<block> </block>包裹起来要渲染的。注意item.
```js
<block wx:for="{{postList}}" wx:key="postId"> 
// wx:key=" " 双引号里面不用双花括号{{}}，key只能是唯一 
// item. 相当于指代当前的循环对象 也可写成wx:for-item="item"
//  index 当前序号  wx:for-index="idx"
// {{ index }}

    <view bind:tap="onGoToDetail" class="post-container">
    <!-- 最大的容器 -->
        <view class="post-author-data">
            <image class="post-author" src="{{item.avatar}}"></image>
            <text class="post-data">{{item.date}}</text>
        </view>

        <text class="post-title">{{item.title}}</text>

        <image class="post-image" src="{{item.imgSrc}}"></image>

        <text class="post-content">{{item.content}} </text>

        <view class="post-like">
            <l-icon size="28" color="#666" name="like" />
            <image class="post-like-image" src="/images/xx.jpg"></image>
            <text class="post-like-font">{{ item.collection}}</text>
            <l-icon size="32" color="#666" name="eye" />
            <image class="post-like-image" src="/images/like.jpg"></image>
            <text class="post-like-font">{{ item.reading }}</text>
        </view>
    </view>
</block>
```
新建文件夹data。data.js存放数据
data.js的数据要被导出用 export，哪里需要数据就哪里导入 import
```js

let postList=[{},{},{},{},{},{},{},] // 数组
// 导出
export {
  postList
}

// module.exports = {
//   postList:local_database
// }

// this.setData 只有在page页面的js才能调用，其他js页面不行
// data.js的数据要被导出用 export，哪里需要数据就哪里导入 import
// js模块的导入导出
```


js文件里
```js
import {postList} from '../../data/data.js'
Page({
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad (options) {
        // setData,更新、创建+更新
        // 条件渲染，用wx:if=" "。
        // 列表渲染，用wx:for。用<block> </block>包裹起来要渲染的。注意item.

        // this.setData 只有在page页面的js才能调用，其他js页面不行
        this.setData({
            postList // postList:postList(ES6语法)
        })   
    },
```

## 第三页 文章详情页面
新建文件夹，右键“新建page”

改变编译的地方：pages/posts-detail/posts-detail (详情页的所在)

先静后动，先架构再细节
xwml
