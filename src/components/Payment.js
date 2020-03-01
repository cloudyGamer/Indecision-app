
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Payments
 * and open the template in the editor.
 */
import React from 'react'; 
import PaymentProcess from './PaymentProcess';
export default class Payment extends React.Component {
  state =  {
       promise : 'value'
  }        
  componentDidMount() {
  console.log('Payment component did mount');
  const APILogin = "catalog/controller/api/login.php";
  const tokenPHP = "https://www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/apiToken.php";
  const apiAddress = "https://www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/index.php?route=/api/shipping/token&api_token=";
  //const newToken = this.state.promise.api_token; 
  this.apiRequest2().then(data =>this.apiRequest3());
  } 
    apiRequest2 = () => {
 this.setState({promise : ''}, 
 function () { /*console.log("apiRequest - setState undefined"+this.state.promise);*/ }
 ); //called this way so as not to unset state

const method = "POST";
const body = new FormData();
console.log(" apiRequest2 fired");

//console.log("this.state.promise equals___"+this.state.promise);
  return  fetch("https://www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/requestToken.php",
      { method,body})
    .then(response => response.json())
    .then(response => JSON.parse(response))
  .then(data =>     
     //  set state
   
   this.setState({promise : data})
    //* set state
    )
    .then(promise => 
    console.log("anymessage"+this.state.promise.api_token));
    

    //{"success":"Success: API session successfully started!","api_token":"34"}
          }
   apiRequest3 = () => {
 this.setState({promise : ''}, 
 function () { console.log(/*"apiRequest3 - setState undefined"+this.state.promise*/); }
 ); //called this way so as not to unset state
const method = "POST";
const body = new FormData();
//console.log(" apiRequest3 fired");
/////////// second API call
this.setState({promise : ''}, 
 function () { /*console.log("apiRequest-second- - setState undefined"+this.state.promise);*/ }
 );
 
  return  fetch("https://www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/requestToken2.php",
      { method,body})
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
 
  
        render() {
        return(<div>
                {/*////// comment /////*/}
                {this.state.promise.api_token&&
                <PaymentProcess
                 api_token = {this.state.promise.api_token}
                 routeMultiple = {this.props.routeMultiple}
                 route = {this.props.route}
                 routeMultiplePost = {this.props.routeMultiplePost}
                 fetch = {this.props.fetch}
                 callBck = {this.props.callBck}
                 testFunc = {this.props.testFunc}
                 queueResponse = {this.props.queueResponse}
                 addCartQueue = {this.props.addCartQueue}    
                 cartInfoQueue = {this.props.cartInfoQueue}
                 checkOutButtQueue = {this.props.checkOutButtQueue}
                 guestCheckQueue = {this.props.guestCheckQueue}
                 finishQueue = {this.props.finishQueue}
                 guestSave = {this.props.guestSave}
                 testSubmit = {this.props.testSubmit}
                 codePen = {this.props.codePen}
                 startup = {this.props.startup}
                 genericQ = {this.genericQ}
                 APIRequest2 = {this.APIRequest2}
                 APIRequest3 = {this.APIRequest3}
                 APIAddCustomer = {this.APIAddCustomer}
                
                 
                  />
                         }
                 
                    
               </div>)
    }  
    
}

