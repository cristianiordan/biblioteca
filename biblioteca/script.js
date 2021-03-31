'use strict'

//Make the book name an array
function makeArray(string) {
    let arrayFromString = string.toLowerCase().split(" ");
    return arrayFromString;
}
//Return true or false
function checkIfGreat(array) {
    let great = array.includes('great')
    return great;
}

let favoriteIndex = document.getElementById('favorite-index');
let favoriteGreatIndex = document.getElementById('favorite-great-index');

let favoriteBooks = [];
let favoriteGreatBooks = [];


const addButtons = document.querySelectorAll('.add');

for(let i = 0; i < addButtons.length; i++){
    addButtons[i].addEventListener('click', function(){
        if(checkIfGreat(makeArray(document.querySelector(`.book-name-${i}`).textContent))){
            if(!favoriteGreatBooks.includes(`${document.querySelector(`.book-name-${i}`).textContent}`)){
                favoriteGreatBooks.push(document.querySelector(`.book-name-${i}`).textContent);
                favoriteGreatIndex.textContent++;
                let element = document.createElement('div');
                let btn = document.createElement("BUTTON");
                element.className = 'remove';
                element.id = `remove-${i}`
                element.innerHTML = document.querySelector(`.book-name-${i}`).textContent;
                document.getElementById('favorite-great-books').appendChild(element);
                element.appendChild(btn);
                btn.innerHTML = "Remove";
                btn.id = `remove-button-${i}`;
                btn.className = 'remove-buttons'
                btn.addEventListener('click' , function(){
                    let index = favoriteGreatBooks.indexOf(document.querySelector(`.book-name-${i}`).textContent);
                    if(index > -1){
                        favoriteGreatBooks.splice(index, 1);
                    }
                    favoriteGreatIndex.textContent--;
                    document.getElementById(`remove-${i}`).remove();
                })
                 
            };
        }else {
            if(!favoriteBooks.includes(`${document.querySelector(`.book-name-${i}`).textContent}`)){
                favoriteBooks.push(document.querySelector(`.book-name-${i}`).textContent);
                favoriteIndex.textContent++;
                let element = document.createElement('div')
                let btn = document.createElement("BUTTON");
                element.className = 'remove';
                element.id = `remove-${i}`
                element.innerHTML = document.querySelector(`.book-name-${i}`).textContent;
                document.getElementById('favorite-books').appendChild(element);
                element.appendChild(btn);
                btn.innerHTML = "Remove";
                btn.id = `remove-button-${i}`;
                btn.className = 'remove-buttons'
                btn.addEventListener('click' , function(){
                    let index = favoriteBooks.indexOf(document.querySelector(`.book-name-${i}`).textContent);
                    if(index > -1){
                        favoriteBooks.splice(index, 1);
                    }
                    document.getElementById(`remove-${i}`).remove();
                    favoriteIndex.textContent--;
                })
            };
        };
    })
};
