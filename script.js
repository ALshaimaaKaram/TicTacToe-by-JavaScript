//Variables
var flag = "X";

var Player = document.getElementById("Player");
var Message = document.getElementById("Message");

var tr = document.querySelectorAll("tr");
var td = document.querySelectorAll("tr td");

// Player.innerText = "The Player is " + flag;
//Cases of Win
winCases = [
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
    Player.innerText = "The Player is " + flag;
    flag = (flag == "X") ? "O" : "X";
    if (e.target.innerText === "") {
        e.target.innerText = flag;
    }

    Win(e);
}



for (var i = 0; i < tr.length; i++) {
    tr[i].addEventListener('click', Write, false);
    //tr[i].addEventListener('click', Win, false);

    // Win()
}

//Check Win
function Win(e) {

    for (var i = 0; i < winCases.length; i++) {

        if (td[winCases[i][0]].textContent === flag && td[winCases[i][1]].textContent === flag &&
            td[winCases[i][2]].textContent === flag) {

            Player.innerText = ""
            Message.innerText = flag + " is Win";
            //e.target.innerText = "";

            for (var i = 0; i < tr.length; i++) {
                //remove event listenr
                tr[i].removeEventListener('click', Write);
            }
            break;
        }
    }
}

function Reset() {
    for (var i = 0; i < td.length; i++) {
        td[i].innerText = "";
    }
    Player.innerText = "The Player is " + flag;
    Message.innerText = "";
}


// function indexForTD() {
//     for (var i = 0; i < td.length; i++) {
//         td[i].index = i;
//     }
// }