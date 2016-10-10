/**
 * Created by 张文玘 on 2016/10/5.
 */
function displayAbbreviation(){
    var abbrLinks = document.getElementsByTagName("abbr");
    if(abbrLinks.length<1) return false;
    var defs = new Array();
    for(var i = 0; i < abbrLinks.length; i++){
        var definition = abbrLinks[i].getAttribute("title");

        if(abbrLinks[i].childNodes.length<1) continue;
        var key = abbrLinks[i].lastChild.nodeValue;
        defs[key] = definition;

    }

    var dl = document.createElement("dl");
    /*for(i = 0; i < abbrLinks.length; i++){
        var dt = document.createElement("dt");
        var abbrText = document.createTextNode(contents[i]);
        dt.appendChild(abbrText);

        var dd = document.createElement("dd");
        var titleText = document.createTextNode(titles[i]);
        dd.appendChild(titleText);

        dl.appendChild(dt);
        dl.appendChild(dd);
    }*/
    for(key in defs) {
        var definition = defs[key];
        var dt = document.createElement("dt");
        var abbrText = document.createTextNode(key);
        dt.appendChild(abbrText);

        var dd = document.createElement("dd");
        var titleText = document.createTextNode(definition);
        dd.appendChild(titleText);

        dl.appendChild(dt);
        dl.appendChild(dd);
    }
    if(dl.childNodes.length < 1) return false;

    var header = document.createElement("h2");
    var headerText = document.createTextNode("Abbreviations");
    header.appendChild(headerText);

    document.body.appendChild(header);

    document.body.appendChild(dl);
}

addLoadEvent(displayAbbreviation);