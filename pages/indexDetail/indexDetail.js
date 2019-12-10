// pages/indexDetail/indexDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dIndex:0,
    index: 0,
    content: {},
    detailArray:[
      [
        {
          'image': '/image/index/riyueshan.jpeg',
          'title': '日月山000',
          'author': 'huier',
          'price': '¥0.00',
          'desc': '日月山去的时候比较冷，有草原、有牦牛,辉er想在这和牦牛过日子，不想回去了'
        },
        {
          'image': '/image/index/riyueshan.jpeg',
          'title': '日月山111',
          'author': 'like',
          'price': '¥1.11',
          'desc': '李柯爱上了日月山去的美丽风景和牦牛'
        },
        {
          'image': '/image/index/riyueshan.jpeg',
          'title': '日月山222',
          'author': 'dingyang',
          'price': '¥2.2',
          'desc': '丁洋么去过这里，但是他仍然爱上了这里的牦牛和一望无际的大草原'
        },
        {
          'image': '/image/index/riyueshan.jpeg',
          'title': '日月山333',
          'author': 'zhulaoban',
          'price': '¥3.33',
          'desc': '朱老板像喜欢电耗子一样喜欢这里的老鼠，这里的老鼠真多啊'
        },
        {
          'image': '/image/index/riyueshan.jpeg',
          'title': '日月山444',
          'author': 'dangdang',
          'price': '¥4.4',
          'desc': '当当说他只喜欢大草原上穿着民族服饰唱歌跳舞的人'
        }
      ],
      [
        {
          'image': '../../image/index/qinghaihu.jpeg',
          'title': '青海湖000',
          'author': 'huier',
          'price': '¥0.00',
          'desc': '青海湖一望无际，波光粼粼，湖水冰冷刺骨,huier不敢跳进去，嫌太冷了'
        },
        {
          'image': '../../image/index/qinghaihu.jpeg',
          'title': '青海湖111',
          'author': 'like',
          'price': '¥1.11',
          'desc': '李柯直接跳进了一望无际，波光粼粼，湖水冰冷刺骨的青海湖，nia也不嫌冷么'
        },
        {
          'image': '../../image/index/qinghaihu.jpeg',
          'title': '青海湖222',
          'author': 'dingyang',
          'price': '¥2.22',
          'desc': '丁洋光觉得青海外牦牛怕好吃的不行，甚至还想吃青海湖里面的鱼？'
        },
        {
          'image': '../../image/index/qinghaihu.jpeg',
          'title': '青海湖333',
          'author': 'zhulaoban',
          'price': '¥3.33',
          'desc': '朱老板就想着骑着马到青海湖边上转一下，里面就算了'
        },
        {
          'image': '../../image/index/qinghaihu.jpeg',
          'title': '青海湖444',
          'author': 'dangdang',
          'price': '¥4.4',
          'desc': '当当看nia骑着马照相的那些人哈好看的很，就是不敢去搭讪'
        }
      ],
      [
        {
          'image': '../../image/index/taibai.jpeg',
          'title': '太白之眼',
          'author': 'dingyang',
          'price': '¥0.00',
          'desc': '太白之眼喷泉很有创新，不仅能喷水，还能喷火'
        },
        {
          'image': '../../image/index/taibai.jpeg',
          'title': '太白之眼',
          'author': 'dingyang',
          'price': '¥0.00',
          'desc': '太白之眼喷泉很有创新，不仅能喷水，还能喷火'
        },
        {
          'image': '../../image/index/taibai.jpeg',
          'title': '太白之眼',
          'author': 'dingyang',
          'price': '¥0.00',
          'desc': '太白之眼喷泉很有创新，不仅能喷水，还能喷火'
        },
        {
          'image': '../../image/index/taibai.jpeg',
          'title': '太白之眼',
          'author': 'dingyang',
          'price': '¥0.00',
          'desc': '太白之眼喷泉很有创新，不仅能喷水，还能喷火'
        },
        {
          'image': '../../image/index/taibai.jpeg',
          'title': '太白之眼',
          'author': 'dingyang',
          'price': '¥0.00',
          'desc': '太白之眼喷泉很有创新，不仅能喷水，还能喷火'
        }
      ],
      [
        {
          'image': '../../image/index/dayuecheng.jpeg',
          'title': '大悦城',
          'author': 'zhu',
          'price': '¥0.00',
          'desc': '大悦城是西安大雁塔附近新开的一个商场，人很多'
        },
        {
          'image': '../../image/index/dayuecheng.jpeg',
          'title': '大悦城',
          'author': 'zhu',
          'price': '¥0.00',
          'desc': '大悦城是西安大雁塔附近新开的一个商场，人很多'
        },
        {
          'image': '../../image/index/dayuecheng.jpeg',
          'title': '大悦城',
          'author': 'zhu',
          'price': '¥0.00',
          'desc': '大悦城是西安大雁塔附近新开的一个商场，人很多'
        },
        {
          'image': '../../image/index/dayuecheng.jpeg',
          'title': '大悦城',
          'author': 'zhu',
          'price': '¥0.00',
          'desc': '大悦城是西安大雁塔附近新开的一个商场，人很多'
        },
        {
          'image': '../../image/index/dayuecheng.jpeg',
          'title': '大悦城',
          'author': 'zhu',
          'price': '¥0.00',
          'desc': '大悦城是西安大雁塔附近新开的一个商场，人很多'
        }
      ],
      [
        {
          'image': '../../image/index/chaka.jpeg',
          'title': '茶卡盐湖',
          'author': 'huo',
          'price': '¥50.00',
          'desc': '茶卡盐湖被称为天空之镜，真的很美，去玩的人也挺多的，湖里面的盐踩上去也挺舒服的'
        },
        {
          'image': '../../image/index/chaka.jpeg',
          'title': '茶卡盐湖',
          'author': 'huo',
          'price': '¥50.00',
          'desc': '茶卡盐湖被称为天空之镜，真的很美，去玩的人也挺多的，湖里面的盐踩上去也挺舒服的'
        },
        {
          'image': '../../image/index/chaka.jpeg',
          'title': '茶卡盐湖',
          'author': 'huo',
          'price': '¥50.00',
          'desc': '茶卡盐湖被称为天空之镜，真的很美，去玩的人也挺多的，湖里面的盐踩上去也挺舒服的'
        },
        {
          'image': '../../image/index/chaka.jpeg',
          'title': '茶卡盐湖',
          'author': 'huo',
          'price': '¥50.00',
          'desc': '茶卡盐湖被称为天空之镜，真的很美，去玩的人也挺多的，湖里面的盐踩上去也挺舒服的'
        },
        {
          'image': '../../image/index/chaka.jpeg',
          'title': '茶卡盐湖',
          'author': 'huo',
          'price': '¥50.00',
          'desc': '茶卡盐湖被称为天空之镜，真的很美，去玩的人也挺多的，湖里面的盐踩上去也挺舒服的'
        }
      ]
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let index = options.index;
    let dIndex = options.dIndex;
    this.setData({
      dIndex:dIndex,
      index: index
    })
    this.getData();
    console.log(this.data.dIndex)
  },
  getData(){
    let data = this.data.detailArray;
    let content = data[this.data.dIndex][this.data.index];
    this.setData({
      content:content
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