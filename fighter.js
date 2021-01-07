class Fighter extends Character {
  constructor(name = "Grace", hp = 12, dmg = 4, mana = 40, status) {
    super(name, hp, dmg, mana, status);
  }

  specialAttack(victim) {
    if (this.mana >= 20) {
      newDmg = 5;
      victim.hp -= newDmg;
      this.mana -= 20;
      // prendra 2 dégâts de moins par coup reçu
      console.log(`${this.name} a désormais ${this.hp} points de vie. Il dispose maintenant de ${this.mana}.`)
    }
  }
}