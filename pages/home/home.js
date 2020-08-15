Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    courseList:[],
    videoList:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperList()
    this.getCourseList()
    this.getVideoList()
  },
  getSwiperList() {
    wx.request({
      url: 'http://localhost:3000/api/home/swipers',
      success:(res)=>{
        let {message,status} = res.data
        if(status===0){
          this.setData({
            swiperList:message
          })
        }
      }
    })
  },
  getCourseList() {
    wx.request({
      url: 'http://localhost:3000/api/home/course ',
      success:(res)=>{
        let {message,status} = res.data
        if(status===0){
          this.setData({
            courseList:message
          })
        }
      }
    })
  },
  getVideoList() {
    wx.request({
      url: 'http://localhost:3000/api/home/video',
      success:(res)=>{
        let {message,status} = res.data
        if(status===0){
          this.setData({
            videoList:message
          })
        }
      }
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