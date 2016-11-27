
var app=getApp();
Page({
  data:{
    name:app.username,
    imgUrls:[]
  },
  onLoad:function(options){
   
    
  },
  onReady:function(){
   var that=this;
    wx.request({
      url: 'https://zhihuapi.duapp.com/getNews',
      success: function(res){
        
        var img=res.data.top_stories;
        var imgsUrl=[];
       
        for(var i=0;i<img.length;i++){
          imgsUrl[i]=" https://images.weserv.nl/?url="+img[i].image.slice(7)
        }
      
        that.setData({
          imgUrls:imgsUrl
        })
      },
  })
  },
  onShow:function(){
    
    
  },
  onHide:function(){
    // 页面隐藏
    
  },
  onUnload:function(){
    // 页面关闭
    
  }
})