/**
 * Created by Muc on 15/12/18.
 */
var oTime = document.getElementById("time");
var aImg1 = oTime.getElementsByTagName("img");
var oCountdown = document.getElementById("countdown");
var aImg2 = oCountdown.getElementsByTagName("img");
var aTimeImg=[];
for(var i=0;i<14;i++){
    aTimeImg[i]="img/"+i+".png";
}
var oBtn=document.getElementById("setBtn");
var aInput=document.getElementsByTagName("input");
oBtn.onclick=function(){
    var time=[];
    for(var z=0;z<6;z++){
        time[z]=parseInt(aInput[z].value);
    }
    var target=new Date( time[0],time[1]-1,time[2],time[3],time[4],time[5] );
    setInterval(function(){
        countdown(aImg2,aTimeImg,target);
    },1000);
};
setInterval(function(){
    getTime(aImg1,aTimeImg)
},1000);


