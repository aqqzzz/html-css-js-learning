/**
 * Created by 张文玘 on 2016/10/5.
 */

function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        oldonload();
        func();
    }
}