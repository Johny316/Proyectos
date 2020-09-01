//condiciones
// if (2>3 || 5>2){
//     console.log('Paso la condicion 1')
// }else if (3>2){
//     console.log('Paso la condicion 2')
// }else if (10>2){
//     console.log('Paso la condicion 3')
// }
// let age = parseInt(prompt('Dime tu edad'),10)

// if(age){
//     if(age >= 18){
//         alert('Eres mayor de edad')
//     }else{
//         alert('Te faltan mas anos')
//     }
// }else{
//     age = parseInt(prompt('Tu edad debe ser un numero cabron!'),10)
// }
// let message = age >=18
//     ? 'Eres mayor de edad'
//     : 'Te faltan mas edad'
// alert(message)

//uso del switch
// let answer = prompt('Elije un numero del 1 al 3')
// switch (answer) {
//     case '1':
//         alert('Eres timido')
//         break;
//     case '2':
//         alert('Eres Extrovertido')
//     break;
//     case '3:
//         alert('Eres Feliz')
//     break;
//     default:
//         alert('Por favor escribe un numero del 1 al 3')
//         break;
// }
//Uso del for
// for(let i=0; i<= 100; i++){
//     if(i % 7 === 0)console.log(i)
// }
// for(let i =0; i<=100; i+=7){
//     alert(`El valor es: ${i}`)
//  }
//Uso del continue y break
// for(let i=0; i<= 100; i++){
//     if(i % 7 === 0)continue //salta una ejecucion
//     console.log(i)
// }
// let n = 0
// for(let i=1; i<= 100; i++){
//     if(i % 7 === 0){
//         console.log(i)
//         n++ //se incrementa solo si cumple la condicion
//     }
//     if (n>=5)break//salgo del ciclo
// }
//uso del while
// let i = 10
// while(i --){
//     console.log(i)
// }
//uso de do while
// let password = 'EDteam'
// let pass
// do {
//     pass = prompt('Ingrese la contrasena')
// }while(pass !== password)
//Funciones en JS
// function saludar(persona, sexo){//Persona variable a ejecutar
//     let saludo = sexo === 'm'
//     ? `Bienvenido`
//     : `Bienvenida`
//     return `${saludo} a mi prueba, ${persona}`
//     // return sexo === 'm'
//     // ? `Bienvenido, ${persona}`
//     // : `Bienvenida, ${persona}`
// }
// console.log(saludar('Beto', 'm'))
// console.log(saludar('Johny', 'm'))
// console.log(saludar('Ana', 'f'))
//Funciones de flecha
// const saludar = (persona, sexo) =>{
//     let saludo = sexo === 'm'
//     ? `Bienvenido`
//     : `Bienvenida`
//     return `${saludo} a mi prueba, ${persona}`
// }
// console.log(saludar('Beto', 'm'))
// console.log(saludar('Johny', 'm'))
// console.log(saludar('Ana', 'f'))

// const sumar = (a,b) => a + b

// console.log(sumar(1,4))
// console.log(sumar(3,9))
// //Uso de parametros rest
// // const sumarTodos = (...numeros) =>{
// //     console.log(numeros[4])
// // }
// // sumarTodos(1,2,3,4,5)
// const sumarTodos = (...numeros) =>{
//     let resultado = 0
//     for(let i = 0; i < numeros.length; i++){
//         resultado += numeros[i]
//     }
//     return resultado
// }
// console.log(sumarTodos(1,2,3,4,5,6,7))
//Funciones ciudadanos de primera clase
// const c = console.log
// const multiplicar = (a,b) => a * b
// let edad = multiplicar(5,4)
// let edad2 = multiplicar(multiplicar(5,4),2)
// c(edad2)
// //c(edad)
// const c = console.log
// // const sumar = x => y => x + y
// // c(sumar(10)(20))
// const doSomething = x => y => x * y
// const a = doSomething(2)(2) //4
// const b = doSomething(3) // y => 3 * y
// c(doSomething(a)(b(3))) // 4 9
// //Funcion Pura
// let a = 'Hola'
// const saludar = (saludo,persona) => `${saludo} ${persona}`
// c(saludar(a,' Johny'))
// c(a)
//Funcion invocadas o se ejecuten solas
// let a = 'Hola'
// const saludar = ((saludo,persona) => `${saludo} ${persona}`)(a,'Johny')
// c(saludar)
// //funciones nombradas o anonimas como saludar que es nombrada ahora ej anonima
// setTimeout(() =>{
//     alert('Hola Johny')
// }, 3000)
//Scope
// {
//     let profesor = 'Johny'    
//     c(profesor)
// }
// function aumentar(){
//     let numero = 0
//     return function(){
//         numero++
//         c(numero)
//     }
// }
// const incrementar = aumentar()
// incrementar()
// incrementar()
// incrementar()
// incrementar()
// incrementar()
// incrementar()
//Arrays
// let array = ['hola', 2, true, undefined]
// array.length //devuelve la cantidad de elementos que tiene al final
// array[array.length - 1]//devuelve el ultimo elemento
//let arr5['Hola','amigos','como','estan']
// arr5 o arr5[3]
//let string1 = arr5[0] busco al primero
//let string2 = arr5[1] busco el segundo
//Desestructuracion de arrays
//nos permite agarrar estructuras de datos y dividirlas sin acceder a ellas directamente
//let [s1,s2,s3] = arr5 las variables se publican en una sola linea identificando la igualacion de un array
//metodos de agregar y quitar valores de un array
// let arr = [1,2,3,4]
// arr.push(5) //agregar nuevo elemento del array
// arr.pop() //quita y retorna el ultimo elemento del array
// arr.unshift('Nuevo') //agrega value como nuevo elemento al inicio del array retornando el nuevo lenght
// arr.shift()//elimina siempre el primer elemento
//Posicion personalizada
// arr = ['Guatemala','Colombia', 'Costa Rica']//splice sirve para eliminar epelmentos o agregar de un array
// arr.splice(2,0,'Mexio', 'Argentina') //el segundo elemento significa que elmina un elementos
// //slice 
// arr.slice(2,6)//extrae nuevo valor array los valores desde start hasta end-1
//Metodos para ordenar un array
// 'Hola Mama'.split('').reverse//invierte el texto
// 'Hola Mama'.split('').reverse().join()//join las une
// const reverseText = string => string.split('').reverse('').join('')
// let arr2 = ['B','D','A','Z']
// arr2.sort()//ordena el string no puede ordenar numeros pero este metodo puede recibir un callback
// arr2.sort().reverse()//menor a mayor
// let numbers = [3000,30,200,10]
// numbers.sort((a,b) =>  a- b)// esta comparando por parejas y resta si es positivo a es mayor que b y si es negativo b a es mayor que a
//Concatenar
numbers.join('')
numbers.join(',')
let numbers2 = [99,999,800]
numbers.concat(numbers2)
//encontrar un array
numbers.indexof(45)//encuentra la posicion y eso lo retorna si no esta dentro del array retorna un -1
//un callback es una funcion
numbers.find(number => number > 100)//funcion con parametros number que devolver el primer valor mayor a 100
numbers.findIndex(number => number > 100)//devuelve el indice el mayor a 100
//Eliminar elementos duplicados en un array
new Set(numbers)
//spret operariotor saca los valores del array los trabaja con valores uniocs
[...new Set(numbers)]
const removeDuplicates = arr =>[...new Set(arr)]//funicon que remueve duplicados
removeDuplicates(['a','b','a'])
Math.floor(2.4) 
Math.min(10,20,30,1)//devuelve valores en minimo no reciben arrays solo queire parametros
Math.max(10,20,30,1)//devuelve valores en maximo
Math.min(...numbers2)
Math.max(...numbers2)
//array lista de lementos recorrer un array
let arr = ['a','b','c','d','e','f']
// for(let i =0; i<arr.length; i++){
//     console.log(arr[i])
// }
// for(let element of arr){//se define una variable declarado con let se usa of para indicar en donde se va a recorrer
//     console.log(element)
// }
// let teachers = ['Alexys', 'Beto', 'Daniel']
// for(let teacher of teachers){
//     console.log(teacher[0]+B)
// }
// //forEach para aplicar una funcion a cada elemento,es un metodo
// //callback es una funcion
// teachers.forEach((el,i) =>{//recibe hasta 2 a 3 parametros
//     console.log(el)//el indice del elemento
//     console.log(i)//final
// })
// for(let teacher of teachers){
//     console.log(teachers.indexOf(teacher))
// }
// let arr2 = []//se tiene que crear un array vacio primero
// numbers.forEach(el => {
//     arr2.push(el*el)
// })
// //uso de some y every
// teachers.some(el=> el ==='Alexys')//verificar si existe en el array
// //every pide todos
// teachers.every(el => el.includes('a'))//verifica todos
// teachers.every(el => el.length >=3)//tienen al menos 3 caracteres
// //Metodos map filter y reduce
// //map transofrma todos los elementos del array segun el callback que le debmos
// numbers.map(el => el* el)//crear un nuevo array automatico
// //creamos una variable temporal multplicandola porsi misma
// let otherArray = numbers.filter( el => 5)
// let sum = numbers.reduce((a,b)=> a+b)
//objetos son las bases de JS es una estructura de datos
//imitan el comporatamiento del mundo real propiedad una caracteristica
let perro ={
    nombre: 'boby',
    edad: 3,
    color: 'blanco',
    sexo: 'macho',
    correr(){
        console.log(`${this.nombre}corre`)//metodo correr
    }
}
//para obtener propiedades
perro.nombre
perro.sexo
perro.correr()
// //Ejemplo con propiedades
// let a ='hola', b = 'mundo'
// let saludo ={
//     [a+b]: 'Mi Primer Hola Mundo'
// }
// let a = 'hola ', b = 'mundo '
// let saludo ={
//    [a + b]:'mi primer hola mundo',
// }
// document.write(Object.values(saludo))
// //delete es un operador unario
// delete perro.edad
// //se puede anadir
// perro['feliz']=true
// perro.vacunas = true
// //Prototipos
// Object.getPrototypeOf('Hola Mundo')//accede a los prototipos de
// //cada vez que se observe en mayusculas es un prototipo es un molde para anadir un valor a una propiedad
// String.prototype.length = '10'
//in es un operador que devuelve tru o false
'sexo' in perro //se puede recorrer un objeto con in
for(let property in perro)//devuelve propiedades hereradas
{
    console.log(property)
}
for(let property in perro){
    if(perro.hasOwnProperty(property))
    console.log(property)
}
//Mutabilidad: puede cambiar son asignados por referencia no por valor
//imutable ningun dato primitivo cambia todos estos datos son inmutables
let b = 'Beto'
let c = b
c = 'Alexys'
b.toUpperCase()
//los valores son independientes no estan encadenados
//los primitivos se asignan por valor no estan encadenados, los objetos se asignan por referencia
let perro2 = Object.assign({},perro)//asigna copia con referencia del array
perro2.oreja = 'largas'
//como recorrer un objeto
//for in devuelve los nombre de las propiedades de un objeto, pero devuelve tambien las propiedades en la cadena de prototipos
//for of no recorre un objeto. porque un objeto no tiene indies. No es iterable
Object.entries(perro)//devuelve como arrays cada una de las entradas del objeto(propiedad valor)
Object.keys(perro)//devuelve un object  (array like) con todas las propiedades
Object.values(perro)//devuelve los valores
