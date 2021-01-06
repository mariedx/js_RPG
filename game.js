class Game {
  constructor(turnLeft = 10) {
    this.turnLeft = turnLeft
  }

  newTurn() {
    new Turn.starTurn();
  }

}
