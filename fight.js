let player = {
name: "ussblah",
myHull: 30,
myFirePower: 5,
myaccuracy: 7
}

function Opp (name, value, value, value) {
this.name= name;
this.enFirePower= (Math.floor(Math.random() *2)+4);
this.alAccuracy= Math.random();
this.hull= (Math.floor(Math.random() *10)+5);
};

let a= new Opp("alien1")
let b= new Opp("alien2")
let c= new Opp("alien3")
let d= new Opp("alien4")
let e= new Opp("alien5")
let f= new Opp("alien6")

let alienArr=[a,b,c,d,e,f]

let myAtk = () => {
if (a.hull >= 1 && player.myHull > 0){
  let chance = (Math.floor(Math.random() *2)+4)
     if (chance < player.myaccuracy){
     a.hull -= player.myFirePower
     alert("you hit")
     if(a.hull<=0){
       return a.hull = 0;
     }
     }
     else{
     alert("you missed")
          }
        }
      }

      let enAtk = () => {
        if (player.myHull >=1 && a.hull>0){
          let chance = (Math.floor(Math.random() ))
            if (chance <1000){
              player.myHull -= a.enFirePower
              alert("you've been hit")
            }
            else{
              alert("they missed")

            }
          }
        }

        let enDeath = () => {
          if (a.hull <= 0){
            alert("Look out another ship is comming");

            }
          }


      let atkFun = () => {
        let atkBtn= document.getElementById('atkBtn')


          myAtk();
          enAtk();
          enDeath();
          stats();
          // quitFunc();

        }

// quiting hide/show function

let quitFunc = () => {
  document.getElementById('run')
  document.getElementById('game').style.display = "none" ;
 ;
}
if (a.hull>1){
  document.getElementById('postFight').style.display = "none" ;
}
else if(a.hull<=0){
  document.getElementById('postFight').style.display = "block" ;
}




let stats = () => {

      document.getElementById('oppHull').innerText =`Hull Health: ${a.hull}`;
      document.getElementById('oppName').innerText =`Enemy: ${a.name}`;
      document.getElementById('oppAtkPow').innerText =`Firepower: ${a.enFirePower}`;


      document.getElementById('myHull').innerText = `Ship Health: ${player.myHull}`;
      document.getElementById('shipName').innerText = `Ship: ${player.name}`;
}
stats();
