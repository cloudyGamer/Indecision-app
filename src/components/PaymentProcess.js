/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | PaymentProcess1s
 * and open the template in the editor.
 */


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | PaymentProcess1s
 * and open the template in the editor.
 */
import React from 'react';
import ShippingAddress from './ShippingAddress'
import ShippingMethod from './ShippingMethod'
import ReactTestUtils from 'react-dom/test-utils';

export default class PaymentProcess extends React.Component {
//testing state
/*state = {
pp_standard : '',
promise : 'value',
productCategory: 'value',
customer_group_id:'',
country_id:'222',
zone_id:'3514',
shipping_address:'1',
differentValue: '',
count: 0,
firstname: 'Paul',
lastname: 'Dowling',
address_1Bill: '8 roselawn dr',
address_2Bill: 'bray',
cityBill : 'dublin',
postcodeBill: 'd8',
value: '',
email: 'Emailj@gmail.com',
telephone : '0867235649',
company : 'Company',
//
firstname1: 'Paul',
lastname1: 'Dowling',
address_1: '8 roselawn dr',
address_2: 'bray',
city: 'City',
postcode: 'd8',
//
firstnameBill1: 'Paul',
lastnameBill1: 'Dowling',
address_1Bill1: '8 roselawn dr',
address_2Bill1: 'bray',
cityBill1: 'City',
postcodeBill1: 'd8'
}*/

//old state
state = {
pp_standard : '',
promise : 'value',
productCategory: 'value',
customer_group_id:'',
country_id:'222',
zone_id:'3514',
shipping_address:'1',
differentValue: '',
count: 0,
firstname: 'First Name',
lastname: 'Last Name',
address_1Bill: 'Address Line 1',
address_2Bill: 'Addresss Line 2',
cityBill : 'City',
postcodeBill: 'Post Code',
value: '',
email: 'Email',
telephone : 'Telephone',
company : 'Company',
//
firstname1: 'First Name',
lastname1: 'Last Name',
address_1: 'Address Line 1',
address_2: 'Address Line 2',
city: 'City',
postcode: 'Post Code'
}
componentDidMount() {
////////////////////////////////////////
//console.log("PaymentProcess:"+this.props.testObj);
let uniqueMessage = "PP:CDM"
console.log(uniqueMessage);
console.log(uniqueMessage+"props equals  "+JSON.stringify(this.props));
const cartInfo = "common/cart/info";
const route = "checkout/guest/save ";
const getProduct2 = "product/product&product_id=53";
const getProduct = "product/product&product_id=53";
const cartUpdateAuto = "common/cart/info";
const basketAddAuto = "checkout/cart/add";
//const request = "system/library/request.php";
const framework = "system/framework.php";
const startSession = "catalog/controller/startup/session.php";
const startUp = "catalog/controller/startup/startup.php";
const filePer = "catalog/controller/startup/filePer.php";
const filePerCart = "catalog/controller/checkout/filePer.php";
const obj = {"success":"Success: API session successfully started!",
"api_token":"34"};
const string = "string";
////////////////////////////////////////
const APILogin = "catalog/controller/api/login.php";
const tokenPHP = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/apiToken.php";
const apiAddress = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=/api/shipping/token&api_token=";
//const newToken = this.state.promise.api_token; 
//this.apiRequest2().then(data => this.apiRequest3())
//.then(promise => this.APIAddToCart(this.state.promise.api_token))
//// this.APIAddToCart(this.state.promise.api_token);
//.then(promise => this.apiLogIn(this.promise.api_token));
////////////////////////////////////////


}
////////////////////////////////////////*     component did mount
componentDidUpdate () {
}
//////////////////////////////////////// paymentCounterWrapper
payCountWrap = (func) => {
func;
this.setState((prevState) => {
return {count: prevState.count + 1};
});
this.setState(
console.log("payCountWrap count" + this.state.count));
}
//////////////////////////////////////// paymentCounterWrapperChained
payCountWrapChained = (res, func) => {
console.log("paycount  wrap chained");
res = json.parse(res);
func;
this.setState((prevState) => {
return {count: prevState.count + 1};
});
this.setState(
console.log("payCountWrap count" + this.state.count));
}
//////////////////////////////////////// paymentCounterReverser
payCountRev = (func) => {
func;
if (this.state.count > 0){
this.setState((prevState) => {
return {count: prevState.count - 1};
}); }

this.setState(
console.log("payCountWrap count" + this.state.count));
}
//////////////////////////////////////// apiRequest2
apiRequest2 = () => {
this.setState({promise : ''},
function () { /*console.log("apiRequest - setState undefined"+this.state.promise);*/ }
); //called this way so as not to unset state

const method = "POST";
const body = new FormData();
console.log(" PaymentProcess: apiRequest2 fired");
//console.log("this.state.promise equals___"+this.state.promise);
return  fetch("https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/requestToken.php",
{ method, body})
.then(response => response.json())
.then(response => JSON.parse(response))//.then(res => console.log("paymentProcess/json.parse"+JSON.stringify(res)));
.then(data =>
////  set state
//
this.setState({promise : data})
////* set state
)
.then(promise =>
////console.log("anymessage"+this.state.promise
console.log("redirect url   " + this.state.promise.api_token
));
//{"success":"Success: API session successfully started!","api_token":"34"}
}
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
return  fetch("https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/requestToken2.php",
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
////////////////////////////////// event handlers
finishQueue = (url) => {console.log("queue finished"); }
////////////////////////////////////////
handleSubmit(event) {
console.log('A name was submitted: ' + this.state.value);
event.preventDefault();
}
////////////////////////////////// * event handlers
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
for (var prop in this.state.queries) {
newArray.push(prop);
}
//////// working code
const testArray2 = Object.keys(this.state.queries).map(i => this.state.queries[i])
//console.log("testArray ="+testArray2[0]);
///////////

for (var index = 1; index < newArray.length; index++) {

newArray[index] = "&" + newArray[index] + "=" + testArray2[index];
// console.log(newArray[index-1]);
}
const urlParameters = newArray.join('');
//console.log(urlParameters);

const queryString = this.state.queries;
const queryKeys = this.state.queries.key;
const numbers = [1, 2, 3, 4, 5];
//console.log("fetchMultiple executed with parameter"+data);
//const testStr2 = "product/product&product_id=53";
////// fetch
window.fetch(`http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=` + route + urlParameters);
///// *fetch   
//console.log("state is equal to:"+this.state.value);
}
//////////////////////////////////////// code pen working code
send() {
const method = "POST";
const body = new FormData(this.form);
//console.log("send(hello)"+body);             

fetch("https://httpbin.org/post", { method, body })
.then(res => res.json())
.then(data => alert(JSON.stringify(data, null, "\t")));
}
////////////////////////////////////////* code pen working
APIAddCustomer (api_token) {
const url = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=api/customer&api_token=" + api_token;
const method = "POST";
//console.log("parameter passed____"+api_token);  
const body = new FormData(this.form);
body.append("url", url);
console.log("body sent to php____" + JSON.stringify(body.form));
// Display the key/value pairs
for (var pair of body.entries()) {
// console.log(pair[0]+ ', ' + pair[1]); 
}

return  fetch("https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/addNewCustomer.php", { method, body })
.then(res => res.json())
.then(data => alert(JSON.stringify(data, null, "\t")));
/* .then(promise => 
 //console.log("anymessage"+this.state.promise
 console.log("apiAddCustomer promise=   " + promise
 ));*/
}
////////////////////////////////////////* code pen working
APIAddToCart (api_token) {
// console.log("APIaddtocart ran. token equals___"+api_token);
const url = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=api/cart/add&api_token=" + api_token;
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

fetch("https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/addToCart.php", { method, body })
.then(res => res.json())
.then(data => alert(JSON.stringify(data, null, "\t")));
}
////////////////////////////////////////
optionsRequest = () => {

}
//////////////////////////////////////// APIGenericPost - altered for CORS
headerRequest = (fetchUrl) => {
const methodRequest = "OPTIONS";
const methodHeader = new Headers({
// "Content-Type": "application/json",
"Access-Control-Request-Method": "OPTIONS",
"Access-Control-Request-Headers" : "Content-Type"
});
///////////

fetch(fetchUrl, { method: "POST", methodHeader })
.then(res => res.json())
.then(data => (console.log(JSON.stringify(data), null, "\t")));
///////////   
}
//////////////////////////////////////// Header Request - working
/*headerRequest = (fetchUrl) => {
 const methodRequest = "OPTIONS";
 const methodHeader = new Headers({
 // "Content-Type": "application/json",
 "Access-Control-Request-Method": "OPTIONS",
 "Access-Control-Request-Headers" : "Content-Type"
 });
 
 
 ///////////
 
 fetch(fetchUrl, { method: "POST",methodHeader })
 .then(res => res.json())
 .then(data => (console.log(JSON.stringify(data), null, "\t")));
 
 ///////////
 
 }*/
//////////////////////////////////////// APIGenericPost
APIGenericPost = (api_token, address, fetchUrl, obj = undefined) => {
const methodRequest = "OPTIONS";
const methodHeader = new Headers({
// "Content-Type": "application/json",
"Access-Control-Request-Method": "OPTIONS",
"Access-Control-Request-Headers" : "Content-Type"
});
const url = address + api_token;
//console.log("APIGenericPost url=  "+url);
const method = "POST";
let body;
body = new FormData(this.form);
const headers = {
"Content-Type": "application/json",
"Access-Control-Request-Method": "POST",
"Access-Control-Request-Headers" : "",
};
///////////
if (obj !== undefined){
//console.log("APIGenericPost if blue not undefined  "+obj);
//const body = new FormData();


for (var property in obj) {
body.append(property, obj[property]);
//console.log("APIGenericPost body.shipping_method"+body.shipping_met–hods);
}

//console.log("APIGenericPost body.api_token=   " + body.api_token);

body.append("url", url);
//console.log("APIGenericPost body.shipping_method");

for (var pair of body.entries()) {
console.log("entry apiGenericPost " + pair[0] + ',' + pair[1]);
}



return fetch(fetchUrl, { method: "POST", body })
.then(res => res.json())
.then(data => console.log(JSON.stringify(data), null, "\t"));
}
///////////
//https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=/api/shipping/methods&api_token=bee6b1b9f22fd417ede11a687c
//https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=/api/shipping/methods&api_token=549f50ac71333331778b73e7ad
else {
body.append("url", url);
console.log("https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=/api/shipping/methods&api_token=" + api_token);
return fetch(fetchUrl, {method, body})
.then(res => res.json())
//.then(data => console.log(JSON.stringify(data), null, "\t"));

//.then(data => alert(JSON.stringify(data, null, "\t")));
}

}
//////////////////////////////////////// APIGenericPost
APIGenericPostRedirect = (api_token, address, fetchUrl, address2, fetchUrl2, obj = undefined) => {
const methodRequest = "OPTIONS";
const methodHeader = new Headers({
// "Content-Type": "application/json",
"Access-Control-Request-Method": "OPTIONS",
"Access-Control-Request-Headers" : "Content-Type"
});
let url = address + api_token;
console.log("APIGenericPost url=  "+url);
const method = "POST";
let body;
body = new FormData(this.form);
const headers = {
"Content-Type": "application/json",
"Access-Control-Request-Method": "POST",
"Access-Control-Request-Headers" : "",
};
///////////
if (obj !== undefined){
console.log("APIGenericPost if blue not undefined  "+obj);
//const body = new FormData();


for (var property in obj) {
body.append(property, obj[property]);
//console.log("APIGenericPost body.shipping_method"+body.shipping_met–hods);
}

//console.log("APIGenericPost body.api_token=   " + body.api_token);

body.append("url", url);
//console.log("APIGenericPost body.shipping_method");

for (var pair of body.entries()) {
console.log("entry apiGenericPost " + pair[0] + ',' + pair[1]);
}



return fetch(fetchUrl, { method: "POST", body })
.then(res => res.json())
.then(data => console.log("blue returned data"+JSON.stringify(data), null, "\t"));
}
///////////
//https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=/api/shipping/methods&api_token=bee6b1b9f22fd417ede11a687c
//https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=/api/shipping/methods&api_token=549f50ac71333331778b73e7ad
else {
body.append("url", url);
console.log("https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=/api/shipping/methods&api_token=" + api_token);
return fetch(fetchUrl, {method, body})
.then(res => res.json())
.then(//next call 
(res) => {
let body;
body = new FormData();
url = address2 + api_token;
body.append("url", url);
return fetch(fetchUrl2, {method, body})
.then(res => res.json())
.then(res => JSON.parse(res))
.then(data =>
this.setState({pp_standard : data},
function () {
console.log("APIGenericPostRedirect -redirectSave - setState defined:' +  this.state.pp_standard.redirect_url"); }))
.then(res => this.setState((state) => {
console.log("APIGenericPostRedirect -redirectSave - setState defined:  ' state.pp_standard.redirect_url");

//window.open(state.pp_standard.redirect_url);
window.open('https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/upload_products/newestbody.html');
}));
}
//
)
//.then(data => console.log(JSON.stringify(data), null, "\t"));

//.then(data => alert(JSON.stringify(data, null, "\t")));
}

}
//////////////////////////////////////// *APIGeneric 
APIGenericPostAxios = (api_token, address, fetchUrl, obj = undefined) => {
const methodRequest = "OPTIONS";
const methodHeader = new Headers({
// "Content-Type": "application/json",
"Access-Control-Request-Method": "OPTIONS",
"Access-Control-Request-Headers" : "Content-Type"
});
const url = address + api_token;
//console.log("APIGenericPostAxios url=  "+url);
const axios = require('axios');
const method = "POST";
let body;
body = new FormData(this.form);
//console.log("APIGenericAxios" + this.form.firstname.value);
const headers = {
"Content-Type": "application/json",
"Access-Control-Request-Method": "POST",
"Access-Control-Request-Headers" : "",
};
///////////
if (obj !== undefined){

for (var property in obj) {
body.append(property, obj[property]);
}

body.append("url", url);
for (var pair of body.entries()) {
console.log("entry APIGenericPostAxios " + pair[0] + ',' + pair[1]);
}

return fetch(fetchUrl, { method: "POST", body })
.then(res => res.json())
.then(data => console.log(JSON.stringify(data), null, "\t"));
}
///////////
//https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=/api/shipping/methods&api_token=bee6b1b9f22fd417ede11a687c
//https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=/api/shipping/methods&api_token=549f50ac71333331778b73e7ad
else {
body.append("url", url);
console.log("object undefined");
const axios = require('axios');
function getUserAccount() {
return axios({
method: 'post',
url: fetchUrl,
data: body,
config: { headers: {'Content-Type': 'multipart/form-data' }}
})
.then(function (response) {
//handle success
console.log(response);
})
.catch(function (response) {
//handle error
console.log(response);
});
}
axios.all([getUserAccount()])
.then(axios.spread(function (acct, perms) {
// Both requests are now complete
}));
}

}
//////////////////////////////////////// APIGenericPost copy
APIGenAxios = async (api_token, address, fetchUrl, obj = undefined) => {
const axios = require('axios');
console.log("APIGENAxios");
const methodRequest = "OPTIONS";
const methodHeader = new Headers({
// "Content-Type": "application/json",
"Access-Control-Request-Method": "OPTIONS",
"Access-Control-Request-Headers" : "Content-Type"
});
//console.log("APIGenericPost url=  "+url);
const method = "POST";
let body;
let newFetch;
let newResponse;
let newParsedResponse;
let newMessage;
let url;
url = address + api_token;
const headers = {
"Content-Type": "application/json",
"Access-Control-Request-Method": "POST",
"Access-Control-Request-Headers" : "",
};
///////////
const paymentMethodsAddress = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=api/payment/methods&api_token=";
const paymentMethodsCurl = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/addPaymentMethods.php";
if (obj !== undefined){
console.log("APIGenAxios object defined");
for (var property in obj) {
body.append(property, obj[property]);
//console.log("APIGenericPost body.shipping_method"+body.shipping_met–hods);
}
body.append("url", url);
for (var pair of body.entries()) {
console.log("entry apiGenericPost " + pair[0] + ',' + pair[1]);
}

newFetch = await fetch(fetchUrl, { method: "POST", body });
newResponse = await newFetch.json();
newMessage = await console.log(JSON.stringify(newResponse), null, "\t");
}
else {
console.log("APIGenAxios object not defined");
//console.log("anh: ond this.form= " + this.form.firstname.value);
body = new FormData(this.form);
body.append("url", url);
const axios = require('axios');
function getUserAccount() {
for (var pair of body.entries()) {
console.log("entry anh " + pair[0] + ',' + pair[1]);
}
return axios({
method: 'post',
url: fetchUrl,
data: body,
config: { headers: {'Content-Type': 'multipart/form-data' }}
})
.then(function (response) {
//handle success
///////////////////////2nd call
console.log(response);
let newBody = new FormData();
url = paymentMethodsAddress + api_token;
newBody.append("url", url);
return axios({
method: 'post',
url: paymentMethodsCurl,
data: newBody,
config: { headers: {"Content-Type": "application/json"}}
})
.then(function (response) {
//handle success
console.log(response);
})
.catch(function (response) {
//handle error
console.log(response);
});
//////////////////////////////*ndcall
})
.catch(function (response) {
//handle error
console.log(response);
});
}


axios.all([getUserAccount()])
.then(axios.spread(function (acct, perms) {
// Both requests are now complete
}));
}
}
//////////////////////////////////////// axiosPayAddress
AxiosHandler = async (api_token, address, fetchUrl, address2, fetchUrl2, obj = undefined) => {

console.log("AxiosHandler");
console.log("AxiosHandler: " + address2);
const methodRequest = "OPTIONS";
const methodHeader = new Headers({
// "Content-Type": "application/json",
"Access-Control-Request-Method": "OPTIONS",
"Access-Control-Request-Headers" : "Content-Type"
});
//console.log("APIGenericPost url=  "+url);
const method = "POST";
let body;
let newFetch;
let newResponse;
let newParsedResponse;
let newMessage;
let url;
console.log("anh:  this.form= " + this.form.firstname.value);
url = address + api_token;
const headers = {
"Content-Type": "application/json",
"Access-Control-Request-Method": "POST",
"Access-Control-Request-Headers" : "",
};
///////////
const paymentMethodsAddress = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=api/payment/methods&api_token=";
const paymentMethodsCurl = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/addPaymentMethods.php";
if (obj !== undefined){
console.log("APIGenAxios object defined");
for (var property in obj) {
body.append(property, obj[property]);
//console.log("APIGenericPost body.shipping_method"+body.shipping_met–hods);
}
body.append("url", url);
for (var pair of body.entries()) {
console.log("entry apiGenericPost " + pair[0] + ',' + pair[1]);
}

newFetch = await fetch(fetchUrl, { method: "POST", body });
newResponse = await newFetch.json();
newMessage = await console.log(JSON.stringify(newResponse), null, "\t");
}
else {
console.log("APIGenAxios object not defined");
console.log("anh: ond this.form= " + this.form.firstname.value);
body = new FormData(this.form);
body.append("url", url);
const axios = require('axios');
function getUserAccount() {
for (var pair of body.entries()) {
console.log("entry anh " + pair[0] + ',' + pair[1]);
}
return axios({
method: 'post',
url: fetchUrl,
data: body,
config: { headers: {'Content-Type': 'multipart/form-data' }}
})
.then(function (response){
//handle success
///////////////////////2nd call
console.log(response);
let newBody = new FormData();
url = address2 + api_token;
newBody.append("url", url);
return axios({
method: 'post',
url: fetchUrl2,
data: newBody,
config: { headers: {"Content-Type": "application/json"}}
})
.then(function (response) {
//handle success
console.log(response);
})
.catch(function (response) {
//handle error
console.log(response);
});
//////////////////////////////*ndcall
})
.catch(function (response) {
//handle error
console.log(response);
});
}


axios.all([getUserAccount()])
.then(axios.spread(function (acct, perms) {
// Both requests are now complete
}));
}
}
//////////////////////////////////////// axioshandlerRedirect
AxiosHandlerRedirect = async (api_token, address, fetchUrl, address2, fetchUrl2, obj = undefined) => {

console.log("AxiosHandler redirect");
console.log("AxiosHandler redirect: " + address2);
const methodRequest = "OPTIONS";
const methodHeader = new Headers({
// "Content-Type": "application/json",
"Access-Control-Request-Method": "OPTIONS",
"Access-Control-Request-Headers" : "Content-Type"
});
//console.log("APIGenericPost url=  "+url);
const method = "POST";
let body;
let newFetch;
let newResponse;
let newParsedResponse;
let newMessage;
let url;
console.log("anh:  this.form= " + this.form.firstname.value);
url = address + api_token;
const headers = {
"Content-Type": "application/json",
"Access-Control-Request-Method": "POST",
"Access-Control-Request-Headers" : "",
};
///////////
const paymentMethodsAddress = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=api/payment/methods&api_token=";
const paymentMethodsCurl = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/addPaymentMethods.php";
if (obj !== undefined){
console.log("APIGenAxios object defined");
for (var property in obj) {
body.append(property, obj[property]);
//console.log("APIGenericPost body.shipping_method"+body.shipping_met–hods);
}
body.append("url", url);
for (var pair of body.entries()) {
console.log("entry apiGenericPost " + pair[0] + ',' + pair[1]);
}

newFetch = await fetch(fetchUrl, { method: "POST", body });
newResponse = await newFetch.json();
newMessage = await console.log(JSON.stringify(newResponse), null, "\t");
}
else {
console.log("APIGenAxios object not defined");
console.log("anh: ond this.form= " + this.form.firstname.value);
body = new FormData(this.form);
body.append("url", url);
const axios = require('axios');
function getUserAccount() {
for (var pair of body.entries()) {
console.log("entry anh " + pair[0] + ',' + pair[1]);
}
return axios({
method: 'post',
url: fetchUrl,
data: body,
config: { headers: {'Content-Type': 'multipart/form-data' }}
})
.then(function (response){
//handle success
///////////////////////2nd call
console.log(response);
let newBody = new FormData();
url = address2 + api_token;
newBody.append("url", url);
return axios({
method: 'post',
url: fetchUrl2,
data: newBody,
config: { headers: {"Content-Type": "application/json"}}
})
.then(function (response) {
//handle success
console.log(response);
window.open(this.state.pp_standard.redirect_url);
})
.catch(function (response) {
//handle error
console.log(response);
});
//////////////////////////////*ndcall
})
.catch(function (response) {
//handle error
console.log(response);
});
}


axios.all([getUserAccount()])
.then(axios.spread(function (acct, perms) {
// Both requests are now complete
}));
}
}
//////////////////////////////////////// paymentTester
paymentTester = async (api_token, address, fetchUrl, obj = undefined) => {

console.log("a  new hope");
const methodHeader = new Headers({
// "Content-Type": "application/json",
"Access-Control-Request-Method": "OPTIONS",
"Access-Control-Request-Headers" : "Content-Type"
});
//console.log("APIGenericPost url=  "+url);
const method = "POST";
let body;
let newFetch;
let newResponse;
let newParsedResponse;
let newMessage;
let url;
console.log("anh:  this.form= " + this.form.firstname.value);
url = address + api_token;
const headers = {
"Content-Type": "application/json",
"Access-Control-Request-Method": "POST",
"Access-Control-Request-Headers" : "",
};
///////////
const paymentMethodsAddress = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=api/payment/methods&api_token=";
const paymentMethodsCurl = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/addPaymentMethods.php";
if (obj !== undefined){
console.log("paymentTester object defined");
for (var property in obj) {
body.append(property, obj[property]);
//console.log("APIGenericPost body.shipping_method"+body.shipping_met–hods);
}
body.append("url", url);
for (var pair of body.entries()) {
console.log("entry apiGenericPost " + pair[0] + ',' + pair[1]);
}

newFetch = await fetch(fetchUrl, { method: "POST", body });
newResponse = await newFetch.json();
newMessage = await console.log(JSON.stringify(newResponse), null, "\t");
}
else {
console.log("paymentTester object not defined");
console.log("anh: ond this.form= " + this.form.firstname.value);
body = new FormData(this.form);
body.append("url", url);
const axios = require('axios');
function axiosPayMethods() {
for (var pair of body.entries()) {
console.log("entry anh " + pair[0] + ',' + pair[1]);
}
return axios({
method: 'post',
url: fetchUrl,
data: body,
config: { headers: {'Content-Type': 'multipart/form-data' }}
})
.then(function (response) {
//handle success
console.log(response);
})
.catch(function (response) {
//handle error
console.log(response);
});
}

}
}
//////////////////////////////////////// *APIGenericcopy
APIGeneric (api_token, cUrl, address) {
const url = address + api_token;
console.log("generic api triggered with fetchUrl" + url);
const method = "POST";
const body = new FormData();
body.append("url", url);
fetch(cUrl, { method })
.then(res => res.json())
.then(data => alert(JSON.stringify(data, null, "\t")));
}
//////////////////////////////////////// add shipping address
APIShippingAddress (api_token) {
console.log("APIShippingAddress Fired");
const url = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=api/shipping/address&api_token=" + api_token;
const method = "POST";
console.log("parameter passed____" + api_token);
const body = new FormData(this.form);
console.log("shipping sent to php____" + JSON.stringify(body.form));
body.append("url", url);
// console.log("body sent to php____"+body.api_token);
// Display the key/value pairs
for (var pair of body.entries()) {
console.log(pair[0] + ', ' + pair[1]);
}

fetch("https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/AddNewShipAddress.php", { method, body })
.then(res => res.json())
.then(data => alert(JSON.stringify(data, null, "\t")));
}
//////////////////////////////////////// checkout button wrapper
checkoutFuncWrap (checkoutGuest, checkoutGuestSave,api_token) {
console.log("checkout wrap func fired");
/////////// shipping consts method
const shippingMethodAddress = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=api/shipping/method&api_token=";
const shippingMethodCurl = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/addShippingMethod.php";
const shippingObjMethod = {shipping_method:"flat.flat"};
///////////
this.APIAddCustomer(api_token);
}
//////////////////////////////////////// * APIRequest copy
apiRequest = () => {
/*this.setState({promise : ''}, 
 function () { console.log("apiRequest - setState undefined"+this.state.promise); }
 );*/
const api_token = "api_token";
console.log(" apiRequest fired");
console.log(this.state.promise);
return window.fetch("https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/requestToken.php",
{
method: "POST", // *GET, POST, PUT, DELETE, etc.

headers: {
"Content-Type": "application/json",
// "Content-Type": "application/x-www-form-urlencoded",
},
})
.then(response => response.json())
.then(response => JSON.parse(response))
.then(data =>
//  set state

this.setState({promise : data})
//* set state
)
.then(promise =>
//console.log("anymessage"+this.state.promise
console.log("anymessage" + this.props.api_token
));
//{"success":"Success: API session successfully started!","api_token":"34"}
}
////////////////////////////////////////
apiLogIn = (api_token) => {
console.log(" apiLogIn fired");
const url = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=api/shipping/address&api_token=" + api_token;
const method = "POST";
const body = new FormData();
body.append("url", url);
fetch("https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/logInAPI.php", { method, body })
.then(res => res.json())
.then(response => JSON.parse(response))
.then(promise =>
//console.log("anymessage"+this.state.promise
console.log("API Login final promise" + promise, null, "\t"
));
//{"success":"Success: API session successfully started!","api_token":"34"}
}
////////////////////////////////////////
readState = (state) => {
console.log("state is" + state);
}
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
//////////////////////////////////////// redirect function
redirect = (api_token, address, fetchUrl, obj = undefined) => {
console.log("Redirect executed");
const methodRequest = "OPTIONS";
const methodHeader = new Headers({
// "Content-Type": "application/json",
"Access-Control-Request-Method": "OPTIONS",
"Access-Control-Request-Headers" : "Content-Type"
});
const url = address + api_token;
//console.log("redirect url=  "+url);
const method = "POST";
let body;
body = new FormData();
const headers = {
"Content-Type": "application/json",
"Access-Control-Request-Method": "POST",
"Access-Control-Request-Headers" : "",
};
///////////
if (obj !== undefined){
for (var property in obj) {
body.append(property, obj[property]);
//console.log("redirect body.shipping_method"+body.shipping_met–hods);
}
body.append("url", url);
for (var pair of body.entries()) {
console.log("entry redirect " + pair[0] + ',' + pair[1]);
}
return fetch(fetchUrl, { method: "POST", body })
.then(res => res.json())
.then(data => console.log(JSON.stringify(data), null, "\t"));
}
///////////
else {
console.log("obj undefined");
body.append("url", url);
return fetch(fetchUrl, {method, body})
.then(res => res.json())
.then(res => JSON.parse(res))
.then(data =>
this.setState({pp_standard : data}, function () {
console.log("redirectSave - setState defined:  " + this.state.pp_standard.redirect_url);
}))
.then(res => this.setState((state) => {
console.log("redirectSave - setState defined:  " + state.pp_standard.redirect_url);
window.open(state.pp_standard.redirect_url); }));
}

}
//////////////////////////////////////// saveDeets
saveDeets = () => {
console.log("pp:sd:this.form" + this.form.firstname.value);
let body = new FormData(this.form);
this.setState({personalDetails:body});
this.setState((state) => {for (var pair of state.personalDetails.entries()) {
console.log("pp:sd" + pair[0] + ', ' + pair[1]);
}
console.log("state" + JSON.stringify(state));
})

}
//////////////////////////////////////// handleChangeWrapper
handleChangeWrapper = (event) => {
this.handleChangeIntern(event);
this.handleChangeMaster(event);
}
//////////////////////////////////////// handleChangeMaster
handleChangeIntern = (event) => {
const target = event.target;
const value = target.type === 'checkbox' ? target.checked : target.value;
const name = target.name;
this.setState({
[name]: value
});
}
//////////////////////////////////////// handleChangeIntern
handleChangeMaster = (event) => {
const target = event.target;
const value = target.type === 'checkbox' ? target.checked : target.value;
const name = target.name;
this.setState({
[name + 'Bill1']: value
});
}
//////////////////////////////////////// handleChangeIntern
handleChangePayment = (event) => {
const target = event.target;
const value = target.type === 'checkbox' ? target.checked : target.value;
const name = target.name;
this.setState({
[name]: value
});
}
////////////////////////////////////////
clearField = (event) => {
     console.log("clearField" );
     const target = event.target;
     const value = target.type === 'checkbox' ? target.checked : target.value;
     const name = target.name;
     this.setState({
     [name]: ""
     });
}
////////////////////////////////////////
render() {
//const payment = this.redirect(this.state.promise.api_token, paymentAddressAddress, paymentAddressCurl).then(res => APIGenericPost(res, this.state.promise.api_token, paymentMethodsAddress, paymentMethodsCurl));
//const cartInfo = "common/cart/info";

// <editor-fold defaultstate="collapsed" desc=" renderConsts ">
let uniqueMessage = "PP:REN";
const routeGuest = "checkout/guest";
const query = "queries";
const dataRnd = "string";
const dataRnd2 = "string2";
const checkoutGuest = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=checkout/guest";
const checkoutGuestSave = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=checkout/guest/save&api_token=99bfd11c4b3cc5130712995760";
const shippingMethodsAddress = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=api/shipping/methods&api_token=";
const shippingMethodsCurl = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/addShippingMethods.php";
const shippingObj = {shipping_method:"flat.flat"};
const shippingMethodAddress = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=api/shipping/method&api_token=";
const shippingMethodCurl = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/addShippingMethod.php";
//
const paymentAddressAddress = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=api/payment/address&api_token=";
const paymentAddressCurl = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/addPaymentAddress.php";
//
const paymentMethodsAddress = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=api/payment/methods&api_token=";
const paymentMethodsCurl = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/addPaymentMethods.php";
//
const paymentMethodAddress = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=api/payment/method&api_token=";
const paymentMethodCurl = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/addPaymentMethod.php";
const paymentObj = {payment_method:"pp_standard"};
//order
const orderCurl = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/addOrder.php";
const orderAddress = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=api/order/add&api_token=";
//redirect
const redirectUrl = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/addOrder.php";
const redirectAddress = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=api/order/pp_Order&api_token=";
// catagory request
const categoryAddress = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=product/category";
const categoryId = "59";
const categoryCurl = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/getCatagory.php";
//
const shippingAddressAddress = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=api/shipping/address&api_token=";
const shippingAddressCurl = "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/AddNewShipAddress.php";
//
let count = 0;
const form = "false";
const categoryObj = {api_token : undefined,
fetchUrl: "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/getCatagory.php",
package: {address: "https://pauldowlingportfolio.com/opencart-3.0.3.1/upload/index.php?route=product/category/apiCategory",
searchQuery : {path: "59"}}

};
//
const emptyForm = new FormData();
const fullForm = new FormData(this.form);
//
let firstname;
if (this.state.personalDetails !== ''){

this.firstname = this.state.firstname;
console.log("firstname detected" + JSON.stringify(this.state.personalDetails));
} else{
console.log("no personal details");
this.firstname = ''}
//
      const tinyProp = this.props.propObj.masterObj;
      //console.log("eyes here"+Object.keys(tinyProp));
      const basketParameter = tinyProp.callState();
      const api_token = basketParameter.promise.api_token;
//console.log(uniqueMessage+"api token"+api_token);      
// </editor-fold>

return(
<div className="masterDivPaymentProcess" xmlns="http://www.w3.org/1999/xhtml">
          <form  id="myForm"  ref={el => (this.form = el)}  >
          </form>
    
          <div>
                    {this.state.count === 0 && this.props.propObj.masterObj &&
                    <div className={"backButton"} onClick={() => tinyProp.setHomePage('paymentProcess')}>Back to Shopping</div>}
                    {this.state.count > 0 &&
                    <div className={"backButton"} onClick={() => this.payCountRev()}>BACK</div>}

                     {this.state.count === 0 &&
                              <div>

                                        <h1  className={"paymentHeaders"}>Personal Details</h1>
                                        <div className={"blackBorder"}></div>
                                        <h2>We will need your email and phone number to manage your order</h2>
                                        <form ref={el => (this.form = el)}>
                                                  <label><input 
                                                                type="text" 
                                                                name="firstname" 
                                                                value = {this.state.firstname}
                                                                onChange = {this.handleChangeWrapper}
                                                                onFocus={this.clearField}
                                                                /></label>

                                                  <label><input
                                                                type="text"
                                                                name="lastname"
                                                                value = {this.state.lastname}
                                                                onChange = {this.handleChangeWrapper}
                                                                   onFocus={this.clearField}
                                                                /></label>

                                                  <label><input
                                                                type="text"
                                                                name="email"
                                                                value = {this.state.email}
                                                                onChange = {this.handleChangeWrapper}
   onFocus={this.clearField}
                                                                /></label>

                                                  <label><input
                                                                type="text"
                                                                name = "telephone"
                                                                value = {this.state.telephone}
                                                                onChange = {this.handleChangeWrapper}
   onFocus={this.clearField}
                                                                /></label>


                                        </form>

                                        <div  className={"continue_Button"} id={"send"}  onClick={() => {this.payCountWrap(this.checkoutFuncWrap(checkoutGuest, checkoutGuestSave,api_token)); }}>CONTINUE</div>

                              </div>
                              }

                              {this.state.count === 1 && this.state.personalDetails !== '' &&
                              <div>
                                        <h1  className={"paymentHeaders"}>Shipping Address</h1>
                                        <div className={"blackBorder"}></div>
                                        <h2>The item will be delivered to:</h2>
                                        <form ref={el => (this.form = el)}>
                                                  <label>   
                                                            <input     
                                                                type="text" 
                                                                name="firstname" 
                                                                value={this.state.firstname}   
                                                                onChange = {this.handleChangeMaster}
                                                                />   
                                                  </label>

                                                  <label>
                                                            <input
                                                                type="text"
                                                                name="lastname"
                                                                value={this.state.lastname}
                                                                onChange = {this.handleChangeMaster}
                                                                />
                                                  </label>

                                                  <label>
                                                            <input
                                                                type="text"
                                                                name="address_1"
                                                                value = {this.state.address_1}
                                                                onChange = {this.handleChangeWrapper}

                                                                />
                                                  </label>

                                                  <input
                                                      type="text"
                                                      name="address_2"
                                                      value = {this.state.address_2}
                                                      onChange = {this.handleChangeWrapper}

                                                      />



                                                  <label>
                                                            <input
                                                                type="text"
                                                                name="city"
                                                                value = {this.state.city}
                                                                onChange = {this.handleChangeWrapper}
                                                                />
                                                  </label>




                                                  <label>
                                                            <input
                                                                type="text"
                                                                name="postcode"
                                                                value = {this.state.postcode}
                                                                onChange = {this.handleChangeWrapper}
                                                                />
                                                  </label>



                                        </form>
                                        <div className={"continue_Button"} id={"submitBillingDeets"} onClick={() => this.payCountWrap(this.AxiosHandler(api_token, shippingAddressAddress, shippingAddressCurl, shippingMethodsAddress, shippingMethodsCurl))}>CONTINUE</div>
                              </div>
                              }
                              {this.state.count === 2 &&
                              <div>     <h1  className={"paymentHeaders"}>Shipping Options</h1>
                                        <div className={"blackBorder"}></div>
                                        <h2>We currently offer basic shipping</h2>
                                        <div className="checkBox">
                                        <label>
                                        An  
                                        </label>
                                        <label>
                                        Post 
                                        </label>
                                        <input id={"payPal"} type="radio" name="payPal" value="payPal" defaultChecked />
                                        </div>
                                       
                                        <div className={"continue_Button"} id={"shippingOptions"} onClick={() => this.payCountWrap(this.APIGenericPost(api_token, shippingMethodAddress, shippingMethodCurl, shippingObj))}>CONTINUE</div> 
                                       
                              </div>
                              }


                              {this.state.count === 3 &&
                              <div> 
                                        <h1  className={"paymentHeaders"}>Billing Address</h1>
                                        <h2>The item will be billed to</h2>
                                        <div className={"blackBorder"}></div>
                                        <form ref={el => (this.form = el)}>
                                                  <input 
                                                      type="text" 
                                                      name="firstnameBill1" 
                                                      value = {this.state.firstnameBill1}
                                                      onChange = {this.handleChangePayment}
                                                      />   

                                                  <input   
                                                      type="text"
                                                      name="lastnameBill1"
                                                      value = {this.state.lastnameBill1}
                                                      onChange = {this.handleChangePayment}
                                                      />

                                                  <input
                                                      type="text"
                                                      name="companyBill1"
                                                      value={this.state.company}
                                                      onChange = {this.handleChangePayment}
                                                      />

                                                  <input
                                                      type="text"
                                                      name="address_1Bill1"
                                                      value = {this.state.address_1Bill1}
                                                      onChange = {this.handleChangePayment}
                                                      />

                                                  <input
                                                      type="text"
                                                      name="address_2Bill1"
                                                      value = {this.state.address_2Bill1}
                                                      onChange = {this.handleChangePayment}
                                                      />

                                                  <input
                                                      type="text"
                                                      name="cityBill1"
                                                      value = {this.state.cityBill1}
                                                      onChange = {this.handleChangePayment}
                                                      />

                                                  <input
                                                      type="text"
                                                      name="postcodeBill1"
                                                      value = {this.state.postcodeBill1}
                                                      onChange = {this.handleChangePayment}
                                                      />
                                        </form>
                                        <div className={"continue_Button"} id={"paymentAddress"} onClick={() => this.payCountWrap(this.APIGenAxios(api_token, paymentAddressAddress, paymentAddressCurl))}>CONTINUE</div>
                              </div>
                              }

                    {this.state.count === 4 &&
                    <div>
                              <h1  className={"paymentHeaders"}>Payment Options</h1>
                              <div className={"blackBorder"}></div>
                              <h2>We process our payments through PayPal. You don't need an account to purchase. </h2>
                              
                              <div className={"checkBox"}>
                              <label className={"option"} htmlFor={"payPal"}>Pay</label><label>Pal</label>
                              <input id={"payPal"} type="radio" name="payPal" value="payPal" defaultChecked />
                              </div>

                              <div className={"continue_Button"} onClick={() => this.payCountWrap(this.APIGenericPost(api_token, paymentMethodAddress, paymentMethodCurl, paymentObj))}>CONTINUE</div> 
                    </div>
                    }


                    <div>{this.state.count === 5 &&
                              <div>
                                        <h1  className={"paymentHeaders"}>Order</h1>
                                        <div className={"blackBorder"}></div>
                                        <h2>You will be redirected to paypal to complete transaction </h2>
                                        <div className={"continue_Button"} onClick={() => this.payCountWrap(this.APIGenericPostRedirect(api_token, orderAddress, orderCurl, redirectAddress, redirectUrl))}>CONTINUE</div>
                              </div>
                              }
                                      </div>
                                      
                                      <div>{this.state.count === 6 &&
                              <div>
                                        <h1  className={"paymentHeaders"}>Order</h1>
                                        <div className={"blackBorder"}></div>
                                        <h2 className={"redirectLoading"} >Please wait while we send your data...</h2>
                                        <div className={"continue_Button"} onClick={() => tinyProp.setHomePage('paymentProcess')}>Thank You</div>
                              </div>
                              }
                                      </div>

           
          </div>
        

</div>
)
}

}

