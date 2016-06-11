//---------------------------------------------------
//var add2 = add;
var cx = calculatorModule();

var mainDiv = document.getElementById('maindiv');

var daNumbas = [7,8,9,"%","CLR",4,5,6,"X","GtBl",1,2,3,"-","Dep$",0,"00",".","+","Wth$","="];

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

var clickable = document.getElementsByClassName('calButtonDivs');
            clickable[1].addEventListener('click',clickTest1);

var clickable = document.getElementsByClassName('calButtonDivs');
            clickable[2].addEventListener('click',clickTest2);

var clickable = document.getElementsByClassName('calButtonDivs');
            clickable[3].addEventListener('click',clickTest3);

var clickable = document.getElementsByClassName('calButtonDivs');
            clickable[4].addEventListener('click',clickTest4);

var clickable = document.getElementsByClassName('calButtonDivs');
            clickable[5].addEventListener('click',clickTest5);

var clickable = document.getElementsByClassName('calButtonDivs');
            clickable[6].addEventListener('click',clickTest6);

var clickable = document.getElementsByClassName('calButtonDivs');
            clickable[7].addEventListener('click',clickTest7);

var clickable = document.getElementsByClassName('calButtonDivs');
            clickable[8].addEventListener('click',clickTest8);

var clickable = document.getElementsByClassName('calButtonDivs');
            clickable[9].addEventListener('click',clickTest9);

var clickable = document.getElementsByClassName('calButtonDivs');
            clickable[10].addEventListener('click',clickTest10);

var clickable = document.getElementsByClassName('calButtonDivs');
            clickable[11].addEventListener('click',clickTest11);

var clickable = document.getElementsByClassName('calButtonDivs');
            clickable[12].addEventListener('click',clickTest12);

var clickable = document.getElementsByClassName('calButtonDivs');
            clickable[13].addEventListener('click',clickTest13);

var clickable = document.getElementsByClassName('calButtonDivs');
            clickable[14].addEventListener('click',clickTest14);

var clickable = document.getElementsByClassName('calButtonDivs');
            clickable[15].addEventListener('click',clickTest15);

var clickable = document.getElementsByClassName('calButtonDivs');
            clickable[16].addEventListener('click',clickTest16);

var clickable = document.getElementsByClassName('calButtonDivs');
            clickable[17].addEventListener('click',clickTest17);

var clickable = document.getElementsByClassName('calButtonDivs');
            clickable[18].addEventListener('click',clickTest18);

var clickable = document.getElementsByClassName('calButtonDivs');
            clickable[19].addEventListener('click',clickTest19);

var clickable = document.getElementsByClassName('calButtonDivs');
            clickable[20].addEventListener('click',clickTest20);

function clickTest0(){
  console.log("click!", cx.load(7));
  console.log(cx.getTotal());
}

function clickTest1(){
  console.log("click!",cx.add(8));
}
function clickTest2(){
  console.log("click!",cx.add(9));
}
function clickTest3(){
  console.log("click!",cx.divide());
}
function clickTest4(){
  console.log("click!",cx.clearMemory());
}
function clickTest5(){
  console.log("click!",cx.add(4));
}
function clickTest6(){
  console.log("click!",cx.add(5));
}
function clickTest7(){
  console.log("click!",cx.add(6));
}
function clickTest8(){
  console.log("click!",cx.multiply());
}
function clickTest9(){
  console.log("click!",cx.add());
}
function clickTest10(){
  console.log("click!",cx.add(1));
}
function clickTest11(){
  console.log("click!",cx.add(2));
}
function clickTest12(){
  console.log("click!",cx.add(3));
}
function clickTest13(){
  console.log("click!",cx.subtract());
}
function clickTest14(){
  console.log("click!",cx.add());
}
function clickTest15(){
  console.log("click!",cx.add(0));
}
function clickTest16(){
  console.log("click!",cx.add(+"00"));
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

