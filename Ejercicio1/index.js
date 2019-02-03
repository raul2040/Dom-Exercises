function main() {
    var list = document.getElementById('list');
    numberOfCurrentElement(list,'a',"Número de enlaces: ");
    numberOfCurrentElement(list,'p',"Número de parrafos: ");
    obtainURL(list, 2, "La url del penultimo enlace es la siguiente: ");
    obtainURL(list, 1, "La url del ultimo enlace es la siguiente: ");
    numberOfNodesWithURL(list, "http://www.jurassicpark.com/", "Número de enlaces con esta url:");
    obtainNumbersOfUrlsInElement(list,'p', "Número de enlaces en parrafos: ")
}

function numberOfCurrentElement(list ,tag, description) {
    var elementInList = document.createElement('li');
    var newTag = document.getElementsByTagName(tag);
    elementInList.innerText = description + newTag.length;
    list.appendChild(elementInList);
}

function obtainURL(list, position, description) {
    var elementInList = document.createElement('li');
    var collectionNodes = document.getElementsByTagName('a');
    var key = collectionNodes.length - position;
    var url = collectionNodes[key].href;
    elementInList.innerText = description + url;
    list.appendChild(elementInList);
}

function numberOfNodesWithURL(list,url, description) {
    var collectionNodes = document.getElementsByTagName('a');
    var elementInList = document.createElement('li');
    var counter = 0;
    for(var i=0; i<collectionNodes.length; i++) {
        if (collectionNodes[i].href == url) {
            counter++;
        }
    }
    elementInList.innerText = description + " " +  url + " " + counter;
    list.appendChild(elementInList);
}

function obtainNumbersOfUrlsInElement(list,tagName,description) {
    var elements = document.getElementsByTagName(tagName);
    var elementInList = document.createElement('li');
    var counter = 0;
    for(var i=0; i<elements.length; i++) {
        counter += elements[i].getElementsByTagName('a').length
    }
    elementInList.innerText = description + counter;
    list.appendChild(elementInList);
}
