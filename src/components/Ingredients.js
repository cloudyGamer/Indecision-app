

import React from 'react';


export default class Ingredients extends React.Component {
state = {error: undefined};
        
componentDidMount(){
     //console.log("Ingredients mounted"+this.props.description);
}        

naturalClassifier = (sampleArray)=> {
     //console.log("natural classifier ran");
//const sampleArray = ["st","st","st"];
//const sampleReturn = sampleArray.map(ingredient => {if(sampleArray.length < 2) return (<p>{ingredient+"newString"}</p>);});

    return( sampleArray.map(ingredient => {
               let className = undefined; 
                         if(ingredient.indexOf("*") > 0) {
                               //console.log("a loser");
                               className = "bottomShelf_listIngredients_natural";
                               ingredient = ingredient.split("*");
                               ingredient = ingredient[1];
                         }else{
                              //console.log("a winner");
                              className = ""

                              }
                          return(            
                              <li key={ingredient.toString()} className={className}>{ingredient}</li>              
                           );
                 }));
 /*return( sampleArray.map(ingredient => {
               let className = undefined; 
                         if(ingredient.indexOf("*") > 0) {
                               console.log("a loser");
                               className = "bottomShelf_listIng_natural";
                         }else{
                              console.log("a winner");
                              className = ""

                              }
                          return(            
                              <li key={ingredient.toString()} className={className}>{ingredient}</li>              
                           );
                 }));*/                

     
//
}

loopIngredients = (descriptions) => {
     //console.log("loop ingredients ran");
const ingredientParts = descriptions.map(description => <li key={description.toString()}>{description}</li>);
return (ingredientParts);

}

extractIngredients = (description,naturalClassifier) => {
const ingredientArray0 = description.split("S:"); 
const ingredientsArray = ingredientArray0[1].split("&");

 //const finalArray = toString(ingredientsArray);
 //console.log("fianlArray="+finalArray);
 const finalArray2 = ingredientsArray[0].split(",");
 //console.log("ingredients[1]=   "+finalArray2[0]);
 //const testArray = ["testString","testString2"];
 const finalList = this.naturalClassifier(finalArray2);

return (finalList);   



}
  
handleIngredients = (e) => {
e.preventDefault();

const option = e.target.elements.option.value.trim();
const error = this.props.handleIngredients(option);

this.setState(() => ({ error }));

if (!error) {
 e.target.elements.option.value = '';
}
}

  render() {
//const sampleArray = ["string1","string2"];
    return (
      <div>
        {this.extractIngredients(this.props.description)}
      </div>
    );
  }
}
//