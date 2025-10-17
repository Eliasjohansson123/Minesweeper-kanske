let tileTypes = ["empty", "tableBorder", "bomb", "bombBorder"];
let tileField = [];
const container = document.querySelector("#container");
let bombs = 15;
let xPos = 0;
let yPos = 0;

// Genererar spelfältet med tommma rutor
for(let i = 0; i < 12; i++){
    tileField.push([]);
    for(let j = 0; j < 12; j++){
        tileField[i].push(0);
    }
}
// Slumpar fram koordinater för bomber i TileField
for(let i = 1; i <= bombs; i++){
    let bombX = Math.floor(Math.random()*10 + 1);
    let bombY = Math.floor(Math.random()*10 + 1);
    for(let x = bombX-1; x <= bombX+1; x++){
        for(let y = bombY - 1; y <= bombY+1; y++){
            if(tileField[y][x] != 2)
            tileField[y][x] = 3;
        }
    }
    tileField[bombY][bombX] = 2;
}
for(i = 0; i < tileField.length; i++){
    tileField[i][0] = 1;
    tileField[i][tileField.length - 1] = 1;
    tileField[tileField.length - 1][i] = 1;
    tileField[0][i] = 1;
}
function revealTiles(y, x){
    console.log(y, x);
}
// Genererar en synlig spelplan utifrån tileField-arrayen mha DOM-manipulation
function generatePlayArea(){
    
    for(let i = 0; i < 12; i++){
        container.innerHTML += "<div class = 'row'></div>";
        for(let j = 0; j < 12; j++){
            document.querySelectorAll(".row")[i].innerHTML += `<div class = 'tile ${tileTypes[tileField[i][j]]}'></div>`;
            document.querySelector(".tile").addEventListener("click", revealTiles(i, j));
        }
    }
}
console.log(tileField);
console.log(tileField.length);
console.log(document.querySelectorAll(".tile"))
generatePlayArea();