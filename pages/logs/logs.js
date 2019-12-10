//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    adminList:"获取管理员列表",
    adminData:[],
    title:'',
    author: '',
    time: '',
    page: '',
    articleId: '',
    userId: '',
    articleData:[],
    num:0
  },
  searchBox:function(e){
    this.setData({
      title: e.detail.value.title,
      author: e.detail.value.author,
      time: e.detail.value.time,
      page: e.detail.value.page,
      articleId: e.detail.value.articleId,
      userId: e.detail.value.userId,
    })
    wx.request({
      url: 'http://www.witim.cn/php-/lib/getArticleList.php',
      method:'POST',
      data:{
        title:this.data.title,
        author: this.data.author,
        time: this.data.time,
        page: this.data.page,
        articleId: this.data.articleId,
        userId: this.data.userId,
      },
      header:{
        'content-type': 'application/json'
      },
      success:(res) => {
        let resData = res.data.params;
        // console.log(resData)
        this.setData({
          articleData: resData
        })
        // console.log(this.data.articleData)
      }
    })
    this.setData({
      num:1
    })
  },
  getid(e){
    console.log(e)
  },
  getAdminList:function(){
    wx.request({
      url: 'http://www.witim.cn/php-/lib/getadminlist.php', 
      method:'GET',
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:(res) => {
        let resData = res.data.params;
        // console.log(resData);
        this.setData({
          adminData: resData 
        })
        // console.log(this.data.adminData)
      }
    })
    this.setData({
      num: 2
    })
  },
  onLoad: function () {
    
  }
})
