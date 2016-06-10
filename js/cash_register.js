var mainDiv = document.getElementById('maindiv');

function cash_register(p0){

    displayDiv = document.createElement('div');
    displayDiv.className = "display";
    displayDiv.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit minima veniam sapiente, inventore itaque explicabo iste omnis autem et laboriosam, incidunt. Itaque perferendis voluptatum provident quidem accusamus, qui odio voluptatem!';
    mainDiv.appendChild(displayDiv);


    var x = 9;
    for (var i = 7; i<=x; i++){
    calButtonDiv = document.createElement('block');
    calButtonDiv.className = "calButtonDivs" + i;
    calButtonDiv.innerHTML = i;
    mainDiv.appendChild(calButtonDiv);
    }




}

cash_register();