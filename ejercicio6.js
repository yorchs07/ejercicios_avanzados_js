const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

function swap(array, origen, destino) {
  lista = []
  lista = array
  let save
  let cambio
  if (origen > destino) {
    cambio = origen
    origen = destino
    destino = cambio
  }

  for (let i = 0; i < array.length; i++) {
    if (i == origen) {
      save = array[origen]
      lista[origen] = array[destino]
    } else if (i == destino) {
      lista[destino] = save
    }
  }
  return lista
}

console.log(fantasticFour)
console.log(swap(fantasticFour, 2, 1))
