//---------------------------------------------------
//var add2 = add;
var cx = calculatorModule();
var mainDiv = document.getElementById('maindiv');

var daNumbas = [7,8,9,"%","CLR",4,5,6,"X","GtBl",1,2,3,"-","Dep$",0,"00",".","+","Wth$","="];
var calcNumbers = [];
var calcJoined = '';

var happyHolder = [];

function calcNumDisplay(){
  calcJoined = calcNumbers.join('');
  displayDiv.innerHTML = calcJoined;
}

  displayDiv = document.createElement('div');
  displayDiv.className = "display";
  displayDiv.innerHTML = '<span class="blink">|</span>';
  mainDiv.appendChild(displayDiv);

  var x = 21;
//MAKING MY BOXES
  for (var i = 1; i<=x; i++){
  calButtonDiv = document.createElement('div');
  calButtonDiv.className = "calButtonDivs";
  calButtonDiv.id = "CBD"+i;
  mainDiv.appendChild(calButtonDiv);

    if(i<22){
        calButtonDiv.innerHTML = daNumbas[i-1];
    }
  }
 /* var clickable = document.getElementsByClassName('calButtonDivs');
    for(var i = 0; i<clickable.length; i++){                       // Another happy 'for loop'.
            clickable[i].addEventListener('click',clickTest[i]);
    }
*/

/*var clickable0 = document.getElementsByClassName('calButtonDivs');
for(var i = 0; i<clickable0.length; i++){
clickable0.addEventListener('click',cx.add(7));
}*/
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

// Keeps track of how many digits, and MAX ALLOWABLE.
var digitCount = 0;
var digitMax = 10;
var firstNum = [];
var secondNum = [];
var stillFirstNum = true;

//Lets Operators work again after pushing a number
function truther(){
  minusStop = true;
  multStop = true;
  plusStop = true;
  divStop = true;
}

//Prevents operators from Starting from default
var opStart = false;

function clickTest0(){
    if(digitCount<digitMax){
    digitCount+=1;
    truther();
    cx.load(7);
    cx.saveMemory;
    opStart = true;
    calcNumbers.push(7);
    happyHolder.push(7);
    calcNumDisplay(7);
    document.getElementById('displayDiv');
    console.log(cx.getTotal());
      if(stillFirstNum){
        firstNum.push(7);
        stillFirstNum=false;
      }else{
        secondNum.push(7);
      }
  }
}
function clickTest1(){
  if(digitCount<digitMax){
    digitCount+=1;
    truther();
    opStart = true;
    cx.load(8);
    calcNumbers.push(8);
    happyHolder.push(8);
    calcNumDisplay(8);
    console.log(cx.getTotal());
    if(stillFirstNum){
        firstNum.push(8);
        stillFirstNum=false;
      }else{
        secondNum.push(8);
      }
  }
}
function clickTest2(){
  if(digitCount<digitMax){
    digitCount+=1;
    truther();
    opStart = true;
    cx.load(9);
    calcNumbers.push(9);
    happyHolder.push(9);
    calcNumDisplay(9);
    console.log(cx.getTotal());
  }
}
var divStop = true;
function clickTest3(){
  if(divStop&&opStart){
    opStart = false;
   calcNumbers.push("%");
   happyHolder.push("%");
    calcNumDisplay("%");
    minusStop = false;
    multStop = false;
    plusStop = false;
    divStop = false;
  }
}

function clickTest4(){
  opStart = false;
  happyHolder = [];
  digitCount = 0;
  truther();
  cx.clearMemory();
  displayDiv.innerHTML ='<span class="blink">|</span>';
  calcNumbers.length = 0;
}
//2ndRow 2ndRow 2ndRow 2ndRow 2ndRow 2ndRow
function clickTest5(){
  if(digitCount<digitMax){
    digitCount+=1;
    truther();
    opStart = true;
    cx.load(4);
    calcNumbers.push(4);
    happyHolder.push(4);
    calcNumDisplay(4);
    console.log(cx.getTotal());
}
}
function clickTest6(){
  if(digitCount<digitMax){
    digitCount+=1;
    truther();
    opStart = true;
    calcNumbers.push(5);
    calcNumDisplay(5);
    happyHolder.push(5);
    cx.load(5);
    console.log(cx.getTotal());
  }
}
function clickTest7(){
   if(digitCount<digitMax){
    digitCount+=1;
    truther();
    opStart = true;
    calcNumbers.push(6);
    calcNumDisplay(6);
    happyHolder.push(6);
    cx.load(6);
  }
}
var multStop = true;
function clickTest8(){
  if(multStop&&opStart){
    opStart = false;
    calcNumbers.push("x");
    happyHolder.push("x");
    calcNumDisplay("x");
    happyHolder.push("x");
    minusStop = false;
    multStop = false;
    plusStop = false;
    divStop = false;
  }
}
function clickTest9(){
  console.log("click!",cx.add());
}
//3rdRow 3rdRow 3rdRow 3rdRow 3rdRow 3rdRow 3rdRow
function clickTest10(){
  if(digitCount<digitMax){
    digitCount+=1;
    truther();
    opStart = true;
    calcNumbers.push(1);
    calcNumDisplay(1);
    happyHolder.push(1);
    cx.load(1);
  }
}
function clickTest11(){
   if(digitCount<digitMax){
    digitCount+=1;
    truther();
    opStart = true;
    calcNumbers.push(2);
    calcNumDisplay(2);
    happyHolder.push(2);
    cx.load(2);
  }
}
function clickTest12(){
   if(digitCount<digitMax){
    digitCount+=1;
    truther();
    opStart = true;
    calcNumbers.push(3);
    calcNumDisplay(3);
    happyHolder.push(3);
    cx.load(3);
  }
}

var minusStop = true;
function clickTest13(){
  if(minusStop&&opStart){
    opStart = false;
    calcNumbers.push("-");
    happyHolder.push("-");
    calcNumDisplay("-");
    minusStop = false;
    plusStop = false;
    multStop = false;
    divStop = false;
  }
}
function clickTest14(){
  console.log("click!",cx.add());
}
//4thRow 4thRow 4thRow 4thRow 4thRow 4thRow 4thRow
function clickTest15(){
  if(digitCount<digitMax){
    digitCount+=1;
    truther();
    opStart = true;
    cx.load(0);
    calcNumbers.push(0);
    happyHolder.push("0");
    calcNumDisplay(0);
    cx.load(0);
  }
}
function clickTest16(){
   if(digitCount<digitMax){
    digitCount+=2.5;
    truther();
    opStart = true;
    calcNumbers.push("0","0");
    happyHolder.push("0");
    happyHolder.push("0");
    calcNumDisplay("00");
    cx.load(0);
  }
}
function clickTest17(){

}

//THIS IS MY ADD BUTTON
var plusStop = true;
function clickTest18(){
    if(plusStop&&opStart){
    opStart = false;
    calcNumbers.push("+");
    happyHolder.push("+");
    calcNumDisplay("+");
    plusStop = false;
    minusStop = false;
    multiStop = false;
    divStop = false;
  }
}
function clickTest19(){
  var audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}
function clickTest20(){
  var result = (firstNum[0]+secondNum[0]);
  displayDiv.innerHTML = result;
  //console.log(happyHolder);
  console.log("saveMemory",cx.saveMemory());
    }



function play() {
    document.getElementById('audio').play();
}
