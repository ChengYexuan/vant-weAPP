// pages/train/train.js
var wxCharts = require('../../utils/wxcharts.js')
var ringChart = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    steps: [
      {
        text: '训练前准备',
      },
      {
        text: '计划一',
      },
      {
        text: '计划二',
      },
      {
        text: '计划三',
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var windowWidth = 320;

    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    ringChart = new wxCharts({
      animation: true,
      canvasId: 'ringCanvas',
      type: 'ring',
      extra: {
        ringWidth: 15,
        pie: {
          offsetAngle: -45
        }
      },
      title: {
        name: '70%',
        color: '#53BC53',
        fontSize: 25
      },
      subtitle: {
        name: '完成度',
        color: '#53BC53',
        fontSize: 15
      },
      series: [{
          name: '成交量1',
          data: 15,
          stroke: false
      },  {
          name: '成交量4',
          data: 63,
          stroke: false
      }],
      disablePieStroke: true,
      width: windowWidth*0.5,
      // 调节画布高度，但超过200后会超出可视范围
      height: 175,
      dataLabel: false,
      // 图例只能放在底部，其他位置需要关闭图例，进行自定义
      legend: false,
      background: '#f5f5f5',
      padding: 0
  });
  ringChart.addEventListener('renderComplete', () => {
    console.log('renderComplete');
});
setTimeout(() => {
    ringChart.stopAnimation();
}, 500);
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