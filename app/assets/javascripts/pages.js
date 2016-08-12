// function changeColors(){
//   setTimeout(function(){
//     document.getElementById("first").style.color = "red";

//     setTimeout(function(){ 
//       document.getElementById("second").style.color = "aqua";

//         setTimeout(function(){ 
//         document.getElementById("third").style.color = "green";

//           setTimeout(function(){ 
//           document.getElementById("fourth").style.color = "yellow";
//         },1000);
//       },1000);
//     },1000);
//   },1000);
// }
function getData(){

fetch("https://data.cityofchicago.org/resource/dip3-ud6z.json")
.then(function(response){
  return response.json();
  })
.then(function(data){
  var pLandlords;
  var htmlString = '';

  for(var i = 0; i < data.length; i++){
    pLandlords = data[0];
  }
});

}
