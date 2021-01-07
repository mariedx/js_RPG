class Turn {
  constructor(number, characters) {
    this.number = number;
    this.characters = characters;
    this.characters.forEach((currentPlayer) => {
      this.startTurn(currentPlayer);
      this.choiceAttack(currentPlayer);
    });
  }
  
  startTurn(currentPlayer) {
    console.log(`${currentPlayer.name} passe à l'attaque.`)
    console.log(`C'est le tour numéro ${this.number}.`)
  }
  
  choiceVictim(currentPlayer) {
    let ennemies = [ ...this.characters ];
    const currentPlayerIndex = ennemies.indexOf(currentPlayer);
    ennemies.splice(currentPlayerIndex, 1);
    console.log(`Voici les victimes dispo :`)

    for (let i in ennemies) {
      console.log(i + " "  + ennemies[i].name) 
    }

    const choice = prompt("Tape le numéro de ta vikos :");

    switch(choice) {
      case "0":
        return ennemies[0];
        break;
      case "1":
        return ennemies[1];
        break;
      case "2":
        return ennemies[2];
        break;
      case "3":
        return ennemies[3];
        break;
      default:
        console.log(`Ce n'est pas une option déso, on te laisse une seule autre chance.`);
        const choice = prompt("Tape le numéro de ta vikos :");
    }
  }

  choiceAttack(currentPlayer) {
   let choice = prompt("Souhaites-tu lancer une attaque basique (a) ou une attaque spéciale (b) ?");
    while (true) {
      if (choice === 'a') {
        currentPlayer.basicAttack(this.choiceVictim(currentPlayer));
        return;
      } 
      else if (choice === 'b') {
        if (currentPlayer instanceof Monk) {
          currentPlayer.specialAttack();
          return;
        } else {
          currentPlayer.specialAttack(this.choiceVictim(currentPlayer));
          return;
        }
      }
      else {
        choice = prompt("Entre a ou b please babe");
      }
    }
  }
}

