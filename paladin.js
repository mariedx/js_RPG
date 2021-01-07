class Paladin extends Character {
  constructor(name = "Ulder", hp = 16, dmg = 3, mana = 160, status = playing) {
    super(name, hp, dmg, mana, status);
  }

  healingLighting(victim) {
    if (this.mana >= 40) {
      victim.hp -= 4;
      this.hp += 5;
      this.mana -= 40;
      console.log(`${this.name} a désormais ${this.hp} points de vie. Il dispose maintenant de ${this.mana}.`)
    }
  }
}