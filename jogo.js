let board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
let PLAYER = 'X';
let COMPUTER = 'O';

function resetBoard() {
	for(let i = 0; i < 3; i++)
		for(let j = 0; j < 3; ++j)
			board[i][j] = ' ';
}

function printBoard() {
	console.log(" " + board[0][0] + " | " + board[0][1] + " | " + board[0][2] + " ");
	console.log("\n---|---|---\n");
	console.log(" " + board[1][0] + " | " + board[1][1] + " | " + board[1][2] + " ");
	console.log("\n---|---|---\n");

	console.log(" " + board[2][0] + " | " + board[2][1] + " | " + board[2][2] + " ");
}
function checkFreeSpaces()
{
	let freeSpaces = 9;
	for(let i = 0; i < 3; i++)
		for(let j = 0; j < 3; j++)
			if(board[i][j] != ' ')
				freeSpaces--;
	return freeSpaces;
	
}
funtion playerMove
function computerMove;
function checkWinner;
function initGame() {
	let winner = ' ';
	resetBoard();
	while(winner == ' ' && checkFreeSpaces() != 0)
	{
		printBoard();
		playerMove();
	}
}
