/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this Opencartcalls file, choose Tools | Opencartcallss
 * and open the Opencartcalls in the editor.
 */
import React from 'react'; 

export default class Opencartcalls extends React.Component {
  
          componentDidMount() {
  console.log('Opencartcalls component did mount');
  const testStr = "product/product&product_id=53";
  {this.fetch(testStr)} 
          }
  

route = (data)=> {
 //////////////////////////
console.log("route executed with parameter"+data);
//const testStr = "product/product&product_id=53";
  window.fetch(`http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=`+data);
  //////////////////////////     
 }          
          
                             
fetch = (data) => {
//////////////////////////
console.log("fetch executed with parameter"+data);
const testStr = "product/product&product_id=53";
  window.fetch(`http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=`+data, {
            method: 'GET', // or 'PUT' 
           
            headers: {

            }
        }).then(response => response.json())
    .then (json => 
          this.setState({
          resources: json
     }))
  //////////////////////////
         
 }
 
 
  
        render() {
        return(<div>
                {/*////// comment /////*/}
</div>);
    }  
    
}



