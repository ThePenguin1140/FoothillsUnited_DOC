/**
 * Created by jwuertz on 5/7/2017.
 */



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

        xmlhttp.open("GET", "https://spreadsheets.google.com/feeds/list/1HvdRsBKvkkU1nYuKez0SoqdTXrZjSd3L83JLgcFMASI/1/public/basic?alt=json", true);
        //"https://docs.google.com/spreadsheets/d/1HvdRsBKvkkU1nYuKez0SoqdTXrZjSd3L83JLgcFMASI/pubhtml", true);//"https://docs.google.com/spreadsheets/d/1HvdRsBKvkkU1nYuKez0SoqdTXrZjSd3L83JLgcFMASI/edit?usp=sharing", true);
        xmlhttp.send();

        //https://spreadsheets.google.com/feeds/list/1HvdRsBKvkkU1nYuKez0SoqdTXrZjSd3L83JLgcFMASI/1/public/basic?alt=json-in-script&callback=JSON_CALLBACK
    }


function handleData(data) {
    var rows = [];
    console.log(data.feed);
    var cells = data.feed.entry;

    for (var i = 0; i < cells.length; i++){
        var rowObj = {};
        rowObj.timestamp = cells[i].title.$t;
        var rowCols = cells[i].content.$t.split(',');
        for (var j = 0; j < rowCols.length; j++){
            var keyVal = rowCols[j].split(':');
            rowObj[keyVal[0].trim()] = keyVal[1].trim();
        }
        rows.push(rowObj);
    }

    // document.getElementById("formElement").innerHTML = JSON.stringify(rows);
}

//window.loadXMLDoc = loadXMLDoc;


window.onload = () => {
    loadXMLDoc();
    var iframe = document.getElementById("theForm");
    console.log(window.innerWidth)
    console.log("dsaufawiuefhalsufhd")
    iframe.width = window.innerWidth - 250;
    iframe.height = window.innerHeight;
    //iframe.onload = iframeLoaded;
}


//onload="iframeLoaded()"
// function iframeLoaded() {
//       var iFrameID = document.getElementById('theForm');
//       if(iFrameID) {
//             // here you can make the height, I delete it first, then I make it again
//             iFrameID.width = window.innerWidth;
//             iFrameID.height = "";
//             iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + "px";
//       }
//   }

