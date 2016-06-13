//---------------------------------------------------
//!!!!KEEP!!!!!!!
var cx = calculatorModule();
var mainDiv = document.getElementById('maindiv');
var daNumbas = [7,8,9,"%","CLR",4,5,6,"X","GtBl",1,2,3,"-","Dep$",0,"00",".","+","Wth$","="];
var calcNumbers = [];
var calcJoined = '';
var calcStrToNum = 0;
//!!!!KEEP!!!!!!! Keeps track of how many digits, and MAX ALLOWABLE.
var digitCount = 0;
var digitMax = 10;


var subtractGotPushedFirst = false;
// TESTING
var firstNum = 0;
var secondNum = 9;

// TESTING  -  All Flags Start as False
var nowSecondNum = false;
var cleanRequest = false;

var cleanMe =true;
/*var plusFlag = false;
var subFlag = false;
var multFlag = false;
var divFlag = false;*/

//  TESTING - Stoppers start as TRUE
var divStop = true;
var multStop = true;
var minusStop = true;
var plusStop = true;

var firstTimeOnly = true;

//FUNCTIONS
function calcNumDisplay(){
  if(firstTimeOnly){
    calcJoined = calcNumbers.join('');// join array into a string
    displayDiv.innerHTML = calcJoined;// put into screen
    calcStrToNum = Number(calcJoined);// make string back into numbers
    cx.load(calcStrToNum);
    cx.saveMemory();
    firstNum = cx.getTotal();
    //console.log(cx.getTotal());
    //console.log("calcStrToNum",calcStrToNum);
    console.log("calcNumDisplay First");
  }
  else if(firstTimeOnly===false){

    if(cleanRequest){
      screenCleaner();
      cleanMe = false;
    }
    console.log("calcNumDisplay Second");
    calcJoined = calcNumbers.join('');// join array into a string
    displayDiv.innerHTML = calcJoined;// put into screen
    calcStrToNum = Number(calcJoined);// make string back into numbers
    console.log("calcStrToNum",calcStrToNum);
    //console.log(typeof calcStrToNum);
  }
  /*else {
    if(cleanRequest){
      screenCleaner();
      cleanMe = false;
    }

    console.log("calcNumDisplay Third Onwards");
    calcJoined = calcNumbers.join('');// join array into a string
    displayDiv.innerHTML = calcJoined;// put into screen
    calcStrToNum = Number(calcJoined);// make string back into numbers
    console.log("calcStrToNum",calcStrToNum);
    //console.log(typeof calcStrToNum);

  }*/
}

function doMath(){
  if(opStart){
    cx.load(calcStrToNum);// load that number into cx
  }
}

function screenCleaner(){
  //if(cleanMe){
    console.log("Clean Request Made~~~~~~~~~~");
    calcNumbers = [];
    calcNumbers.push(secondNum);
    cleanRequest =false;
  //}
}
//-------MAKING MY BOXES DYNAMICALLY
      displayDiv = document.createElement('div');
      displayDiv.className = "display";
      displayDiv.innerHTML = '<span class="blink">|</span>';
      mainDiv.appendChild(displayDiv);

  for (var i = 1; i<=21; i++){
            calButtonDiv = document.createElement('div');
            calButtonDiv.className = "calButtonDivs";
            calButtonDiv.id = "CBD"+i;
            mainDiv.appendChild(calButtonDiv);
            if(i<22){
                calButtonDiv.innerHTML = daNumbas[i-1];
            }
      }
//Tried making this Dynamically like above, but not much luck.
var clickable = document.getElementsByClassName('calButtonDivs');
            clickable[0].addEventListener('click',clickTest0);
            clickable[1].addEventListener('click',clickTest1);
            clickable[2].addEventListener('click',clickTest2);
            clickable[3].addEventListener('click',clickTest3);
            clickable[4].addEventListener('click',clickTest4);
            clickable[5].addEventListener('click',clickTest5);
            clickable[6].addEventListener('click',clickTest6);
            clickable[7].addEventListener('click',clickTest7);
            clickable[8].addEventListener('click',clickTest8);
            clickable[9].addEventListener('click',clickTest9);
            clickable[10].addEventListener('click',clickTest10);
            clickable[11].addEventListener('click',clickTest11);
            clickable[12].addEventListener('click',clickTest12);
            clickable[13].addEventListener('click',clickTest13);
            clickable[14].addEventListener('click',clickTest14);
            clickable[15].addEventListener('click',clickTest15);
            clickable[16].addEventListener('click',clickTest16);
            clickable[17].addEventListener('click',clickTest17);
            clickable[18].addEventListener('click',clickTest18);
            clickable[19].addEventListener('click',clickTest19);
            clickable[20].addEventListener('click',clickTest20);
//----End of Clickable


//Allows Operators work again after pushing a number
function opStopTruther(){
  opStop = true;
  divStop = true;
  multStop = true;
  minusStop = true;
  plusStop = true;
}

//Prevents operators from Starting from default
var opStart = false;
var opHold = 9;
/*function opDo(doNum){
   console.log("function opDo Initiated");
    if(opHold===0){
      cx.divide(doNum);
    }else if(opHold===1){
      cx.multiply(doNum);
    }else if(opHold===2){
      cx.subtract(doNum);
    }else if(opHold===4){
      cx.add(doNum);
    }
}*/

//In other words, disables Ops after Pressed
function allOpCeptMinus(){
    firstTimeOnly = false;
    opStart = false;
    cx.saveMemory();

    //Kills the Ops
    minusStop = false;
    multStop = false;
    plusStop = false;
    divStop = false;
    cleanRequest = true;
    console.log("Operators Dead");
}
// %%%%%% Div Button %%%%%
function clickTest3(){
    if(divStop&&opStart){
    allOpCeptMinus();

    console.log("Division Button");

    opHold = 0;
  }
}
// xxxxx  Mult Button xxxxx
function clickTest8(){
  if(multStop&&opStart){
    allOpCeptMinus();

    console.log("Mult Button");

    opHold = 1;
  }
}
//++ Add Button ++++++++
function clickTest18(){
  if(plusStop&&opStart){
    allOpCeptMinus();

    console.log("+ Button");

    opHold = 4;
  }
}
//--- Subtract Button -----
function clickTest13(){
  if(minusStop&&opStart){
    allOpCeptMinus();

    console.log("Subtract Button");

    opHold = 3;
  }
  else if(opStart===false){
    subtractGotPushedFirst = true;

    displayDiv.innerHTML = '-';
    displayDiv.innerHTML += '&nbsp;';
 /*   var minusSignDiv = document.createElement('div');
    minusSignDiv.className = "subject";
    minusSignDiv.innerHTML = '-';
    displayDiv.appendChild(minusSignDiv);*/
  }
}

// ### All Clickable Numbers Except 0 and 00 ###
function clickNumbers(num){
  if(digitCount<digitMax&&firstTimeOnly){
    divStop = true;
    multStop = true;
    minusStop = true;
    plusStop = true;
    cx.load(num);
    digitCount+=1;
    opStart = true;
    calcNumbers.push(num);

    opStopTruther(); //Lets Operators work again after pushing a number
    calcNumDisplay(num);

    doMath();

    console.log("Operators Now Live");
    console.log("firstStateClicker");
  }
  else if(digitCount<digitMax&&firstTimeOnly===false){

    opStart = true;
    //cx.load(num);
    secondNum = num;
    digitCount+=1;
    calcNumbers.push(num);

    opStopTruther(); //Lets Operators work again after pushing a number
    calcNumDisplay(num);

    doMath();

    console.log("Operators Now Live But in Part 2 mode");
  }
}

// NEW ZERO
function clickTest15(num){
  if(digitCount<digitMax&&firstTimeOnly){

    digitCount+=1;
    opStopTruther(); //Lets Operators work again after pushing a number
    opStart = true;
    console.log("Operators Now Live");
    cx.load(0);
    calcNumbers.push(0);

    calcNumDisplay(0);

    doMath();

  }
  else if(digitCount<digitMax&&firstTimeOnly===false){
    digitCount+=1;
    opStopTruther(); //Lets Operators work again after pushing a number

    opStart = true;
    console.log("Operators Now Live But in Part 2 mode");

    secondNum = 0;
    //cx.load(num);
    calcNumbers.push(0);

    calcNumDisplay(0);

    doMath();
    console.log("This is what 2ndNum currently is: ",secondNum);
  }
}
//00000000000000000000000000000
/*function clickTest15(){
  if(digitCount<digitMax){
    digitCount+=1;
    opStopTruther();
    opStart = true;
    calcNumbers.push(0);
    ");
    calcNumDisplay(0);
    cx.load(0);
  }
}*/
//00 00 00 00 00 00 00 00 00 00 00 00
function clickTest16(){
   if(digitCount<digitMax){
    digitCount+=2.5;
    opStopTruther();
    opStart = true;
    calcNumbers.push("0","0");

    calcNumDisplay("00");
    cx.load(0);
  }
}

// CLEAR  CLEAR  CLEAR  CLEAR  CLEAR  CLEAR  CLEAR
function clickTest4(){
  cleanMe =true;
  nowSecondNum = false;
  opStart = false;
  firstTimeOnly=true;
  digitCount = 0;
  opStopTruther(); //Lets Operators work again after pushing a number
  cx.clearMemory();
  displayDiv.innerHTML ='<span class="blink">|</span>';
  calcNumbers.length = 0;
  cleanMe =true;
  cleanRequest = false;
}


// Same as clear except DOESN'T Clear the screen
function clickTest4Clone(){
  cleanMe =true;
  nowSecondNum = false;
  opStart = false;
  firstTimeOnly=true;
  digitCount = 0;
  opStopTruther(); //Lets Operators work again after pushing a number
  cx.clearMemory();
  displayDiv.innerHTML ='<span class="blink">|</span>';
  calcNumbers.length = 0;
  cleanMe =true;
  cleanRequest = false;
  /*nowSecondNum = false;
  opStart = false;
  firstTimeOnly=true;
   digitCount = 0;
  opStopTruther(); //Lets Operators work again after pushing a number
  cx.clearMemory();
  calcNumbers.length = 0;
*/
}

//--------------------
function clickTest0(){
  clickNumbers(7);
}function clickTest1(){
  clickNumbers(8);
}function clickTest2(){
  clickNumbers(9);
}function clickTest5(){
  clickNumbers(4);
}function clickTest6(){
  clickNumbers(5);
}function clickTest7(){
  clickNumbers(6);
}function clickTest10(){
  clickNumbers(1);
}function clickTest11(){
  clickNumbers(2);
}function clickTest12(){
  clickNumbers(3);
}

//Withdraw Cha-ching! Function
function clickTest19(){
  var audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }}
// GET BALANCE  GET BALANCE  GET BALANCE
function clickTest9(){

}
//   Deposit
function clickTest14(){
  console.log("click!",cx.add());
}
//...Decimal.......................
function clickTest17(){
}
// = = = = = = = = = = = = = = = =
var theMemoryNum = 0;

function clickTest20(){
  if(firstTimeOnly===false&&opHold===0){
    console.log("getTotal",cx.getTotal());
    console.log("firstNum",firstNum);

    secondNum = cx.getTotal();
    cx.load(firstNum);
    cx.divide(secondNum);
    clickTest4Clone();

    console.log("F divided");
    }
  else if(firstTimeOnly===false&&opHold===1){
    cx.multiply(firstNum);
    clickTest4Clone();
    console.log("F multiplied");
    }
  else if(firstTimeOnly===false&&opHold===3){

    secondNum = cx.getTotal();
    cx.load(firstNum);
    cx.subtract(secondNum);
    clickTest4Clone();

    console.log("Finalize Subtract");
    }
  else if(firstTimeOnly===false&&opHold===4){
    cx.add(firstNum);
    clickTest4Clone();
    }
    opStopTruther();
    //opStart = true;
    opStop = false;
    firstTimeOnly = true;
    //console.log(cx.getTotal());
    opHold = 9;
    cleanMe =true;
    cleanRequest = false;
    digitCount = 0;
    displayDiv.innerHTML = cx.getTotal();
    function play() {
    document.getElementById('audio').play();

    divStop = true;
    multStop = true;
    minusStop = true;
    plusStop = true;
}

}

