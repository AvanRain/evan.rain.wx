// pages/daily/daily.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerData: {},
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
      ]
    },
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
        "list": [
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
      "list": [
        {
          "comment": ["彩虹1", "彩虹2", "彩虹3"]
        }
      ]
    },
    _currIdx: 0,
    // 当前播放
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
          "name": "彩虹"
        },
        {
          "skuId": "1233456",
          "image": "/imgs/image/aaaa.jpg",
          "pPrice": "123",
          "name": "彩虹"
        }
      ],
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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