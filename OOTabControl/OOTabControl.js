/**
 * Created by Muc on 15/11/26.
 */

function TabControl(tag,box,tagTag,boxTag){
    this.oDiv1=document.getElementById(tag);
    this.oDiv2=document.getElementById(box);
    this.aBtn=this.oDiv1.getElementsByTagName(tagTag);
    this.aBox=this.oDiv2.getElementsByTagName(boxTag);
    for(var i=0;i<this.aBtn.length;i++ ){
        this.aBtn[i].index=i;
        var _this=this;
        this.aBtn[i].onclick=function(){
            _this.showTab(this);
        }
    }
}
TabControl.prototype.showTab=function(oBtn){
    for(var j=0 ;j<this.aBox.length;j++){
        this.aBtn[j].className="";
        this.aBox[j].style.display="none";
    }
    oBtn.className="active";
    this.aBox[oBtn.index].style.display="block";
}
