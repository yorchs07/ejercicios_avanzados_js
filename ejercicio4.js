const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i
    }
  }
  return -1
}

console.log(findArrayIndex(mainCharacters, 'Han Solo'))
console.log(findArrayIndex(mainCharacters, 'Rey'))
console.log(findArrayIndex(mainCharacters, 'Obi-Wan'))
console.log(findArrayIndex(mainCharacters, 'Darth Vader')) //Devuelve -1 porque no está en el array.

function removeItem(array, text) {
  const index = findArrayIndex(array, text)
  if (index !== -1) {
    array.splice(index, 1)
  }
  return array
}

console.log(removeItem(mainCharacters, 'Luke'))
console.log(removeItem(mainCharacters, 'Leia'))
