/**
 * Created by Muc on 15/12/29.
 */
//ajax工具说明
//ajax(数据交互方式，请求文件名，成功后执行的函数)
//(交互方式可以是POST和GE，AJAX取得的数据以字符串形式传入回调函数)
function ajax(method,url,data,fnSucc){
    var oAjax=new XMLHttpRequest();
    if (method == "get" && data) {
        url += "?" + data;
    }
    oAjax.open(method, url, true);
    oAjax.open(method,url,true);
    if (method == 'get') {
        oAjax.send();
    } else {
        oAjax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        oAjax.send(data);
    }
    oAjax.onreadystatechange=function ()
    {
        if(oAjax.readyState==4)
        {
            if(oAjax.status==200)
            {
                fnSucc(oAjax.responseText);
            }
        }
    };
}
