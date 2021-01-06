class Fighter extends Character {
  constructor(name = "Grace", hp = 12, dmg = 4, mana = 40, status = playing) {
    super(name, hp, dmg, mana, status);
  }

  darkVision(victim) {
    if (this.mana >= 20) {
      victim.hp -= 5;
      this.mana -= 20;
    }
  }
}