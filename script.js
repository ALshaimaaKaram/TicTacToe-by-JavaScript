//Variables
var flag = "X";

var Player = document.getElementById("Player");
var Message = document.getElementById("Message");

var tr = document.querySelectorAll("tr");
var td = document.querySelectorAll("tr td");
Player.innerText = "The Player is " + flag;
//Cases of Win
win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

//detect and Write X or O 
function Write(e) {
    if (e.target.innerText === "") {
        e.target.innerText = flag;
        flag = (flag == "X") ? "O" : "X";
        Player.innerText = "The Player is " + flag;
    }
}



for (var i = 0; i < tr.length; i++) {
    tr[i].addEventListener('click', Write, false);
    tr[i].addEventListener('click', Win, false);
    // Win()
}

// function indexForTD() {
//     for (var i = 0; i < td.length; i++) {
//         td[i].index = i;
//     }
// }

//Check Win
var ckwin = false;

function Win(e) {
    for (var i = 0; i < win.length; i++) {
        if (td[win[i][0]].textContent === flag && td[win[i][1]].textContent === flag &&
            td[win[i][2]].textContent === flag) {

            Player.innerText = ""
            Message.innerText = flag + " is Win";
            e.target.innerText = "";

            for (var i = 0; i < tr.length; i++) {
                //remove event listenr
                tr[i].removeEventListener('click', Write);
                // Win()
            }
        }
        // e.stopPropogation();
    }
}

function Reset() {
    for (var i = 0; i < td.length; i++) {
        td[i].innerText = "";
    }
}

//Check if All Cells of Table Fill or Not
// function checkCells() {
//     for (var i = 0; i < td.length; i++) {
//         if(td[i] !== "")
//         {
//             // if(win())
//             Player.innerText = ""
//         }       
//     }   
// }