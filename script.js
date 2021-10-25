//Variables
var flag = "X";
var tr = document.querySelectorAll("tr");
var td = document.querySelectorAll("tr td");

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
    if(e.target.innerText === "")
    {
        e.target.innerText = flag;
        flag = (flag=="X")?"O":"X";
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
            alert(flag + " Win");
            
            for (var i = 0; i < tr.length; i++) {
                //remove event listenr
                tr[i].removeEventListener('click', Write);
                // Win()
            }
        }
        // e.stopPropogation();
    }
}

