let edad = 18
console.log(edad, typeof edad)

if(edad){
  console.log('edad existe!')
} else {
  console.log('edad no!! existe!')
}

if(edad === 18){
  console.log('edad es igual a 18')
} else {
  console.log('edad no es igual a 18')
}

if(edad == '18'){
    console.log('edad es igual a "18"')
} else {
  console.log('edad no es igual a "18"')
}

if(edad > 18){
  console.log('edad es mayor a 18')
} else if (edad < 18){
  console.log('edad es menor a 18')
}

if(edad && edad >= 18) {
  console.log('combinando variadores, edad es mayor o igual a 18')
}

if(edad && edad <= 18) {
  console.log('combinando variadores, edad es menor o igual a 18')
}

if(edad && edad >= 1 && edad < 18) {
  console.log('Es un ñiño 👶')
} else if(edad && edad >= 18 && edad <= 30) {
  console.log('Esta persona es un lolein 🧒')
} else if(edad && edad >= 31 && edad <= 60){
  console.log('esta meo viejo 👵')
} else {
  console.log('F, se va a morir :( ⚰️')
}

console.log('==========')
let mensajeEdad = `La edad es ${edad}!`
console.log(mensajeEdad)

let nombre = 'Ana', apellido = 'Santibañez'
console.log(nombre, typeof nombre, apellido, typeof apellido)

if(nombre && apellido){
  console.log(`Hola! como estas ${nombre !== '' ? nombre : ''} ${apellido !== '' ? apellido : ''}`)
}

console.log(`La primera letra de tu nombre es ${nombre[0]}`)

if(nombre.length > 2){
  console.log(`tu nombre tiene ${nombre.length} caracteres`)
}

console.log('==========')
console.log('V && V', true && true)
console.log('V && F', true && false)
console.log('F && V', false && true)
console.log('F && F', false && false)
console.log('==========')
console.log('V && V && V', true && true && true)
console.log('V && V && F', true && true && false)
console.log('V && F && F', true && false && false)
console.log('F && F && F', false && false && false)
console.log('==========')
console.log('V || V', true || true)
console.log('V || F', true || false)
console.log('F || V', false || true)
console.log('F || F', false || false)
console.log('==========')
console.log('V || V || V', true || true || true)
console.log('V || V || F', true || true || false)
console.log('V || F || F', true || false || false)
console.log('F || F || F', false || false || false)

console.log('==========')
// arrays
let arraysEj = ["Hola", "esto", "es", "un", "array", 10, 20, 30]
console.log('arraysEj', arraysEj, arraysEj.join(' '))
let sumaTodo = [10, 20, 30, 40, 50, 60]
console.log('Suma de todo:', sumaTodo.reduce((a, b) => a + b))

let miCarritoDeCompras = [
  {
    nombre: 'Fideos',
    marca: 'Marcelo',
    precioUnidad: 2990,
    cantidad: 10,
    IVA: 3.4,
  },
  {
    nombre: 'DietNature',
    marca: 'Gullon',
    precioUnidad: 3990,
    cantidad: 3,
    IVA: 200,
  }
]

console.log(miCarritoDeCompras, miCarritoDeCompras.length, miCarritoDeCompras[0], miCarritoDeCompras[1])
console.log(miCarritoDeCompras, miCarritoDeCompras.length, miCarritoDeCompras[0], miCarritoDeCompras[1])

let modificandoMiCarrito = miCarritoDeCompras.map(item => {
  return {
    ...item,
    nombre: "Esta modificado"
  }
})

console.log('Comparando mi carrito modificado', miCarritoDeCompras, modificandoMiCarrito)

let total = miCarritoDeCompras.reduce((prev, current) => prev + ((current.precioUnidad * current.cantidad) + current.IVA), 0)

console.log(`Total del carrito ${total}`)

console.log('==========')
// objetos
let myProfile = {
  name: nombre,
  lastName: apellido,
  age: edad,
  mensaje: `Hola! ${nombre} ${apellido}`,
  carritoDeCompras: miCarritoDeCompras
}

console.log(myProfile)

console.log('==========')
