/**
 * Created by 张文玘 on 2016/10/5.
 */
function stripTables(){
    /*var tables = document.getElementsByTagName("table");

    for(var i = 0; i < tables.length; i++){


        var trs = tables[i].getElementsByTagName("tr");
        for(var j = 0; j < trs.length; j++){
            if(j%2!=0){
                trs[j].style.backgroundColor = '#ffc';
            } else {
                trs[j].style.backgroundColor = '#fff';
            }
        }
    }*/

    //书上的实现方法
    if(!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    var odd, rows;
    for(var i = 0; i < tables.length; i++){
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        //通过不断修改odd的true、false来区分是奇数行还是偶数行
        for(var j = 0; j < rows.length; j++){
            if(odd==true){
                addClass(rows[j],"odd");
                odd = false;
            }else {
                odd = true;
            }
        }
    }
}

addLoadEvent(stripTables);