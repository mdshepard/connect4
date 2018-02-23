var columns = document.querySelectorAll(".column");

player1 = true;
player2 = false;

let columnPos = [0,0,0,0,0,0,0,0]

const getToken = function (event) {
    let destination = this;
    let redDisc = document.createElement("div");
    let blackDisc = document.createElement("div");
    blackDisc.className = "gray";
    redDisc.className = "red";

    columnPos[columns.id]++;

    if (player1 === true) {
        destination.appendChild(redDisc);
        player1 = false;
        player2 = true;
        console.log(player2);
    }
    else {
        destination.appendChild(blackDisc);
        player1 = true;
        player2 = false;
    }

}

for (let i=0; i < columns.length; i++) {
    let column = columns[i];
    column.onclick = getToken;
}
