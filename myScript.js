// Restart Game Button
var restart= document.querySelector("#b");

// Grabs all squares
var squares = document.querySelectorAll('td');

// Clear all the squares
function clearBoard(){
    for (var i = 0; i < squares.length; i++)
    {
        squares[i].textContent = '';
    }
}

restart.addEventListener('click',clearBoard); 

// Check the square marker
var cellOne = document.querySelector('#one')

cellOne.addEventListener('click',function(){
    cellOne.textContent = 'X';
})  

// For Loop to add EventListener to all the squares