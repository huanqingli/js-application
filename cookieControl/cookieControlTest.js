/**
 * Created by Muc on 15/12/19.
 */
var aInput=document.getElementsByTagName("input");
var oRb=document.getElementById("remember");
var oFg=document.getElementById("forget");
if ( getCookie("username") ) {
    aInput[0].value = getCookie("username");
}
if ( getCookie("password") ){
    aInput[1].value = getCookie("password");
}

oRb.onclick=function(){
    setCookie("username",aInput[0].value,100000);
    setCookie("password",aInput[1].value,100000);
};
oFg.onclick=function(){
    removeCookie("username");
    removeCookie("password");
};