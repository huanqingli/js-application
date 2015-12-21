/**
 * Created by Muc on 15/12/20.
 */
//拖拽框架使用说明：
//drag(待拖拽对象，拖拽结束后执行的方程);
function drag(oBox,fn){
    oBox.onmousedown=function(ev){
        var ev=ev||event;
        var x=ev.clientX-parseInt(getStyle(oBox,"left"));
        var y=ev.clientY-parseInt(getStyle(oBox,"top"));
        document.onmousemove=function(ev){
            var ev=ev||event;
            oBox.style.left=ev.clientX-x+"px";
            oBox.style.top=ev.clientY-y+"px";
        };
        document.onmouseup=function(){
            document.onmousemove=document.onmouseup=null;
            if(fn){
                fn();
            }
        };
        return false
    };
}
//碰撞检测框架说明：
//crash(待检测物体1，待检测物体2)，如果碰撞返回true如果没碰到返回false
function crash(oBox1,oBox2){
    var x1=parseInt(getStyle(oBox1,"left"));
    var x2=parseInt(getStyle(oBox1,"top"));
    var x3=parseInt(getStyle(oBox1,"width"));
    var x4=parseInt(getStyle(oBox1,"height"));
    var y1=parseInt(getStyle(oBox2,"left"));
    var y2=parseInt(getStyle(oBox2,"top"));
    var y3=parseInt(getStyle(oBox2,"width"));
    var y4=parseInt(getStyle(oBox2,"height"));
    if(x1<y1-x3||x2<y2-x4||x1>y1+y3||x2>y2+y4){
        return false
    }
    else{
        return true
    }
}
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