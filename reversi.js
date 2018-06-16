const max = 8;
var squares = document.querySelectorAll(".square");
var columns;
var rows;
var initial = 1;
var squareObjects = [];
var turn = 0;

for (var i = 0; i < squares.length; i++)
{
	squareObjects.push({row: Math.floor(i / max), column: i % max, square: squares[i]});
}

initializeColor();
initializeClicking();

function initializeColor(){

for (var i = 0; i < max; i++)
{
	if (initial === 0)
		initial = 1;
	else if (initial === 1)
		initial = 0;

	colorRow(initial, (i * 8));
}

}

function colorRow(startingValue, row) {
	for(var i = startingValue; i < max; i += 2)
	{
		squares[i + row].style.backgroundColor = "green";
	}
}

function initializeClicking(){

	for (var i = 0; i < squareObjects.length; i++)
	{
		squareObjects[i].square.addEventListener("click", function(){

				if(!this.classList.contains("white") && !this.classList.contains("black"))
			{
				if(turn === 0)
				{
					this.classList.add("white");
					turn = 1;
				}
				else if (turn === 1) 
				{
					this.classList.add("black");
					turn = 0;
				}
			}
		});
	}
}