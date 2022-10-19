/*======================================================
------------------DECLEARATION OF VARIABLEs--------------
========================================================*/

const userName = document.querySelector(".user-name");
const start = document.getElementById("start");
const inputF = document.getElementById("guess-field");
const alertMessage = document.getElementById("alert");
const stageLevel = document.querySelector(".level");
const checkBtn = document.querySelector('#check');
const modal = document.querySelector(".modal");


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

check.addEventListener('click', ()=> {
    
    
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


    }


})




/*======================================================
------------------------RESET GAME----------------------
========================================================*/
start.addEventListener('click', ()=>{

    alertMessage.textContent = "Guess a number within the range of 1 and 2";
    rangeEnd = 2
    genNum = Math.floor((Math.random()*rangeEnd)+1);
    console.log('Generated Number: ' , genNum ,'Range End: ',rangeEnd);

    getName = prompt("What is your name?")
    userName.textContent = getName.toUpperCase();



    level = 1;
    stageLevel.textContent = level;
    inputF.value = '';
})


