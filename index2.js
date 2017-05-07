

function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
               handleData(JSON.parse(xmlhttp.responseText));
               //document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };

    xmlhttp.open("GET", "https://spreadsheets.google.com/feeds/cells/1HvdRsBKvkkU1nYuKez0SoqdTXrZjSd3L83JLgcFMASI/1/public/basic?alt=json", true);     
    xmlhttp.send();    
}


function handleData(data) {    
    var rows = [];
    //console.log(data.feed.entry);
    var cells = data.feed.entry;
    var numOfEntries = cells.length / 2;

    var rowObj = {};
    for (var i = 0; i < numOfEntries; i++){
            
        rowObj[cells[i*2].content.$t] = cells[i*2+1].content.$t;
        //for (var j = 0; j < rowCols.length; j++){
            //var keyVal = rowCols[j].split(':');
            //rowObj[keyVal[0].trim()] = keyVal[1].trim();
        //}        
        
    }
    console.log(rowObj);
    
    document.getElementById("summary").innerHTML = "<p>" + rowObj.t1 + "</p>" +
            "<p>" + rowObj.t2 + "</p>" + "<p> " + rowObj.t3 + "</p>";
}

//window.loadXMLDoc = loadXMLDoc;
