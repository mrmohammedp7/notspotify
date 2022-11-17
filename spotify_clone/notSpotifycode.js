// let changeicon=document.getElementsByClassName("pause");
// changeicon.innerHTML("");

function togglePlayPause() {
    var img = document.getElementById("ppImg").src;
    if (img.indexOf("svg files/play.svg") != -1) {
        document.getElementById("ppImg").src = "svg files/pause.svg";
    }
    else {
        document.getElementById("ppImg").src = "svg files/play.svg";
    }
}
