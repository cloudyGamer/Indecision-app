console.log("es6 arrow function");
const plus = (a,b) => {
   
    return a+b;};

console.log(plus(2,3,10));

const player = {
    name: 'Paul',
    cities: ['JoBurg','texas','Queens'],
    printPlaces  () {
            console.log(this.name);
            console.log(this.cities);
           
           return this.cities.map((city)=>
           player.name+"has lived in"+city+"!"
            );
           
          
         
    }
};

const divider = {
    number: 4,
    numbers : [2,4,6,8],
    divideMonster () {
        return this.numbers.map((number)=> "your returned number" + number*divider.number
                
                );
    }
    
};

console.log(divider.divideMonster());
console.log(player.printPlaces());