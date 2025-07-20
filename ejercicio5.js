function rollDice(caras) {
  return Math.floor(Math.random() * caras) + 1
}
for (let i = 0; i < 10; i++) {
  console.log(rollDice(6))
}
