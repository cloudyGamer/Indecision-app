 /* 
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
  * and open the template in the editor.
  */
 
 
import React from 'react'; 

export default class IngHeading extends React.Component {
  componentDidMount() {
       //delayBasket - fnc, togglestate, img rotated,
  console.log('IngHeading component did mount');
  }        
  
        render() {
        let master;
        master = this.props.propObj.masterObj;
        return(<div onClick={master.delayBasket()} xmlns="http://www.w3.org/1999/xhtml">
               
                    
                    
               </div>)
    }  
    
}
