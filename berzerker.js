class Berzerker extends Character {
  constructor(name = "Draven", hp = 8, dmg = 4, mana = 0, status) {
    super(name, hp, dmg, mana, status);
  }

  specialAttack(victim) {
    this.dmg += 1;
    this.hp -= 1;
    console.log(`${this.name} utilise l'attaque Rage. A présent, ses attaques risquent de picôter de ${this.dmg} points. Il dispose maintenant de ${this.mana} mana.`);
  
    }
}