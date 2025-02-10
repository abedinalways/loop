//object => key value payer
const car = {
  name: 'BMW',
  color: 'black',
  style: 'new',
  accelerate: function () {
    console.log("speed increases")
  }
}
car.accelerate();

const mine = {
  name: 'shahin',
  favColor:'white',
  'favourite place':['mosque', 'coxs-bazar', 'rangamati', 'jaflong' ]
}
mine.favColor = 'green';
console.log(mine);

console.log(mine['favourite place']);
const keys = Object.keys(mine) //to access the properties
console.log(keys)
console.log(Object.values(mine)) //to access the values
//to add the property
mine.isMarried = true;
mine.age = 33;
mine.occupation='web developer'
console.log("about myself: ", mine)