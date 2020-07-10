const DomNodeCollection = require("./dom_node_collection.js");
const DOMNodeCollection = require("./dom_node_collection.js");


function $l(...arg) {

    try {
        htmlElements = document.querySelectorAll(arg[0]);
        argArray = Array.from(htmlElements);
    }
      catch(err) {
        argArray = arg;
    }
    return new DOMNodeCollection(argArray);
    
}   




window.$l = $l;
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    const $li = $l('li');
    const $jli = $('li');
    const $ul = $l('ul');

    console.log($ul.children());

    //console.log($jli.attr("country","USA"));

    //console.log($li.append("<marquee>Fantastic</marquee>"));

    //console.log($ul.htmlElements[0].innerHTML);
    // console.log($li.htmlElements[1]);
    // console.log($li.htmlElements[2]);
    // console.log($li.htmlElements[3]);

    //const $jul = $('ul').html();
    //console.log($jul);

    //const vanillaUL = document.getElementsByTagName("UL")[0];
    //console.log(vanillaUL.innerHTML);

    //console.log($ul.html());

    //-----------------------------------------
    //console.log($jli.empty());
    //console.log($li.empty());



});




