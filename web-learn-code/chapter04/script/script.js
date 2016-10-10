/**
 * Created by 张文玘 on 2016/10/4.
 */

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);

function prepareGallery() {
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("imageGallery")) return false;

    var gallery = document.getElementById("imageGallery");
    var links = gallery.getElementsByTagName("a");

    for(var i = 0; i < links.length; i++){
        links[i].onclick = function(){
            return showPic(this);

        }
        links[i].onkeydown = links[i].onclick;
    }
}
function showPic(picNode){
    if(!document.getElementById("placeholder")) return true;


    var source = picNode.getAttribute("href");
    var placeHolder = document.getElementById("placeholder");
    placeHolder.setAttribute("src", source);



        var desSrc = picNode.getAttribute("title");
        var descrip = document.getElementById("description");
        descrip.innerHTML = desSrc;

    return false;

}

function preparePlaceholder(){
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/placeholder.gif");
    placeholder.setAttribute("alt", "my place holder");

    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var text = document.createTextNode("Choose a picture!");
    description.appendChild(text);

    var gallery = document.getElementById("imageGallery");
    gallery.parentNode.insertBefore(placeholder, gallery);
    gallery.parentNode.insertBefore(description,gallery);
}

function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else {
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement, targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement, targetElement.nextElementSibling);
    }
}

