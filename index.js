const task = {
    "actividad 1":"Crear un abjeto",
    "actividad 2":"Hacer una operación numérica",
    "actividad 3":"hacer una operación lógica",
    "actividad 4":"utilizar las 3 actividades anteriores en un ejemplo",
}

//--//

const person = {
    'name': "Martin",    
    'lastname': "julca",
    'age': 27,
    'location': "Lima",
}

console.log('Actividad 1:', person);

//--//

var a=3;
var b=10;

console.log('Actividad 2:', a * b);     

//--//

const  c = a > 5 ? 'hola' :'Chao';
console.log('Actividad 3:', c);     

//--//

const saludo=(numb) => {
    if(numb === 5){
        return `hola ${person.name} ${person.lastname}`;
    }else{
        return 'adios';
    }
}

console.log('Actividad 4:', saludo(5));  