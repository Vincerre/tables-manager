const fs = require('fs');

const genders = ['male', 'female'];
const maleNames = ['John', 'James', 'Adam', 'Gregory', 'Robert', 'Victor', 'Travis'];
const femaleNames = ['Claudia', 'Kelly', 'Lara', 'Veronica', 'Amandia', 'Victoria', 'Amy'];
const lastNames = ['Smith', 'Adams', 'Johns', 'House', 'Brimstone', 'Willick', 'Morgan'];

const people = [];

const randChoice = (array) => {
  const choice = Math.floor(Math.random() * array.length);
  return array[choice];
};

for (i = 0; i < 20; i++) {
  const person = {
    gender: randChoice(genders),
    firstName: '',
    lastName: randChoice(lastNames),
    age: Math.floor(Math.random() * 40 + 18),
    email: '',
    phone:
      Math.floor(Math.random() * 3) + 5 + '' + Math.floor(Math.random() * 1000) + '' + Math.floor(Math.random() * 1000),
  };
  person.gender === 'male' ? (person.firstName = randChoice(maleNames)) : (person.firstName = randChoice(femaleNames));
  person.email = person.firstName.toLowerCase() + '.' + person.lastName.toLowerCase() + '@gmail.com';
  people.push(person);
}

const peopleJSON = JSON.stringify(people);

fs.writeFile('people.json', peopleJSON, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
