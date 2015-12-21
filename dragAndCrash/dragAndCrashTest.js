/**
 * Created by Muc on 15/12/20.
 */
var oBox=document.getElementById("box");
var oBorder=document.getElementById("border");
drag(oBox,test);
function test(){
    crash(oBox,oBorder);
    if(crash(oBox,oBorder)) {
        oBox.style.display="none";
        oBorder.style.backgroundColor="black";
    }
}

