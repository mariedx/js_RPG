class Character {
  constructor(name, hp, dmg, mana, status = 'playing') {
    this.name = name
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = status;
  }

  takeDamage(attacker) {
    if (!isDead) {
      this.hp -= attacker.dmg;
      console.log(`${this.name} a subit ${attacker.dmg} damages, il a maintenant ${this.hp} points de vie.`)
    }
  }

  basicAttack(victim) {
    victim.hp -= this.dmg;
    if (victim.status === "loser") {
      this.mana += 20;
      console.log(`${this.name} a tué ${victim.name}, il dispose maintenant de ${this.mana}.`)
    }
  }

  isDead() {
    if (this.hp <= 0) {
      this.status = "loser";
      console.log(`${this.name} a périt dignement.`)
      return true;
    }
  }
}