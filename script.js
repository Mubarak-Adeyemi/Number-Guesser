/*======================================================
------------------DECLEARATION OF VARIABLEs--------------
========================================================*/

const userName = document.querySelector(".user-name");
const start = document.getElementById("start");
const inputF = document.getElementById("guess-field");
const alertMessage = document.getElementById("alert");
const stageLevel = document.querySelector(".level");
const checkBtn = document.querySelector("#check");
const setNameModal = document.getElementById("res-or-cont-modal");
const continueBtn = document.getElementById("cont");
const newNameBtn = document.getElementById("new-name");
// const modal = document.querySelector(".modal");


/*======================================================
------------------Getting name from the user -----------
---------------and setting it as player name------------
========================================================*/
let getName = prompt("What is your name?")
userName.textContent = getName.toUpperCase();




/*======================================================
---------------Setting range and generating-------------
---------------Number within the range------------------
========================================================*/
let rangeEnd = 2;
let genNum = Math.floor((Math.random()*rangeEnd)+1);
console.log('Generated Number: ' , genNum ,'Range End: ',rangeEnd);


/*======================================================
------------------Setting the stage level---------------
========================================================*/
let level = 1;
stageLevel.textContent = level;




/*======================================================
--------------------RIGHT GUESS SOUND-------------------
========================================================*/
function successEffect (){

    const success = new Audio("effects/success.mp3")
    success.play()
}


/*======================================================
-------------------WRONG GUESS SOUND--------------------
========================================================*/
function lossEffect (){

    const loss = new Audio("effects/wrong.mp3")
    loss.play()
}

/*======================================================
------------------GUESSING GAME ENGINE------------------
========================================================*/

checkBtn.addEventListener('click', ()=> {
    
    
    let numGuess = Number(inputF.value);
    console.log(numGuess);
    inputF.focus();

    if(genNum == numGuess){
        
        rangeEnd++;
        genNum = Math.floor((Math.random()*rangeEnd)+1);
        level++
        stageLevel.textContent = level;
        console.log('Generated Number: ' , genNum ,'Range End: ',rangeEnd);
        alertMessage.textContent = `Hurray! Now at level ${level}\nGuess within the range of 1 and ${rangeEnd}`;
        alertMessage.style.color = '#367E18';
        inputF.value = '';
        successEffect()


        
    }else{
        alertMessage.textContent = "Guess wrong! Restart the game";
        alertMessage.style.color = '#D2001A';
        inputF.value = '';
        inputF.focus();
        lossEffect()
        check.style.display = 'none';


    }


})




/*======================================================
------------------------RESET GAME----------------------
========================================================*/
start.addEventListener('click',  ()=>{

    setNameModal.style.display = 'flex';
    alertMessage.textContent = "Guess a number within the range of 1 and 2";
    alertMessage.style.color = '#D2001A';
    rangeEnd = 2
    genNum = Math.floor((Math.random()*rangeEnd)+1);
    console.log('Generated Number: ' , genNum ,'Range End: ',rangeEnd);


    level = 1;
    stageLevel.textContent = level;
    inputF.value = '';
    check.style.display = 'flex';
});

// Continue with current player name
continueBtn.addEventListener('click', ()=> {

    setNameModal.style.display = 'none';
});

// Set new name for the player
newNameBtn.addEventListener('click', ()=> {

    getName = prompt("What is your name?")
    userName.textContent = getName.toUpperCase();
    setNameModal.style.display = 'none';

});



