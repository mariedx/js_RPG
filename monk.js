class Monk extends Character {
  constructor(name = "Moana", hp = 8, dmg = 2, mana = 200, status) {
    super(name, hp, dmg, mana, status);
  }

  specialAttack() {
    if (this.mana >= 25){
      this.mana -= 25;
      this.hp += 8;
      console.log(`${this.name} a utilisé son attaque spéciale. Grâce à ce soin de q-u-a-l-i-t-é il a gagné 8pts de vie.  Il dispose maintenant de ${this.mana} mana.`);
    }
  }
}