// carga estructura html
//onload es un evento q  ejecuta todo lo q esta adentro despuesde q la pagina se cargue por completo 
//window.onload = function(){
  //var board = document.querySelection('.board-js');
  //para agregar unevento
  //board.addEventListener('click',function(event){
    //target me da el elemento
    //console.log(event.target.style.background = 'red');
  //})
  //board.addEventListener('dblclick',function(event){
    //event.target.style.backgroundColor='blue';
//});
 //board.addEventListener('mouseover',function(event){
   //  event.target.style.backgroundColor='yellow';
 //});
//};

//var centinel= true;
//function addX(event){
  //if(event.target.matches('td')){
    //if(centinel)
     //event.target.text
 // }
//}

//----------------------------------------------------------------------//
// cuando esta totalmente cargado
window.onload = function() {
  var board = document.querySelector('.board-js');
 
  board.addEventListener('click', addX);
 
  /* board.addEventListener('dblclick', function(event) {
    event.target.style.backgroundColor = 'blue';
  });
 
  board.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'yellow';
  });*/
 
  // board.removeEventListener('click', addBgr);
 };
 var centinel = true;
 function addX(event) {
  if (event.target.matches('td') && event.target.textContent === '') {
    if (centinel) {
      event.target.textContent = 'x';
    } else {
      event.target.textContent = '0';
    }
    centinel = !centinel;
  }
 }



