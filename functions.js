//function zum erzeugen derTabelle
function startContributor(messe) {
    node = document.getElementById("content");
    node.appendChild(createContributors(contributors,messe));
}

//Funktion zum Erzeugen einer Tabelle
function createContributors(contributors, messe) {
    var Table = document.createElement("table");
    var tablebody = document.createElement("tbody");
    //Erzeuge eine Reihe mit den FeldWerten
    row = document.createElement("tr");
    cell = document.createElement("td");
    cell.appendChild(document.createTextNode("Name"));
    cell.style.color = "#0000FF";
    row.appendChild(cell);
    cell2 = document.createElement("td");
    cell2.appendChild(document.createTextNode("Vorname"));
    cell2.style.color = "#0000FF";
    row.appendChild(cell2);
    cell3 = document.createElement("td");
    cell3.appendChild(document.createTextNode("Studiengang"));
    cell3.style.color = "#0000FF";
    row.appendChild(cell3);
    cell4 = document.createElement("td");
    cell4.appendChild(document.createTextNode("eMail"));
    cell4.style.color = "#0000FF";
    row.appendChild(cell4);

    tablebody.appendChild(row);

    //befülle die Tabelle
    for (var member in contributors[messe]) {
        //für jeden Teilnehmer eine Reihe
        current_row = document.createElement("tr");
        for (var field in contributors[messe][member]) {
            //für jedes Attribut eine Spalte
            current_cell = document.createElement("td");
            //ersetzte die email
            var string = replaceEmail(contributors[messe][member][field]);
            currenttext = document.createTextNode(string);
            current_cell.appendChild(currenttext);
            current_row.appendChild(current_cell);
        }
        tablebody.appendChild(current_row);
    }
    //setzte die Tabelle
    Table.appendChild(tablebody);
    Table.setAttribute("ID", messe);
    Table.setAttribute("border", 1);
    Table.setAttribute("cellpadding", 5);
    Table.setAttribute("cellspacing", 0);
    Table.setAttribute("align", "center");
    Table.style.top = "50px";
    Table.style.alignSelf = "center";
    Table.style.width = "50%";
    return Table;
}


//function für das umandeln der email
function replaceEmail(string) {
    while (string.indexOf("DOT") > -1) {
        string = string.replace("DOT", ".");
    }
    string = string.replace("AT", "@");
    return string;
}

//Initialisierung der Kosten Tabelle
function startFairs() {
    node = document.getElementById("content");
    node.appendChild(createFairs(fairsdata, "fairs"));
}


//funktion zum erzeugen der KostenTabelle
function createFairs(fairsdata, id) {
    var Table = document.createElement("table");
    var tablebody = document.createElement("tbody");

    //Erzeuge die Felder
    row = document.createElement("tr");
    cell = document.createElement("td");
    cell.appendChild(document.createTextNode("Messe"));
    cell.style.color = "#0000FF";
    row.appendChild(cell);
    cell2 = document.createElement("td");
    cell2.appendChild(document.createTextNode("Kosten"));
    cell2.style.color = "#0000FF";
    row.appendChild(cell2);
    tablebody.appendChild(row);

    //tabelle wird gefüllt
    for (var eigenschaft in fairsdata) {
        current_row = document.createElement("tr");
        current_cell = document.createElement("td");
        current_cell.appendChild(document.createTextNode(eigenschaft));
        current_row.appendChild(current_cell);
        current_cell2 = document.createElement("td");
        current_cell2.appendChild(document.createTextNode(fairsdata[eigenschaft] + "€"));
        current_row.appendChild(current_cell2);
        tablebody.appendChild(current_row);
    }
    //einstellungen
    Table.appendChild(tablebody);
    Table.setAttribute("ID", id);
    Table.setAttribute("border", 1);
    Table.setAttribute("cellpadding", 5);
    Table.setAttribute("cellspacing", 0);
    Table.setAttribute("align", "center");
    Table.style.width = "50%";
    Table.style.left = "0%";
    return Table;

}

//variable zur abspeicherung des activen Elements
var activeElemID;

//Initialierung aller Elemente beim Start
function start() {
    startFairs();
    activeElemID = "fairs";
    select("infos", '#4169E1');
    document.getElementById("messen").style.visibility = "hidden";
}

//Anzeigen der Kosten
function fairs() {
    remove(activeElemID);
    select('infos', '#4169E1');
    unselect('member');
    unselect('messe1');
    unselect('messe2');
    unselect('messe3');
    document.getElementById("messen").style.visibility = "hidden";
    startFairs();
    activeElemID = "fairs";
}

//Anzeigen des Menüs für die Auswahl der Messe
function member() {
    document.getElementById("fairs").style.visibility = "hidden";
    select('member', '#4169E1');
    unselect('infos');
    //zeige Messen Auswahl
    document.getElementById("messen").style.visibility = "visible";

}


//Anzeigen der Cebit-Teilnehmer
function cebit() {
    remove(activeElemID);
    select('messe1', '#1E90FF');
    unselect('messe2');
    unselect('messe3');
    startContributor("cebit");
    activeElemID = "cebit";

}
//Anzeigen der Conhit-Teilnehmer
function conhit() {
    remove(activeElemID);
    select('messe3', '#1E90FF');
    unselect('messe2');
    unselect('messe1');
    startContributor('conhit');
    activeElemID = "conhit";
}

//Anzeichen der WebtechCon-Teilnehmer
function webtechcon() {
    remove(activeElemID);
    select('messe2', '#1E90FF');
    unselect('messe1');
    unselect('messe3');
    startContributor('webtechcon');
    activeElemID = "webtechcon";
}


//funktion um die Auswahl zu Markieren
function select(id, colour) {
    document.getElementById(id).style.backgroundColor = colour;
}

//funktion um die Auswahl zu demarkieren
function unselect(id) {
    document.getElementById(id).style.backgroundColor = window.document.bgColor;
}

//funktion zum Entfernen von Elementen
function remove(id) {
    node = document.getElementById(id);
    node.parentNode.removeChild(node);
}


function checkForm(){
    var falscheEingabe = false;
    var matrikelNrFalsch = false;
    var handyFalsch = false;

    var matrikelNr = document.getElementById("matrikelnummer");
    var handy = document.getElementById("handy");

    if(!/^\d+$/.test(matrikelNr.value)){
        falscheEingabe = true;
        matrikelNrFalsch = true;
    }

    if(!/^0\d+$/.test(handy.value)){
        falscheEingabe = true;
        handyFalsch = true;
    }

    if(falscheEingabe){
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben");

        return false;
    }

}
