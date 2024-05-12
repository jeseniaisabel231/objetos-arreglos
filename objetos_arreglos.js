// (ES6) Nombres abreviados de propiedades
//Property Shorthand permite simplificar la escritura de objetos literables cuando la propiedad y la variable tienen el mismo nombre.
const username = "JoseCalle"
const fullname = "Jose Calle"
const age = 25  
const location = "Ecuador"  
//Antes de ES6, para crear un objeto con las variables anteriores, se hacía de la siguiente manera:
const user = {
    username: username,
    fullname: fullname,
    age: age,
    location: location
};
console.log(user);

//Con ES6, se puede simplificar la creación de objetos literales de la siguiente manera:
const user2 = { 
    username, 
    fullname, 
    age, 
    location 
};
console.log(user2);

/* -------------------------------------------------------------------------- */
//Fundamentos (Declaracion y Uso de .length en arreglos)
//La propiedad .length es una propiedad integrada en los arreglos
const newTweet = "Acaban de atentar en Durán contra la caravana en la que nos movilizábamos, gracias  a Dios salimos ilesos. El amendrentamiento y el miedo no tienen cabida en el país que queremos y el por el que estamos comprometidos a cambiar de una vez por todas."
if (newTweet.length > 140) {
    console.log("El tweet es muy largo, por favor recuerda que el máximo de caracteres es de 140.");
}else{
    console.log("Tweet publicado correctamente.");
}

/* -------------------------------------------------------------------------- */
// Recorrido (forEach y map)
//forEach: se utiliza para iterar sobre cada elemento de un arreglo y realizar una operacion o acción sobre cada uno de ellos.
const newsTweets = [
    {
        username: 'selenagomez',
        fullname: 'Selena Gomez',
        followers: '170.3M',
    },
    {
        username: 'justinbieber',
        fullname: 'Justin Bieber',
        followers: '170.3M',
    },
    {
        username: 'taylorswift',
        fullname: 'Taylor Swift',
        followers: '170.3M',
    },
];
const newsTweetsUsernames = newsTweets.forEach(tweet => console.log(tweet.username));



//map: se utiliza para crear un nuevo arreglo a partir de los elementos de un arreglo existente, aplicando una función a cada uno de ellos.
const newsTweetsTwo = [
    {
        username: 'Shakira',
        fullname: 'Shakira',
        followers: '170.3M',
        location: 'Colombia',
    },
    {
        username: 'Rihanna',
        fullname: 'Rihanna',
        followers: '170.3M',
        location: 'Barbados',
    },
    {
        username: 'Beyonce',
        fullname: 'Beyonce',
        followers: '170.3M',
        location: 'Estados Unidos',
    },
];
const newsTweetsUsernamesTwo = newsTweetsTwo.map((tweet) => {
    return {
        username: tweet.username,
        location: tweet.location,
    }
});
console.log(newsTweetsUsernamesTwo);
