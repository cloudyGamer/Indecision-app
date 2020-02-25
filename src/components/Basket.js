

import React from 'react'; 
import ChildState from './ChildState';
import HomePage from './HomePage';
import PaymentProcess from './PaymentProcess';

export default class Basket extends React.Component {

componentDidMount() { 
const cdmBas = "bas:cdm";
console.log("basket mounted");
//console.log("BAS:CDM"+JSON.stringify(this.props.propObj));

// console.log(cdmBas+"staleObj"+Object.keys(this.props.propObj.masterObj));  
}

//<editor-fold defaultstate="collapsed" desc="comment">

     /* if(this.props.masterObj){
          console.log("Bas:cdm MasterObj passed"); 
      }else{
        console.log("Bas:cdm MasterObj not added");   
      }*/
       //console.log("Bas: CDM: props "+JSON.stringify(this.props));
       //console.log("Cat:CDM: propObj: keys"+JSON.stringify(Object.keys(this.props.propObj)));
                   //console.log("Cat:CDM: propObj: keys"+JSON.stringify(this.props.propObj));


       //this.propObj.APIGenericPostCat(this.props.propObj.payLoad);


/*this.props.propObj.APIGenericPostSave(this.props.propObj.payLoad)
.then(res =>this.propObj.setGlobalState("stateObjNew","ranString"));*/
       //this.props.setGlobalState("product_id",56);
       //this.props.setGlobalState("product_id",56);
       //this.clickMe();
      //  console.log("masterObj test"+this.props.propObj);
     /* if(this.props.propObj.masterObj.testVal){
            console.log("Basket: setGlobalState exists");

       }else{
       console.log("child: set global state doesnt exist");}
       console.log("Basket mounted");
       console.log("related: globalState"+JSON.stringify(this.props.propObj.globalState));*/
//</editor-fold>

componentDidUpdate(prevProps,prevState) {
     /* if(prevProps.propObj.masterObj.state.stateObj!==this.props.propObj.masterObj.state.stateOb){
      console.log("BAS:CDU:PROPS updated");
      const test = this.props.propObj.masterObj.setGlobalState("objState","testVal");
 }else{
      console.log("BAS:CDU:PROPS you aint about to get about it");
 }*/
}
////////////////////////////////////////
displayChildState = () =>{
     let g;
}
////////////////////////////////////////
clickHandler = (e) => {
     let master = this.props.propObj.masterObj;
     master.setComponent("BAS:REN",PaymentProcess,this.props.propObj);
     }   
  
        render() {
         //console.log("stateObj exists  "+JSON.stringify(this.props.propObj.masterObj.state.stateObj));
         let childState;
         let emptyBasketMessage;
         let payLoad;
         
         if(this.props.propObj){
             const getProduct = "product/product&product_id="+this.props.propObj.product_id;
                //console.log("BAS: REN: stateObj keys detected"+JSON.stringify(Object.keys(this.props.propObj.masterObj.state)));
                //console.log("BAS: REN: stateObj detected"+JSON.stringify(this.props.propObj.masterObj.state.stateObj));
             const liveState = this.props.propObj.masterObj.callState();
             const stateObj = liveState.basketState.products;
             if(stateObj.length<=0){
                 emptyBasketMessage = this.props.propObj.masterObj.setHomePage("BP:REN");
                  
             }else{
                 emptyBasketMessage = false;   
             }
             console.log("bas:ren stateObj"+JSON.stringify(stateObj));
             console.log("bas:ren staleObj"+JSON.stringify(this.props.propObj.masterObj));
             
             payLoad = console.log("payLoad passed first layer"+Object.keys(this.props.propObj.payLoad));

             
             
             childState= <ChildState 
                        stateObj = {stateObj}
                        staleObj = {this.props.propObj}
                        parent = {" parent:basket "}
                    />;
                    
               }else{
                    childState=console.log("BAS:REN: stateObj undetected");
                    payLoad = console.log("payload failed first layer");
               }
           return(
           <div xmlns="http://www.w3.org/1999/xhtml">
         {console.log("Bas ren")}
           {this.props.propObj&&<div className="basket_emptyBasket">{emptyBasketMessage}</div>}
           <div className={"basket_container"}>
               <button className="basket_checkoutButton" onClick={(e)=>this.clickHandler(e)}>CHECKOUT</button>
           </div>
           <div className={"flex_center"}><div className="basket_title">Basket</div></div>
           <div>{payLoad}</div>
              <div>{childState}</div>
               </div>)
    }   
    
}







