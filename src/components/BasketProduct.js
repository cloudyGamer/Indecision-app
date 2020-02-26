 /* 
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | BasketProducts
  * and open the template in the editor.
  */

import React from 'react'; 
import BriefProduct from './BriefProduct';          
import Product from './Product';
import Basket from  './Basket';

export default class BasketProduct extends React.Component {
          
     constructor (props) {
     super(props);
     this.setState = this.setState.bind(this);

     }   

     state = {
     stateObj: 'value' ,
     example: 'string',
     quantity: 1

     }

     ComponentWillUnmount() {
     console.log("BP:CDU");
     } 
     
     fetch = (data, uniqueMessage) => {
     //////////////////////////
      console.log("fetch executed with parameter" + data + "from within" + uniqueMessage);
      const testStr = "product/product&product_id=50";
      return  window.fetch(`https://testonly.forevermecosmetics.ie/index.php?route=product/product&product_id=` + data, {
           method: 'GET', // or 'PUT' 
      }).then(response => response.json())
        .then(json =>
             this.setState({
                  resources: json  
             }))
        .then((json) => {
           const newStr = JSON.stringify(this.state.resources, null, 4); // (Optional) beautiful indented output.
           console.log(uniqueMessage+newStr);
        }).then((json) => {
           let billyMessage = this.state.resources.name.split("Raspberry");
      });
     //////////////////////////
     } 

     clickMe = (e = undefined) => {
     console.log("you clicked me!");
     }
     
     componentDidMount() {

     const uniqueMessage = "BP:CDM"+this.props.propObj.name;
     console.log(uniqueMessage+'BasketProduct product mounted');
    // console.log(uniqueMessage+'props:'+JSON.stringify(this.props.propObj));
     //console.log(uniqueMessage+" product id "+this.props.propObj.product_id);
     //console.log(uniqueMessage+"staleObj"+JSON.stringify(this.props.staleObj));
     //console.log(uniqueMessage+"removeBasketItem"+JSON.stringify(this.props.staleObj.removeBasketItem));
     //console.log(uniqueMessage+"masterObj"+Object.keys(this.props.staleObj.masterObj));


     if(this.props.propObj.product_id){
       console.log(uniqueMessage+"product id detected= "+this.props.propObj.product_id);
       this.fetch(this.props.propObj.product_id,uniqueMessage);
     }

     //<editor-fold defaultstate="collapsed" desc="comment">
     //console.log(uniqueMessage+' masterObj:'+Object.keys(this.props.staleObj.masterObj));

     //               console.log("BP:cdm apiAddtoCart passed");
     //               console.log("BP:cdm tokenRequested"+this.props.staleObj.masterObj.state.tokenRequested);
     //               console.log("BP:cdm product_id"+this.props.propObj.product_id);

     /*  if(this.props.setGlobalState){
       console.log("BasketProduct: setGlobalState exists");
                     this.props.propObj.staleObj.masterObj.APIGenericPostSave(this.props.propObj,":cdm:APIGPS");.then(res =>this.propObj.setGlobalState("stateObjNew","ranString"));*/


     /* }else{console.log("child: set global state doesnt exist");}
     console.log("BasketProduct mounted");
     console.log("realted: globalState"+JSON.stringify(this.props.globalState));
         */  
     //</editor-fold>
     } 
     
     removeBasketHandler = (importedPromise) => {
          console.log("remove basket handler ran");
     const removeBasketItem = this.props.staleObj.masterObj.APICategoryPostSaveGlobal;
     const updateBasket = this.props.staleObj.masterObj.APIGenericNoBody;

     return  removeBasketItem(importedPromise,"key",this.props.propObj.cart_id,this.props.staleObj.removeBasketItem," BP:CDM:RMVBASKET ")
     .then(promise => updateBasket(this.props.staleObj.payLoad,"bp:ren:rmvBsktHndlr:noBody: ","basketState",importedPromise.api_token))
     .then(promise => this.props.staleObj.masterObj.setComponent("bp:ren:bskclkhndl:",Basket,this.props.staleObj));

     console.log("removeBasketItem executed");
}

     componentDidUpdate(){
          const uniqueMessage = "BP:CDU:";
     }

     clickHandler = (e) => {
     console.log("BasketProduct: clickHandler()");
     this.props.setGlobalState("product_id",this.props.propObj.product_id); 
     }   

//<editor-fold defaultstate="collapsed" desc="basketHandler">
//     basketHandler = (e) => {
//          console.log("BasketProduct: clickHandler()");
//          //if conditional to decide wether apiToken runs
//            if(this.props.staleObj.masterObj.state.tokenRequested===false){
//              this.props.staleObj.masterObj.apiRequest2().then( promise =>
//            this.props.staleObj.masterObj.APIAddToCart(promise));
//            console.log("tokenRequested condition ==="+this.props.staleObj.masterObj.state.tokenRequested);
//            }else{
//              this.props.propObj.staleObj.masterObj.APIAddToCart(this.props.propObj.staleObj.masterObj.state.promise);
//              console.log("tokenRequested condition ==="+this.props.staleObj.masterObj.state.tokenRequested);
//            }
//            //this.props.staleObj.masterObj.apiRequest2();
//            //this.props.staleObj.masterObj.APIAddToCart();
//     } 
//</editor-fold>

        render()  {
          
           const basketProduct = this.props.staleObj;
           const tinyProp = this.props.staleObj.masterObj;
           const basketParameter = tinyProp.callState();
           const importedPromise = basketParameter.promise;
           const payLoad = console.log("payload passed second layer"+Object.keys(this.props.staleObj.payLoad));
           let uniqueMessage = "BP: REN: "+this.props.propObj.name;
           console.log(uniqueMessage+"this.state.resources"+JSON.stringify(this.state.resources));
          // let APIAddToCart = this.props.propObj.staleObj.masterObj.APIAddToCart;
          // const info = this.setState((state)=> {return state.stateObj})
           //const category = this.state.stateObj;
           //<div onClick={()=>this.setState(this.props.state: "51")}>
           //onClick={()=>this.clickMe("product_id",56)}
           //<button onClick={()=>this.props.staleObj.masterObj.APICategoryPostSaveGlobal(importedPromise,"key",this.props.propObj.cart_id,this.props.staleObj.removeBasketItem," BP:CDM:RMVBASKET ")}>Remove Item</button> 
            const component = <Product />
           return(
           <div className="related"  xmlns="http://www.w3.org/1999/xhtml">
                <div className="related_image_container" onClick={()=>this.tinyProp.productClickHandler(uniqueMessage,this.props.propObj.product_id)}>{this.state.resources&&<img className={"basket_image"} src={"https://testonly.forevermecosmetics.ie/image/"+this.state.resources.image} ></img>}</div>
                <h1 className="related_title">{this.props.propObj.name}</h1>
                <div className="bottomShelf_relContent_rel_title" >{this.props.propObj.category}</div>
                <div className="related_image_bottomShelf">
                <div className="related_price">{this.props.propObj.price}</div>
                <div className="related_basket_price_container">{this.props.masterObj&& 
                       <div onClick={()=>this.removeBasketHandler(importedPromise)}>
                         <img className="basket_remove_x" src="assets/white_x.png"/>
                         <img className="related_clicked_basket img_visible" src="assets/black_x.png"/>
                       </div> }
                       <div className={"basket_quantity"}>{this.props.propObj.quantity}</div>
                      {/*  <input type="number" value={this.props.propObj.quantity} className="related_quantity"  name="quantity" min="1" max="10" onChange={(e) => this.setState(tinyProp.handleChangeIntern(e))} />*/}
                </div>
                </div>
                
           </div>)
          }                

    }  
    



