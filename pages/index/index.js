Page({
  data:{
    result:"0",
    first:'',
    last:'',
    oprator:'',
    flag:true,
   
  },
  tap:function(e){
     var v=e.currentTarget.dataset.value;
     var s=this.data.result;
     if(this.data.flag){
      this.setData({
        result:v,
        flag:false
      })
    }else{
      this.setData({
        result:s+v
      })
    }
      
     
  },
 setoprator:function(e){
    var v=e.currentTarget.dataset.value;
    var s=this.data.result
    this.setData({
      oprator:v,
      first:s,
      flag:true,
     

    });
  },
   cal:function(){
    var r;
    this.setData({
       last:this.data.result,
    })
    if(this.data.oprator){
    var f=parseInt(this.data.first);
    var l=parseInt(this.data.last);
 
    if(this.data.oprator==="+"){
        r=f+l;
        this.setData({
          result:r,

        })
    }
    else if(this.data.oprator==="-"){
       r=f-l;
        this.setData({
          result:r
        })
    }
    else if(this.data.oprator==="*"){
        r=f*l;
        this.setData({
          result:r
        })
    }
    else if(this.data.oprator==="/"){
        r=f/l;
        this.setData({
          result:r,
          first:"",
          last:"",
          oprator:null,
        })
    }
    }
  },
  back:function(){
      this.setData({
          result:'0',
          first:"",
          last:"",
          flag:true
      })
  },

})