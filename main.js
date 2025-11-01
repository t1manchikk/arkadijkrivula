const fighter1 = {
  name: "Герой 1",
  hp: 100,
  elementHp: document.getElementById("hp1"),
  elementScore: document.getElementById("score1")
};

const fighter2 = {
  name: "Герой 2",
  hp: 100,
  elementHp: document.getElementById("hp2"),
  elementScore: document.getElementById("score2")
};

function updateFighter(fighter) {
  fighter.elementHp.value = fighter.hp;
  fighter.elementScore.textContent = `Здоров'я: ${fighter.hp}`;

  const bar = fighter.elementHp;
  if (fighter.hp > 60) bar.style.accentColor = "lime";
  else if (fighter.hp > 30) bar.style.accentColor = "orange";
  else bar.style.accentColor = "red";
}

function randomDamage(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let turn = 1;

function fight(type = "normal") {
  let dmgRange = type === "strong" ? [10, 25] : [5, 15];

  if (turn === 1) {
    let dmg = randomDamage(...dmgRange);
    fighter2.hp = Math.max(0, fighter2.hp - dmg);
    alert(`${fighter1.name} атакує і завдає ${dmg} шкоди!`);
    turn = 2;
  } else {
    let dmg = randomDamage(...dmgRange);
    fighter1.hp = Math.max(0, fighter1.hp - dmg);
    alert(`${fighter2.name} атакує і завдає ${dmg} шкоди!`);
    turn = 1;
  }

  updateFighter(fighter1);
  updateFighter(fighter2);

  if (fighter1.hp === 0 || fighter2.hp === 0) {
    const winner = fighter1.hp > fighter2.hp ? fighter1.name : fighter2.name;
    alert(`🏆 Переміг ${winner}!`);
  }
}

document.getElementById("fightBtn").addEventListener("click", () => fight("normal"));
document.getElementById("strongAttackBtn").addEventListener("click", () => fight("strong"));

updateFighter(fighter1);
updateFighter(fighter2);
