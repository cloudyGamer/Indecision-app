/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'; 

export default class FeaturedProduct extends React.Component {
     constructor(props) {
           super(props)

           this.callState = this.props.propObj.featuredProductObj.callState();
           this.master = this.props.propObj.featuredProductObj.masterObj;
           this.state1 = this.props.propObj.feature1;
           this.state2 = this.props.propObj.feature2;
     }
     
     state = {
       basketClicked: false,
       basketClicked2:false,
       cartId1 : undefined,
       cartId2 : undefined
       }
       
     componentDidMount() {
      let uniqueMessage = "FP:CDM:";
     const parentState = this.callState;

     //console.log(uniqueMessage+"parent state"+JSON.stringify(this.state.state));
     //console.log('FeaturedProduct component did mount');
     //console.log(uniqueMessage+"this.props"+Object.keys(this.state1));
          //console.log(uniqueMessage+"this.props2"+Object.keys(this.state2));

     }        
     
     localState = (key) => {
          console.log("local state executed");
          this.setState(prevState => ({
                    [key]: !prevState[key]
                    } 
               ));
             console.log("state change basketClicked=="+this.state[key])
     }
     
     render() {
        let uniqueMessage = "FP:REN";
        let e = undefined;
        const parentState = this.callState;
        let description = this.master.extractDescription(this.state1.description);
        let description2 = this.master.extractDescription(this.state2.description);
        const splitFigure  = 423;
        var firstLine = description.split('', splitFigure);
         firstLine = firstLine.join("");
          firstLine = this.master.innerHtml(firstLine);
         //firstLine = firstLine + "...";
         
        var firstLine2 = description2.split('', splitFigure);
        firstLine2 = firstLine2.join("");
        firstLine2 = this.master.innerHtml(firstLine2);
        //firstLine2 = firstLine2+"..."
        var productImage = "www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/image/"+this.state1.image;
        var productImage2 = "www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/image/"+this.state2.image;
        const productId1 = this.state1.product_id;
        const productId2 = this.state2.product_id;
        const trimmedPrice = Math.round(this.state1.price * 100) / 100;
        const trimmedPrice2 = Math.round(this.state2.price * 100) / 100;
     

          return(
          <div xmlns="http://www.w3.org/1999/xhtml"> 
               
               <div className={'featProd_top'}>
                    <div className={'featProd_sidea'} onClick={()=>this.master.productClickHandler(uniqueMessage,this.state1.product_id)}>
                         <img src={productImage}  alt="product_photo" className="featProd_Image_photo"/>
                    </div>
                    <div className={'featProd_sidea'} onClick={()=>this.master.productClickHandler(uniqueMessage,this.state2.product_id)}>
                         <img src={productImage2}   alt="product_photo" className="featProd_Image_photo"/>
                    </div>
               </div>
              
               <div className={'featProd_middle'}>
                     <div className={'featProd_titleHold flex_item'} onClick={()=>this.master.productClickHandler(uniqueMessage,this.state1.product_id)}>
                          <div className={'featProd_titleHold_title'}>{this.state1.name}</div>
                     </div>
                     
                     <div className={'featProd_titleHold flex_item'} onClick={()=>this.master.productClickHandler(uniqueMessage,this.state2.product_id)}>
                         <div className={'featProd_titleHold_title'}>{this.state2.name}</div>
                     </div>
                     
                     <div className={'featProd_bottom_item flex_item'}>
                         <div  onClick={()=>this.master.productClickHandler(uniqueMessage,this.state1.product_id)}>
                              <div className={'topShelf_titleHold_subtitle greyBorder'}>{"€ "+trimmedPrice}</div>
                              <div className={'featProd_titleHold_subtitle greyBorder'}><div className="continuation">...</div><div dangerouslySetInnerHTML={firstLine}></div></div>
                         </div>
                         {this.props.propObj&&<div className="featProd_basket_container">
                         {this.state.basketClicked==false&&
                           <div>
                              <div  onClick={(e)=> this.master.delayBasket("featProd",productId1,this.master.basketHandler,this.master.fncAddToggle,this.localState,"basketClicked","1")}>
                              <div className="featProd_white_basket_container">
                                   <img className="featured_basket" src="assets/basket_black.png"/>
                              </div>
                                   
                              <div className="featured_clicked_basket_background img_visible">
                                   <img className="featured_clicked_basket" src="assets/basket.png"/>
                              </div>
                              </div> 
                           </div>
                           }
                          
                         {this.state.basketClicked==true&&
                            <div  onClick={(e)=>  this.master.delayBasket("featProd",productId1,this.master.removeItemWrapper,this.master.fncRemoveToggle,this.localState,"basketClicked","1")}>
                              <div className="featProd_white_basket_container">
                                   <img className="featured_basket" src="assets/basket_black.png"/>
                              </div>

                              <div className="featured_clicked_basket_background img_invisible">
                                   <img className="featured_clicked_basket" src="assets/basket.png"/>
                                   
                              </div>
                            </div> 
                           }    
                          </div>}
                    </div>

                    <div className={'featProd_bottom_item flex_item'}>
                         <div onClick={()=>this.master.productClickHandler(uniqueMessage,this.state1.product_id)}>
                              <div className={'topShelf_titleHold_subtitle greyBorder'}>{"€ "+trimmedPrice2}</div>
                              <div className={'featProd_titleHold_subtitle greyBorder'}><div className="continuation">...</div><div dangerouslySetInnerHTML={firstLine2}></div></div>
                         </div>
                           
                           {this.props.propObj&&<div className="featProd_basket_container">
                         {this.state.basketClicked2==false&&
                           <div>
                              <div  onClick={(e)=> this.master.delayBasket("featProd",productId2,this.master.basketHandler,this.master.fncAddToggle,this.localState,"basketClicked2","1")}>
                              <div className="featProd_white_basket_container">
                                   <img className="featured_basket" src="assets/basket_black.png"/>
                              </div>
                                   
                              <div className="featured_clicked_basket_background img_visible">
                                   <img className="featured_clicked_basket" src="assets/basket.png"/>
                              </div>
                              </div> 
                           </div>
                           }
                          
                          
                         {this.state.basketClicked2==true&&
                            <div  onClick={(e)=>this.master.delayBasket("featProd",productId2,this.master.removeItemWrapper,this.master.fncRemoveToggle,this.localState,"basketClicked2","1")}>
                              <div className="featProd_white_basket_container">
                                   <img className="featured_basket" src="assets/basket_black.png"/>
                              </div>

                              <div className="featured_clicked_basket_background img_invisible">
                                   <img className="featured_clicked_basket" src="assets/basket.png"/>
                                   
                              </div>
                            </div> 
                           }    
                          </div>}
                    </div>
               </div>
             
          </div>)
     }  
    
}

