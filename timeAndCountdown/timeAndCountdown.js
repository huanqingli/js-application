/**
 * Created by Muc on 15/12/18.
 */
//使用说明：
//getTime(计划装着时间的图片元素对象的集合，装着1到9冒号月日天图片的相对路径的数组)
function getTime(aImg,aTimeImg){
    var myTime=new Date();
    var iMonth = myTime.getMonth()+1;
    var iDate = myTime.getDate();
    var iHours = myTime.getHours();
    var iMin = myTime.getMinutes();
    var iSec = myTime.getSeconds();
    var aTimeNum=[];
    aTimeNum[0]=Math.floor(iMonth/10);
    aTimeNum[1]=iMonth%10;
    aTimeNum[2]=11;
    aTimeNum[3]=Math.floor(iDate/10);
    aTimeNum[4]=iDate%10;
    aTimeNum[5]=12;
    aTimeNum[6]=Math.floor(iHours/10);
    aTimeNum[7]=iHours%10;
    aTimeNum[8]=10;
    aTimeNum[9]=Math.floor(iMin/10);
    aTimeNum[10]=iMin%10;
    aTimeNum[11]=10;
    aTimeNum[12]=Math.floor(iSec/10);
    aTimeNum[13]=iSec%10;
    for(var j=0;j<14;j++){
        aImg[j].src=aTimeImg[aTimeNum[j]];
    }
}
//使用说明：
//getTime(计划装着时间的图片元素对象的集合，装着1到9冒号月日天图片的相对路径的数组,倒计时的目标时间)
//设置目标时间的方式例如：       var target=new Date( 2017,11,19,11,23,59 );（年月日时分秒都是数字类型）
function countdown(aImg,aTimeImg,target){
    var myTime=new Date();
    var t=(target-myTime)/1000;
    if(t<0){t=0}
    var day=Math.floor(t/86400);
    var hour=Math.floor(t%86400/3600);
    var min=Math.floor(t%86400%3600/60);
    var sec=Math.floor(t%60);
    var aTimeNum=[];
    aTimeNum[0]=Math.floor(day%10000/1000);
    aTimeNum[1]=Math.floor(day%1000/100);
    aTimeNum[2]=Math.floor(day%100/10);
    aTimeNum[3]=day%10;
    aTimeNum[4]=13;
    aTimeNum[5]=Math.floor(hour/10);
    aTimeNum[6]=hour%10;
    aTimeNum[7]=10;
    aTimeNum[8]=Math.floor(min/10);
    aTimeNum[9]=min%10;
    aTimeNum[10]=10;
    aTimeNum[11]=Math.floor(sec/10);
    aTimeNum[12]=sec%10;
    for(var j=0;j<13;j++){
        aImg[j].src=aTimeImg[aTimeNum[j]];
    }
}