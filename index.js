function load() {
    var list = document.getElementById('list');
    numberOfCurrentElement(list,'a',"Número de enlaces: ");
    numberOfCurrentElement(list,'p',"Número de parrafos: ");
}

function numberOfCurrentElement(list ,tag, description) {
    var elementInList = document.createElement('li');
    var newTag = document.getElementsByTagName(tag);
    elementInList.innerText = description + newTag.length;
    list.appendChild(elementInList);
}