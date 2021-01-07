class Assassin extends Character {
  constructor(name = "Carl", hp = 6, dmg = 6, mana = 20, status) {
    super(name, hp, dmg, mana, status);
  }

  specialAttack(victim) {
    if (this.mana >= 20){
      this.basicAttack(victim, 7);
        if (victim.status != "Looser"){
          this.hp -= 7;
        }
    }
    console.log(`${this.name} infligera ${this.dmg + 7} dégats  au prochain tour. Il a désormais ${this.hp} points de vie et dispose de ${this.mana} mana.`)
  }
}