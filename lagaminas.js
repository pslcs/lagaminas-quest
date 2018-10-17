"use strict"

let counter = 0;
let lempute1 = document.querySelector(".lempute1");
let mygtukas = document.querySelector(".bigButton");
let knopke = document.querySelectorAll(".langelis");
let paveiksliukas = document.querySelector(".pagrPaveiksliukas");
let keturi = document.querySelectorAll(".lemputesMygtukas");
let lemputes = document.querySelectorAll(".lemputes");
let pirmasApvalus = document.querySelector(".pirmasApvalus");
let antrasApvalus = document.querySelector(".antrasApvalus");
let antriMygtukai = document.querySelectorAll(".keyboard.button");

function bigButton() {
    counter = counter + 1
    if (counter == 8) {
        lempute1.innerHTML = '<img src="./assets/bulbon.png" id="bulbon"></img>'
        counter = 0;
        mygtukas.style["background-color"] = "#843d3d";
    }
}
function toggle(kascia) {
    kascia.classList.toggle("aktyvus")
}
function atidaryk() {
    if (knopke[3].classList.contains("aktyvus") && knopke[5].classList.contains("aktyvus") && knopke[6].classList.contains("aktyvus") && knopke[7].classList.contains("aktyvus") && 
    knopke[9].classList.contains("aktyvus") && knopke[10].classList.contains("aktyvus") && knopke[11].classList.contains("aktyvus") && knopke[14].classList.contains("aktyvus")) {
        if (knopke[1].classList.contains("aktyvus") || knopke[2].classList.contains("aktyvus") || knopke[4].classList.contains("aktyvus") || knopke[13].classList.contains("aktyvus")
        || knopke[12].classList.contains("aktyvus") || knopke[8].classList.contains("aktyvus") || knopke[0].classList.contains("aktyvus")) {
        } else {
            paveiksliukas.style.transform = "rotateY(90deg)";
            let kazkas = setTimeout(function(){changePic()}, 500);
            setTimeout(function(){rotateBack(paveiksliukas)}, 500);
        }
    }
}
function changePic() {
    if (paveiksliukas.innerHTML == '<img src="./assets/q.jpg">') {
        paveiksliukas.innerHTML = '<img src="./assets/lock.jpg" onclick="winGame()">';
    } else {
        paveiksliukas.innerHTML = '<img src="./assets/q.jpg">'
    }
}
function rotateBack(sudas) {
    sudas.style.transform = "rotateY(0deg)";
}
function eilute(batonas) {
    batonas.classList.toggle("ijungtas");
    checkFirstPic();
    checkSecondPic();
}
function checkFirstPic() {    
    if (keturi[1].classList.contains("ijungtas") && keturi[2].classList.contains("ijungtas")) {
        if (keturi[0].classList.contains("ijungtas") || keturi[3].classList.contains("ijungtas")) {
            for (let i=0; i<4; i++){
                let hasas = '<img src="./assets/bulboff.png" class="bulboff" id="bulboff' + i + '"></img>'
                lemputes[i].innerHTML = hasas
            }
            sendFirstCheck(0);
        } else {
            for (let i=0; i<4; i++){
                let hasas = '<img src="./assets/bulbon.png" class="bulbon" id="bulbon' + i + '"></img>'
                lemputes[i].innerHTML = hasas                 
            }
            sendFirstCheck(1);
        }
    } else {
        for (let i=0; i<4; i++){
            let hasas = '<img src="./assets/bulboff.png" class="bulboff" id="bulboff' + i + '"></img>'
            lemputes[i].innerHTML = hasas
        }
        sendFirstCheck(0);
    } 
}
function sendFirstCheck(isItOn) {
    if (isItOn == 1 && pirmasApvalus.innerHTML == '<img src="./assets/1.jpg" id="pirmas">') {
        pirmasApvalus.style.transform = 'rotateY(90deg)';
        let kurapka = setTimeout(function(){showFirstPic(1)}, 500);
            setTimeout(function(){rotateBack(pirmasApvalus)}, 500);
    } 
    else if (isItOn == 0 && pirmasApvalus.innerHTML == '<img src="./assets/text.jpg" id="pirmas">') {
        pirmasApvalus.style.transform = 'rotateY(90deg)';
        let kurapka = setTimeout(function(){showFirstPic(0)}, 500);
            setTimeout(function(){rotateBack(pirmasApvalus)}, 500);
    }
}
function showFirstPic(numberis) {
    if (numberis == 1) {
        pirmasApvalus.innerHTML = '<img src="./assets/text.jpg" id="pirmas">';
    } else {
        pirmasApvalus.innerHTML = '<img src="./assets/1.jpg" id="pirmas">'
    }
}
function checkSecondPic() {
    if (antriMygtukai[1].classList.contains("ijungtas") && antriMygtukai[2].classList.contains("ijungtas") && antriMygtukai[7].classList.contains("ijungtas") && antriMygtukai[8].classList.contains("ijungtas") && antriMygtukai[6].classList.contains("ijungtas")) {
        if (antriMygtukai[0].classList.contains("ijungtas") || antriMygtukai[3].classList.contains("ijungtas") || antriMygtukai[4].classList.contains("ijungtas") || antriMygtukai[5].classList.contains("ijungtas")) {
            sendSecondCheck(0);           
        } else {
            sendSecondCheck(1);
        }
    } else {
        sendSecondCheck(0);
    }
}
function sendSecondCheck(isItOn) {
    if (isItOn == 1 && antrasApvalus.innerHTML == '<img src="./assets/2.jpg" id="antras">') {
        antrasApvalus.style.transform = 'rotateY(90deg)';
        let kurapka = setTimeout(function(){showSecondPic(1)}, 500);
            setTimeout(function(){rotateBack(antrasApvalus)}, 500);
    } 
    else if (isItOn == 0 && antrasApvalus.innerHTML == '<img src="./assets/key.png" id="antras">') {
        antrasApvalus.style.transform = 'rotateY(90deg)';
        let kurapka = setTimeout(function(){showSecondPic(0)}, 500);
            setTimeout(function(){rotateBack(antrasApvalus)}, 500);
    }
}
function showSecondPic(skaicius) {
    if (skaicius == 1) {
        antrasApvalus.innerHTML = '<img src="./assets/key.png" id="antras">';
    } else {
        antrasApvalus.innerHTML = '<img src="./assets/2.jpg" id="antras">'
    }
}
function winGame(){
    console.log(antrasApvalus.innerHTML);
    console.log(pirmasApvalus.innerHTML);
    console.log(lempute1.innerHTML)
    if (antrasApvalus.innerHTML == '<img src="./assets/key.png" id="antras">' && pirmasApvalus.innerHTML == '<img src="./assets/text.jpg" id="pirmas">' && lempute1.innerHTML == '<img src="./assets/bulbon.png" id="bulbon">') {
        alert("YOU ARE A SPECIAL LITTLE SNOWFLAKE!")
    }
}
function smallerButton(prasau) {
    prasau.style.top = "205px";
    prasau.style.left = "105px";
    prasau.style["box-shadow"] = "none"
    bigButton();
    let zuvis = setTimeout(function(){biggerButton(prasau)}, 50);
}
function biggerButton(aciu) {
    aciu.style.top = "200px";
    aciu.style.left = "100px";
    aciu.style["box-shadow"] = "2px 2px 1px 0px"
}