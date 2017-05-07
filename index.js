window.onload = () => {
    loadXMLDoc();
    var iframe = document.getElementById("theForm");
    console.log(window.innerWidth);
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

