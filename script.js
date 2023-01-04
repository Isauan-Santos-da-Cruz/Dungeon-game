console.log("all ok in script");
var local = document.getElementById("local");
var eu = document.getElementById("eu");

var euInfo = {
  
  vida:100,
  mana:20,
}


eu.innerText = "vida :"+euInfo.vida+" "+ "mana :"+euInfo.mana;
eu.style.color="rgb(100, 50, 140)"


function p(chat){
  return console.log(chat);
}

p(euInfo)