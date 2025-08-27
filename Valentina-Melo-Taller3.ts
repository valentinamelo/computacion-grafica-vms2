//PRIMER PUNTO

// 1. Estudiante
interface Direccion {
    calle: string;
    ciudad: string;
    pais: string;
}

interface Estudiante {
    nombre: string;
    edad: number;
    curso: string;
    direccion: Direccion;
    mostrarInfo(): string;
}

const estudiante: Estudiante = {
    nombre: 'Juan',
    edad: 22,
    curso: 'Matemáticas',
    direccion: {
        calle: 'Av. Siempre Viva',
        ciudad: 'Bogotá',
        pais: 'Colombia'
    },
    mostrarInfo() {
        return `${this.nombre} estudia ${this.curso} en ${this.direccion.ciudad}`;
    }
};

console.log(estudiante.mostrarInfo());

// 2. Producto
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    mostrarDetalle(): string;
}

const producto: Producto = {
    id: 1,
    nombre: 'Laptop',
    precio: 3500,
    stock: 10,
    mostrarDetalle() {
        return `${this.nombre} cuesta $${this.precio} y hay ${this.stock} unidades disponibles`;
    }
};

console.log(producto.mostrarDetalle());

// 3. Película
interface Pelicula {
    titulo: string;
    director: string;
    duracion: number;
    genero: string;
    reproducir(): string;
}

const pelicula: Pelicula = {
    titulo: 'Avengers: Endgame',
    director: 'Anthony y Joe Russo',
    duracion: 181,
    genero: 'Acción',
    reproducir() {
        return `Reproduciendo: ${this.titulo} - Dirigida por ${this.director}`;
    }
};

console.log(pelicula.reproducir());

// 4. Vehículo
interface Vehiculo {
    marca: string;
    modelo: string;
    anio: number;
    encender(): string;
}

const vehiculo: Vehiculo = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2022,
    encender() {
        return `${this.marca} ${this.modelo} está encendido`;
    }
};

console.log(vehiculo.encender());

// 5. Usuario
interface Usuario {
    username: string;
    password: string;
    roles: string[];
    login(): string;
}

const usuario: Usuario = {
    username: 'admin01',
    password: '123456',
    roles: ['admin', 'editor'],
    login() {
        return `Usuario ${this.username} ha iniciado sesión con roles: ${this.roles.join(', ')}`;
    }
};

console.log(usuario.login());

// SEGUNDO PUNTO

/*
1.
let myValue: number | string | true = 10;
Error: `true` no se usa como tipo literal, el tipo de dato es boolean.
*/
let myValue: number | string | boolean = 10;
console.log("myValue:", myValue);

/*
2.
let myBoolean: Boolean = true;
Error: se debe escribir 'boolean' en minúscula.
*/
let myBoolean: boolean = true;
console.log("myBoolean:", myBoolean);

/*
3.
let healthPoints: number = "150";
Error: "150"  debe definirse como number, no string.
*/
let healthPoints: number = 150;
console.log("healthPoints:", healthPoints);

/*
4.
let otherMultipleDataType: number | boolean | "myTag" = "otraEtiqueta";
Error: "otraEtiqueta" no está como dato literal, el valor que puede tomar es un número, un booleano o "myTag".
*/
let otherMultipleDataType: number | boolean | "myTag" = "myTag";
console.log("otherMultipleDataType:", otherMultipleDataType);

/*
5.
let myVar;
Error: no esta definiendo el tipo de dato, por lo que no es fuertemente tipado, se define el tipo como any.
*/
let myVar: any;
myVar = 123;
myVar = true;
myVar = "texto";
myVar = {};
console.log("myVar:", myVar);

/*
6.
const myConstant: number;
Error: las constantes deben inicializarse.
*/
const myConstant: number = 30;
console.log("myConstant:", myConstant);

/*
7.
let inferedDataType = "Texto inicial";
inferedDataType = 123;
Error: la variable se infiere como string, por lo que no puede ser un número después.
*/
let inferedDataType: string | number = "Texto inicial"; // se inicializa como string o number
inferedDataType = 123;
console.log("inferedDataType:", inferedDataType);

/*
8.
const isActive: boolean = 1;
Error: 1 no es boolean.
*/
const isActive: boolean = true;
console.log("isActive:", isActive);

/*
9.
let mixed: number | string = true;
Error: true no es ni number ni string, se añade el tipo boolean.
*/
let mixed: number | string | boolean = true;
console.log("mixed:", mixed);

/*
10.
let while: string = "Hola";
Error: while es palabra reservada, se cambia el nombre de la variable.
*/
let whileTexto: string = "Hola";
console.log("whileTexto:", whileTexto);

/*
11.
let myNumber: numer = 10;
Error: tipo de dato mal escrito.
*/
let myNumber: number = 10;
console.log("myNumber:", myNumber);

/*
12.
let numeros: number[] = [1, 2, "3"];
Error: "3" es string, debe ser un número.
*/
let numeros: number[] = [1, 2, 3];
console.log("numeros:", numeros);

/*
13.
let tupla: [string, number] = ["Hola"];
Error: faltan elementos, requiere un string y un number.
*/
let tupla: [string, number] = ["Hola", 48];
console.log("tupla:", tupla);

/*
14.
let otraTupla: [string, boolean] = [true, "Hola"];
Error: tipos de datos invertidos.
*/
let otraTupla: [string, boolean] = ["Hola", true];
console.log("otraTupla:", otraTupla);

/*
15.
let texto = "Hola mundo";
texto = null;
Error: null no asignable, se añade el tipo en la inicialización de la variable.
*/
let texto: string | null = "Hola mundo";
texto = null;
console.log("texto:", texto);

/*
16.
let color: "rojo" | "verde" | "azul" = "amarillo";
Error: "amarillo" no permitido, solo se pueden usar las opciones rojo, verde y azul.
*/
let color: "rojo" | "verde" | "azul" | "amarillo" = "amarillo";
console.log("color:", color);

/*
17.
let valor: any = 10;
valor.toUpperCase();
Error: 10 es number, no tiene toUpperCase, puede escribirse como string para poder usar el método.
*/
let valor: any = "10";
console.log("valor.toUpperCase():", valor.toUpperCase());

/*
18.
const version: number = 1.0;
version = 2.0;
Error: constantes no se reasignan, debe ser una variable.
*/
let version: number = 1.0;
version = 2.0;
console.log("version:", version);

/*
19.
let persona = { nombre: "Ana" };
persona.apellido = "Ruiz";
Error: `apellido` no existe en el objeto, debe añadirse.
*/
let persona: { nombre: string; apellido?: string } = { nombre: "Ana" };
persona.apellido = "Ruiz";
console.log("persona:", persona);

/*
20.
let edad: number = undefined;
Error: undefined no es number, debe añadirse el tipo undefined a la variable.
*/
let edad: number | undefined = undefined;
console.log("edad:", edad);


export{};
