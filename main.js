var col1 = document.querySelector("#column1");

col1.onclick = function () {
    var redDisc = document.createElement("div");
    redDisc.className = "red";
    var destination = document.getElementById("column1");
    destination.appendChild(redDisc);

}