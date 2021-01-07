class Fighter extends Character {
  constructor(name = "Grace", hp = 12, dmg = 4, mana = 40, status) {
    super(name, hp, dmg, mana, status);
  }

  specialAttack(victim) {
  if (this.mana >= 20){
    this.mana -= 20;
    this.basicAttack(victim, 5);
    console.log(`${this.name} utilise l'attaque Dark Vision sur ${victim.name}. ${victim.name} perd 5pts de vie ! ${this.name} gagne 2pts de mana !  Il dispose maintenant de ${this.mana} mana.`);
    } 
    else {
    console.log('Not enough mana pour faire ça, déso mais ça part en attaque de BASE');
    this.basicAttack(victim, this.dmg);
    }
  }
}