//---------------------------------------------------
//var add2 = add;
var cx = calculatorModule();
var mainDiv = document.getElementById('maindiv');

var daNumbas = [7,8,9,"%","CLR",4,5,6,"X","GtBl",1,2,3,"-","Dep$",0,"00",".","+","Wth$","="];
var calcNumbers = [];
var calcJoined = '';

function calcNumDisplay(){
  calcJoined = calcNumbers.join('');
  displayDiv.innerHTML = calcJoined;
}

  displayDiv = document.createElement('div');
  displayDiv.className = "display";
  displayDiv.innerHTML = 'THE DISPLAY';
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

function clickTest0(){
  cx.load(7);
  calcNumbers.push(7);
  calcNumDisplay(7);
  document.getElementById('displayDiv');
  console.log(cx.getTotal());
}
function clickTest1(){
    cx.load(8);
    calcNumbers.push(8);
    calcNumDisplay(8);
  console.log(cx.getTotal());
}
function clickTest2(){
    cx.load(9);
    calcNumbers.push(9);
    calcNumDisplay(9);
  console.log(cx.getTotal());
}
function clickTest3(){
  console.log("click!",cx.divide());
}
function clickTest4(){
  console.log("click!",cx.clearMemory());
}
function clickTest5(){
  cx.load(4);
  calcNumbers.push(4);
  calcNumDisplay(4);
  console.log(cx.getTotal());
}
function clickTest6(){
  calcNumbers.push(5);
  calcNumDisplay(5);
  cx.load(5);
  console.log(cx.getTotal());
}
function clickTest7(){
  calcNumbers.push(6);
  calcNumDisplay(6);
  cx.load(6);
}
function clickTest8(){
  console.log("click!",cx.multiply());
}
function clickTest9(){
  console.log("click!",cx.add());
}
function clickTest10(){
  calcNumbers.push(1);
  calcNumDisplay(1);
  cx.load(1);
}
function clickTest11(){
  calcNumbers.push(2);
  calcNumDisplay(2);
  cx.load(2);
}
function clickTest12(){
  calcNumbers.push(3);
  calcNumDisplay(3);
  cx.load(3);
}
function clickTest13(){
  console.log("click!",cx.subtract());
}
function clickTest14(){
  console.log("click!",cx.add());
}
function clickTest15(){
  cx.load(0);
  calcNumbers.push(0);
  calcNumDisplay(0);
  cx.load(0);
}
function clickTest16(){
 calcNumbers.push(0);
  calcNumDisplay("00");
  cx.load(0);
}
function clickTest17(){
  console.log("click!",cx.add("."));
}
function clickTest18(){
  console.log("click!",cx.add());
}
function clickTest19(){
  console.log("click!",cx.add("."));
}
function clickTest20(){
  console.log("click!",cx.getTotal());
}

