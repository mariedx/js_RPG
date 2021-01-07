class Paladin extends Character {
  constructor(name = "Ulder", hp = 16, dmg = 3, mana = 160, status) {
    super(name, hp, dmg, mana, status);
  }

  specialAttack(victim) {
    if (this.mana >= 40){
      this.mana -= 40;
      this.basicAttack(victim, 4);
      this.hp += 5;
      console.log(`${this.name} utilise l'attaque Healing Lighting sur ${victim.name} qui a un peu le seum et perd 4 pts de vie. ${this.name} se soigne de 5pts parce que parfois la vie, c'est un kiwi. Il dispose maintenant de ${this.mana} mana.`);
    } 
    else {
      console.log('Déso jeune Paladin mais tu manques de mana, ça va partir en attaque normale. My game, my rules');
      this.basicAttack(victim, this.dmg);
    }
  }
}