/**
 * Created by Muc on 15/11/26.
 */
//面向对象的选项卡框架说明：(选中标签会增加class："active".)
//new tabControl(总标签容器的ID,总内容容器的ID,子标签的Tag name,子内容的Tag name)
function tabControl(tab,box,tabTag,boxTag){
    this.oDiv1=document.getElementById(tab);
    this.oDiv2=document.getElementById(box);
    this.aBtn=this.oDiv1.getElementsByTagName(tabTag);
    this.aBox=this.oDiv2.getElementsByTagName(boxTag);
    for(var i=0;i<this.aBtn.length;i++ ){
        this.aBtn[i].index=i;
        var _this=this;
        this.aBtn[i].onclick=function(){
            _this.showTab(this);
        }
    }
}
tabControl.prototype.showTab=function(oBtn){
    for(var j=0 ;j<this.aBox.length;j++){
        this.aBtn[j].className="";
        this.aBox[j].style.display="none";
    }
    oBtn.className="active";
    this.aBox[oBtn.index].style.display="block";
}
