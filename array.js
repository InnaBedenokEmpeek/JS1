let array1 = [
    {name: 123, lastName: 1234},
    {name: 123, lastName: 1234},
    {name: 123, lastName: 1234},
    {name: 123, lastName: 1234},
    {name: 123, lastName: 1234},
    {name: 123, lastName: 1234},
    {name: 123, lastName: 1234},
]

    function greeting () {
    let greetMessage = "You are wellcome!";
    let greetMessage1 = "Thanks for subscription!";
    
    if (array1.length > 5) {
        return greetMessage;
    } else {
        return greetMessage1;
    }
    
}
console.log(greeting(array1));//передавати агрумент при виклику, тоді буде виводитись повідомлення
