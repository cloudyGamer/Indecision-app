/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Replaces
 * and open the template in the editor.
 */
import React from 'react'; 
import BriefProduct from './BriefProduct';          
import Product from './Product';
import PaymentProcess from './PaymentProcess';

export default class RelatedProduct extends React.Component {
          
          
      constructor (props) {
             super(props);
            this.setState = this.setState.bind(this)
       }   
       
      state = {
       stateObj: 'value' ,
       example: 'string',
       quantity: 1,
       basketClicked : false
       }
    
      clickMe = () => {
            console.log("you clicked me!");
       }
      componentDidMount() {
            const uniqueMessage = "RP:CDM";
            console.log(uniqueMessage+'related product mounted');
            console.log(uniqueMessage+"keys"+Object.keys(this.props.staleObj));
            const master = this.props.masterObj;
   
           // console.log(uniqueMessage+'fake prop:'+JSON.stringify(this.props));
           //console.log(uniqueMessage+' masterObj:'+Object.keys(this.props.masterObj));

            if(this.props.masterObj.APIAddToCart){
               console.log("rp:cdm apiAddtoCart passed");
               console.log("rp:cdm tokenRequested"+this.props.masterObj.state.tokenRequested);
               console.log("rp:cdm product_id"+this.props.propObj.product_id);
           }else{
             console.log("rp: cdm apiAddToCart not added");
           }
        
            if(this.props.setGlobalState){
                 console.log("related: setGlobalState exists");
                               this.props.propObj.masterObj.APIGenericPostSave(this.props.propObj,":cdm:APIGPS");/*.then(res =>this.propObj.setGlobalState("stateObjNew","ranString"));*/
            }else{console.log("child: set global state doesnt exist");}
            console.log("related mounted");
            console.log("realted: globalState"+JSON.stringify(this.props.globalState));
            
             if(this.props.masterObj.APICategoryPostSaveGlobal){
                console.log("related APICategoryPostSaveGlobal exists");}else{
                console.log("related APICategoryPostSaveGlobal doesnt exists");
                }
            
            
               }        
             
      componentDidUpdate() {
           //console.log("component updated"+this.state.stateObj);
  }

      clickHandler = (e) => {
          console.log("related: clickHandler()");
       this.props.setGlobalState("product_id",this.props.state.product_id); 
     }   
     
     localState = (key) => {
          this.setState(prevState => ({
                    [key]: !prevState[key]
                    }
               ));
     }
     
//     basketHandler = (e) => {
//          console.log("related: clickHandler()");
//          //if conditional to decide wether apiToken runs
//            if(this.props.masterObj.state.tokenRequested===false){
//              this.props.masterObj.apiRequest2().then( promise =>
//            this.props.masterObj.APIAddToCart(promise));
//            console.log("tokenRequested condition ==="+this.props.masterObj.state.tokenRequested);
//            }else{
//              this.props.propObj.masterObj.APIAddToCart(this.props.propObj.masterObj.state.promise);
//              console.log("tokenRequested condition ==="+this.props.masterObj.state.tokenRequested);
//            }
//            //this.props.masterObj.apiRequest2();
//            //this.props.masterObj.APIAddToCart();
//     } 
  // previously used add to basketfnc this.props.masterObj.basketHandler(e,this.props.propObj.product_id,this.state.quantity)
  
        render() {
           
           const component = <Product />;
           const uniqueMessage = "RP:REN";
           let master = this.props.masterObj;
           const removeItem = this.props.masterObj.APICategoryPostSaveGlobal;
           ///////////
           const tinyProp = this.props.masterObj;
           const basketParameter = tinyProp.callState();
           const importedPromise = basketParameter.promise;
           const description = master.innerHtml(this.props.propObj.description);
          // let APIAddToCart = this.props.propObj.masterObj.APIAddToCart;
          // const info = this.setState((state)=> {return state.stateObj})
           //const category = this.state.stateObj;
           //<div onClick={()=>this.setState(this.props.state: "51")}>
           //onClick={()=>this.clickMe("product_id",56)}
           //this.props.masterObj.APICategoryPostSaveGlobal(importedPromise,"key",this.props.propObj.cart_id,this.props.staleObj.removeBasketItem," RP:REN:RMVBASKET")
           return(
           <div className="related"  xmlns="http://www.w3.org/1999/xhtml">
                <div className="related_image_container" onClick={()=>this.props.masterObj.productClickHandler(uniqueMessage,this.props.propObj.product_id)}><img src={this.props.propObj.thumb} ></img></div>
                <h1 className="related_title">{this.props.propObj.name}</h1>
                <div className="bottomShelf_relContent_rel_title" ><div dangerouslySetInnerHTML={description}></div></div>
                <div className="related_image_bottomShelf_wrapper">
                     <div className="related_image_bottomShelf">
                     <div className="related_price">{this.props.propObj.price}</div>
                     <div className="related_basket_price_container">{this.props.masterObj&&
                       <div>
                            <div>{this.state.basketClicked==false&& 
                                 <div  onClick={(e)=> master.delayBasket("featProd",this.props.propObj.product_id,master.basketHandler,master.fncAddToggle,this.localState,"basketClicked",this.state.quantity)}>
                                   <img className="related_basket" src="assets/basket.png"/>
                                   <img className="related_clicked_basket img_visible" src="assets/basket_black.png"/>
                                 </div> 
                            }</div>

                            <div>{this.state.basketClicked==true&& 
                                 <div  onClick={(e)=> master.delayBasket("featProd",this.props.propObj.product_id,master.removeItemWrapper,master.fncRemoveToggle,this.localState,"basketClicked",this.state.quantity)}>
                                   <img className="related_basket" src="assets/basket.png"/>
                                   <img className="related_clicked_basket img_invisible" src="assets/basket_black.png"/>
                                 </div> 
                            }</div>
                       </div>       

                    }
                          {master&& <input type="number" value={this.state.quantity} onChange={(e) => this.setState(master.handleChangeIntern(e))} className="related_quantity"  name="quantity" min="1" max="10"  />}
                     </div>
                           {/*  <div className="greyBorder">{this.props.propObj.category}</div>*/}
                     </div>
                </div>
                
           </div>)
       
          }                

    }  
    


