//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    headerData:{},
    firstFocusData: {
      "list": [
        {
        "pictureUrl": "/imgs/image/aaaa.jpg",
        "comment": ["彩虹1", "彩虹2", "彩虹3"]
        },
        {
          "pictureUrl": "/imgs/image/aaaa.jpg",
          "comment": ["彩虹1", "彩虹2", "彩虹3"]
        }
      ]},
    cardData: {
      "list": [
        {
          "pictureUrl": "/imgs/image/aaaa.jpg",
          "comment": ["彩虹1", "彩虹2", "彩虹3"]
        },
        {
          "pictureUrl": "/imgs/image/aaaa.jpg",
          "comment": ["彩虹1", "彩虹2", "彩虹3"]
        },
      ],
      "cardlist": {
          "list":[
            {
              "pictureUrl": "/imgs/image/aaaa.jpg",
            "comment": ["彩虹1", "彩虹2", "彩虹3"]
            },
            {
              "pictureUrl": "/imgs/image/aaaa.jpg",
              "comment": ["彩虹1", "彩虹2", "彩虹3"]
            },
            {
              "pictureUrl": "/imgs/image/aaaa.jpg",
              "comment": ["彩虹1", "彩虹2", "彩虹3"]
            },
            {
              "pictureUrl": "/imgs/image/aaaa.jpg",
              "comment": ["彩虹1", "彩虹2", "彩虹3"]
            },
            {
              "pictureUrl": "/imgs/image/aaaa.jpg",
              "comment": ["彩虹1", "彩虹2", "彩虹3"]
            }
          ]
        }
    },
    cateData: {
      "list":[
        {
          "comment": ["彩虹1", "彩虹2", "彩虹3"]
        }
      ]
    },
    _currIdx: 0,
    // 礼品卡当前播放
    _currCardIdx: 0,
    // 分类list
    tabText: {
      currIdx: 0
    },
    categoryList: [{ "name": "ABA" }, { "name": "ABA" }, { "name": "ABA" }, { "name": "ABA" }],
    prodGroupList: [
      [
        {
          "skuId": "1233456",
          "image": "/imgs/image/aaaa.jpg",
          "pPrice":"123",
          "name": "彩虹"
        },
        {
          "skuId": "1233456",
          "image": "/imgs/image/aaaa.jpg",
          "pPrice": "123",
          "name": "彩虹"
        },
        {
          "skuId": "1233456",
          "image": "/imgs/image/aaaa.jpg",
          "pPrice": "123",
          "name": "彩虹"
        },
        {
          "skuId": "1233456",
          "image": "/imgs/image/aaaa.jpg",
          "pPrice": "123",
          "name":"彩虹"
        }
      ],
    ],
    tabFixed: false,
    TABSCROLLTOP: 560,
    moveX: 0,
    moveY: 0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    this.initIndex()
  },
  onShow: function() {
    // this.initIndex()
  },
  initIndex: function() {
    let obj = this;
    wx.request({
      url: app.globalRequestUrl + "/api/index",
      data: {},
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: function (res) {
        obj.setData({
          headerData: {
            "pictureUrl": "/imgs/image/ab0.jpg",
            "comment": "彩虹"
          }
        })
      },
      fail: function (e) {
        // wx.showToast({
        //   title: '网络信号较差',
        //   icon: 'loading',
        //   duration: 3000
        // });
        // obj.setData({
        //   headerData: {
        //     "pictureUrl": "/imgs/image/ab0.jpg",
        //     "comment": "彩虹"
        //   }
        // })
      },
      complete: function () {
        obj.setData({
          headerData: {
            "pictureUrl": "/imgs/image/ab0.jpg",
            "comment": "彩虹"
          }
        })
      }
    });
  },
  changeCardSwiper: function(e) {
    this.setData({
      _currCardIdx: e.detail.current
    });
  },
  onReachBottom: function() {
    var showTwo = this.selectComponent('#yepcom-tab');
    // const query = wx.createSelectorQuery();
    // query.select('#tab-id-index').fields({
    //   dataset: true
    // },
    // function(res){
    //   console.log(res)
    // }).exec();
    let ix = showTwo.data._currIdx;
    let le = showTwo.data._tabs.length;
    if (le <= ix+1){
      ix = -1;
    }
    showTwo.setData({
      _currIdx:ix+1
    });
    // console.log(showTwo)
  },
  changeSwiper: function(e) {
    
  },
  selectTextTab:function(){
    console.log("abcdd")
  },
  gotoIndexDetail: function(e){
    wx.navigateTo({
      url: '../detail/detail?key=1&v=2',
      success: (res) =>{
        console.log(res)
      },
      fail: (res) =>{
        console.log(res)
      },
      complete: (res) =>{
        console.log(res)
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '彩虹',
      path: '/pages/index/index',
      imageUrl: '/imgs/image/ab0.jpg'
    }
  }
})
