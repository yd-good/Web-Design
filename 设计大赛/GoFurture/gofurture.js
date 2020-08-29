window.onload=function(){
    //绑定选中颜色
    var navinfo=document.getElementsByClassName("navinfo");
    var rcolor="rgb(47, 96, 255)";
    var newcolor="rgb(226, 110, 43)";
    navinfo[4].style.color=newcolor;
    for(var i=0;i<navinfo.length;i++){
           navinfo[i].onclick=function(){
            for(var i=0;i<navinfo.length;i++){
                navinfo[i].style.color=rcolor;
            }
            this.style.color=newcolor;
           }
    }
    //更新时间
    var time=document.getElementsByClassName("time");
     var date=new Date();
     var month=(date.getMonth()+1)<10?("0"+(date.getMonth()+1)):(date.getMonth()+1);
     var day=(date.getDate());
     for(var i=0;i<time.length;i++){
    time[i].innerHTML+="&nbsp;&nbsp;&nbsp;"+month+"-"+day+"";
}

   //排行榜颜色变化
   var ph=document.getElementsByClassName("paihangbang");
   var afont=document.getElementsByClassName("afont");
   ph[0].style.color="gray";
   setInterval(function(){
    for(var i=0;i<afont.length;i++){
        var a=parseInt(Math.random()*250);
        var g=parseInt(Math.random()*250);
        var b=parseInt(Math.random()*250);
        afont[i].style.color="rgb("+a+","+g+","+b+")";
    }
   },1500)
   
    //经典著作标题变色
    var bookcolor=document.getElementsByClassName("title");
    for(var i=0;i<bookcolor.length;i++){
        var a=parseInt(Math.random()*250);
        var g=parseInt(Math.random()*250);
        var b=parseInt(Math.random()*250);
        bookcolor[i].children[0].style.color="rgb("+a+","+g+","+b+")";
    }
    
}