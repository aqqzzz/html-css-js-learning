/**
 * Created by 张文玘 on 2016/10/5.
 */
function addClass(element, className){
    if(!element.getAttribute("class")){
        element.setAttribute("class", className);
    }else {
        var oldName = element.getAttribute("class");
        className = oldName + className;
        element.setAttribute("class", className);
    }
}