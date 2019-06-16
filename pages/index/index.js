//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    headerData: { "list": [
      { "pictureUrl":"//www.wanyus.com/cms/jfs/t1/10383/26/9258/6826/5c3e9d8bE8fe6c345/c5eae008d69b19c3.jpg",
      "comment":["彩虹"]}]},
    firstFocusData: {
      "list": [{
        "pictureUrl": "//www.wanyus.com/cms/jfs/t1/10383/26/9258/6826/5c3e9d8bE8fe6c345/c5eae008d69b19c3.jpg",
        "comment": ["彩虹1", "彩虹2", "彩虹3"]
      }]},
    cardData: {
      "list": [{
        "pictureUrl": "//www.wanyus.com/cms/jfs/t1/10383/26/9258/6826/5c3e9d8bE8fe6c345/c5eae008d69b19c3.jpg",
        "comment": ["彩虹1", "彩虹2", "彩虹3"]
      }],
      "cardlist": {
          "list":[
            {
            "pictureUrl": "//www.wanyus.com/cms/jfs/t1/10383/26/9258/6826/5c3e9d8bE8fe6c345/c5eae008d69b19c3.jpg",
            "comment": ["彩虹1", "彩虹2", "彩虹3"]
            },
            {
              "pictureUrl": "//www.wanyus.com/cms/jfs/t1/10383/26/9258/6826/5c3e9d8bE8fe6c345/c5eae008d69b19c3.jpg",
              "comment": ["彩虹1", "彩虹2", "彩虹3"]
            },
            {
              "pictureUrl": "//www.wanyus.com/cms/jfs/t1/10383/26/9258/6826/5c3e9d8bE8fe6c345/c5eae008d69b19c3.jpg",
              "comment": ["彩虹1", "彩虹2", "彩虹3"]
            },
            {
              "pictureUrl": "//www.wanyus.com/cms/jfs/t1/10383/26/9258/6826/5c3e9d8bE8fe6c345/c5eae008d69b19c3.jpg",
              "comment": ["彩虹1", "彩虹2", "彩虹3"]
            },
            {
              "pictureUrl": "//www.wanyus.com/cms/jfs/t1/10383/26/9258/6826/5c3e9d8bE8fe6c345/c5eae008d69b19c3.jpg",
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
          "image": "//www.wanyus.com/cms/jfs/t1/10383/26/9258/6826/5c3e9d8bE8fe6c345/c5eae008d69b19c3.jpg",
          "pPrice":"123",
          "name": "彩虹"
        },
        {
          "skuId": "1233456",
          "image": "//www.wanyus.com/cms/jfs/t1/10383/26/9258/6826/5c3e9d8bE8fe6c345/c5eae008d69b19c3.jpg",
          "pPrice": "123",
          "name": "彩虹"
        },
        {
          "skuId": "1233456",
          "image": "//www.wanyus.com/cms/jfs/t1/10383/26/9258/6826/5c3e9d8bE8fe6c345/c5eae008d69b19c3.jpg",
          "pPrice": "123",
          "name": "彩虹"
        },
        {
          "skuId": "1233456",
          "image": "//www.wanyus.com/cms/jfs/t1/10383/26/9258/6826/5c3e9d8bE8fe6c345/c5eae008d69b19c3.jpg",
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
  onLoad: function () {
    
  }
})
