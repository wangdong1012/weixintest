// components/item/item.js
Component({
  /**
   * 组件的属性列表
   */
  // 数据维护
  properties: {//外部界面传递给组件得属性
    content: {//内容
      type: String,
      value: '',
    },
    tags:{//标签
      type:Array,
      value:[]
    },
    extra:{//备注信息
      type:String,
      value:''
    },
    finished:{//状态
      type:Boolean,
      value:false
    },
    action:{//历史纪录
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {//组件本身得属性

  },
  
  attached:function(){
    console.log('组建被调用')
  },
  detached:function(){
    console.log('组建被销毁')
  },
  /**
   * 组件的方法列表
   */
  methods: {
    f0: function () {
      this.triggerEvent('reomeView', this.dataset.index);
    },
    f1:function(){
      this.triggerEvent('reomeTrue', this.dataset.index);
    }
  }
})
