// Initierar en lista med klasser som bestämmer rutors egenskaper.
// Går nog att göras mer läsbart med ett objekt.
let tileTypes = ["empty", "tableBorder", "bomb", "bombBorder"];

// Initierar ett tomt spelfält
let tileField;
const container = document.querySelector("#container");

// Initierar värden som används för att generera bomber
let bombs = 15;
let bombX;
let bombY;

// Genererar spelfältet med tommma rutor
function generateEmptyField(){
    tileField = [];
    for(let i = 0; i < 12; i++){
        tileField.push([]);
        for(let j = 0; j < 12; j++){
            if(i != 0 || i !=12 || j != 0 || j !=12){
            tileField[i].push(0);
            }else{
                tileField[i][j] = 1;
            }
        }
    }
}
    
// Slumpar fram koordinater för bomber i TileField
let generateBombList = function(){
    let bombCoordsList = [];
    for(let i = 1; i <= bombs; i++){
        bombX = Math.floor(Math.random()*10 + 1);
        bombY = Math.floor(Math.random()*10 + 1);
        bombCoordsList.push({x:bombX, y:bombY});
    }
    return bombCoordsList;
}
function generateBombs(){
    let bombList = generateBombList();
    bombList.forEach(el => {
        for(let i = el.x - 1; i <= el.x + 1; i++){
            for(let j = el.y - 1; j <= el.y + 1; j++){
                if(tileField[j][i] != 2){
                    tileField[j][i] = 3;
                }
            }
        }
        tileField[el.y][el.x] = 2;
    });
}

function floodFill(x,y,twodArr){
    let thingsToSend = [];
    let i = x;
    twodArr[y][x]
    while(twodArr[y][i] != 2 || twodArr[y][i] != 1){
        i++;
        
    }
}

// Genererar en synlig spelplan utifrån tileField-arrayen mha DOM-manipulation.
// Siffrorna i tileField bestämmer vilken klass tile-divvarna kommer att få.
// Detta bestäms med tileTypes arrayen.
function generatePlayArea(){
    generateEmptyField();
    generateBombs();
    container.innerHTML = "";
    for(let i = 0; i < 12; i++){
        container.innerHTML += "<div class = 'row'></div>";
        for(let j = 0; j < 12; j++){
            document.querySelectorAll(".row")[i].innerHTML += `<div data-x=${j} data-y=${i} class = 'tile ${tileTypes[tileField[i][j]]}'></div>`;
        }
    }
    document.querySelectorAll(".tile").forEach(el => {
        el.addEventListener("click", revealTiles);
        el.classList.add("hidden")
    });
}
function revealTiles (evt){
    let target = evt.currentTarget;
    let classArr = target.className.split(" ");
    let x = target.dataset.x;
    let y = target.dataset.y;
    target.classList.remove("hidden");
    

    console.log(evt.currentTarget);
    console.log(classArr)
}
generatePlayArea();