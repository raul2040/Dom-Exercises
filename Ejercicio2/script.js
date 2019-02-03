function main() {
    httpToHttps();
    changeClass('p', 'importante', 'resaltar');
    changeClass('p', '', 'normal');
    addAtribute('a','importante')
}

function httpToHttps() {
    var aElements = document.getElementsByTagName('a');
    for(var i=0; i<aElements.length; i++) {
        aElements[i].href = aElements[i].href.replace('http', 'https');
    }
}

function changeClass(tagName, beforeClass,afterClass) {
    var elements = document.getElementsByTagName(tagName);
    for(var i=0; i<elements.length;i++) {
        if(elements[i].className == beforeClass) {
            elements[i].className = afterClass;
        }
    }
}

function addAtribute(tagName, className) {
    var elements = document.getElementsByTagName(tagName);
    for(var i=0; i<elements.length; i++) {
        if(elements[i].className == className) {
            elements[i].setAttribute('name', className + i);
        }
    }
}