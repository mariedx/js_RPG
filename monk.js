class Monk extends Character {
  constructor(name = "Moana", hp = 8, dmg = 2, mana = 200, status = playing) {
    super(name, hp, dmg, mana, status);
  }

  heal() {
    if (this.mana >= 25) {
      this.hp += 8;
      this.mana -= 25;
      console.log(`${this.name} a désormais ${this.hp} points de vie. Il dispose maintenant de ${this.mana}.`)
    }
  }
}