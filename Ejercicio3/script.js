const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
    ];

function main() {
    var container = document.getElementById('mountains');
    var keys = Object.keys(MOUNTAINS[0]);
    createTableWithHeaders(container, keys);
    createTableRowsWithContent(keys);
    alignItems("right",1);

}
function createTableWithHeaders(container, keys) {
    var table = document.createElement('table');
    for(var i=0;i<keys.length;i++) {
        var header = document.createElement('td');
        header.innerText = keys[i];
        table.appendChild(header);
    }
    table.setAttribute('id', 'customTable');
    container.appendChild(table);
}

function createTableRowsWithContent(keys) {
    var table = document.getElementById('customTable');
    for(var i=0; i<MOUNTAINS.length;i++) {
        var tableRow = document.createElement('tr');
        obtainValuesOfObject(MOUNTAINS[i],keys, tableRow)
        table.appendChild(tableRow);
    }
}

function obtainValuesOfObject(Object,keys,container) {
    for(var i=0; i<keys.length; i++) {
        var tableTd = document.createElement('td');
        tableTd.innerText = Object[keys[i]];
        container.appendChild(tableTd);
    }
}

function alignItems(direction,column) {
    var tableRows = document.getElementsByTagName('tr');
    for(var i=0; i<tableRows.length;i++) {
        tableRows[i].children[column].style.textAlign = direction;
    }
}
