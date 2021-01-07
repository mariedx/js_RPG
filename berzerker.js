class Berzerker extends Character {
  constructor(name = "Draven", hp = 8, dmg = 4, mana = 0, status = playing) {
    super(name, hp, dmg, mana, status);
  }

  rage(victim) {
    victim.hp -= (this.dmg += 1);
    this.hp -= 1;
    // Elle peut être appelée plusieurs fois (par exemple, si le Berzerker a fait son attaque spéciale 2 fois, ses attaques infligeront 4 + 2 = 6 points de dégât).
    console.log(`${this.name} a désormais ${this.hp} points de vie. Il dispose maintenant de ${this.mana}.`)
  }
}