const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

// const admitted = document.querySelector('.admitted');
// const refused = document.querySelector('.refused');

let admitted = 'Admit: ';
let refused = 'Refuse: ';

for (const person of people) {
  if (person === 'Phil' || person === 'Lola') {
    refused += `${person}, `;
  } else {
    admitted += `${person}, `;
  }
}
//extract a substring from a string using the slice() method
// const browserType = "mozilla";
// console.log(browserType.slice(1, 4)); // "ozi"
refused = refused.slice( 0, refused.length-2 ) + '.';
admitted = admitted.slice( 0, admitted.length-2 ) + '.';

console.log(refused);
console.log(admitted);

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
