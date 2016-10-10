/**
 * Created by 张文玘 on 2016/10/5.
 */
function displayCitations(){
    if(!document.getElementsByTagName || !document.createElement
        || !document.createTextNode) return false;

    var quotes = document.getElementsByTagName("blockquote");


    for(var i = 0; i < quotes.length; i++){

        if(!quotes[i].getAttribute("cite")) continue;


        var cite = quotes[i].getAttribute("cite");

        var quoteChildren = quotes[i].getElementsByTagName('*');
        if(quoteChildren.length < 1) continue;
        var elem = quoteChildren[quoteChildren.length-1];


        var a = document.createElement("a");
        var a_value = document.createTextNode("source");
        a.appendChild(a_value);
        a.setAttribute("href", cite);

        var superscript = document.createElement("sup");
        superscript.appendChild(a);
        elem.appendChild(superscript);

    }
}
addLoadEvent(displayCitations);