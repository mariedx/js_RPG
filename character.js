class Character {
  constructor(name, hp, dmg, mana, status = 'playing') {
    this.name = name
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = status;
  }

  takesDamage(attacker, receivedDamages) {
    this.hp -= receivedDamages;
    console.log(`Il reste à ${this.name} ${this.hp}`);
    this.lostGame(attacker);
  }

  basicAttack(victim, inflictedDamages = this.dmg) {
    inflictedDamages = this.dmg;
    console.log(`${this.name} inflige ${inflictedDamages} à ${victim.name}`);
    victim.takesDamage(this, inflictedDamages);
  }

  lostGame(attacker){
    if (this.hp <= 0) {
      this.status = 'Looser';
      attacker.mana += 20;
      console.log(`OH NOOOOOON ${this.name} est moooooooooooooooooort.e !`);
      console.log(`La cruauté de ${attacker.name} est recompensée de 20pts de mana`);
    }
  }
}