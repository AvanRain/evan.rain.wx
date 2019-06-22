
//获取应用实例
var app = getApp();

/* tab区分：消息/文本/图标/自定义。
 * 消息message的消息数量，点击后消失；其他normal的数量不会改变。
 */
Component({
  externalClasses: ['yepc-tabs', 'yepc-tab', 'yepc-tab-message', 'yepc-tab-txt', 'yepc-tab-panel', 'yepc-tabs-scroll', 'yepc-tab-curr', "yepc-tabs-bro"], //拓展样式
  options: {
    multipleSlots: true
  },
  properties: {
    type: {
      type: String,
      value: 'text'
    },
    tabs: {
      type: Array,
      value: [],
      observer: function(newVal, oldVal) {
        this.setData({
          _tabs: newVal
        })
      }
    },
    // 当前选中的tab，默认为0.
    currIdx: {
      type: String,
      value: '0',
      observer: function(newVal, oldVal) {
        this.setData({
          _currIdx: newVal
        });
      }
    }
  },
  data: {
    // 这里是一些组件内部数据
    _tabs: [{
      name: '',
      count: '',
      icon: ''
    }],
    _currIdx: 0
  },
  methods: {
    // 这里是一个自定义方法
    selectTab: function(e) {
      console.log("aaaa")
      let currIdx = e.currentTarget.dataset.idx;

      // 对当前tab数据重置
      switch (this.data.type) {
        case 'message':
          // 如果是消息类型，则数据清空。
          this.resetMessageData(currIdx);
          break;

        case 'text':
          this.resetTextData(currIdx);
          break;
      }

      // 点击tab，向调用方传出事件及数据。
      let myEventDetail = { key: currIdx, id: e.currentTarget.dataset.id, target: e };
      this.triggerEventFun(myEventDetail);
    },

    resetTextData: function(currIdx) {
      this.setData({
        _currIdx: currIdx
      });
    },

    resetMessageData: function(currIdx) {
      this.data._tabs.forEach(function(item, index) {
        if (index == currIdx) {
          item.count = 0;
        }
      });

      this.setData({
        _currIdx: currIdx,
        _tabs: this.data._tabs
      });
    },

    triggerEventFun: function(myEventDetail) {
      var myEventOption = { bubbles: true, composed: true } // 触发事件的选项
      this.triggerEvent('tabchange', myEventDetail, myEventOption);
    }
  },
  scrolltoupper: function(e){
    console.log(e)
  }
});