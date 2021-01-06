class Character {
  constructor(name, hp, dmg, mana, status = "playing") {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = status
  }

  takeDamage(numberDamage) {
    if (this.hp <= 0) {
      this.status = "loser"
      console.log(`${this.name} est mort.`)
    }
    else {
      this.hp -= numberDamage
      console.log(`${this.name} a perdu ${numberDamage}, il a maintenant ${this.hp} points de vie.`)
    }
  }

  dealDamage(victim) {
    if (victim.hp <= 0) {
      console.log(`${victim.name} est mort, inattaquable.`)
    }
    else {
      victim.hp -= this.dmg;
    }
  }
}
