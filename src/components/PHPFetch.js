/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'; 
//import 'whatwg-fetch';
export default class PHPFetch extends React.Component {
        
componentDidMount() {
  console.log('fetch component did mount');
  }       
        

 
 /*getPHP = () => {
     
   
      
      
      
    var other = `string`;
    var newString = JSON.stringify(other);
console.log("get PHP executed");
  window.fetch(`http://localhost:8888/3.0.2.0-OpenCart/upload/catalog/model/catalog/react.php?x=other`, {
  method: 'POST', // or 'PUT'
  body: `string`, // data can be `string` or {object}!
  headers:{
    
  }
}).then(res => res.json())
.then(response => console.log('Success:', response))
.catch(error => console.error('Error:', error));   

  } */
        
    getPHP = () => {
        var myList = document.querySelector('ul');
         /*var myRequest =  (`http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=product/product&product_id=53`, {
            method: 'GET', // or 'PUT' 
           
            headers: {

            }
        }); */         
        var other = `string`;
        var newString = JSON.stringify(other);
        console.log("get PHP executed");
        window.fetch(`http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=product/product&product_id=53`, {
            method: 'GET', // or 'PUT' 
           
            headers: {

            }
        }).then(function(response) { return response.json(); })
  .then(function(data) {
      console.log("result : "+ data.name);
    //for (var i = 0; i < data.length; i++) {
      var listItem  = document.getElementsByClassName("topShelf_titleHold_title");
      listItem.innerHTML = '<strong>' + data.name + '</strong>';
    //}
  });
        
        ////
    
        

    } 
  
       
  render() {
  console.log('fetch component loaded');
  
  return (
          <div className="widget-header">
            {this.getPHP()}
            
          </div>      
                    )
  }

}

