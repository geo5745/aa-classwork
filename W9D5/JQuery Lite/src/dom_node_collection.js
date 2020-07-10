class DOMNodeCollection {
    constructor (htmlElements) {
        this.htmlElements = htmlElements;

    }

    html(string) {
        if (string === undefined) {
            return this.htmlElements[0].innerHTML;
        } else {
            this.htmlElements = this.htmlElements.map(function(ele) {
               return ele.innerHTML = string;
            });
            return this;
        }
    }

    empty() {
       return this.html("");
    }

    append(arg) {
    
        if (arg instanceof DOMNodeCollection) {
            this.htmlElements.forEach(function(ele) {
                arg.htmlElements.forEach(function (argEle) {
                    ele.innerHTML = ele.innerHTML.concat(argEle.outerHTML);
                    //debugger;
                    //return combined;
                });  
            });
        } else {
            this.htmlElements = this.htmlElements.map(function(ele) {
                return ele.innerHTML += arg;
            });
        }
        return this;
    }

    attr(name, val) {
        if (val === undefined) {
            return this.htmlElements[0].getAttribute(name);
        } else {
            this.htmlElements = this.htmlElements.map(function(ele) {
                ele.setAttribute(name, val)
                return ele; 
            });
            return this;
        }
    }

    addClass(htmlClass) {
        this.htmlElements = this.htmlElements.map(function(ele) {
            ele.setAttribute("class", htmlClass)
            return ele; 
        });
        return this;
    }

    removeClass(htmlClass) {
        this.htmlElements = this.htmlElements.map(function(ele) {
            if (ele.getAttribute("class") === htmlClass) {
                ele.removeAttribute("class", htmlClass)
            }
            return ele; 
        });
        return this;
    }

    children() {
        let childrenArray = []
        this.htmlElements.forEach(function(ele) {
            //debugger;
            htmlCollection = ele.children;
            thisEleChildren = Array.from(htmlCollection);
            childrenArray.concat(thisEleChildren);
            //debugger;
        });
        return new DOMNodeCollection(childrenArray);
    }

//http://127.0.0.1:5500/index.html

//https://www.w3schools.com/jquery/html_removeclass.asp

// https://www.w3schools.com/jsref/met_element_setattribute.asp
}



module.exports = DOMNodeCollection;