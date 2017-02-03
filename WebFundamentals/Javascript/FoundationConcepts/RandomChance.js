function slotMachine(quarters){
var qWon = Math.floor(Math.random() * 10000);

while ( quarters > 0){
  var chance = (Math.floor(Math.random() * 10));
  if (chance == 2){
    console.log('you win');
    quarters+=qWon;
    return quarters;

  }
  else{
    console.log('you lose');
    quarters--;
  }
}

}
slotMachine(10);
