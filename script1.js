let board = [[0,0,0],[0,0,0],[0,0,0]];

let pl1 = prompt("Enter name of first player:");
let pl2 = prompt("Enter name of second player:");
let nm = document.querySelector("#name");
nm.innerHTML = pl1 + " Vs " + pl2;

let player1 = 1;
let player2 = -1;
let turn = player1;


function changeTurn() {
    if (turn  == player1) {
        turn = player2;
        
    } else {
        turn = player1;
        
    }
}
function restart() {
    const boxs = document.querySelectorAll("td");
    boxs.forEach(function(e) {
        e.innerHTML = "";
    })
    msg = document.querySelector("#message");
    msg.innerHTML = "";
    for(let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            board[i][j] = 0;
        }
    }
    turn = player1;

}

function isgameOver(state,play) {
    var win_state = [
		[state[0][0], state[0][1], state[0][2]],
		[state[1][0], state[1][1], state[1][2]],
		[state[2][0], state[2][1], state[2][2]],
		[state[0][0], state[1][0], state[2][0]],
		[state[0][1], state[1][1], state[2][1]],
		[state[0][2], state[1][2], state[2][2]],
		[state[0][0], state[1][1], state[2][2]],
		[state[2][0], state[1][1], state[0][2]],
	];

    for(let i=0; i<8; i++) {
        let line = win_state[i];
        let filled = 0;
        for(let j=0 ; j<3; j++) {
            if (line[j] == play) {
                filled++;
                
            }
        }
        if (filled == 3) {
            
            return true;
            
        }
    }
    return false;
}   
function check() {
    let msg = document.querySelector("#message");
    if (isgameOver(board,turn)) {
        
        if (turn == player1) {
            msg.innerHTML = pl1 + " has Won!!";
            
        }
        
        else {
            msg.innerHTML = pl2 + " has Won!!";
        }

    }
    if (emptyCells(board) == 0 && !(isgameOver(board,turn))) {
        msg.innerHTML = "Oh!! It's a tie"
    }
    
}

function emptyCells(state) {
    let empty = 0;
    for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
           if (state[i][j] == 0){
                empty++;
           }
        }
    }
    return empty;
}


const boxs = document.querySelectorAll("td");
boxs.forEach(function(e) {
    e.onclick = function(){
        
        
        let x = e.id.split("")[0];
        let y = e.id.split("")[1];
        if (turn == player1) {
            board[x][y] = player1;
            e.innerHTML = "X";
        }
        else {
            board[x][y] = player2;
            e.innerHTML = "O";
        }
        check();
        changeTurn();
    }

})

