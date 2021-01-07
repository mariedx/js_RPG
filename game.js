class Game {
  constructor(turnLeft = 10) {
    this.turnLeft = turnLeft;
    this.characters = [];
    this.createCharacters();
    this.newTurn();
  }

  createCharacters() {
    const fighter = new Fighter();
    console.log(fighter);

    const paladin = new Paladin();
    console.log(paladin);

    const monk = new Monk();
    console.log(monk);

    const berzerker = new Berzerker();
    console.log(berzerker);

    const assassin = new Assassin();
    console.log(assassin);

    this.characters.push(fighter, paladin, monk, berzerker, assassin,);

    console.log(`Nos ${this.characters.length} combattants sont prêts à en découdre !`);
  }
  
  newTurn() {
    if (this.turnLeft > 0) {
      new Turn(11 - this.turnLeft, this.characters);
      this.turnLeft -= 1 
    }
    else {
      console.log('La partie est terminée !')
    }
  }
  
}

console.log('*****************************************')
console.log('****** Bienvenue sur notre jeu **********')
console.log('****** Seul le plus fort survivra  ******')
console.log('*****************************************')

const start_game = prompt("Tapes GO pour commencer une partie");

switch(start_game){
  case 'GO':
    const my_game = new Game();
    break;
}