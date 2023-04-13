//console.log("hola mundo")
//console.warn("ocurrio un error")
//console.error("error grande")
//console.error(new error("ocurrio un error"))
//console.log(process.version)

//modulo os "sistema operativo  "
//const os= require('os')//sistema que tiene
//console.log(os.type())//unidad c
//console.log(os.homedir())
//cuantos segundos esta el s.o
//console.log(os.uptime())
//console.log(os.userInfo())

//modulo timer"temporizador  o cronometro"
//contiene funciones que ejecuta codiigo
// luego de un periodo de tiempo
//setTimeout(function,retraso,argumetos)
//sirve para ejecutar codigo luego codigo luego de un nunero  
//especifico  de milisegundos
// function suma(a,b){
//    console.log(a+b)
//  }
// // setTimeout(suma, 1000,1, 2);

// //setImmediate()
// //para ejecutar codigo asicrono en la proxima interacion del ciclo de eventos(lo mas pronto posible) 
// //se ejecuta del codigo sincrono  setImmediate (funcion,argumento)
// // console.log("antes")
// // setImmediate(suma, 1,2)
// // console.log("despues")
// //setInterval
// //para ejecutar codigo un numero Infinito de veces con un retraso especifico 
// setInterval(suma, 1500, 3, 4)
//Modulo FS(File system)
// contiene funcionalidad muy utili para trabajar
// con el sistema de archivo
// operaciones utilies:AudioListener,modificar,copiar,eliminar
// cambiar nombre 
// todos los metodos de este modulo son asicronos por defecto 
// se pueden hacer sncrono si se le agrega sync al final

const fs=require('fs')
//readFile
/*fs.readFile('index.html' , 'UTF-8', (err,contenido) => { 
    if (err){console.log(err)
    }
    else{
        console.log(contenido)
    }
}*/

// fs.appendFile('index.html','<p>hola soy yo</p>',(err) =>{
//     if (err){
// }
// else{
//     console.log("archivo actualizado")
// }
// })



fs.unlink('index.html',(err) =>{
    if (err){
        throw err
}
else{
   console.log("contenido eliminado")
}})
