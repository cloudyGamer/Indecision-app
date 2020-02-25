    console.log("classes toggle is running");
   class Person {
   constructor(name = "anonymous",age = "0"){
       
       this.name= name;
       this.age = age;
   }  
   
   getDescription(){
       //return "WELCOME" + this.name;
       return `Hi. I am ${this.name} and I am ${this.age} years old`;
   }
   
   }
   
   class Traveller extends Person {
    constructor(name,age,homeTraveller){
        super(name,age);
        this.homeTraveller = homeTraveller;
    }   
    
    isTraveller(){
    return !!this.homeTraveller;
    };
    
    
    getDescription(){
        let description = super.getDescription();
        if(this.isTraveller()){
            return description += `and he is from ${this.homeTraveller}`;
        }
        return description;
    };
   };
   
   class Student extends Person {
       constructor(name,age,major){
           super(name,age);
           this.major = major;
       }
       declaredMajor(){
           return !!this.major;
       }
       getDescription(){
           let description = super.getDescription();
           
           if(this.declaredMajor()){description += `and their major is ${this.major}.`;
       };
       return description;
       }
   }
   
   class Woman  {
       constructor(hairColor,eyeColor){
           this.hairColor =  hairColor;
           this.eyeColor = eyeColor;
       };
       
       getDescription(){
           return `this womans hair color is ${this.hairColor}`;
       }
   };
   
   class YoungWoman extends Woman {
       constructor(hairColor,eyeColor,age){
           super(hairColor,eyeColor);
           this.age = age;
       };
       
       hasAge() {
        return !!this.age;   
       };
       
       getDescription (){
        let description  = super.getDescription();
           if(this.hasAge()){
             description += `and her age is ${this.age}`  ;
           }
           return description;   
       };
   };
   
   const siobhan = new Woman ('red','green');
    console.log(siobhan.getDescription());
    
    const siela = new YoungWoman('blonde','blue','29');
    console.log(siela.getDescription());
    
    const me  = new Traveller ("Paul Dowling","28","Philadelphia");
   console.log(me.getDescription());
   
   const other = new Traveller ();
   console.log(other.getDescription());
   
  