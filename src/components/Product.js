/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'; 
import BriefProductSmall from './BriefProductSmall';
import IndecisionApp from './IndecisionApp'; 
import Ingredients from './Ingredients';
import Related from './Related' ;
import ChildState from './ChildState';
import Categories from './Categories';
import IngHeading from './IngHeading';
import BigImage from './BigImage';

//import PHPFetch from './PHPFetch';
//import 'whatwg-fetch';
export default class Product extends React.Component {  

state = {
     currentComponent:"",
     currentObj:"goodbye",
     stateObj:"",
     relatedProdState: "",
     relatedProdObj:"",
     relatedProdComp: "",
     quantity: 1,
     test: "unchanged value",
     basketClicked: false,
     ingGraphic: true,
     ingredients: true,
     relatedArticle: true,
     naturalIng : [{name: "Ylang_Ylang", description:"Clearing for skin", displayName:"Ylang Ylang", src:"Ylang_Ylang.png"},
                   {name: "Citrus Aurantium Bergamia (Bergamot) Fruit Oil", description:"A Stimulating and Relaxing Fragrance", displayName: "Bergamot", src: "Bergamot.png"},
                   {name: "Theobroma Cacao (Cocoa) Seed Butter", description:"A Relaxing Moisturiser", displayName:"Cocoa Butter", src: "Cocoa_Seed.png" },
                   {name: "Patchouli", description:"Soothing Fragrance", displayName: "Patchouli", src:"Patchouli.png"},
                   {name: "Beeswax (Cera Alba)", description:"Heals and Softens", displayName:"Beeswax", src:"Beeswax.png"},
                   {name: "Acacia Senegal Gum", description:"Natural Thickener", displayName:"Acacia Senegal", src:"Acacia.png"},
                   {name: "Cocos Nucifera (Coconut) Oil", description:"Moisturiser", displayName:"Coconut Oil", src:"Coconut.png"},
                   {name: "Butyrospermum Parkii (Shea Butter)", description:"A Relaxing Moisturiser", displayName:"Shea Butter", src: "Shea_Butter.png" },
                   {name: "Aloe barbadensis leaf juice", description:"Antioxidant and Antibacterial", displayName:"Aloe", src: "aloe.png" },
                   {name: "Citrus limon peel oil", description:"Nourishing", displayName:"Limon Peel Oil", src: "limon_peel.png" }
                   
               ]
                           
     
     
}        
          
async componentDidMount  ()  {
        
 const uniqueMessage = "PROD:CDM: ";
 console.log(uniqueMessage+' did mount');
 let master = this.props.propObj.masterObj;
 let tinyProp = this.props.propObj.masterObj.callState();
 tinyProp = tinyProp.resources;
 //console.log(uniqueMessage+Object.keys(this.props.propObj.masterObj));
     console.log("Product: props"+JSON.stringify(this.props));
     console.log(uniqueMessage+" state: "+JSON.stringify(this.props.propObj.masterObj.state));
    if(this.props.propObj.masterObj.setGlobalState){
         console.log("Product:CDM:setGlobalState exists");
    }
    if(this.props.propObj){
         /*this.setState(master.fetchCategory(tinyProp.product_id,"PROD:CDM"),
         function () {
              console.log(uniqueMessage+"getCategory state:"+this.state.category);
         }); */ 
         const category = await master.fetchCategory(tinyProp.product_id,"PROD:CDM");
         this.setState({category : await master.fetchCategory(tinyProp.product_id,"PROD:CDM")});
         console.log(uniqueMessage+"returned object"+JSON.stringify(category));
         //this.setState(category,function () {console.log(uniqueMessage+this.state.category);});
        // console.log(uniqueMessage+"getCategory"+category);           
    }
   const getProduct = "product/product&product_id=53";

   const testStr = "testStr";
   let splitArray2 = 'value';
   if(this.props.propObj.masterObj.stateStorage){
         console.log("Product: setStorage exists");    
        }else{console.log("Product: set storage does not exist");}
//        
//  //////////////////////////
 /*if(this.props.propObj.masterObj.product_id){
         const category_id = "59";
         console.log("Product: CDM- product id exists");
         const getProduct = "product/product&product_id="+this.props.propObj.masterObj.product_id;
         this.props.propObj.masterObj.fetch(getProduct,"Product:CDM");
         //call for related product
//         master.APICategoryPost(master.state.promise,"path",category_id, this.props.propObj.categoryHandlerObj,uniqueMessage)
//           .then(promise => master.save(uniqueMessage,this.setState,this.state,promise,this.state.relatedProdState))
//           .then(promise => master.renderObj(uniqueMessage,this.props.propObj.categoryHandlerObj,this.state))
//           .then(promise => master.setComponentLocal(uniqueMessage,Categories,promise,this.state,this.setState));
          }else{console.log("Product: product_id not found");}*/
     }
////////////////////////////////////////     
/*extractDescription = (description) => {
     const ingredientArray0 = description.split("INGREDIENTS:");
     console.log("ingredientArray0"+JSON.stringify(ingredientArray0));
     const ingredientsArray = ingredientArray0[0];
      // const ingredientsArray = ingredientArray0[1].split("&");
      //const finalArray = toString(ingredientsArray);
      //console.log("fianlArray="+finalArray);
      const finalArray2 = ingredientsArray[2].split(",");
      //console.log("ingredients[1]=   "+finalArray2[0]);
      //const testArray = ["testString","testString2"];
      return ingredientsArray;

}*/
////////////////////////////////////////
innerHtml = (innerHtml) => {
     console.log("innerHtml executed");
     return {__html: innerHtml};
}
////////////////////////////////////////
extractIngredients = (description) => {
const uniqueMessage = "extractIngredients "
console.log(uniqueMessage+"executed description= "+JSON.stringify(description));
const ingredientArray0 = description.split("S:");
console.log(uniqueMessage+"ingredientArray0[1]"+JSON.stringify(ingredientArray0[1]));
const ingredientsArray = ingredientArray0[1].split("<");
 //const finalArray = toString(ingredientsArray);
 //console.log("fianlArray="+finalArray);
 const finalArray2 = ingredientsArray[0].split(",");
 //console.log("ingredients[1]=   "+finalArray2[0]);
 //const testArray = ["testString","testString2"];
 const finalList = this.naturalClassifier(finalArray2);
 console.log(uniqueMessage+"extractIngredients finalList"+JSON.stringify(finalList));
// const finalListMatch = finalList.map(function(naturalIng){
//      if(naturalIng==ingredientGraphic){
//           console.log(uniqueMessage+"match found");
//      }else{console.log(uniqueMessage+"no match found");}
// });
return finalList;   

}
////////////////////////////////////////
naturalClassifier = (sampleArray)=> {
     console.log("natural classifier ran");
//const sampleArray = ["st","st","st"];
//const sampleReturn = sampleArray.map(ingredient => {if(sampleArray.length < 2) return (<p>{ingredient+"newString"}</p>);});
    const naturalArray = [];
    sampleArray.map(ingredient => {
               let className = undefined; 
                         if(ingredient.indexOf("*") > 0) {
                               ingredient = ingredient.split("*");
                               ingredient = ingredient[1];
                         
                          naturalArray.push(ingredient);
                           
                 }});
                 console.log("naturalArray"+JSON.stringify(naturalArray));
                 return naturalArray;
//
}
////////////////////////////////////////
ingredientGraphics = (ingredients,ingredientGraphics) => {
    const uniqueMessage = "ingGraphValInit"
     console.log("ingredientGraphicValidatorInit executed");
     console.log(uniqueMessage+"ingredients"+JSON.stringify(ingredients));
     console.log(uniqueMessage+"ingredientGraphics"+JSON.stringify(ingredientGraphics));
     
    return ingredientGraphics.map(function (key){
       for(var i=0;i<ingredients.length;i++){
            //console.log(uniqueMessage+" comparing ing "+ingredients[i]+" with graph "+key.name);
            if(ingredients[i]==key.name){
                const src = "assets/Ingredients/"+key.src;
                const returnedDiv = <div className="bottomShelf_Ing_feat">
                          <div className="posAbs">
                                <img src={src}></img>
                                <div className="bottomShelf_Ing_feat_featImg centeredText">
                                 
                                <div className="bottomShelf_Ing_feat_featTitle">
                                {key.description}
                                </div>
                     
                                <div className="bottomShelf_Ing_feat_featSubTitle">
                                {key.displayName}
                                </div>
                                </div>
           
                          </div>
                          </div>;
                  
                  
               return  returnedDiv;
            }//else {console.log(uniqueMessage+"no match found");}
       }  
     });


     
}
////////////////////////////////////////
mapFnc = () => {
     console.log("mapFnc executed");
     const graphics = [{name: "Ylang_Ylang", description:"Clearing for skin"},
                   {name: "Bergamot", description:"A Stimulating and Relaxing Fragrance"},
                   {name: "Shea_Butter", description:"A Relaxing Moisturiser"}];
    
}
////////////////////////////////////////
ingredientGraphicValidator = (ingredients,ingredientGraphic) => {
     const uniqueMessage = "ingredientGraphicValidator";
     console.log(uniqueMessage+JSON.stringify(ingredients));
    /* const graphicArray = ingredients.map(function (key) {
          if(key.name==ingredientGraphic){
             return console.log("match found");
          }else{
               return console.log("no match found");
          }
          console.log ("ingredientGraphicValidator"+JSON.stringify(key.name)+"ingredientGraphic"+ingredientGraphic);
     });*/
}
////////////////////////////////////////
APICategoryPostSaveLocal = (promise,propertyKey,path, obj, uniqueMessage) => {
           console.log(uniqueMessage+"obj parameter"+JSON.stringify(obj));
           console.log(uniqueMessage + "APIcategory call ran");
           console.log(uniqueMessage+JSON.stringify(promise));
           ///////////
             obj.payLoad.package.searchQuery[propertyKey] = path;
///////////////
             let url = undefined;
             let testUrl = undefined;
            const method = "POST";
            if (promise ===undefined) {
                console.log("promise undefined");
                 url = obj.payLoad.package.address;
                console.log(uniqueMessage + "api token undefined. Url = " + url);
            } else {
                console.log("promise defined");
                 url = obj.payLoad.package.address + promise.api_token;
                console.log(uniqueMessage + "api token defined. Url= " + url);
            }  
//////////<editor-fold defaultstate="collapsed" desc="comment">
           obj.payLoad.package.url = url;
           //console.log(uniqueMessage+"test url"+testUrl);
           console.log(uniqueMessage+" object url "+JSON.stringify(obj.payLoad.package.url));
           const objStr = JSON.stringify(obj.payLoad.package);
           const body = new FormData();
//////     const testStr = "test string";
////////body.append("objStr",objStr);
           body.append("objStr", objStr);
//////////console.log("stringified body"+objStr);
////////
////////this.setState({stateObj : ''}, function () { console.log("APICategoryPostSaveGlobal - setState undefined:  " + this.state.stateObj); });
           return fetch(obj.payLoad.fetchUrl, {method: "POST", body})
             .then(res => res.json())
             .then(res => JSON.parse(res))
             .then((data) => {
//
                  this.setState(
                    {stateObj: data
                    }, function () {
                       console.log(uniqueMessage + "APICategoryPostSaveGlobal - setState defined: ")
                  })
             })
             .then((data) => {
                  let renderObj = {
                       stateObj: this.state.stateObj,
                       staleObj: obj
                  };
//  //console.log(uniqueMessage+"masterObj"+JSON.stringify(obj.masterOb));
                  this.setState(
                    {
                         currentComponent: obj.components,
                         currentObj: renderObj
                    }, function () {
                       console.log(uniqueMessage + "obj.renderObj")
                  })
             });
// set states
           //);  
//.then(data => console.log(JSON.stringify(obj), null, "\t"))
      }
////////////////////////////////////////
componentDidUpdate(prevProps, prevState){
         let master = this.props.propObj.masterObj;
         let uniqueMessage = "PROD:CDU";
         ///for relatedProduct
           if (prevState.stateObj !== this.state.stateObj) {
                //console.log("Indec: CDU: stateObj" + JSON.stringify(this.state.stateObj));

                this.displayComp = master.renderedComp("cdu: currentComponent",this.state.currentObj, this.state.currentComponent);
                console.log("Prod:CDU: stateobj state change detected");
           } else {
                console.log("Prod:CDU: stateObj: no change detected");}
      ///////////     
               if (prevState.test !== this.state.test) {
                //console.log("Indec: CDU: stateObj" + JSON.stringify(this.state.stateObj));

                console.log("Prod:CDU test state change detected"+this.state.test);
           } else {
                console.log("Prod:CDU test: no change detected");
           }
           
           if(prevProps.propObj.masterObj.state.resources !== this.props.propObj.masterObj.state.resources){
                console.log(uniqueMessage+"resources change detected"+JSON.stringify(this.props.propObj.masterObj.state.resources));
           }else{
                console.log(uniqueMessage+"no resources change detected");
           }
//         if(prevProps.propObj.masterObj.product_id!==this.props.propObj.masterObj.product_id){
//         const getNewProduct = "product/product&product_id="+this.props.propObj.masterObj.product_id;
//         //this.props.propObj.masterObj.fetch(getNewProduct,"Product:CDU"); 
//         this.props.propObj.masterObj.testFnc(getNewProduct,"Product:CDU:testFNC","Darling");
//               console.log("Product: CDU: change in props");
//         }else{console.log("Product: CDU: no change detected");}
    }
////////////////////////////////////////
componentWillUnmount(){
         console.log("PROD:CWU Unmounted");
    };
//////////////////////////////////////// pass setState as a parameter
setStateParameter = (keyName,value) => {
     console.log("setStateParameter ran"+this.state.currentObj);
     return {[keyName]: value}             
}
////////////////////////////////////////
addToBasket = () =>{
    const cartUpdate = "common/cart/info"; 
    const basketAdd = "checkout/cart/add";
    {this.props.propObj.masterObj.route(cartUpdate)}
    {this.props.propObj.masterObj.route(basketAdd)}   
}
//////////////////////////////
splitGeneric = (splitSource,splitKeyword) => {
//splitSource = splitSource.join();
const splitArray = splitSource.split(splitKeyword);
return "split generic returned"+splitArray[1];
//return splitSource
}
////////////////////////////////////////
localState = (key,uni) => {
     
          console.log("local state executed");
          this.setState(prevState => ({
                    [key]: !prevState[key]
                    }
               ));
              console.log(uni+"product state"+JSON.stringify(this.state));
             //console.log("state change"+uni+"=="+this.state[key])
     }
////////////////////////////////////////

   render() {
        //const option = this.state.resources[name];
        const pElement = "<p>I am an example</p>";
        const uniqueMessage = "PROD:REN";
        console.log(uniqueMessage+"rerendered");
        //const name = JSON.stringify(this.props.state.resources.name);
        //const ingPackage = this.props.state.resources.description;
        let name; 
        let description;
        let image;
        let product_id;
        let price;
        let productImage;
        let ingPackage;
        let displayComp;
        let tinyProp = this.props.propObj.masterObj.callState();
        tinyProp = tinyProp.resources;
        let master = this.props.propObj.masterObj;
        let ingredients;
        let ingredientList;
        let ingredientDesc;
        let relatedArrow;
        let bottomShelf_rel_bigImage;
        if(this.state.relatedArticle==true){
             bottomShelf_rel_bigImage = "collapsedRel";
             relatedArrow = "titleHolder_arrow unrotated";
        }else{
             bottomShelf_rel_bigImage = "uncollapsedRel";
             relatedArrow = "titleHolder_arrow rotated";
        }
        console.log(uniqueMessage+" name= "+tinyProp.name);
        //12/9/19
        if(tinyProp!=='value') {
        console.log("product:resources.name"+JSON.stringify(this.props.propObj.masterObj.stateStorage));     
        console.log("product: resources.name found");
        productImage = "https://testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/image/"+tinyProp.image;
        name = tinyProp.name;
        ingredients = tinyProp.description;
        description = tinyProp.description;
        ingredientDesc = tinyProp.description;
        description = master.extractDescription(description);
        description = this.innerHtml(description);
        //price = Math.round(tinyProp.price * 100) / 100; 
        let roundedPrice = Math.round(tinyProp.price * 100) / 100;
        price = "€ "+ roundedPrice;
        ingPackage = tinyProp.description;
        product_id = tinyProp.product_id;
        displayComp = master.renderedComp("render: currentComp",this.state.currentObj, this.state.currentComponent);
        ingredientList = this.extractIngredients(ingredients);
        console.log(uniqueMessage+"ingredientList"+JSON.stringify(ingredientList));
        
        }else{console.log("Product: resources.name doesnt exist yet")}
        
        console.log(uniqueMessage+'image'+JSON.stringify(productImage));  
        /*const description = this.state.resources.description     ;
        console.log("print res2 hello:"+description); 
        //const descriptionTxt = JSON.parse(description);
        const quantity = this.state.resources.quantity;
        const image = this.state.resources.image;
        const price = this.state.resources.price;
        const imageAd = "http://localhost:8888/3.0.2.0-OpenCart/upload/image/" + image;*/
       // const description = JSON.stringify(this.props.resources.description);
        return(     
       <div xmlns="http://www.w3.org/1999/xhtml">
     
            <div className="topShelf">
                <div className="topShelf_sidea">
                      <div className="topShelf_titleHold">
                      
                       <div className="topShelf_titleHold_title" onClick={()=>this.setState(master.localStateChange())}>
                       {name}
                       </div>
                 
                        <div className="topShelf_titleHold_subtitle greyBorder">
                        {this.state.category}
                        </div>
                 
                     </div>
                     <div className="topShelf_starRating">
                     </div>
                </div>
      
              <div className="topShelf_sideb">

                                 <img src={productImage}  alt="product_photo" className="topShelf_Image_photo"/>
              </div>
            </div>
                        
            <div className="midShelf">
            <div className="midShelf_pricebarcontainer">
                     <div className="midShelf_priceBar">
                     {price}
                     </div>
                   
                     
 <form >
     <input type="number" value={this.state.quantity} onChange={(e) => this.setState(master.handleChangeIntern(e))} className="midShelf_quantity"  name="quantity" min="1" max="10"  />
 </form>
                    
            </div>
            
            {tinyProp!=="value"&&<div className="midShelf_wishListandBasketcontainer">
                     {this.state.basketClicked==false&&
                     <div className="midShelf_Basketcontainer" onClick={(e)=> master.delayBasket(e,tinyProp.product_id,master.basketHandler,master.fncAddToggle,this.localState,"basketClicked",this.state.quantity)}>
                     
                         <div className="midShelf_Basketicon">
                            <img  src="assets/basket.png"></img>
                         </div>
                           
                         <div  id="basketUnclicked" className="midshelf_addToCart basketUnclicked">  
                         <div className="addUnclicked">Add</div>
                         <div id="ed" className="edUnclicked">ed</div>
                         <div className="toCartUnclicked">To Cart</div>
                         </div>
                     
                     </div>}
                     
                      {this.state.basketClicked==true&&
                     <div className="midShelf_Basketcontainer" onClick={(e)=>  master.delayBasketRemove(e,tinyProp.product_id,master.removeItemWrapper,master.fncRemoveToggle,this.localState,"basketClicked",this.state.quantity)}>
                     
                         <div className="midShelf_Basketicon">
                            <img  src="assets/basket.png"></img>
                         </div>

                         <div   id="basketClicked" className="midshelf_addToCart basketClicked">  
                          Added To Cart
                         </div>
                     
                     </div>}
            </div>}
            </div>
                        
           
                     
        <div className="bottomShelf_greyWrapper">
                     <div className="bottomShelf_socMedButton">
                          <div className="bottomShelf_socMedButton_but1">
                          <img src="assets/fb_icon_3.png" className="bottomShelf_socMedButton_but1"></img>
                          </div>
                     
                          <div className="bottomShelf_socMedButton_but1">
                          <img src="assets/insta_icon_4.png"></img>
                          </div>
                     
                          <div className="bottomShelf_socMedButton_but1">
            
                          <img src="assets/twitter_icon_3.png"></img>
                          </div>
                     </div>
                     
                     
                     
                     <div className="bottomShelf_review">
                     <div className="bottomShelf_review_heading">
                     
                          <strong className="bottomShelf_review_link">
                           Description
                          </strong>
                     </div>
                          <div  dangerouslySetInnerHTML={description} className="bottomShelf_review_text">
                          
                                    
                          </div>
                     </div>   
         </div>
        {this.state.ingGraphic==false&&
          <div>
              <div id="graphSection" className="sectionHeading " onClick={(e)=>master.delaySection("graphSection",this.localState,"ingGraphic","ing_wrapper","ing_wrapper uncollapsed closeAnimationGraph","titleHolder_arrow rotated Animationunrotated")}>
                   <div className="titleHolder_sec shelf_title">
                              <div className="titleHolder_title">
                              Featured Ingredients
                              </div>
                   </div>
                   <img  src="assets/arrow-down-48.png" className="titleHolder_arrow rotated">
                   </img>
              </div>
              
              <div id="ing_wrapper" className="ing_wrapper uncollapsed" >
                             
                   <div className="bottomShelf_ing">
                         <div className="bottomShelf_Ing_holder">
                             <div className="bottomShelf_Ing_left">
                             {tinyProp!=='value'&& this.ingredientGraphics(ingredientList,this.state.naturalIng)}
                             </div>
                         </div>
                   </div>
             </div>
          </div>
               }
           
           {this.state.ingGraphic==true&&
          <div>
              <div  id="graphSection" className="sectionHeading" onClick={(e)=>master.delaySection("graphSection",this.localState,"ingGraphic","ing_wrapper","ing_wrapper collapsed openAnimationGraph","titleHolder_arrow unrotated Animationrotated")}>
                   <div className="titleHolder_sec shelf_title">
                              <div className="titleHolder_title">
                              Featured Ingredients
                              </div>
                   </div>
                   <img src="assets/arrow-down-48.png" className="titleHolder_arrow unrotated">
                   </img>
              </div>
          
              <div id="ing_wrapper" className="ing_wrapper collapsed " >
                   <div className='whiteBackground'>         
                   <div className="bottomShelf_ing">
                             <div className="bottomShelf_Ing_holder">
                             <div className="bottomShelf_Ing_left">
                             {tinyProp!=='value'&& this.ingredientGraphics(ingredientList,this.state.naturalIng)}
                             </div>
                         </div>
                   </div>
                   </div>
          </div>
          </div>
              }
              
                <div className="bottomShelf">            
                    
                    {this.state.ingredients==true&&
                    <div> 
                         <div  id="ingSection" className="sectionHeading_Ing" onClick={(e)=>master.delaySection("ingSection",this.localState,"ingredients","bottomShelf_listIng","bottomShelf_listIng collapsedIng openAnimationListIng","titleHolder_arrow unrotated Animationrotated")}>
                            <div className="titleHolder_sec shelf_title">
                               <div className="titleHolder_title">
                               Ingredients
                               </div>
                            </div>
                              <img src="assets/arrow-down-48.png" className="titleHolder_arrow unrotated">
                              </img>
                         </div>

                         <div id="bottomShelf_listIng" className="bottomShelf_listIng collapsedIng">

                             <div className="bottomShelf_listIng_list ">
                                 <ul  className="bottomShelf_listIng_noBullets">
                                    {ingredientDesc&&
                                      <Ingredients 
                                       description = {ingredientDesc} 
                                        />}
                                 </ul>
                             </div>

                             <div className="bottomShelf_listIng_legend_wrapper">  
                                  <div className="bottomShelf_listIng_legend_circle_wrapper"><div className="bottomShelf_listIng_legend_circle naturalIng"></div><div className="bottomShelf_listIng_legend_text">Natural</div></div>
                                  <div className="bottomShelf_listIng_legend_circle_wrapper"><div className="bottomShelf_listIng_legend_circle synthetic"></div><div className="bottomShelf_listIng_legend_text">Synthetic</div></div>
                             </div> 

                         </div>
                    </div>}
                    
                    {this.state.ingredients==false&&
                      <div>
                     <div id="ingSection" className="sectionHeading_Ing" onClick={(e)=>master.delaySection("ingSection",this.localState,"ingredients","bottomShelf_listIng","bottomShelf_listIng uncollapsedIng closeAnimationListIng","titleHolder_arrow unrotated Animationunrotated")}>
                       <div className="titleHolder_sec shelf_title">
                          <div className="titleHolder_title">
                          Ingredients
                          </div>
                       </div>
                         <img src="assets/arrow-down-48.png" className="titleHolder_arrow rotated">
                         </img>
                    </div>
                    
                    <div id="bottomShelf_listIng" className="bottomShelf_listIng uncollapsedIng">

                        <div className="bottomShelf_listIng_list ">
                            <ul  className="bottomShelf_listIng_noBullets">
                               {ingredientDesc&&
                                 <Ingredients 
                                  description = {ingredientDesc} 
                                   />}
                            </ul>
                        </div>

                        <div className="bottomShelf_listIng_legend_wrapper">  
                             <div className="bottomShelf_listIng_legend_circle_wrapper"><div className="bottomShelf_listIng_legend_circle naturalIng"></div><div className="bottomShelf_listIng_legend_text">Natural</div></div>
                             <div className="bottomShelf_listIng_legend_circle_wrapper"><div className="bottomShelf_listIng_legend_circle synthetic"></div><div className="bottomShelf_listIng_legend_text">Synthetic</div></div>
                        </div> 

                    </div>
                    
                    </div>}
                  </div>
                  <div className="rel_wrapper">
                      {this.state.relatedArticle==true&&<div className="bottomShelf_rel">
                         <div id="relSection" className="sectionHeading_rel" onClick={(e)=>master.delaySection("relSection",this.localState,"relatedArticle","collapsedRel","collapsedRel openAnimationRel","titleHolder_arrow unrotated Animationrotated")}>
                            <div className="titleHolder_sec shelf_title">
                               <div className="titleHolder_title">
                               Related Article
                               </div>
                            </div>
                              <img src="assets/arrow-down-48.png" className="titleHolder_arrow unrotated">
                              </img>
                         </div>

                          <div id="collapsedRel" className="collapsedRel">
                              <BigImage 
                              pageOpen = {master.pageOpen}
                              class = {"rel_bigImage aromatherapy"}
                              title = {"Learn about the benefits of Aromatherapy"}
                              span = {"span_aromatherapy"}
                              titleClass = {"rel_bigImage_title title_aromatherapy"}
                              buttonClass = {"rel_bigImage_button button_aromatherapy border"}
                              articleLink = {"https://boomboomnaturals.com/blogs/news/10-healing-benefits-of-aromatherapy/"}
                              />
                           </div>

                    </div>}
                      {this.state.relatedArticle==false&&<div className="bottomShelf_rel">
                         <div id="relSection" className="sectionHeading_rel" onClick={(e)=>master.delaySection("relSection",this.localState,"relatedArticle","collapsedRel","collapsedRel closeAnimationRel","titleHolder_arrow unrotated Animationunrotated")}>
                            <div className="titleHolder_sec shelf_title">
                               <div className="titleHolder_title">
                               Related Article
                               </div>
                            </div>
                              <img src="assets/arrow-down-48.png" className="titleHolder_arrow rotated">
                              </img>
                         </div>
                         <div id="collapsedRel" className="uncollapsedRel">
                              <BigImage 
                              pageOpen = {master.pageOpen}
                              class = {"rel_bigImage aromatherapy"}
                              title = {"Learn about the benefits of Aromatherapy"}
                              span = {"span_aromatherapy"}
                              titleClass = {"rel_bigImage_title title_aromatherapy"}
                              buttonClass = {"rel_bigImage_button button_aromatherapy border"}
                              articleLink = {"https://boomboomnaturals.com/blogs/news/10-healing-benefits-of-aromatherapy/"}
                              />
                         </div>
                    </div>}
                  </div>
    </div>
); 
               
               }


}

