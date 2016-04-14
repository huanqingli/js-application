/**
 * Created by Muc on 15/11/24.
 */
//自适应无缝滚动工具说明：（需要配合获取元素工具）
//roller(总容器,可见部分容器,总容器与可见容器宽度比值,运动速率)
function roller(total,view,n,rate){
    function fit() {
        total.style.width = parseInt(getStyle(view,"width")) * n + "px";
    }
    fit();
    window.addEventListener("resize", fit);
    var timer = setInterval(roll, 30);
    function roll() {
        total.style.left =parseInt(getStyle(total,"left"))  - rate + "px";
        if (parseInt(getStyle(total,"left")) == -parseInt(getStyle(total,"width")) * (n-1)/n) {
            total.style.left = 0 + "px"
        }
    }
    total.onmouseover = function () {
        clearInterval(timer);
    };
    total.onmouseout = function () {
        timer = setInterval(roll, 30);
    };
}
// 获取元素属工具架说明：（为兼容IE 6 7 8）
// getStyle(元素,带获取属性)
function getStyle(box,attr){
    if(box.currentStyle){
        return box.currentStyle[attr];
    }else{
        if(getComputedStyle(box,null)[attr]=="auto"){
            return 0;
        }else{
            return getComputedStyle(box,null)[attr];
        }
    }
}