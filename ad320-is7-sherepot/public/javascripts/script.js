
var div = document.getElementById('main');

// div.addEventListener('click', function(){
//   div.style.background = 'green';
// });
// div.addEventListener('click', function(){
//   div.style.background = 'green';
// });

//use ternary operator instead tomorrow
function changeColor(style){
  if(div.style.background === 'red'){
    div.style.background = 'green';
  }else{
    div.style.background = 'red';
  }
}

div.addEventListener('click', changeColor);
