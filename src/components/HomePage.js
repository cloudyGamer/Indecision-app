/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | HomePages
 * and open the template in the editor.
 */
//<editor-fold defaultstate="collapsed" desc="imports">
import React from 'react'; 
import Header from './Header';
import Options from './Options';
import AddOption from './AddOption';
import Action from './Action';
import OptionModal from './OptionModal';
import PHPFetch from './PHPFetch';
import Banner from './Banner';
import Toolbar from './Toolbar';
import BigImage from './BigImage';
import BriefProduct from './BriefProduct';
import BriefProductSmall from './BriefProductSmall';
import BriefReview from './BriefReview';
import BlogFeature from './BlogFeature';
import BlogFeatureLeft from './BlogFeatureLeft';
import ProductPage from './ProductPage';
import Product from './Product';
import Basket from  './Basket';
import PaymentProcess from './PaymentProcess';
import Ingredients from './Ingredients';
import Payment from './Payment';
import Related from './Related';
import ChildState from './ChildState';
import FeaturedProduct from './FeaturedProduct';
//</editor-fold>

export default class HomePage extends React.Component {
constructor(props) {
           super(props)
           this.featuredProductObj = {
                masterObj : this.props.propObj.masterObj,
                callState : this.callState,
                state : this.state
                
           };
           this.master = this.props.propObj.masterObj; 
           this.featProductIds = {
                featuredProduct1: 50,
                featuredProduct2: 51,
                featuredProduct3: 63,
                featuredProduct4: 64
                
           }
          }
          
state = {
resources: [{"name": "fig"}, {"name": "Donna"}],
homePage : "homePage",
selectionOption : undefined,
options: [],
test: undefined,
currentProduct: undefined,
promise : 'value',
featuredProductComponent: FeaturedProduct,
featuredProducts : [],
dummyData : {data1: "data1",
             data2: "data2"
            }
} 

callState = () => {
     //console.log("HP:callState");
     return this.state;
}

async componentDidMount(){
     const dummyObject = {data1:"data1",
                          data2: "data2"
     }
     let uniqueMessage = "HP:CDM";
     console.log(uniqueMessage+" Mounted");
     {//call google sheets
     //const webScraperAddress = "https://www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/quickstart.php";
     //call shopify
     //const shopifyAPI = "https://bubbles-and-co.myshopify.com/admin/api/2019-04/products.json";
     }
     //////////////////////////////////////// feat prod 1
     const productAddress = "https://www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/index.php?route=product/product&product_id=";
     const productId = "50";
     const featuredProductAddress = productAddress + productId;
     const resolvedObject = await this.featuredProduct(featuredProductAddress,uniqueMessage,"feature1");
     //////////////////////////////////////// feat prod 2
     const productId2 = "51";
     
     const featuredProductAddress2 = productAddress+productId2;
     const resolvedObject2 = await this.featuredProduct(featuredProductAddress2,uniqueMessage,"feature2");
     //////////////////////////////////////// feat prod 3
     const productId3 = "63";
     const featuredProductAddress3 = productAddress+productId3;
     const resolvedObject3 = await this.featuredProduct(featuredProductAddress3,uniqueMessage,"feature3");
     //////////////////////////////////////// feat prod 4
     const productId4 = "64";
     const featuredProductAddress4 = productAddress+productId4;
     const resolvedObject4 = await this.featuredProduct(featuredProductAddress4,uniqueMessage,"feature4");
     //console.log(uniqueMessage+"resolvedObject"+JSON.stringify(resolvedObject));
     this.setState(resolvedObject,function()
     {console.log(uniqueMessage+"feat product saved");});
     ////////////////////////////////////////
     this.setState(resolvedObject2,function()
     {console.log(uniqueMessage+"feat product 2 saved");});
     ////////////////////////////////////////
     this.setState(resolvedObject3,function()
     {console.log(uniqueMessage+"feat product 3 saved");});
     ////////////////////////////////////////
     this.setState(resolvedObject4,function()
     {console.log(uniqueMessage+"feat product 4 saved");});
     //console.log("HomePage ¯¯¯");  
     //console.log(uniqueMessage+"props"+JSON.stringify(this.props));
     /*const sampleFnc = this.featuredProductLoader;
     const returnSample = await Object.entries(this.featProductIds).map((t,k) => {
          console.log("here is your key"+k+",an undercooked key "+t[0]+" and "+t[1]);
          sampleFnc(t[1],uniqueMessage,t[0]);
     });*/
}

featuredProductLoader =  async (iteration,uniqueMessage,keyName) => {
     //console.log(uniqueMessage+"featuredProductLoader executed "+iteration+": "+keyName);
     uniqueMessage = "featuredProductLoader/target";
     const productAddress = "https://www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/index.php?route=product/product&product_id="+iteration;
     const resolvedObject = await this.featuredProduct(productAddress,uniqueMessage,keyName);
     //console.log(uniqueMessage+"resolved object key"+JSON.stringify(resolvedObject));
     const billy = "featuredProducts"+keyName;
     this.setState(prevState => ({featuredProducts: prevState + resolvedObject}),
     function(){
          if(this.state.featuredProducts[0].product_id){
          console.log(uniqueMessage+"feat product saved"+JSON.stringify(this.state.featuredProducts.product_id));}
     else{/*console.log("you've come up short");*/}
     });
     //this.setState(resolvedObject,function(){console.log(uniqueMessage+"feat product saved"+JSON.stringify(this.state.featuredProducts));});


}

ComponentDidUpdate(prevState){
let uniqueMessage = "HP:CDU:";
console.log(uniqueMessage);
if(prevState!==this.state){
     console.log(uniqueMessage+"state change detected");
        this.featuredProductComp = this.master.renderedComp(uniqueMessage,this.state.featuredProductobj,this.state.featuredProductComponent);
     }else{console.log(uniqueMessage+"no change detected");}     
}
//<editor-fold defaultstate="collapsed" desc="old fnc i dint want">
//////////////////////////////////////// exampleText
exampleText = (obj) => {
console.log("example text ran upon mounting" + obj);
}
////////////////////////////////////////
////////////////////////////////////////
//////////////////////////////////////// APIAddToCart
APIAddToCart (api_token) {
console.log("APIAddToCart ran");
console.log("APIaddtocart - token equals___" + api_token);
const url = "https://www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/index.php?route=api/cart/add&api_token=" + api_token;
const method = "POST";
const quantity = 1;
const product_id = 50;
//console.log("parameter passed____"+api_token);  
const body = new FormData();
body.append("url", url);
body.append("quantity", quantity);
body.append("product_id", product_id);
// console.log("body sent to php____"+body.api_token);
// Display the key/value pairs
/*for (var pair of body.entries()) {
 console.log(pair[0]+ ', ' + pair[1]); 
 }*/

fetch("https://www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/addToCart.php", { method, body })
.then(res => res.json())
.then(data => alert(JSON.stringify(data, null, "\t")));
}
////////////////////////////////////////
//////////////////////////////////////// apiLogIn
apiLogIn = (api_token) => {
console.log(" apiLogIn fired");
const url = "https://www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/index.php?route=api/shipping/address&api_token=" + api_token;
const method = "POST";
const body = new FormData();
body.append("url", url);
fetch("https://www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/logInAPI.php", { method, body })
.then(res => res.json())
.then(response => JSON.parse(response))
.then(promise =>
//console.log("anymessage"+this.state.promise
console.log("API Login final promise" + promise, null, "\t"
));
//{"success":"Success: API session successfully started!","api_token":"34"}
}
////////////////////////////////////////
////////////////////////////////////////
briefProductInit = (promise) => {
return console.log("briefProductinitran");
/*return (
 
 <BriefProduct
 name = {promise.state.stateObj[promise.i]['name']}
 product_id =  {promise.state.stateObj[promise.i]['product_id']}
 image =  {promise.state.stateObj[promise.i]['thumb']}
 ></BriefProduct>
 
 )*/



}
////////////////////////////////////////
//////////////////////////////////////// iterateState
iterateState = () => {
console.log("iterateStateRan");
return (this.setState((state) => {
for (let i = 0; i < state.stateObj.length; i++){
console.log(state.stateObj[i]);
const promise = {
"i" : i,
"state" : state
};
/*return (this.setState((state) => {
 for(let i =0;i<state.stateObj.length;i++){ 
 console.log(state.stateObj[i]); 
 const promise = {
 "i" : i,
 "state" : state
 }; */
return promise
//this.briefProductInit(state,i);
/*  return(<div>
 <BriefProduct
 name = {state.stateObj[i]['name']}
 product_id =  {state.stateObj[i]['product_id']}
 image =  {state.stateObj[i]['image']}
 
 />
 </div>);*/
 /* this.setState((state) =>{
 for(var key in state.stateObj[i]) {
 console.log(state.stateObj[i][key]);
 
 }
 });*/
}
}
));
//this.setState((state)=>{          
/*for(let i=0;i < state.stateObj.length; i++){    
 for (var key in state.stateObj[i]) {
 return (console.log("state key "+JSON.stringify(state.stateObj[i])))
 //console.log("Key: " + key);
 //console.log("Value: " + obj[key]);
 } 
 }*/
//});
/**/

}
////////////////////////////////////////
//////////////////////////////////////// APIGenericPostSave
APIGenericPostSave = (obj) => {
console.log("APIGenericPostSave");
//console.log("obj= "+JSON.stringify(obj));
/*  const methodRequest = "OPTIONS";
 const methodHeader = new Headers({
 // "Content-Type": "application/json",
 "Access-Control-Request-Method": "OPTIONS",
 "Access-Control-Request-Headers" : "Content-Type"
 });*/
///////////
let url = undefined;
//console.log("APIGenericPost url=  "+url);    
const method = "POST";
//const body = new FormData();

const headers = {
"Content-Type": "application/json",
"Access-Control-Request-Method": "POST",
"Access-Control-Request-Headers" : "",
};
///////////  if else that checks for token

if (typeof obj.api_token == ! undefined) {
// the variable is defined
const url = obj.package.address;
console.log("api token undefined. Url = " + url);
} else {

const url = obj.package.address + obj.api_token;
console.log("api token defined. Url= " + url);
}
console.log("const address=  " + obj.api_token);
///////////

obj.url = url;
const objStr = JSON.stringify(obj.package);
const body = new FormData();
const testStr = "test string"
//body.append("objStr",objStr);
body.append("objStr", objStr);
//console.log("stringified body"+objStr);

//this.setState({stateObj : ''}, function () { console.log("APIGenericPostSave - setState undefined:  " + this.state.stateObj); });
return fetch(obj.fetchUrl, { method: "POST", body })
.then(res => res.json());
//.then(res => JSON.parse(res))
//working code.then(data =>     
//this.setState({stateObj : data},function () { console.log("APIGenericPostSave - setState defined:  "+this.state.stateObj); }) working code 
//* set states
// );  
//.then(data => console.log(JSON.stringify(obj), null, "\t"))



}
//////////////////////////////////////// APIGenericPost

//////////////////////////////////////// apiRequest2
apiRequest2 = () => {
this.setState({promise : ''},
function () { /*console.log("apiRequest - setState undefined"+this.state.promise);*/ }
); //called this way so as not to unset state

const method = "POST";
const body = new FormData();
console.log(" apiRequest2 fired");
//console.log("this.state.promise equals___"+this.state.promise);
return  fetch("https://www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/requestToken.php",
{ method, body})
.then(response => response.json())
.then(response => JSON.parse(response))
.then(data =>
//  set state

this.setState({promise : data})
//* set state
)
.then(promise =>
//console.log("anymessage"+this.state.promise
console.log("redirect url   " + this.state.promise.api_token
));
//{"success":"Success: API session successfully started!","api_token":"34"}
}
////////////////////////////////////////  
//////////////////////////////////////// apiRequest3
apiRequest3 = () => {
this.setState({promise : ''},
function () { console.log("apiRequest3 - setState undefined" + this.state.promise); }
); //called this way so as not to unset state
const method = "POST";
const body = new FormData();
//console.log(" apiRequest3 fired");
/////////// second API call
this.setState({promise : ''},
function () { /*console.log("apiRequest-second- - setState undefined"+this.state.promise);*/ }
);
return  fetch("https://www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/requestToken2.php",
{ method, body})
.then(response => response.json())
.then(response => JSON.parse(response))
.then(data =>
//  set state   
this.setState({promise : data})
//* set state
);
/* .then(promise => 
 //console.log("anymessage"+this.state.promise
 console.log("redirect url   "+this.state.promise.api_token
 ));*/
///////////
}
////////////////////////////////////////   
//////////////////////////////////////// closeModal
closeModal = () => {
this.setState(() => ({
selectedOption : undefined
}));
}
////////////////////////////////////////
//////////////////////////////////////// handleDeleteOptiona
handleDeleteOptions = () => {
this.setState(() => ({ options: [] }));
}
////////////////////////////////////////
//////////////////////////////////////// counterEs6
counterEs6 = () => {

this.setState((prevState) => {
return {counter: prevState.counter + 1};
});
console.log("COUNTERES6 RAN WITH VALUE_____" + this.state.counter);
}
////////////////////////////////////////
//////////////////////////////////////// route     
route = (data) => {
//////////////////////////
console.log("route executed with parameter" + data);
//const testStr = "product/product&product_id=53";
window.fetch(`http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=` + data);
////////////////////////// 

////////////////////////////////////////
}
////////////////////////////////////////*oute  
//////////////////////////////////////// test call back
testFunc = (data, queue) => {
console.log("test func executed");
console.log("data = ___" + data);
console.log("queue = ____" + queue);
queue();
//callback();
}
////////////////////////////////////////
////////////////////////////////////////callBck
callBck = (data2) => {
console.log("call back func executed");
console.log("data parameter=" + data2);
}
//////////////////////////////////////// *est call back
////////////////////////////////////////fetch 
fetch = (data, splitArray) => {
//////////////////////////
//console.log("fetch executed with parameter"+data);
const testStr = "product/product&product_id=50";
return  window.fetch(`https://www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/index.php?route=` + data, {
method: 'GET', // or 'PUT' 

headers: {

}
}).then(response => response.json())

.then (json =>
this.setState({
resources: json

}))
.then((json) => {
const newStr = JSON.stringify(this.state.resources, null, 4); // (Optional) beautiful indented output.
//console.log(newStr);
}).then((json) => {
let splitArray = this.state.resources.name.split("Raspberry");
//splitArray = "orange";
//console.log("split array ="+splitArray);

});
//////////////////////////
//queue();
////////////////////////////////////////
}
//////////////////////////////////////// *etch
////////////////////////////////////////startup
/*  send() {
 const method = "POST";
 
 const body = new FormData(this.form);
 console.log("send(hello)"+body);             
 
 fetch("https://httpbin.org/post", { method, body })
 .then(res => res.json())
 .then(data => alert(JSON.stringify(data, null, "\t")));
 }    */
////////////////////////////////////////          
//////////////////////////////////////// hyperlink
pageOpen = (url) => {
//console.log("page Open Fired");
window.open(url);
}
////////////////////////////////////////
/*APIAddCustomer = (e,form) => {
 console.log(" APIAddCustomer fired");
 const method = "POST";
 const body = new FormData(this.form);
 console.log(this.form); 
 //return window.fetch("https://www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/addNewCustomer.php&firstname="+firstname+"&lastname="+lastname+"&email="+email+"&telephone="+telephone 
 return window.fetch("https://www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/addNewCustomer.php"                
 
 , {method, body})
 //http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/cart/add
 //.then(response => response.json());
 }*/
/////////// *APIAddCustomer
/////////// apiRequest
apiRequest = () => {
console.log(" apiRequest fired");
return window.fetch("https://www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/requestToken.php"
, {
method: 'POST', //post works in establishing session

headers: {
'Content-Type' : 'text/plain'
}
/*body: {
 key : ""   
 }*/
})
//http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/cart/add
// .then(response => console.log(response))
.then(response => response.json())
.then(response => console.log("response equal" + response, "\t"));
}
/////////// *apiRequest
genericQ = (parameter) => {
console.log(" genericQ fired");
return window.fetch("http://localhost:8888/3.0.2.0-OpenCart/upload/" + parameter)
//http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/cart/add
.then(response => response.json())
//.then(data => console.log("response equals"+data));
//.then(data => this.setState({ api_token: data.api_token }));
}
/////////// *startup
/////////// startup
startup = () => {
console.log(" startup fired");
return window.fetch("http://localhost:8888/3.0.2.0-OpenCart/upload/system/startup.php")
//http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/cart/add
//.then(response => response.json());
}
/////////// *startup
/////////// queue response product
queueResponse = (url) => {
console.log(" queueResponse fired with" + url);
return window.fetch("http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=product/product&product_id=53&search=apple")
.then(response => response.json());
}
/////////// *queue respons
/////////// addCartQueue
addCartQueue = (url) => {
console.log(" addCartQueue fired with" + url);
return window.fetch("http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/cart/add&product_id=53&quantity=1")
//http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/cart/add
//.then(response => response.json());
}
/////////// *addCartQueue
/////////// cartInfoQueue
cartInfoQueue = (url) => {
console.log(" cartInfoQueue fired with" + url);
return window.fetch("http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=common/cart/info")
//http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=common/cart/info
//.then(response => response.json());
}
/////////// *cartInfoQueue
/////////// checkOutButtQueue
checkOutButtQueue = (url) => {
console.log("checkOutButtQueue fired with" + url);
return window.fetch("http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/login")

}
/////////// *checkOutButtQueue
/////////// guestCheckQueue
guestCheckQueue = (url) => {
console.log(" guestCheckQueue fired with" + url);
return window.fetch("http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/guest")

}
/////////// *guestCheckQueue
/////////// custInfo
custInfo = (url) => {
console.log("custInfo fired with" + url);
return window.fetch("http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/login")
.then(response => response.json());
}
/////////// *custInfo
/////////// finishQueue
finishQueue = (url) => {
console.log(" finishQueue fired with" + url);
//return window.fetch("http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/guest")

}
/////////// *finishQueue
/*  
 /////////// guestSaveOriginal
 guestSaveOriginal = (e,form) => {
 console.log("guestSaveOriginal fired with"+form);
 return window.fetch("")
 e.preventDefault();
 
 return window.fetch('http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/guest/save', {
 method: 'post',
 body: JSON.stringify({
 firstname: form.firstname.value,
 lastname: form.lastname.value, 
 email: form.email.value,
 telephone: form.telephone.value,
 address_1: form.address_1.value,
 address_2: form.address_2.value,
 city: form.city.value, 
 postocde: form.postocde.value, 
 country_id: form.country_id.value, 
 zone_id: form.zone_id.value, 
 })
 }).then(function(response) {
 return response.json();
 }).then(function(data) {
 //Success code goes here
 alert('form submited')
 }).catch(function(err) {
 //Failure
 alert('Error in form submission')
 });
 
 } */
/////////// test onsubmit
testSubmit = (e) => {
e.preventDefault();
console.log("testSubmit functioning");
}
///////////* test onsubmit
/////////// *guestSaveOriginal
guestSave = () => {
//e.preventDefault();
console.log("guestSave fired");
/////////// code pen
const method = "POST";
const body = new FormData(this.form);
window.fetch("http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/register/save",
{ method, body }).then(res => res.json())
.then(data => alert(JSON.stringify(data, null, "\t")));
///////////* code pen https://codepen.io/agconti/pen/GmewbO
/*let formData = new FormData();
 let myForm = document.getElementById('myForm');
 console.log("my form"+myForm);
 formData = new FormData(myForm);*/
//console.log("form data = "+formData.myForm);
//  http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=product/product&product_id=53&search=apple
/* return window.fetch('http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/register/save', {
 method: 'POST',
 body: JSON.stringify({
 
 firstname: myForm.firstname.value,
 lastname: myForm.lastname.value, 
 email: myForm.email.value,
 telephone: myForm.telephone.value,
 address_1: myForm.address_1.value,
 address_2: myForm.address_2.value,
 city: myForm.city.value, 
 postocde: myForm.postocde.value, 
 country_id: myForm.country_id.value, 
 zone_id: myForm.zone_id.value, 
 
 firstname: formData.firstname,
 lastname: formData.lastname, 
 email: formData.email,
 telephone: formData.telephone,
 address_1: formData.address_1,
 address_2: formData.address_2,
 city: formData.city, 
 postocde: formData.postocde, 
 country_id: formData.country_id, 
 zone_id: formData.zone_id, 
 })
 });/*.then(function(response) {
 return response.json();
 }).then(function(data) {
 //Success code goes here
 alert('form submited')
 }).catch(function(err) {
 //Failure
 alert('Error in form submission')
 });*/

}
/////////// *guestSave
/////////// code pen function test
/*codePen = () => {
 const method = "POST";
 const body = new FormData(this.form);
 window.fetch("https://httpbin.org/post", { method, body })
 .then(res => res.json())
 .then(data => alert(JSON.stringify(data, null, "\t"))); 
 }*/
/////////// *code pen function test
////////////////////////////////////////* promise chaining
/////////////////////////////////////////////////// routeMultiple
routeMultiple = (route, stateParam) => {
console.log("route multiple executed");
//////////////////////////
//console.log("state"+stateParam);
const  newArray = [];
///////////
for (var prop in stateParam) {
newArray.push(prop);
///////////
}
console.log("routeMultiple newArray(push)  /" + newArray[1]);
//////// working code - still working
const testArray2 = Object.keys(stateParam).map(i => stateParam[i]);
console.log("routeMultiple testArray2(obj.kesy)   /" + testArray2);
///////////
for (var index = 0; index < newArray.length; index++) {
newArray[index] = "&" + newArray[index] + "=" + testArray2[index];
//console.log("newArray"+ newArray[index]); 
}
const urlParameters = newArray.join('');
console.log("final string  /" + route + urlParameters);
const testStr2 = "product/product&product_id=53";
////// fetch     
window.fetch("`http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=" + route + urlParameters + "`");
///// *fetch   
console.log("state is equal to:" + this.state.value);
}
///////////////////////////////////////////////////*outeMultiple
/////////////////////////////////////////////////// routemultiplePost
routeMultiplePost = (route, stateParam) => {
console.log("route multiple executed");
//////////////////////////
//console.log("state"+stateParam);
const  newArray = [];
///////////
for (var prop in stateParam) {
newArray.push(prop);
///////////
}
console.log("routemultiplePost newArray(push)  /" + newArray[1]);
//////// working code - still working
const testArray2 = Object.keys(stateParam).map(i => stateParam[i]);
console.log("routemultiplePost testArray2(obj.kesy)   /" + testArray2);
///////////
for (var index = 0; index < newArray.length; index++) {
newArray[index] = "&" + newArray[index] + "=" + testArray2[index];
//console.log("newArray"+ newArray[index]); 
}
const urlParameters = newArray.join('');
console.log("final string  /" + route + urlParameters);
const testStr2 = "product/product&product_id=53";
////// fetch
window.fetch("`http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=" + route + urlParameters + "`", {
method: 'POST', // or 'PUT' 

headers: {

}
}).then(response => response.json())

.then (json =>
console.log("resources json" + json),
{/*     this.setState({
 resources: json
 
 })*/})

///// *fetch   
console.log("state is equal to:" + this.state.value);
}
///////////////////////////////////////////////////*outemultiplePost
///////////////////////////////////////////////////////// toCheckout
toCheckout = () => {
console.log("toCheckout function executed");
//////////////////////////

}
///////////////////////////////////////////////////////// *ocheckout
///////////////////////////////////////////////////////// test
test = () => {
console.log("test function executed");
const test = "testStr";
this.setState(() => ({
test : "testStr"
}));
//////////////////////////
//console.log("test state now changed to:___"+this.state.test);
}
///////////////////////////////////////////////////////// *est 
//////////////////////////////////////// 
handleDeleteOption = (optionToRemove) => {
this.setState((prevState) => ({
options: prevState.options.filter((option) => optionToRemove !== option)
}));
};
////////////////////////////////////////
//////////////////////////////////////// 
handlePick = () => {
console.log('handle pick fired');
const randomNum = Math.floor(Math.random() * this.state.options.length);
const option = this.state.options[randomNum];
this.setState(() => ({
selectedOption : option
}));
};
////////////////////////////////////////  
handleAddOption = (option) => {
if (!option) {
return 'Enter valid value to add item';
} else if (this.state.options.indexOf(option) > - 1) {
return 'This option already exists';
}

this.setState((prevState) => ({
options: prevState.options.concat(option)
}));
};
////////////////////////////////////////  
componentDidUpdate(prevProps, prevState) {
//console.log("update - "+this.state.selectedOption);
if (prevState.options.length !== this.state.options.length) {
const json = JSON.stringify(this.state.options);
localStorage.setItem('options', json);
}
}
////////////////////////////////////////
////////////////////////////////////////
componentWillUnmount() {
console.log('homepage componentWillUnmount');
}
////////////////////////////////////////
////////////////////////////////////////
splitGeneric = (splitSource, splitKeyword) => {
//splitSource = splitSource.join();
const splitArray = splitSource.split(splitKeyword);
return splitArray[1];
//return splitSource
}
////////////////////////////////////////
//</editor-fold>
setStateWrapper = async () => {
     const value = await this.featuredProduct("50","HP:CDM: setStateWrapper:").then(function(promise){return promise});
     return value;
     console.log("setStateWrapper"+JSON.stringify(value));
     
}
////////////////////////////////////////
componentLoader = () => {
    const components ={
         featuredProduct:FeaturedProduct,
         blogFeature : BlogFeature
    };
     components.map(component  => renderComp(component));
//
     }
     
featuredProduct =  async (data ,uniqueMessage,keyName) => {
//////////////////////////
 console.log("featuredProduct executed with parameter" + data + "from within" + uniqueMessage);
 const body = new FormData();
 let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Origin','*');

 const encoded = btoa('6725a4fb40bf84a8a9354b7609324830:6725a4fb40bf84a8a9354b7609324830');
 const resolvedPromise = await window.fetch(data, {
      mode: 'cors',
      method: 'GET', // or 'PUT' 
      headers: headers
 });
 const resJson = await resolvedPromise.json();
 const returnedJson = await resJson;
 //console.log(uniqueMessage+"featuredProduct"+JSON.stringify(returnedJson));
 const featuredProductObj = {[keyName]:returnedJson};
 //console.log(uniqueMessage+"featuredProductObj"+JSON.stringify(featuredProductObj));
 return {[keyName]:returnedJson};  
   /*.then(function(json){ return {keyName:json}
      console.log("json returned");
 }
        );*/

}

featuredProductOriginal =  async (data ,uniqueMessage,keyName,address) => {
//////////////////////////
 console.log("featuredProduct executed with parameter" + data + "from within" + uniqueMessage);
 const resolvedPromise = await window.fetch(address + data, {
      method: 'GET', // or 'PUT' 
      headers: {  }
 });
const resJson = await resolvedPromise.json();
const returnedJson = await resJson;
return {[keyName]:returnedJson}; 

   /*.then(function(json){ return {keyName:json}
      console.log("json returned");
 }
        );*/

}

callFeatureState = () => {
return this.state
}

multiplyObject = () => {
     console.log("multiple object ran");
     const two = 2;
     const three = 3;
     const result = two*three;
     return result;
     
}

returnObject = () => {
     //this.multiplyObject();
          return this.multiplyObject().then(promise => promise*4);
     console.log("returnObject ran");
}

render() {
/////////////////////////////////////////// render
//<editor-fold defaultstate="collapsed" desc="comment">
const components = {related: Related};
//console.log("{related:Related}"+components.related);
//{console.log("test state now changed to:___"+this.state.test);}

const exampleText = 'this is example text';
const subtitle = 'testing all files are working';
const imageAddress1 = 'assets/all-the-jingle-ladies-sack.png';
const imageAddress2 = 'assets/christmas_carol_1.png';
const productName1 = 'Bath Blaster';
const productDesc1 = 'Enjoy the bubbles';
const productName2 = 'Christmas Carol';
const productDesc2 = 'Lovely Gift set';
const bigImageAddress1 = "url('/assets/stockingFiller.jpg')";
const bigImageAddress2 = "url('/assets/bigImage_2.png')";
const container_bigImageMarginAndPadding = "container_bigImageMarginAndPadding";
const container_bigImageMargin = "container_bigImageMargin";
const color = "red";
const categoryObj = {
category: "Bath Bombs",
api_token : undefined,
fetchUrl: "https://www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/getCatagory.php",
package: {address: "https://www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/index.php?route=product/category/apiCategory",
searchQuery : {path: "59"}}

};
const testObj = {value: "one value"};
///////////////////// product page const
/*const name = this.state.resources.name;
 const description = this.state.resources.description 
 const quantity = this.state.resources.quantity;
 const image = this.state.resources.image;
 const price = this.state.resources.price;
 const imageAd = "http://localhost:8888/3.0.2.0-OpenCart/upload/image/" + image;*/
///////////////////// *product page const
//</editor-fold>
let uniqueMessage = "HP:REN";
let master = this.props.propObj.masterObj;
let featuredProductComponent;
let featuredProductComponent2;

let masterObj = {};
let masterObj2 = {};
//console.log(uniqueMessage+"this.featuredProductObj"+JSON.stringify(this.featuredProductObj));
if(this.state.feature1 && this.state.feature2 && this.state.feature3 && this.state.feature4){
     console.log(uniqueMessage+"featuredProduct double ready");
     masterObj = {
         featuredProductObj:this.featuredProductObj,
         feature1: this.state.feature1,
         feature2: this.state.feature2
    };
    masterObj2 = {
         featuredProductObj:this.featuredProductObj,
         feature1: this.state.feature3,
         feature2: this.state.feature4
    }
    featuredProductComponent = this.master.renderedComp(uniqueMessage,masterObj,this.state.featuredProductComponent);
    featuredProductComponent2 = this.master.renderedComp(uniqueMessage,masterObj2,this.state.featuredProductComponent);
}else{/*featuredProductComponent = console.log(uniqueMessage+"featuredProductComponent Not Ready");*/}
////////////////////////////////////////

if(this.state.featuredProducts.featuredProduct1){console.log(uniqueMessage+"featureproduct1 ready from within featuredProducts");}

var htmlAdded = "<BigImagepageOpen = {master.pageOpen}/>";
////////////////////////////*eturn    
return (
<div>
          
  <div className="featuresBox">
   <div className="feature">{featuredProductComponent}</div>
  </div>
  <BigImage 
     pageOpen = {this.pageOpen}
     class = {"rel_bigImage shea_butter"}
     title = {"Learn about the benefits of Shea Butter for your skin"}
     span = {"span_shea_butter"}
     titleClass = {"rel_bigImage_title title_shea_butter"}
     buttonClass = {"rel_bigImage_button button_shea_butter border"}
     articleLink = {"https://wellnessmama.com/27324/shea-butter-benefits/"}/>
     
  <div className="featuresBox">
    <div className="feature">{featuredProductComponent2}</div>
  </div>
  
  <BigImage 
     pageOpen = {this.pageOpen}
     class = {"rel_bigImage bombCosmetics"}
     title = {"Why Choose Bomb Cosmetics? Natural, Handmade, Cruelty Free"}
     span = {"span_bombCosmetics"}
     titleClass = {"rel_bigImage_title title_bombCosmetics"}
     buttonClass = {"rel_bigImage_button button_bombCosmetics border"}
     articleLink = {"https://www.helloterrilowe.com/2017/02/5-reasons-to-choose-bomb-cosmetics.html"}/>
                  
</div>
////////////////////////////return    
)
/////////////////////////////////////////// *ender
}
/////////////////////////////////////////////////////////// *ain component   
}


