interface Animal {
  name:string,
  weight:number
}

var an:Animal = {
  name:"Cat",
  weight:50
}

interface Bird extends Animal {
  beaksize: number
}

var hen:Partial<Bird> = {
  name:"Hen",
  beaksize:5
}

type binfun = (a:number,b:number) => number;

const myfunc:binfun=(a,b)=>(a+b);

console.log(an.name);
console.log(an.weight);
console.log("Beak size", hen.beaksize);
console.log(myfunc(5,6));