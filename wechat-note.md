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

// 安装完组件后，要在工具栏里构建npm,构建完成后，会在小程序的目录出现miniprogram_npm.
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
// <block wx:for="{{postList}}" wx:key="postId"> 这个写漏 wx:key="index" wx:for-item="item" wx:for-index="idx"
<block wx:for="{{postList}}" wx:key="index"  wx:for-item="item" wx:for-index="idx">
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


* flex的高级应用
wxml
```js
/* flex-direction设置的方向为主轴
 * align-items是设置flex布局的子元素在交叉轴上面的排布方式 
 * justify-content设置的是flex布局的子元素在主轴上面的排布位置 */
.tool{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
```
* 组件的自定义属性data

使用data-post-id="{{item.postId}}"绑定数据（文章的ID）

data-自定义：可以自定义属性 “data-”是固定的写法。
将ID号绑定在每个容器上：在标签中加入data-post-id=“{{item.postId}}"

7-9 在页面的onLoad函数中获取查询参数
 页面之间参数传递通常使用URL方式,方法如下：
1、在wxml页面标签中 标记：

    data-post-id={{item.postId}}

2、在页面js文件中获取Id:

   const pid = event.currentTarget.dataset.postId;  // es6的语法const定义变量
   xv.navigateTo({
       url:'/pages/post-detail/post-detail?pid='+ pid  // 用问号“?”充当查询参数  "?"前面的是url的路径，“?”后面的是传递的查询参数，能传递多个参数
   })

  3、在另外页面接受参数ID。另外页面传给当前页面的查询参数，可以用onLoad函数。

    基于查询pid

    onLoad:function(options){    
          const pid = options.id;
    }

### 7-10 加载详情页数据并填充页面
详情页的数据从data.js文件用import{}导入
```js
  // detail.js里面导入数据：
  import {postList} from '../../data/data.js'

  page（{
    onLoad: function (options) {
    const postData = postList[options.pid]
     this.setData({postData})
    }
  })
```

### 8-1 app.js的意义和作用

点击收藏，取消收藏状态。可考虑保存在小程序的全局变量，在app.js里面。每个页面可以通过getApp()来获取这个变量。

app.js
```js
App({
  onLaunch(){
    console.log("小程序启动")
  }
})
```

async和await

### 8-5小程序缓存的增删改查与清除
* 同步操作缓存的方法 'key'变量名。data值
    * 新增 wx.setStorageSync('key',data)
    * 重置即为修改 wx.setStorageSync('key',data)
    * 删除 wx.removeStorageSync('key')
    * 清空全部 wx.clearStorageSync()
    * 读取缓存 wx.getStorageSync('key')
  
* 异步操作 wx.setStorage('key',data) 
异步函数的几个方案：回调函数、promise、await
1、异步获取本地缓存

    const flag = wx.getStorage({
      key: 'key',
      success(value){
        console.log(value.data);
      }
    })
如果在异步方法里增加了success，则不会再会返回值，只会通过success的value传递返回值


2、使用then

   flag.then((value) => {
      console.log(value.data);
    })

3.ES7中await，async

在方法体中出现await，则在方法体前要增加async

要让await，async生效，要在项目设置中勾选增强编译

4、await和async的坑

这个是错误的：async onLoad: function (options) {

正确写法：async onLoad(options) {
或者
onLoad: async function (options) {



* 8-8文章收藏分析思路：假设未收藏->收藏；哪篇被收藏；数据结构，多篇文章是否被收藏
> 在post-detail编译模式的“启动参数”中添加pid=0.（pid可以随意一篇文章的数）pid是进入post-detail的必须的一个参数。post页面跳转至详情页面post-detail的url:'/pages/post-detail/post-detail?pid='+ pid。
```js
Page({
  data: {
   _pid:null,
  },

  onLoad: function (options) {
    const postData = postList[options.pid]
   
    this.data._pid = options.pid
    this.setData({
      postData:postData
    })
  },

  onCollect(){
    const postsCollected = {}
    postsCollected[this.data._pid] = true  //js的动态访问属性
    wx.setStorageSync('posts_collected',postsCollected)
  }
```

* 8-9未收藏-->收藏的切换：
    * 条件渲染，wx:if
```js
    <image wx:if="{{collected}}" bind:tap="onCollect"  class="circle-img" src="/images/icon/collection.png"></image>
    <image wx:else bind:tap="onCollect"  class="circle-img" src="/images/icon/collection-anti.png"></image>
```

```js
Page({
  data: {
   collected:false,
  },

  onLoad:onCollect(){
    this.setData({
      collected:true
    })
    wx.setStorageSync('posts_collected',postsCollected)
  },
```


* 8-10初始化收藏状态

初始化页面的时候从缓存里读取一下当前的文章是否被收藏。
```js
page({
 data: {
   postData:{},
   collected:false,
   _pid:null,
  },

onLoad: function (options) {
    
    const postData = postList[options.pid]
    this.data._pid = options.pid
    const postsCollected = wx.getStorageSync('posts_collected')
    let collected =postsCollected[this.data._pid]
    this.setData({
      postData,
      collected
    })
  },
```

* 8-12同步文章缓存状态
```js
data:{
_postsCollected:{},} //编程习惯：不用做数据绑定的加上下划线_，做数据绑定的正常驼峰写法。

点击取消收藏，则postsCollected[this.data._pid]= ! this.data.collected
this.setData({
collected:! this.data.collected})
```

* 8-13showToast接口的应用
    * 点击/取消收藏后，弹出提示消息
```js
在js里的点击里，调用 
wx.showToast({
    title:this.data.collected?'取消收藏':'收藏成功', // setData做数据绑定的，还会对data下面的同名属性进行赋值。所有数据绑定的值都在data里面，执行setData之后，data中数据绑定的值就会被覆盖掉。上面的this.setData({collected:!this.data.collected})已经取反，并赋值给了data下的同名属性collected。
    duration:3000  // '收藏成功'的停留时间。3000毫秒
})
```
* 8-14showToast更换成showModal
API
```js
wx.showModal({
    title: '是否收藏此文章',
    success(res){
      console.log(res)
    }
  }) 
```
* 8-15showModal的回调函数success 与promise
```js
async onCollect(){
const result =await wx.showModal({
    title: '是否收藏此文章',
  }) 
  if(result.confirm){
    const postsCollected = this.data._postsCollected
    wx.getStorageSync('key')
    postsCollected[this.data._pid] = !this.data.collected
    this.setData({
      collected:!this.data.collected 
    })
    wx.setStorageSync('posts_collected',postsCollected)
  }
  },
```

* 8-17showActionSheet
```js
async onShare(){
    const result1 =await wx.showActionSheet({
      itemList:['分享到QQ','分享给微信好友','弹出菜单'],
    })
    console.log(result1)
  },
```

## 文章音乐播放
* 9-1浮动居中方案-通过left和top定位音乐图标
wxml
```js
position:absolute;  图片脱离文档流
  left:50%;
 margin-left:-51rpx;
 top:180rp;
 opacity:0.7 ;  透明度
 ``` 

 

* 全局变量解决音乐播放状态初始化不正确的问题
  * (1)使用全局变量，在app.js进行定义
  在app.js里设置全局变量：
```js
App({
  onLaunch() {

  },
  gIsPlayingMusic: false,
})
```

  (2)在post-detail.js中
  改变全局变量的方法在page上面const app = getApp()内置函数
```js
const app = getApp()
page({
onLoad:function(options){

this.setData({
  isPlaying: this.gIsPlayingMusic
})
}

onMusicStart() {
app.gIsPlayingMusic = true
}
onMusicStop() {
 app.gIsPlayingMusic = false
}

})
```


* 每篇文章的音乐独立显示状态
  * 在app.js中再次引入全局变量
```js
App({
  onLaunch() {

  },
  gIsPlayingMusic: false,
  gIsPlayingPostId: -1, // -1不存在，没有音乐在播放
})

(2)在post-detail.js中添加
onLoad: function (options) {
    this.setData({
      isPlaying: app.currentMusicIsPlaying
    })

onMusicStart() {
  app.gIsPlayingPostId = this.data._pid
}，

onMusicStop() { 
 app.gIsPlayingPostId = -1
}，

currentMusicIsPlaying() {
    if (app.gIsPlayingMusic && app.gIsPlayingPostId === this.data._pid) {
      return true
    }
    return false
},
```

* tabBar选项卡配置

```js
app.json里添加
"tabBar":{  
   "selectedColor":"#333333",  // 选中时选项卡字体的颜色
    "color":"#999999", // 未选中时选项卡字体的颜色
    "list":[    // {js对象写在花括号里}
      {
        "text": "阅读",  // 选项卡的标题
        "pagePath": "pages/posts/posts" //选项卡的页面
        "iconPath": "/images/tab/post.png", // 未选中时的图标
        "selectedIconPath": "/images/tab/post@highlight.png"  // 选中这个选项，小图标会高亮
      },
      {
        "text": "电影",
        "pagePath": "pages/movies/movies", // 需新建文件夹movies，右键新建page
        "iconPath": "/images/tab/movie.png",
        "selectedIconPath": "/images/tab/movie@highlight.png"
      } 
    ]
},
```

switchTab跳转到带有选项卡tabBar的页面，redirectTo和navigateTo都不行
```js
toPostPage() {
        wx.switchTab({
            url: '/pages/posts/posts',
        })
    },
```

## 自定义组件

1. 新建第一个自定义组件
  * 根目录上新建文件夹components，保存自定义组件目录
  * components下新建文件夹post，后右键新建component，一般命名index

2. 创建自定义组件的属性
  * 在对应的页面配置
  posts.json
```
  {
   "usingComponents": {
    "l-icon": "/miniprogram_npm/lin-ui/icon/index",
    "post": "/components/post/index"
  },
  }
```
* properties 组件的属性列表
```
Component({
  properties: {
     text:{
      type:String,
      value:'144'
    }
  }
})
```

* 自定义属性可以接收一个object对象
  * 把原来在posts页面的文章部分作为一个组件，wxml和wxss裁剪到组件对应下的wxml和wxss
  * 在组件index.js中，properties: {res: Object}
  * 主页面的posts.js中，data: {res: {text: ""}}
  * 组件绑定数据，<post res="{{item}}"/>

* 自定义组件的嵌套引用
  * components下新建movies-list文件夹，右键component。在movies.json里引用movie-list组件,在movies.wxml里可使用<movie-list />组件
  * components下新建movie文件夹，右键component。
  * 组件可以引用组件。在movie-list下的index.json引用movie组件"movie":"/components/movie/index"
  * movie-list下的index.wxml使用movie组件<movie />

### movie自定义组件的构建
* 嵌套组件构建顺序：从小到大，由内而外。
* 先构建movie组件，然后movie-list组件引用movie组件。
```js
// movie的index.wxml
<view class="container">
<image class="poster" src="/images/bestplayers.png"></image>
<text class="title">盗梦空间</text>
</view>
```
```
/* 数字过长显示省略号(容器要限定宽度) */
.title{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
```

* 使用linUI的评分组件快速实现分数预览
  * 引用评分组件"l-rate":"miniprogram_npm/lin-ui/rate/index"
  * score-星级得分（可手动打分）,size-评级图标大小,count-评级上限（默认5级）,disabled-{{true}}取消手动评分,active-color--选中时颜色,inActive-color--未选中时颜色
```js
 <view class="container">
  <image class="poster" src="/images/bestplayers.png"></image>
  <text class="title">盗梦空间</text>
  <view class="rate-container">
    <l-rate disabled="{{true}}" score="4.3" size="22"></l-rate>
    <text class="score">4.3</text>
  </view>
</view>
```

* Flex布局的space-between进行分布排列
```
.title-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;  两端分布
  margin-bottom: 28rpx;
}

.movie-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
```

* 外部样式类externalClasses
  * 外部样式类用于自定义组件，由使用自定义组件的页面编写样式，只需要在组件标签上加上外部样式关键字，在css页面编写样式即可
```js
Component({
  externalClasses:['my-class'],
  properties: {
    
  },
})
```
### 访问服务端的数据
* 在组件的属性中定义属性
  * 在自定义组件的properties中定义组件的属性
  * 在自定义组件的页面中进行属性数据绑定
  * 在引用组件的页面中设置组件属性的值
```
Component({
  properties: {title:String}
})

index.wxml里
 <text>{{title}}</text>
```

* 使用request加载服务端数据
  * 在项目设置中设置不校验https。
movies.js
```js
Page({
 onLoad: function (options) {
    wx.request({
      url: 'http://t.talelin.com/v2/movie/in_theaters?start=0&count=3',  // ?后面的start=x开始数据序号&count=y获取的数量
      success(res){
        console.log(res)
    },
    // url即服务器API地址
    })
  },
})
```

* 在页面获取到的数据传到自定义组件里面，最终展示在自定义组件
  （movies页面获取数据inTheaters，然后传到movie-list，在movie-list自定义组件的<movie />展现出来）
  * movie-list中Component({properties: {movies:Array} }) 接收数据
  * movies.wxml中<movie-list movies="{{inTheaters}}" /> 传输数据到movie-list。花括号里的是被绑定的变量从movies.js得到

    * 在自定义组件中定义属性
    * 要绑定的数据需要在data里面预先定义,然后this.setData调用
    * 箭头函数解决this指代问题
```
movies.js中
Page({
data: {
  inTheaters:[]   // 给[]数据，做数据绑定使用this.setData
},
  onLoad: function (options) {
    wx.request({
      url: 'http://t.talelin.com/v2/movie/in_theaters?start=0&count=3', 
      success：(res)=>{
        this.setData({
          inTheaters:res.data.subjects
      })
    },
  })    
  },
}
用下面这个会报错：要用箭头函数
      success(res){
        this.setData({
          inTheaters:res.data.subjects
        })
```


使用LinUI组件快速创建搜索栏
向服务器请求搜索数据
获取用户输入的关键词，LinUI的bind:linconfirm点击事件来获取 bind:linconfirm="onGonfirm"
```
const app = getApp()
Page({
onGonfirm(event){
    console.log(event)
    wx.request({
      url: app.gBaseUrl + 'search',
      data:{
        q: event.detail.value
      }
    })
  }
})
```

* 搜索结果与电影数据的切换显示实现思路：
  * success: (res) => {}调用，this.setData()获取请求的数据；
  * 在页面通过wx:if和wx:else 条件进行控制显示内容；
  * 通过一个Boolean searchResult 进行控制。

* 13-1 上滑加载更多数据 onReachBottom
  * 加载更多数据的思路
    * 服务返回数据按照分页的方式进行返回;如何知道用户滑动页面，页面上拉触底事件的处理函数onReachBottom。 
    * 在加载数据，需要重新设置data的start参数，这里有type参数需要在onLoad进行设置；下拉不应该覆盖原来数据，使用concat()进行合并，在原来的集合对象进行追加数据。
  * 待处理问题：每次拉动更多，追加的是重复数据-->待处理数据加载分页索引起始值：可以设置对应数组的长度,data的start采用数组的长度
```
data:{start: this.data.movies.length,count: 12},
```

* 上滑加载更多数据 onshowloding提示
  * 添加加载提示信息
    * 请求前wx.showNavigationBarLoading()
    * 请求成功后wx.hideNavigationBarLoading()

* 下划刷新数据
  * json文件中配置 "enablePullDownRefresh":true
  * js文件使用onPullDownRefresh函数


### 获取自定义组件的detail参数
* 在自定义组件内：bind:tap="onTap"
```
methods：{onTap(event){
const pid=event.currentTarget.dataset.postId
this.triggerEvent('posttap',{pid})  // 抛出一个自定义事件 posttap，和变量 pid 用{}将pid传输出去
}}
```
bind:posttap="" //用来监听posttap事件

* 使用自定义组件的页面通过detail参数获取数据。const pid = event.detail.pid  // 从自定义组件那里接收到的参数pid。

* 同时获取自定义属性和自定义组件的detail参数

  * ①由于同一个页面的组件和自定义组件都有onGoToDetail事件，并且要获取的pid是同一个，但是由于两种组件获取方法不同，所以可以用“或”来判断一下到底使用哪种方法获取
```
onGoToDetail(event) {
  const pid = event.currentTarget.dataset.postId | event.detail.pid
  wx.navigateTo({
    url: '/pages/post-detail/post-detail?pid=' + pid
  })
}
```

  * ②自定义组件可以不绑定属性 data-post-id="{{res.postId}}"  ，然后const pid = event.currentTarget.dataset.postId 来获取 pid，可以直接const pid = this.properties.res.postId 来获取pid
```
methods: {
  onTap(event){ 
    const pid = this.properties.res.postId
    this.triggerEvent("posttap",{
      pid
    })
  }
}
```