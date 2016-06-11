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
  for (var i = 1; i<=x; i++){
  calButtonDiv = document.createElement('div');
  calButtonDiv.className = "calButtonDivs";
  calButtonDiv.id = "CBD"+i;
  mainDiv.appendChild(calButtonDiv);

    if(i<22){
        calButtonDiv.innerHTML = daNumbas[i-1];
    }
  }

  var clickable = document.getElementsByClassName('calButtonDivs');
    for(var i = 0; i<clickable.length; i++){                       // Another happy 'for loop'.
            clickable[i].addEventListener('click',clickAdder);
    }

function clickAdder(event){
    cx.event();
}

function clickTest(){
  console.log("click!",cx.add);
}