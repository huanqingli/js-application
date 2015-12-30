/**
 * Created by Muc on 15/12/29.
 */
var oName=document.getElementById("name");
var oMessage=document.getElementById("message");
var oSubmit=document.getElementById("submit");
var aul=document.getElementsByTagName("ul");
var ali=aul[0].getElementsByTagName("li");
ajax("get","getData.php","",function(str){
    var res=str.split(",");
    for(var i=0;i<res.length;i=i+3){
        var oH3=document.createElement("h3");
        oH3.innerHTML=res[i]+":";
        var oArticle=document.createElement("article");
        oArticle.innerHTML=res[i+1];
        var oli=document.createElement("li");
        oli.appendChild(oH3);
        oli.appendChild(oArticle);
        aul[0].insertBefore(oli,ali[0]);
    }
});
oSubmit.onclick=function(){
    ajax("post","postData.php","name="+oName.value+"&message="+oMessage.value,function(str){
    });
    var oH3=document.createElement("h3");
    oH3.innerHTML=oName.value+":";
    var oArticle=document.createElement("article");
    oArticle.innerHTML=oMessage.value;
    var oli=document.createElement("li");
    oli.appendChild(oH3);
    oli.appendChild(oArticle);
    aul[0].insertBefore(oli,ali[0]);
    oName.value="";
    oMessage.value="";
};
