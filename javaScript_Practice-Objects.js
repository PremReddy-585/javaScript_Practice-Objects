//create and log an object
let vehicle = {
    name: 'Mercedes Benz',
    model: 'C-Class',
    manufacturer: 'Daimler AG company',
    length: '4686mm',
    'cargo capacity': '12.6 cubic feet'
};

console.log(vehicle);

//Create & Log an Object - 2
let bahubali = {
    title: "Baahubali",
    director: "Rajamouli",
    producers: ["Sobhu", "Raghavendra", "Prasad"],
    "lead actors with their roles": {
        prabhas: "Baahubali",
        anushka: "Devasena",
        rana: "Bhallaladeva",
        tamannah: "Avanthika"
    }
};
console.log(bahubali);

//Acess values from the object
let Ramabali = {
    title: "Baahubali",
    director: "Rajamouli",
    producers: ["Sobhu", "Raghavendra", "Prasad"],
    actors : {
        prabhas: "Baahubali",
        anushka: "Devasena",
        rana: "Bhallaladeva",
        tamannah: "Avanthika"
    }
};
console.log(Ramabali.actors.prabhas)

//updating values in an Object
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
  };
  
  person.firstName = 'jane';
  person.age = '35';

  console.log(person);

  //Adding Property to an Object
  let prem = {};
  
  prem.name = "prem1";
  prem.age = 23;
  prem.city= "new york";
  prem.isStudent = false;

  console.log(prem);
