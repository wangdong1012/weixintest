// miniprogram/pages/index.js
import Watch from '../../components/weach.js';
let watch;
Page({
  /**
   * 页面的初始数据
   */
  
  data: {
    todo:[],
    inputValue:'',
    value:'',
  },
  watch:{
    todo: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal);
    },
  },
  f0:function(){
    let todos = this.data.todo;
    todos.push({content: this.data.inputValue, finished:this.data.finished});
    watch.setData({ todo: todos, value:''});
  },
  fq:function(){
    let arr = this.data.todo;
    for(let item of arr){
      item.finished = true;
    }
    watch.setData({todo:arr});
    
  },
  fninput: function (e) {
    watch.setData({ inputValue: e.detail.value});
  },
  reomeView:function(e){
    let todos= this.data.todo;
    todos.splice(e.detail,1);
    watch.setData({ todo: todos});
    
  },
  reomeTrue:function(e){
    let todos = this.data.todo;
    todos[e.detail].finished = !todos[e.detail].finished
    watch.setData({todo:todos});
  },
  fr:function(){
    let todos = this.data.todo;
    let newTodos = [];
    todos.forEach((a,b)=>{
      if(!a.finished){
        newTodos.push(a)
      }
    })
    watch.setData({ todo: newTodos })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    watch = new Watch(this);
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