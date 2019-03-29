
    



var killerNames = ["Laughing","Slender"," The Killer","Eyeless","Ticci","Drowned","Silver","EXE","Rake","Toymaker"];

var laughing;
var jack;

function creepy() {
   laughing  = document.getElementById("first").value;
   console.log(laughing);
   jack = document.getElementById("last").value;
  console.log(jack);
var names = laughing + jack;
console.log(names);  

switch(names){
    case'LaughingJack': alert("Go To A Carnival!");
    break;
    default:
    var number = Math.floor(Math.random()*10);
    console.log(number);
    var random = killerNames[number];
    console.log(random);
    var laughingUpper =  laughing.toUpperCase();
    var jackUpper =  jack.toUpperCase();
  
    document.getElementById("name").innerHTML =    laughingUpper + " " +jackUpper + " " + random  ;
    }
    

}
var killer= ["Shade","Joy"," The Slender Doll","Ace","Pinkamena " , "Diane Pie","Sally","Nurse Ann","Lovesick","Bloodrose"];

function pasta() {
   jack = document.getElementById("last").value;
  console.log(jack);
  laughing = document.getElementById("first").value;
   console.log(laughing);
var names= laughing + jack;
console.log(names);

switch(names){
    case'LaughingJack': alert("Go To A Carnival!");
    break;
    default:
    var number = Math.floor(Math.random()*10); 
    console.log(number);
    var random = killer[number];
    console.log(random);
    var laughingUpper =  laughing.toUpperCase();
    var jackUpper =  jack.toUpperCase();
  
    document.getElementById("name").innerHTML =    laughingUpper + " " +jackUpper + " " + random  ;
}
var names= laughing + jack;
console.log(names);
  

} 






  

    
    
    
 

 
 