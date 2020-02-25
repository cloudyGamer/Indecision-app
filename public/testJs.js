/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

console.log("js script successfully detected");

//////////////////////////////////////// APIGenericPostSave
/*APIGenericPost = (address,fetchUrl, obj = undefined) => {
const methodRequest = "OPTIONS";
const methodHeader = new Headers({
// "Content-Type": "application/json",
"Access-Control-Request-Method": "OPTIONS",
"Access-Control-Request-Headers" : "Content-Type"
});

const url = address;
//console.log("APIGenericPost url=  "+url);
const method = "POST";
const body = new FormData();
const headers = {
             "Content-Type": "application/json",
             "Access-Control-Request-Method": "POST",
             "Access-Control-Request-Headers" : "",
             
            };
     ///////////
     if(obj !== undefined){
         //console.log("APIGenericPost if blue not undefined  "+obj);
         //const body = new FormData();
 
                   
               for ( var property in obj ) {
                 body.append(property,obj[property]);
                 //console.log("APIGenericPost body.shipping_method"+body.shipping_met–hods);
               }  
               
               //console.log("APIGenericPost body.api_token=   " + body.api_token);

               body.append("url", url);
                 //console.log("APIGenericPost body.shipping_method");

               for (var pair of body.entries()) {
                   console.log("entry apiGenericPost "+pair[0]+ ',' + pair[1]); 
               } 
               
             
               
               window.fetch(fetchUrl, { method: "POST",body })
               .then(res => res.json())
               .then(data => console.log(JSON.stringify(data), null, "\t"));
     } 
     ///////////
     //http://localhost:8888/opencart-3.0.3.1/upload/index.php?route=/api/shipping/methods&api_token=bee6b1b9f22fd417ede11a687c
     //http://localhost:8888/opencart-3.0.3.1/upload/index.php?route=/api/shipping/methods&api_token=549f50ac71333331778b73e7ad
     else {
    body.append("url", url);
    console.log("http://localhost:8888/opencart-3.0.3.1/upload/index.php?route=/api/shipping/methods&api_token="+api_token); 
    window.fetch(fetchUrl, {method, body})
     .then(res => res.json())
     .then(data => console.log(JSON.stringify(data), null, "\t"));

     //.then(data => alert(JSON.stringify(data, null, "\t")));
     }

}*/

//////////////////////////////////////// sampleObj
//const apiCurl = "http://localhost:8888/opencart-3.0.3.1/upload/accessAPI.php";   
//const apiAddress = "http://localhost:8888/opencart-3.0.3.1/upload/index.php?route=api/order/add&api_token=";

//////////////////////////////////////// obj

  
     var jQueryScript = document.createElement('script'); jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'); document.head.appendChild(jQueryScript);

////////////////////////////////////////
//working  code
var name  = $('div.product-name.mob-hide').text(); 
var otherVar  =  $("#ovgallery-main-image").attr('src');    
$("#ovgallery-main-image").after("<a  id='downloadScrape' download='"+name+"' href='"+otherVar+"'>Click me bro</a>");
document.getElementById('downloadScrape').click();
var description =  $('div.std > h2').text(); 
//var ingredients =  $("div.panel div:contains('INGREDIENTS:')").text();

jQuery.expr[':'].icontains = function(a, i, m) {
  return jQuery(a).text().toUpperCase()
      .indexOf(m[3].toUpperCase()) >= 0;
};

var ingredients =  $("div.panel div:icontains('INGREDIENTS:')").text();
console.log(name);
console.log(ingredients);

var tabs = "<div id='tabs'><ul><li><a href='#tabs-1'>Description</a></li><li><a href='#tabs-2'>Ingredients</a></li>\n\
</ul><div id='tabs-1'><meta charset='utf-8' /><p>"+description+"</p>\n\
</div><div id='tabs-2'><meta charset='utf-8' /><p>"+ingredients+"</p></div></div>";

console.log(tabs);
/*clickButtons = () => {
console.log("click buttons ran");
const varID = ["send","submitBillingDeets","shippingOptions","pickMethod","paymentAddress"];

for(var i=0;i<varID.length,i++){
document.getElementById(varID[0]).click();}
};*/