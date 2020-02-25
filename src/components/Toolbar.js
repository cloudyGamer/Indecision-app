/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
*/
import Basket from  './Basket'; 
import PaymentProcess from './PaymentProcess'
import StoreInfo from './StoreInfo';
import React from 'react';

export default class Toolbar extends React.Component {
          state = {
               open:false
          }
          
  componentDidMount() {
       //console.log("tb cdm prop keys"+Object.keys(this.props.propObj));
       
        console.log('Toolbar component did mount');
        //this.props.propObj.masterObj.basketInitialiser("tb:cdm ",this.props.propObj.masterObj.APIGenericNoBody);
        if(this.props.propObj.masterObj.state.promise!=='value'){
             
              //console.log("api_token detected in toolBar and it is"+JSON.stringify(this.props.propObj.masterObj.state.promise));
        }else{/*console.log("no api_token detected in toolbar - it is "+JSON.stringify(this.props.propObj.masterObj.state.promise));*/}
  
  } 
  
  componentWillUnmount(){
       console.log("ToolBar component unmounted");
  }
  
  handleClick() {
    this.setState({
        open: !this.state.open
    });
}

  basketClickHandlerOriginal = (promise) => {
     if(promise!==undefined){
          
          console.log("basketClickHandler ran"); 
          console.log("tb:ren:bsktClkHndlr:stcmpnt: propObj:  "+JSON.stringify(this.props.propObj));
           return this.props.propObj.masterObj.APIGenericNoBody(this.props.propObj.payLoad,"tb:ren:bsktClkHndlr:noBody: ","basketState",promise.api_token)
           .then(promise => this.props.propObj.masterObj.setComponent("tb:ren:bskclkhndl:",Basket,this.props.propObj));  
     }else{
          console.log("your basket is empty");     
     }    
}

  basketClickHandler = (promise) => {
     let basketState;
     let el;
          const uniqueMessage = "tb:ren:bsktClkHndler:";
          const master = this.props.propObj.masterObj;
          const updateBasket = master.APIGenericNoBody;
          const liveState = this.props.propObj.masterObj.callState();
          const stateObj = liveState.basketState.products;
     if(promise!==undefined&&stateObj.length>0){
          
          updateBasket(this.props.propObj.payLoad,uniqueMessage,"basketState",promise.api_token)
            .then(promise => {
                     console.log(uniqueMessage+"basketState now"+JSON.stringify(stateObj));
                     console.log("tokenM and bskt");
                     //return console.log("your basket is full. Length "+stateObj.length);   
                     master.setComponent("tb:ren:bskclkhndl:",Basket,this.props.propObj);
            });
     }else{
          el = document.getElementById('emptyMessage');
          console.log("tokenM no token className= "+el.className);
          el.className = "toolBar_empty toolBar_animation";
          setTimeout(
               function(){
                    el.className = "toolBar_empty";
               },1000
          ); 
     }
     
}

  displayEmpty = (event) => {
     console.log("displayEmpty executed");
     event.target.classList = "toolBar_empty toolBar_animation";
       setTimeout(
          function(){
             event.target.classList = "toolBar_empty";
          },1000
          ); 
}

  componentDidUpdate () {
       const uniqueMessage = "TB:CDU"
       console.log(uniqueMessage+"updated");
  }
 
        render() {
      const tinyProp = this.props.propObj.masterObj;
      const basketParameter = tinyProp.callState();
      const importedPromise = basketParameter.promise;
      const products = basketParameter.basketState.products;
     
      console.log("toolbar rendered basketEmpty= "+this.state.emptyBasket);
      let cartContents;
      if(products){
            //cartContents = basketParameter.basketState;
            //cartContents = "Empty Cart";
           cartContents = console.log("cart length= "+basketParameter.basketState.products.length);
      }else{
           
           cartContents = console.log("no products detected");
      }
       const menuMult = 1.2;
        return(<div xmlns="http://www.w3.org/1999/xhtml">
    
    <div className="toolBar_container">
 
    {importedPromise!==undefined&& 
      console.log("tool bar rerendered. api_token= "+JSON.stringify(importedPromise.api_token))}
    <div>{console.log("basket contents?: "+Object.keys(basketParameter.basketState))}</div> 
    <div id="toolBar"className="toolBar">
    <div id="menuFavicon">
    
    </div>
    <div id="socialMediabutton" className="toolBar_info" onClick={()=> tinyProp.setStoreInfo("toolBar")}><img src="assets/socialMedia.png" /></div>
    <div className="toolBar_basketContainer">
    {importedPromise!==undefined&& <div>{cartContents}</div>}
      <div className="toolBar_emptyWrapper">
          <div className="toolBar_mask"></div>
          <div id="emptyMessage" className="toolBar_empty">Empty</div>
          <div className="toolBar_basket" id="basketButton" onClick={() => this.basketClickHandler(importedPromise)}>
               <img src="assets/basket.png" />
          </div>
      </div>

    </div>
        </div>
        </div>
         {/*  <div className="testing_mode">Testing Mode • All Purchases Void</div>*/}
         
                    
               </div>)
    }  
    
}


