/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | EnterEmail1s
 * and open the template in the editor.
 */


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | EnterEmail1s
 * and open the template in the editor.
 */
import React from 'react'; 

export default class EnterEmail1 extends React.Component {
          
state =  {
          value : '',
          
          queries: {
          customer_group_id:'1',
          firstname:'paul',
          lastname:'dowling',
          email:'paul.m.dowling@gmail.com',
          telephone:'012860333',
          company:'1',
          address_1:'sill stree',
          address_2:'example1',
          postcode:'d8',
          country_id:'222',
          zone_id:'3514',
          shipping_address:'1'
     },
     customer_group_id:'',
          firstname:'',
          lastname:'dowling',
          email:'paul.m.dowling@gmail.com',
          telephone:'012860333',
          company:'1',
          address_1:'sill stree',
          address_2:'example1',
          postcode:'d8',
          country_id:'222',
          zone_id:'3514',
          shipping_address:'1',
          differentValue: ''
            
        } 
  componentDidMount() {
  
  const testArray = {
1 : "string1",
2: "string2"
  }  
 
  //const  newArray = [];
  console.log('EnterEmail1 component did mount');
 
      //const newQuery = this.state.queries;

      {/*  for(var prop in this.state.queries) {           
newArray.push(prop); 

///////////

///
//Object.keys(this.state.queries).map(
//i => this.setState({ [i]: newArray[j] }))
{/*  Object.keys(this.state.queries).forEach(function (item) {
	console.log(item); // key
console.log(this.state.queries[item]); // value
});
///

}*/}

/// working code
//Object.keys(this.state.queries).map(i => console.log(this.state.queries[i]))    
} 

////////////////////////////////////////
componentDidUpdate () {
console.log("state = "+this.state.queries.firstname);     
}
////////////////////////////////////////

////////////////////////////////// event handlers
handleChange(event) { 
     //const string = "string";
     //console.log("handleChange executed with value"+event.target.value);
    //this.setState.queries({firstname : event.target.value});
   // this.setState({value: string});
   //console.log("handleChange executed with value"+event.target.value);
   // this.setState({value: string});
    
   this.setState({queries : {firstname: event.target.value}});
console.log("handleChange executed");

//
  
  }

template = (event) => {
const param = event.target.value;
//this.setState({queries : {firstname: param}});
/////

// new code
{/*  this.setState((prevState) => ({
      queries: {firstname: prevState.testArray2.firstname.concat(param)}
    }));*/}
/////
this.setState({firstname : param});
/////
console.log("template executed");
console.log("state value changed to"+this.state.firstname);} 
           


 handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
////////////////////////////////// * event handlers
/////new consts
/*const querys  = [
firstname:'',
lastname:'',
email:'',
telephone:'',
company:'',
address_1:'',
address_2:'',
postcode:'',
country_id:'',
zone_id:'',
shipping_address:''     
]*/
    


routeMultiple = (data) => {
//////////////////////////


 const  newArray = [];
 const keyValues = [
 "chicken",
 "egg",
 "chicken",
 "egg"
 ];
 ///////////
for(var prop in this.state.queries) {           
newArray.push(prop); 

}
//////// working code
 const testArray2 = Object.keys(this.state.queries).map(i => this.state.queries[i]) 
//console.log("testArray ="+testArray2[0]);
///////////

for (var index = 1; index < newArray.length; index++) {
 
  newArray[index] = "&"+ newArray[index] + "="+testArray2[index];
  // console.log(newArray[index-1]);
}
const urlParameters = newArray.join('');
//console.log(urlParameters);

const queryString = this.state.queries;
const queryKeys = this.state.queries.key;
const numbers = [1, 2, 3, 4, 5];

//console.log("fetchMultiple executed with parameter"+data);
const testStr2 = "product/product&product_id=53";
////// fetch
  window.fetch(`http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=`+route+urlParameters);

 ///// *fetch   
//console.log("state is equal to:"+this.state.value);
     }
 //////////////////////////         
        render() {
               const route = "checkout/guest/save";
               const query = "queries";
               {/*  {{this.props.routeMultiple(route,this.state.queries)} }*/}         
              
        return(


 <div className="masterDivEmail">
           {/*/////back////*/}
           <div className="back">
           Back to shopping
           </div>
           {/*////back/////*/}
           
{/*/////checkOutTitle////*/}
<div className="checkOutTitle">
Checkout
</div>
{/*////checkOutTitle/////*/}

{/*/////enterEmail////*/}
<div className="enterEmail">
Enter your email address*
</div>
{/*////enterEmail/////*/}

{/*/////emailWhy////*/}
<div className="emailWhy">
A confirmation email will be sent to this address
</div>
{/*////emailWhy/////*/}

{/*/////formWrapper /////*/}
<form onSubmit={this.handleSubmit.bind(this)}>
     {/*/////passwordTitle /////*/}
      {/*  onChange={this.handleChange.bind(this) */}
       <input type="text" name="Email" className="emailForm"  value={this.state.value} onChange={this.template}/>
     {/*/////passwordTitle /////*/} 
          {/*/////passwordForm /////*/}
          <div className="passwordForm">

                    {/*/////passwordFormA////*/}
                      {/*      Skip
                    <input type="radio" className="passwordFormA" name="firstname"  value={this.state.value} onChange={() =>this.handleChange}/>*/}

                     {/*  Name:
                   <input type="text" value={this.state.value} onChange={() =>this.handleChange} />*/}
                    {/*////passwordFormA* /////*/}

                    {/*/////passwordFormB ////*/}
                      {/*   Yes my Password is:
                      <input type="radio" className="passwordFormA" name="lastName"  value={this.state.value} onChange={() =>this.handleChange}/>*/}

                     
                    {/*////passwordFormB* /////*/}

          </div>  
           {/*/////passwordForm* /////*/}
            {/*/////buttonWrapper////*/}
          <div className="buttonWrapper">

                    {/*/////buttonText /////*/}
                    <div className="buttonText">
                    <input type="submit" value="Continue" />
                    </div>  
                    {/*/////*buttonText /////*/}
                     {/*/////emailArrow////*/}
                    <div className="emailArrow">

                    </div>
                    {/*////emailArrow* /////*/}                   
         
          {/*////buttonWrapper* /////*/}

     </div>  
</form>
 {/*/////*formWrapper /////*/}



      
 

 
 </div>                    
              )
    }  
    
}

