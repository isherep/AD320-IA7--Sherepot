
var div = document.getElementById('main');


//use ternary operator instead tomorrow
function changeColor(){
  if(div.style.background === 'red'){
    div.style.background = 'blue';
  }else{
    div.style.background = 'red';
  }
}

div.addEventListener('click', changeColor);
