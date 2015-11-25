/**
 * Created by Muc on 15/11/24.
 */
function gallery() {
    var pic = document.getElementById("gallery");
    var minPic = pic.getElementsByTagName("li");
    for (var i = 0; i < minPic.length; i++) {
        minPic[i].firstChild.onclick = function () {
            replace(this);
        }
    }
    function replace(img) {
        var bigPic = document.getElementById("bigpic");
        bigPic.src = img.src;
        var picLink = document.getElementById("piclink");
        picLink.href = img.src;
    }
    var oUl = document.getElementById("roller");
    roller(oUl,pic,3,2)
}gallery();