 import React from 'react';
//import from './'
// <editor-fold defaultstate="collapsed" desc=" Imported comps ">
   import Header from './Header';
   import Options from './Options';
   import AddOption from './AddOption';
   import Action from './Action';
   import OptionModal from './OptionModal';
   import PHPFetch from './PHPFetch';
   import Banner from './Banner'
   import Toolbar from './Toolbar'
   import BigImage from './BigImage'
   import BriefProduct from './BriefProduct'
   import BriefProductSmall from './BriefProductSmall'
   import BriefReview from './BriefReview'
   import BlogFeature from './BlogFeature'
   import BlogFeatureLeft from './BlogFeatureLeft'
   import {blogImageAddresses} from './Props'
   import ProductPage from './ProductPage'
   import Product from './Product'
   import Basket from  './Basket'
   import PaymentProcess from './PaymentProcess'
   import Ingredients from './Ingredients'
   import Payment from './Payment'
   import Related from './Related'
   import RelatedProduct from './RelatedProduct'
   import ChildState from './ChildState'
   import HomePage from './HomePage'
   import SelectedProduct from './SelectedProduct'
   import ShopifyManagement from './ShopifyManagement'
   import ShippingAddress from './ShippingAddress'
   import ShippingMethod from './ShippingMethod'
   import SlideMenu from './SlideMenu'
   import HamburgerMenu from './HamburgerMenu';
   import Categories from './Categories';
   import BasketProduct from  './BasketProduct';
   import FeaturedProduct from './FeaturedProduct';
   import ScrollEvent from 'react-onscroll';
// </editor-fold>
//import cartInfoQueue from './cartInfoQueue'
   import ReactDOM from 'react-dom';
   export default class IndecisionApp extends React.Component {
/////////////////////////////////////////////////////////// main component
   constructor(props) {
   super(props)
   this.objData = {property1: " sanity test passed"};
     
   this.masterObj = {
     testVal: "testVal",
       mood: "StuCooking.jpg",
       fetch: this.fetch,
       route: this.route,
       test: this.test,
       testState: this.state.test,
       pageOpen: this.pageOpen,
       APIGenericPostSave: this.APIGenericPostSave,
       state: this.state,
       stateStorage: this.stateStorage,
       setComponent: this.setComponent,
       product_id: this.state.product_id,
       setGlobalState: this.setGlobalState,
       testFnc: this.testFnc,
       renderedComp: this.renderedComp,
       APIAddToCart: this.APIAddToCart,
       apiRequest2: this.apiRequest2,
       basketHandler: this.basketHandler,
       basketInitialiser: this.basketInitialiser,
       callState : this.callState,
       APIGenericNoBody : this.APIGenericNoBody,
       APICategoryPostSaveGlobal : this.APICategoryPostSaveGlobal,
       APIBasketRemove : this.APIBasketRemove,
       productClickHandler : this.productClickHandler,
       APICategoryPost : this.APICategoryPost,
       save : this.save,
       renderObj : this.renderObj,
       setComponentLocal: this.setComponentLocal,
       setStateLocal : this.setStateLocal,
       handleChangeIntern : this.handleChangeIntern,
       localStateChange : this.localStateChange,
       testFnc : this.testFnc



     }

   this.categoryObj = {
   testVal: "testVal",
     category: "Bath Bombs",
     api_token: undefined,
     fetchUrl: "www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/getCatagory.php",
     package: {address: "www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/index.php?route=product/category/apiCategory",
       searchQuery: {}},
     childStateComponent: {component: "RelatedProduct"}
   }

   this.categoryHandlerObj = {
   masterObj: this.masterObj,
     payLoad: this.categoryObj,
     components: Categories,
     APIGenericPostCat: this.APIGenericPostCat,
     randomVal: "randomVal"
   }
   /*this.categoryObj = {
    category: "Bath Bombs",
    api_token : undefined,
    fetchUrl: "www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/getCatagory.php",
    package: {address: "www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/index.php?route=product/category/apiCategory",
    searchQuery : {path: "59"}},
    childStateComponent : {component: RelatedProduct} 
    } */

   this.basketObj = {
   testVal: "basketObj: testValueBilly",
     category: "Bath Bombs",
     fetchUrl: "www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/APINoBody.php",
     address: "www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/index.php?route=api/cart/products&api_token=",
     childStateComponent: {component: "BasketProduct"},
     paymentProcess : this.paymentProcess
   }

   this.removeBasketItem = {
   testVal: "testVal",
     category: "Remove Basket",
     api_token: undefined,
     masterObj: this.masterObj,
     payLoad: {
     fetchUrl: "www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/getCatagory.php",
       package: {address: "www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/index.php?route=api/cart/remove&api_token=",
         searchQuery: {}}},
     childStateComponent: {component: this.RelatedProduct}
   }

   this.ToolbarObj = {
   menuHandleClick: this.menuHandleClick,
     state: this.state,
     masterObj: this.masterObj,
     payLoad: this.basketObj,
     removeBasketItem: this.removeBasketItem
   }

   this.productObj = {
   masterObj: this.masterObj,
     components: Product,
     categoryHandlerObj: this.categoryHandlerObj

   }

   this.homePageObj = {
   masterObj: this.masterObj,
     test: "testValue"
   }

   this.paymentProcess = {
   promise: this.state.promise,
     testValue : "paymentProcess test Value"
   }

   this.featuredProductObj = {
   masterObj : this.masterObj
   }
   
   this.handleScroll = this.handleScroll.bind(this);
   
   this.scrollRef = React.createRef();

   }
   state = {
     resources: 'value',
     selectionOption: undefined,
     options: [],
     test: undefined,
     currentProduct: undefined,
     promise: undefined,
     currentComponent: "",
     currentObj: "",
     product_id: 50,
     open: false,
     loaded: true,
     testCurrentObj: "",
     testCurrentComp: "",
     stateObj: "",
     staleObj: "",
     tokenRequested: false,
     Toolbar: Toolbar,
     basketState: 'value',
     scrollTop: 0,
     ToolbarClass: false
   }
////////////////////////////////////////
//<editor-fold defaultstate="collapsed" desc="fnc and cdm">
   //////////////////////////////////////// testFnc
   testFnc = () => {
   console.log("testFnc ran");
     }
   ////////////////////////////////////////
   callState = () => {
   //console.log("call state called");
     return this.state
     }
////////////////////////////////////////
   componentDidMount() {
   //console.log("CDM Prop Const Obj= " + JSON.stringify(this.objData));

     this.setState({currentObj: this.homePageObj,
       currentComponent: HomePage
     });
     if (this.setGlobalState) {
   //console.log("Indec:CDM: setGlobalStateExists");
   }
//////////////////////////////////////
   }
//////////////////////////////////////// handleChangeMaster
   handleChangeIntern = (event) => {
   console.log("handle change intern fired");
     const target = event.target;
     const value = target.type === 'checkbox' ? target.checked : target.value;
     const name = target.name;
     return {[name]: value}
   }
////////////////////////////////////////local state change
   localStateChange = () => {
   console.log("localStateChange fired");
     return {test:"testValue"}
   }
//////////////////////////////////////// basketHandler
   basketHandler = (e = undefined, product_id = undefined, quantity = undefined) => {
   let uniqueMessage = "BH";
     console.log(uniqueMessage + "fired");
     console.log(uniqueMessage + "parameters recieved: product_id=  " + product_id + "  quantity=  " + quantity);
     //if conditional to decide wether apiToken runs
     if (this.state.tokenRequested === false) {
   this.apiRequest2().then(promise =>
     this.APIAddToCart(promise, product_id, quantity));
     console.log("tokenRequested condition ===" + this.state.tokenRequested);
   } else {
   this.APIAddToCart(this.state.promise.api_token, product_id, quantity);
     console.log("tokenRequested condition ===" + this.state.tokenRequested);
   }
   //this.props.masterObj.apiRequest2();
   //this.props.masterObj.APIAddToCart();
   }
////////////////////////////////////////setGlobalState
   basketInitialiser = (uniqueMessage, APIGenericNoBody) => {
   console.log(uniqueMessage + " basketInitialiser Ran");
     console.log(uniqueMessage + "basketObj" + JSON.stringify(this.basketObj));
     let basketButton;
     if (this.state.promise === 'value'){
   basketButton = console.log("No API_Token available");
     return  basketButton;
   } else{
   basketButton = console.log("API_Token available");
     this.APIGenericNoBody(/*this.basketObj,"tb:cdm:BsktInit:APIGNNBDY","basketState"*/);
   }

   }
////////////////////////////////////////
   setGlobalState = (newStateKey, newState) => {
   console.log("setGlobalState ran with parameters {" + newStateKey + ":" + newState + "}");
     this.setState({[newStateKey]: [newState]});
     this.setState((state) => {
     console.log("Ind:SGS:Product_id" + state.product_id);
     })
   }
   //////////////////////////////////////// relatedHandler
   relatedHandler = () => {
   }
////////////////////////////////////////setComponent
   setComponent = (uniqueMessage = undefined, component = undefined, obj = undefined) => {
   console.log("setComponent ran ");
     console.log(uniqueMessage + "set component obj+ " + JSON.stringify(obj));
     this.setState(
     {
     currentComponent: component,
       currentObj: obj
     }, function () {
     console.log(uniqueMessage + "state.currentObj" + this.state.currentObj)
     });
   }
//////////////////////////////////////// localState
   setStateLocal = (uniqueMessage) => {
   console.log(uniqueMessage + "setStateLocal ran");
     this.setState(
     {localState:"localState set" }, function () {
     console.log(uniqueMessage + "localState: " + this.state.localState)
     });
   }
////////////////////////////////////////setComponentLocal
   setComponentLocal = (uniqueMessage = undefined, component = undefined, obj = undefined, state, setState) => {
   console.log("setComponent ran ");
     console.log(uniqueMessage + "set component obj+ " + JSON.stringify(obj));
     setState(
     {

     currentComponent: component,
       currentObj: obj
     }, function () {
     console.log(uniqueMessage + "state.currentObj" + this.state.currentObj)
     });
   }
//////////////////////////////////////// exampleText
   exampleText = (obj) => {
   console.log("example text ran upon mounting" + obj);
   }
//////////////////////////////////////// APIAddToCart
   APIAddToCart = (api_token, product_id, quantity) => {
   console.log("APIAddToCart ran");
     console.log("APIAddToCart api_token" + JSON.stringify(api_token));
     let uniqueMessage = "APIAddToCart";
     console.log(uniqueMessage + "product_id" + product_id);
     this.setState(
     {tokenRequested: true
     }, function () {
     console.log(uniqueMessage + "token set to true  " + JSON.stringify(this.state.tokenRequested))
     });
//     console.log("APIaddtocart - token equals___" + api_token);
     const url = "www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/index.php?route=api/cart/add&api_token=" + api_token;
     const method = "POST";
////console.log("parameter passed____"+api_token);  
     const body = new FormData();
     body.append("url", url);
     body.append("quantity", quantity);
     body.append("product_id", product_id);
//// console.log("body sent to php____"+body.api_token);
//// Display the key/value pairs
//     /*for (var pair of body.entries()) {
//      console.log(pair[0]+ ', ' + pair[1]); 
//      }*/
//
     return fetch("www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/addToCart.php", {method, body})
     .then(res => res.json())
     .then(data => alert(JSON.stringify(data, null, "\t")));
   }
////////////////////////////////////////
   apiLogIn = (api_token) => {
   console.log(" apiLogIn fired");
     const url = "www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/index.php?route=api/shipping/address&api_token=" + api_token;
     const method = "POST";
     const body = new FormData();
     body.append("url", url);
     fetch("www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/logInAPI.php", {method, body})
     .then(res => res.json())
     .then(response => JSON.parse(response))
     .then(promise =>
//console.log("anymessage"+this.state.promise
       console.log("API Login final promise" + promise, null, "\t"
         ));
//{"success":"Success: API session successfully started!","api_token":"34"}
   }
////////////////////////////////////////
   briefProductInit = (promise) => {
   return console.log("briefProductinitran");
     /*return (
      
      <BriefProduct
      name = {promise.state.stateObj[promise.i]['name']}
      product_id =  {promise.state.stateObj[promise.i]['product_id']}
      image =  {promise.state.stateObj[promise.i]['thumb']}
      ></BriefProduct>
      
      )*/



   }
//////////////////////////////////////// iterateState
   iterateState = () => {
   console.log("iterateStateRan");
     return (this.setState((state) => {
     for (let i = 0; i < state.stateObj.length; i++) {
     console.log(state.stateObj[i]);
       const promise = {
       "i": i,
         "state": state
       };
       /*return (this.setState((state) => {
        for(let i =0;i<state.stateObj.length;i++){ 
        console.log(state.stateObj[i]); 
        const promise = {
        "i" : i,
        "state" : state
        }; */
       return promise
//this.briefProductInit(state,i);
       /*  return(<div>
        <BriefProduct
        name = {state.stateObj[i]['name']}
        product_id =  {state.stateObj[i]['product_id']}
        image =  {state.stateObj[i]['image']}
        
        />
        </div>);*/
       /*  this.setState((state) =>{
        for(var key in state.stateObj[i]) {
        console.log(state.stateObj[i][key]);
        
        }
        });*/
     }
     }
     ));
//this.setState((state)=>{          
     /*for(let i=0;i < state.stateObj.length; i++){    
      for (var key in state.stateObj[i]) {
      return (console.log("state key "+JSON.stringify(state.stateObj[i])))
      //console.log("Key: " + key);
      //console.log("Value: " + obj[key]);
      } 
      }*/
//});
     /**/

   }
//</editor-fold>
//////////////////////////////////////// productClickHandler
   productClickHandler = (uniqueMessage = undefined, product_id) => {
   const getProduct = "product/product&product_id=" + product_id;
     console.log(uniqueMessage + "product click handler ran");
     this.fetch(getProduct, uniqueMessage).then(promise => this.setComponent(uniqueMessage, Product, this.productObj));
     //related product call
     //this.APICategoryPostSaveGlobal(promise,"path","59", categoryObj, "Indec:MenU:APIGNPSTSV","stateObj");
     //this.setGlobalState("product_id",product_id); 
   }
//////////////////////////////////////// category handler
   categoryHandler = (categoryObj) => {
   this.APIGenericPostSave(categoryObj, "INDE: ");
     console.log("1. categoryHandler(categoryObj)= " + JSON.stringify(categoryObj));
     /*this.setState({testCurrentObj:categoryObj,
      testCurrentComponent: Categories
      });*/
     /*this.categoryObj.package.searchQuery.path = path;*/
     /*setGlobalState("currentComponent","ChildState");*/
//return childstate

   }
   //////////////////////////////////////// original
   //<editor-fold defaultstate="collapsed" desc="apipostsaveoriginal">
   APIGenericPostSaveOriginal = (obj, uniqueMessage) => {
   console.log(uniqueMessage + "apigenericpostsave call ran");
     // console.log(uniqueMessage+"categoryObj= "+JSON.stringify(obj));
     console.log(uniqueMessage + "step2: obj" + Object.keys(obj));
     console.log(uniqueMessage + "step 3: obj.payLoad" + Object.keys(obj.payLoad));
     console.log(uniqueMessage + "step 3: obj.payLoad" + obj.payLoad.package.searchQuery.path);
/////////////
     let url = undefined;
//////console.log("APIGenericPost url=  "+url);    
     const method = "POST";
//////const body = new FormData();
///////////////  if else that checks for token
     if (typeof obj.masterObj.api_token == !undefined) {
//////// the variable is defined
   const url = obj.payLoad.package.address;
     console.log(uniqueMessage + "api token undefined. Url = " + url);
   } else {
   const url = obj.payLoad.package.address + obj.payLoad.api_token;
     console.log(uniqueMessage + "api token defined. Url= " + url);
   }
//////console.log("const address=  " + obj.masterObj.api_token);
///////////////
////////<editor-fold defaultstate="collapsed" desc="comment">
   obj.url = url;
     const objStr = JSON.stringify(obj.payLoad.package);
     const body = new FormData();
////     const testStr = "test string";
//////body.append("objStr",objStr);
     body.append("objStr", objStr);
////////console.log("stringified body"+objStr);
//////
//////this.setState({stateObj : ''}, function () { console.log("APIGenericPostSave - setState undefined:  " + this.state.stateObj); });
     return fetch(obj.payLoad.fetchUrl, {method: "POST", body})
     .then(res => res.json())
     .then(res => JSON.parse(res))
     .then((data) => {
//
     this.setState(
     {stateObj: data
     }, function () {
     console.log(uniqueMessage + "APIGenericPostSave - setState defined: ")
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
//</editor-fold> 
////////////////////////////////////////
   APIGenericNoBody = (obj, uniqueMessage = undefined, stateObj = undefined, api_token = undefined) => {
   console.log(uniqueMessage + " APIGenericNoBody call ran");
     //console.log(uniqueMessage+" api_token: "+JSON.stringify(obj.testVal));
     if (obj !== undefined){
   console.log(uniqueMessage + " stateObj: " + JSON.stringify(stateObj));
     console.log(uniqueMessage + " api_token: " + JSON.stringify(api_token));
/////////////
     const method = "POST";
     const body = new FormData();
     const url = obj.address + api_token;
     console.log(uniqueMessage + "api token defined. Url= " + url);
//////////<editor-fold defaultstate="collapsed" desc="comment">
     obj.url = url;
     const objStr = JSON.stringify(obj);
     body.append("objStr", objStr);
//////////console.log("stringified body"+objStr);
////////
////////this.setState({stateObj : ''}, function () { console.log("APIGenericPostSave - setState undefined:  " + this.state.stateObj); });
     return fetch(obj.fetchUrl, {method: "POST", body})
     .then(res => res.json())
     .then(res => JSON.parse(res))
     .then((data) => {
//
     this.setState(
     {[stateObj]: data
     }, function () {
     console.log(uniqueMessage + "APIGenericNoBody - setState defined: and " + stateObj + " = " + JSON.stringify(this.state.basketState))
     })
     });
//             .then((data) => {
//                  let renderObj = {
//                       stateObj: this.state.stateObj,
//                       staleObj: obj
//                  };
////  //console.log(uniqueMessage+"masterObj"+JSON.stringify(obj.masterOb));
//                  this.setState(
//                    {
//                         currentComponent: obj.components,
//                         currentObj: renderObj
//                    }, function () {
//                       console.log(uniqueMessage + "obj.renderObj")
//                  })
//             });
// set states
     //);  
//.then(data => console.log(JSON.stringify(obj), null, "\t"))
   } else{console.log(uniqueMessage + "properties not available yet")}
   }
//////////////////////////////////////// APICategoryPostSave
   APICategoryPostSaveGlobal = (promise, propertyKey, path, obj, uniqueMessage) => {
   console.log(uniqueMessage + "obj parameter" + JSON.stringify(obj));
     //console.log(uniqueMessage+"propertyKey test"+Object.keys(obj.payLoad.package.searchQuery));
     //console.log(uniqueMessage + "category object path Keith" + JSON.stringify(obj.payLoad.package.searchQuery));
     console.log(uniqueMessage + "APIcategory call ran");
     console.log(uniqueMessage + JSON.stringify(promise));
     // console.log(uniqueMessage+"categoryObj= "+JSON.stringify(obj));
     //console.log(uniqueMessage + "step2: obj.masterObj.state" + Object.keys(obj.masterObj.state));
     //console.log(uniqueMessage+"obj.masterObj.state.resources=   "+JSON.stringify(obj.masterObj.state.resources));
     //console.log(uniqueMessage + "step 3: obj.payLoad" + Object.keys(obj.payLoad));
     ///////////
     obj.payLoad.package.searchQuery[propertyKey] = path;
///////////////
     let url = undefined;
     let testUrl = undefined;
////////console.log("APIGenericPost url=  "+url);    
     const method = "POST";
////////const body = new FormData();
/////////////////  if else that checks for token
     if (promise === undefined) {
////////// the variable is defined
   console.log("promise undefined");
     url = obj.payLoad.package.address;
     console.log(uniqueMessage + "api token undefined. Url = " + url);
   } else {
   console.log("promise defined");
     url = obj.payLoad.package.address + promise.api_token;
     console.log(uniqueMessage + "api token defined. Url= " + url);
   }
////////console.log("const address=  " + obj.masterObj.api_token);
/////////////////
//////////<editor-fold defaultstate="collapsed" desc="comment">
   obj.payLoad.package.url = url;
     //console.log(uniqueMessage+"test url"+testUrl);
     console.log(uniqueMessage + " object url " + JSON.stringify(obj.payLoad.package.url));
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
   APICategoryPost = (promise, propertyKey, path, obj, uniqueMessage) => {
   console.log(uniqueMessage + "obj parameter" + JSON.stringify(obj));
     console.log(uniqueMessage + "APIcategoryPost call ran");
     console.log(uniqueMessage + JSON.stringify(promise));
     ///////////
     obj.payLoad.package.searchQuery[propertyKey] = path;
///////////////
     let url = undefined;
     let testUrl = undefined;
////////console.log("APIGenericPost url=  "+url);    
     const method = "POST";
/////////////////  if else that checks for token
     if (promise === undefined) {
////////// the variable is defined
   console.log("promise undefined");
     url = obj.payLoad.package.address;
     console.log(uniqueMessage + "api token undefined. Url = " + url);
   } else {
   console.log("promise defined");
     url = obj.payLoad.package.address + promise.api_token;
     console.log(uniqueMessage + "api token defined. Url= " + url);
   }
////////console.log("const address=  " + obj.masterObj.api_token);
/////////////////
//////////<editor-fold defaultstate="collapsed" desc="comment">
   obj.payLoad.package.url = url;
     //console.log(uniqueMessage+"test url"+testUrl);
     console.log(uniqueMessage + " object url " + JSON.stringify(obj.payLoad.package.url));
     const objStr = JSON.stringify(obj.payLoad.package);
     const body = new FormData();
//////     const testStr = "test string";
////////body.append("objStr",objStr);
     body.append("objStr", objStr);
//////////console.log("stringified body"+objStr);
////////
////////this.setState({stateObj : ''}, function () { console.log("APIGenericPostSave - setState undefined:  " + this.state.stateObj); });
     return fetch(obj.payLoad.fetchUrl, {method: "POST", body})
     .then(res => res.json())
     .then(res => JSON.parse(res));
   }
////////////////////////////////////////
   save = (uniqueMessage, setState, state, data, stateObj) => {
   console.log(uniqueMessage + "data parameter" + JSON.stringify(data));
     console.log(uniqueMessage + "save call ran");
     setState(
     {stateObj: data
     }, function () {
     console.log(uniqueMessage + "Save - setState defined: ")
     });
   }
////////////////////////////////////////
   renderObj = (uniqueMessage, Obj, state) => {
   console.log(uniqueMessage + "renderObj ran");
     let renderObj = {
     stateObj: state.stateObj,
       staleObj: obj
     };
     return renderObj
   }
////////////////////////////////////////
   APIBasketRemove = (key = undefined, obj = undefined, uniqueMessage = undefined, api_token = undefined) => {
   console.log("APIBasketRan");
     //////////////////////////////////////// Save

     /*console.log(uniqueMessage + "basketRemove object path Keith" + JSON.stringify(obj.payLoad.package.searchQuery));
      console.log(uniqueMessage + "APIbasketRemove call ran");
      console.log(uniqueMessage + "step2: obj.masterObj" + Object.keys(obj.masterObj));
      console.log(uniqueMessage + "step 3: obj.payLoad" + Object.keys(obj.payLoad));*/

/////////////
//           let url = undefined;
//           const method = "POST";
//                const url = obj.payLoad.package.address + api_token;
//                console.log(uniqueMessage + "api token defined. Url= " + url);
//////////<editor-fold defaultstate="collapsed" desc="comment">
//           obj.url = url;
//           const objStr = JSON.stringify(obj.payLoad.package);
//           const body = new FormData();
//           body.append("objStr", objStr);
//           return fetch(obj.payLoad.fetchUrl, {method: "POST", body})
//             .then(res => res.json())
//             .then(res => JSON.parse(res))
//             .then((data) => {
//                  this.setState(
//                    {stateObj: data
//                    }, function () {
//                       console.log(uniqueMessage + "APIGenericPostSave - setState defined: ")
//                  })
//             })
//             .then((data) => {
//                  let renderObj = {
//                       stateObj: this.state.stateObj,
//                       staleObj: obj
//                  };
//                  this.setState(
//                    {
//                         currentComponent: obj.components,
//                         currentObj: renderObj
//                    }, function () {
//                       console.log(uniqueMessage + "obj.renderObj")
//                  })
//             });
// set states
     //);  
//.then(data => console.log(JSON.stringify(obj), null, "\t"))
   }
//////////////////////////////////////// apiRequest2
//<editor-fold defaultstate="collapsed" desc="comment">
   apiRequest2 = () => {
//               this.setState({promise: ''},
//             function () { /*console.log("apiRequest - setState undefined"+this.state.promise);*/
//             }
//           ); //called this way so as not to unset state

   const method = "POST";
     const body = new FormData();
     console.log(" apiRequest2 fired");
//console.log("this.state.promise equals___"+this.state.promise);
     return  fetch("www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/requestToken.php",
     {method, body})
     .then(response => response.json())
     .then(response => JSON.parse(response))
     .then(data =>
//  set state

       this.setState({promise: data})
//* set state
       )
     .then(promise =>
//console.log("anymessage"+this.state.promise
       promise = this.state.promise.api_token
       );
//{"success":"Success: API session successfully started!","api_token":"34"}
   }
//////////////////////////////////////// apiRequest3
   apiRequest3 = () => {
//           this.setState({promise: ''},
//             function () {
//                  console.log("apiRequest3 - setState undefined" + this.state.promise);
//             }
//           ); //called this way so as not to unset state
//           const method = "POST";
   const body = new FormData();
//console.log(" apiRequest3 fired");
/////////// second API call
//           this.setState({promise: ''},
//             function () { /*console.log("apiRequest-second- - setState undefined"+this.state.promise);*/
//             }
//           );
     return  fetch("www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/requestToken2.php",
     {method, body})
     .then(response => response.json())
     .then(response => JSON.parse(response))
     .then(data =>
//  set state   
       this.setState({promise: data})
//* set state
       );
     /* .then(promise => 
      //console.log("anymessage"+this.state.promise
      console.log("redirect url   "+this.state.promise.api_token
      ));*/
///////////
   }
//////////////////////////////////////// closeModal
   closeModal = () => {
   this.setState(() => ({
   selectedOption: undefined
   }));
   }
//////////////////////////////////////// handleDeleteOptiona
   handleDeleteOptions = () => {
   this.setState(() => ({options: []}));
   }
//////////////////////////////////////// counterEs6
   counterEs6 = () => {

   this.setState((prevState) => {
   return {counter: prevState.counter + 1};
   });
     console.log("COUNTERES6 RAN WITH VALUE_____" + this.state.counter);
   }
//////////////////////////////////////// route     
   route = (data) => {
//////////////////////////
   console.log("route executed with parameter" + data);
//const testStr = "product/product&product_id=53";
     window.fetch(`http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=` + data);
////////////////////////// 
   }
//////////////////////////////////////// test call back
   testFunc = (data, queue) => {
   console.log("test func executed");
     console.log("data = ___" + data);
     console.log("queue = ____" + queue);
     queue();
//callback();
   }
////////////////////////////////////////callBck
   callBck = (data2) => {
   console.log("call back func executed");
     console.log("data parameter=" + data2);
   }
////////////////////////////////////////startup
   /*  send() {
    const method = "POST";
    
    const body = new FormData(this.form);
    console.log("send(hello)"+body);             
    
    fetch("https://httpbin.org/post", { method, body })
    .then(res => res.json())
    .then(data => alert(JSON.stringify(data, null, "\t")));
    }    */
////////////////////////////////////////          
//////////////////////////////////////// hyperlink
   pageOpen = (url) => {
//console.log("page Open Fired");
//window.open(url);
   }
////////////////////////////////////////
   /*APIAddCustomer = (e,form) => {
    console.log(" APIAddCustomer fired");
    const method = "POST";
    const body = new FormData(this.form);
    console.log(this.form); 
    //return window.fetch("www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/addNewCustomer.php&firstname="+firstname+"&lastname="+lastname+"&email="+email+"&telephone="+telephone 
    return window.fetch("www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/addNewCustomer.php"                
    
    , {method, body})
    //http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/cart/add
    //.then(response => response.json());
    }*/
/////////// *APIAddCustomer
/////////// apiRequest
   apiRequest = () => {
   console.log(" apiRequest fired");
     return window.fetch("www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/requestToken.php"
       , {
       method: 'POST', //post works in establishing session

         headers: {
         'Content-Type': 'text/plain'
         }
       /*body: {
        key : ""   
        }*/
       })
//http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/cart/add
// .then(response => console.log(response))
     .then(response => response.json())
     .then(response => console.log("response equal" + response, "\t"));
   }
/////////// *apiRequest
   genericQ = (parameter) => {
   console.log(" genericQ fired");
     return window.fetch("http://localhost:8888/3.0.2.0-OpenCart/upload/" + parameter)
//http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/cart/add
     .then(response => response.json())
//.then(data => console.log("response equals"+data));
//.then(data => this.setState({ api_token: data.api_token }));
   }
/////////// *startup
/////////// startup
   startup = () => {
   console.log(" startup fired");
     return window.fetch("http://localhost:8888/3.0.2.0-OpenCart/upload/system/startup.php")
//http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/cart/add
//.then(response => response.json());
   }
/////////// *startup
/////////// queue response product
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="comment">
   queueResponse = (url) => {
   console.log(" queueResponse fired with" + url);
     return window.fetch("http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=product/product&product_id=53&search=apple")
     .then(response => response.json());
   }
/////////// *queue respons
/////////// addCartQueue
   addCartQueue = (url) => {
   console.log(" addCartQueue fired with" + url);
     return window.fetch("http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/cart/add&product_id=53&quantity=1")
//http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/cart/add
//.then(response => response.json());
   }
/////////// *addCartQueue
/////////// cartInfoQueue
   cartInfoQueue = (url) => {
   console.log(" cartInfoQueue fired with" + url);
     return window.fetch("http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=common/cart/info")
//http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=common/cart/info
//.then(response => response.json());
   }
/////////// *cartInfoQueue
/////////// checkOutButtQueue
   checkOutButtQueue = (url) => {
   console.log("checkOutButtQueue fired with" + url);
     return window.fetch("http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/login")

   }
/////////// *checkOutButtQueue
/////////// guestCheckQueue
   guestCheckQueue = (url) => {
   console.log(" guestCheckQueue fired with" + url);
     return window.fetch("http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/guest")

   }
/////////// *guestCheckQueue
/////////// custInfo
   custInfo = (url) => {
   console.log("custInfo fired with" + url);
     return window.fetch("http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/login")
     .then(response => response.json());
   }
/////////// *custInfo
/////////// finishQueue
   finishQueue = (url) => {
   console.log(" finishQueue fired with" + url);
//return window.fetch("http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/guest")

   }
/////////// *finishQueue
   /*  
    /////////// guestSaveOriginal
    guestSaveOriginal = (e,form) => {
    console.log("guestSaveOriginal fired with"+form);
    return window.fetch("")
    e.preventDefault();
    
    return window.fetch('http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/guest/save', {
    method: 'post',
    body: JSON.stringify({
    firstname: form.firstname.value,
    lastname: form.lastname.value, 
    email: form.email.value,
    telephone: form.telephone.value,
    address_1: form.address_1.value,
    address_2: form.address_2.value,
    city: form.city.value, 
    postocde: form.postocde.value, 
    country_id: form.country_id.value, 
    zone_id: form.zone_id.value, 
    })
    }).then(function(response) {
    return response.json();
    }).then(function(data) {
    //Success code goes here
    alert('form submited')
    }).catch(function(err) {
    //Failure
    alert('Error in form submission')
    });
    
    } */
/////////// test onsubmit
   testSubmit = (e) => {
   e.preventDefault();
     console.log("testSubmit functioning");
   }
///////////* test onsubmit
/////////// *guestSaveOriginal
   guestSave = () => {
//e.preventDefault();
   console.log("guestSave fired");
/////////// code pen
     const method = "POST";
     const body = new FormData(this.form);
     window.fetch("http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/register/save",
     {method, body}).then(res => res.json())
     .then(data => alert(JSON.stringify(data, null, "\t")));
///////////* code pen https://codepen.io/agconti/pen/GmewbO
     /*let formData = new FormData();
      let myForm = document.getElementById('myForm');
      console.log("my form"+myForm);
      formData = new FormData(myForm);*/
//console.log("form data = "+formData.myForm);
//  http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=product/product&product_id=53&search=apple
     /* return window.fetch('http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=checkout/register/save', {
      method: 'POST',
      body: JSON.stringify({
      
      firstname: myForm.firstname.value,
      lastname: myForm.lastname.value, 
      email: myForm.email.value,
      telephone: myForm.telephone.value,
      address_1: myForm.address_1.value,
      address_2: myForm.address_2.value,
      city: myForm.city.value, 
      postocde: myForm.postocde.value, 
      country_id: myForm.country_id.value, 
      zone_id: myForm.zone_id.value, 
      
      firstname: formData.firstname,
      lastname: formData.lastname, 
      email: formData.email,
      telephone: formData.telephone,
      address_1: formData.address_1,
      address_2: formData.address_2,
      city: formData.city, 
      postocde: formData.postocde, 
      country_id: formData.country_id, 
      zone_id: formData.zone_id, 
      })
      });/*.then(function(response) {
      return response.json();
      }).then(function(data) {
      //Success code goes here
      alert('form submited')
      }).catch(function(err) {
      //Failure
      alert('Error in form submission')
      });*/

   }
/////////// *guestSave
/////////// code pen function test
   /*codePen = () => {
    const method = "POST";
    const body = new FormData(this.form);
    window.fetch("https://httpbin.org/post", { method, body })
    .then(res => res.json())
    .then(data => alert(JSON.stringify(data, null, "\t"))); 
    }*/
/////////// *code pen function test
////////////////////////////////////////* promise chaining
/////////////////////////////////////////////////// routeMultiple
   routeMultiple = (route, stateParam) => {
   console.log("route multiple executed");
//////////////////////////
//console.log("state"+stateParam);
     const  newArray = [];
///////////
     for (var prop in stateParam) {
   newArray.push(prop);
///////////
   }
   console.log("routeMultiple newArray(push)  /" + newArray[1]);
//////// working code - still working
     const testArray2 = Object.keys(stateParam).map(i => stateParam[i]);
     console.log("routeMultiple testArray2(obj.kesy)   /" + testArray2);
///////////
     for (var index = 0; index < newArray.length; index++) {
   newArray[index] = "&" + newArray[index] + "=" + testArray2[index];
//console.log("newArray"+ newArray[index]); 
   }
   const urlParameters = newArray.join('');
     console.log("final string  /" + route + urlParameters);
     const testStr2 = "product/product&product_id=53";
////// fetch     
     window.fetch("`http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=" + route + urlParameters + "`");
///// *fetch   
     console.log("state is equal to:" + this.state.value);
   }
///////////////////////////////////////////////////*outeMultiple
/////////////////////////////////////////////////// routemultiplePost
   routeMultiplePost = (route, stateParam) => {
   console.log("route multiple executed");
//////////////////////////
//console.log("state"+stateParam);
     const  newArray = [];
///////////
     for (var prop in stateParam) {
   newArray.push(prop);
///////////
   }
   console.log("routemultiplePost newArray(push)  /" + newArray[1]);
//////// working code - still working
     const testArray2 = Object.keys(stateParam).map(i => stateParam[i]);
     console.log("routemultiplePost testArray2(obj.kesy)   /" + testArray2);
///////////
     for (var index = 0; index < newArray.length; index++) {
   newArray[index] = "&" + newArray[index] + "=" + testArray2[index];
//console.log("newArray"+ newArray[index]); 
   }
   const urlParameters = newArray.join('');
     console.log("final string  /" + route + urlParameters);
     const testStr2 = "product/product&product_id=53";
////// fetch
     window.fetch("`http://localhost:8888/3.0.2.0-OpenCart/upload/index.php?route=" + route + urlParameters + "`", {
     method: 'POST', // or 'PUT' 

       headers: {

       }
     }).then(response => response.json())

     .then(json =>
       console.log("resources json" + json),
     {/*     this.setState({
      resources: json
      
      })*/})

///// *fetch   
     console.log("state is equal to:" + this.state.value);
   }
//////////////////
//</editor-fold>
/////////////////////////////////*outemultiplePost
//<editor-fold defaultstate="collapsed" desc="comment">
///////////////////////////////////////////////////////// toCheckout
   toCheckout = () => {
   console.log("toCheckout function executed");
//////////////////////////

   }
///////////////////////////////////////////////////////// test
   test = () => {
   console.log("test function executed");
     const test = "testStr";
     this.setState(() => ({
     test: "testStr"
     }));
//////////////////////////
//console.log("test state now changed to:___"+this.state.test);
   }
///////////////////////////////////////////////////////// *est 
   handleDeleteOption = (optionToRemove) => {
   this.setState((prevState) => ({
   options: prevState.options.filter((option) => optionToRemove !== option)
   }));
   }
   ;
////////////////////////////////////////
//////////////////////////////////////// 
     handlePick = () => {
   console.log('handle pick fired');
     const randomNum = Math.floor(Math.random() * this.state.options.length);
     const option = this.state.options[randomNum];
     this.setState(() => ({
     selectedOption: option
     }));
   }
   ;
////////////////////////////////////////  
     handleAddOption = (option) => {
   if (!option) {
   return 'Enter valid value to add item';
   } else if (this.state.options.indexOf(option) > - 1) {
   return 'This option already exists';
   }

   this.setState((prevState) => ({
   options: prevState.options.concat(option)
   }));
   }
   ;
////////////////////////////////////////
     fetch = (data, uniqueMessage) => {
//////////////////////////
//console.log("fetch executed" );
   console.log("fetch executed with parameter" + data + "from within" + uniqueMessage);
     const testStr = "product/product&product_id=50";
     return  window.fetch(`www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/index.php?route=` + data, {
     method: 'GET', // or 'PUT' 

       headers: {

       }
     }).then(response => response.json())

     .then(json =>
       this.setState(
       {resources:json }, function () {
       console.log(uniqueMessage + "resources set to" + JSON.stringify(this.state.resources))
       })
       )
     .then((json) => {
     const newStr = JSON.stringify(this.state.resources, null, 4); // (Optional) beautiful indented output.
     }).then((json) => {
   let pointlessCode = this.state.resources.name.split("Raspberry");
   });
   }
//////////////////////////////////////// *etch
   testFnc = (data, uniqueMessage, keyWord) => {
   console.log("testFnc");
     console.log("testFnc Data=" + data + "splitArray" + keyWord);
//////////////////////////
     console.log("testFnc executed with parameter" + data + "from within" + uniqueMessage);
     return  window.fetch(`www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/index.php?route=` + data, {
     method: 'GET',
       headers: {
       }
     }).then(response => response.json())
     .then(json =>
       this.setState({
       resources: json
       }));
//////////////////////////
//queue();
////////////////////////////////////////

   }
////////////////////////////////////////  

   componentDidUpdate(prevProps, prevState) {
   const uniqueMessage = "INDEC: CDU "
//console.log("update - "+this.state.selectedOption);
     if (prevState.options.length !== this.state.options.length) {
   const json = JSON.stringify(this.state.options);
     localStorage.setItem('options', json);
   }

   if (prevState.resources !== this.state.resources) {
   this.displayComp = this.renderedComp(uniqueMessage, this.state.currentObj, this.state.currentComponent);
     console.log("state resources change detected");
   } else {
   //console.log("Indec: CDU: no change detected");
   }

   if (prevState.stateObj !== this.state.stateObj) {
   //console.log("Indec: CDU: stateObj" + JSON.stringify(this.state.stateObj));

   this.displayComp = this.renderedComp("cdu: currentComponent", this.state.currentObj, this.state.currentComponent);
     console.log("cdu:stateobj state change detected");
   } else {
   //console.log("Indec: CDU: stateObj: no change detected");
   }

   if (prevState.basketState !== this.state.basketState) {
   //console.log("Indec: CDU: stateObj" + JSON.stringify(this.state.stateObj));
   //displayToolbar = this.renderedComp(ToolbarObj, this.state.Toolbar);
   console.log("cdu:basketState state change detected");
     console.log("INDE:CDU:basketState" + Object.keys(this.ToolbarObj));
   } else {
   //console.log("Indec: CDU: basketState: no change detected");
   }

   if (prevState.promise !== this.state.promise) {
   //console.log("Indec: CDU: stateObj" + JSON.stringify(this.state.stateObj));
   //displayToolbar = this.renderedComp(ToolbarObj, this.state.Toolbar);
   console.log("cdu:promiseState state change detected");
     //this.displayToolbar = this.renderedComp("cdu: Toolbar",this.ToolbarObj, this.state.Toolbar);



   } else {
   //console.log("Indec: CDU: promiseState: no change detected");
   }

   //console.log("Indec: CDU: product_id" + this.state.product_id);
   }
////////////////////////////////////////
   componentWillUnmount() {
   console.log('componentWillUnmount');
   }
////////////////////////////////////////
   splitGeneric = (splitSource, splitKeyword) => {
//splitSource = splitSource.join();
   const splitArray = splitSource.split(splitKeyword);
     return splitArray[1];
//return splitSource
   }
//////////////////////////////////////// state Storage
   stateStorage = (res, isMounted, uniqueMessage) => {
   console.log("stateStorage ran" + uniqueMessage);
     res = JSON.parse(res);
     if (isMounted === true) {//this.setState({stateObj : ''});  

//res => res.json()
//.then(data => console.log(JSON.stringify(data), null, "\t"))
//.then(res => JSON.parse(res))

   this.setState((state) => {
   return {stateObj: res}
   }
   );
     this.setState((state) => {
     /*return (console.log("stateStorage/stateObj=  " + JSON.stringify(this.state)));*/
     return (console.log(uniqueMessage + "stateStorage/stateObj= " + JSON.stringify(this.state.stateObj)));
     });
//this.setState((state) =>{console.log("stateObject"+JSON.stringify(state.stateObj));});
     /*this.setState((state) => {
      for(let i =0;i<state.stateObj.length;i++){
      this.setState((state) =>{
      for(var key in state.stateObj[i]) {
      console.log(state.stateObj[i][key]);
      }
      });
      }
      });*/
     return res;
   } else {
   console.log("stateStorage()-isMounted==false");
   }
   }
//////////////////////////////////////// 
   renderedCompOriginal = (propObj) => {
   //console.log("Indec: renderedComp():" + JSON.stringify(propObj));
   const Comp = this.state.currentComponent;
     return <Comp setComponent={this.setComponent} propObj={propObj} />
   }
//////////////////////////////////////// rendered comp copy
   renderedComp = (uniqueMessage, propObj, targetComp) => {
   //console.log("Indec:" + uniqueMessage + "renderedComp().propObj:" + JSON.stringify(propObj));
     const Comp = targetComp;
     return <Comp 
    setComponent={this.setComponent} 
    propObj={propObj}

    />
   }
////////////////////////////////////////
   renderCount = () => {
   let count = 1;
     console.log("render count" + count);
     count++
     return count;
   }
//////////////////////////////////////// menu click handler
   menuHandleClick() {
   console.log("Indec:menuHandleClick called");
     this.setState({
     open: !this.state.open
     });
     return  this.noCurlCall("www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/index.php?route=product/category/apiCategories", "Indec:CDM", this.categoryObj);
   }
//////////////////////////////////////// APIGenericPostSave
   APIGenericPostCat = (obj) => {
   console.log("APIGenericPostCat RAN");
///////////
     let url = undefined;
//console.log("APIGenericPostCat url=  "+url);    
     const method = "POST";
     const headers = {
     "Content-Type": "application/json",
       "Access-Control-Request-Method": "POST",
       "Access-Control-Request-Headers": "",
     };
///////////  if else that checks for token
     if (typeof obj.api_token == !undefined) {
// the variable is defined
   const url = obj.package.address;
     console.log("api token undefined. Url = " + url);
   } else {
   const url = obj.package.address + obj.api_token;
     console.log("api token defined. Url= " + url);
   }
   console.log("const address=  " + obj.api_token);
///////////
     obj.url = url;
     const objStr = JSON.stringify(obj.package);
     const body = new FormData();
     const testStr = "test string"
//body.append("objStr",objStr);
     body.append("objStr", objStr);
     console.log(uniqueMessage + "stringified body" + objStr);
//this.setState({stateObj : ''}, function () { console.log("APIGenericPostCat - setState undefined:  " + this.state.stateObj); });
     return fetch(obj.payLoad.fetchUrl, {method: "POST", body})
     .then(res => res.json());
//.then(res => JSON.parse(res))=
//working code.then(data =>     
//this.setState({stateObj : data},function () { console.log("APIGenericPostCat - setState defined:  "+this.state.stateObj); }) working code 
//* set states
// );  
//.then(data => console.log(JSON.stringify(obj), null, "\t"))



   }
////////////////////////////////////////
   scrollBoi = () => {
   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
   let scrollBoi = "ToolbarWrapperMoves";
     console.log("Ladies and Gentleman we have ourselves a scrollBoi");
     document.getElementById("myP").className = "test";
   } else {
   let scrollBoi = "ToolbarWrapperMoves";
     document.getElementById("myP").className = "";
   }
   }
//////////////////////////////////////// ca
//</editor-fold>
   loopState = (promise, state, uniqueMessage, categoryObj, fnc) => {
   console.log(uniqueMessage + "step 1 categoryObj" + Object.keys(categoryObj));
     console.log(uniqueMessage + "loopStateRan");
     //console.log(uniqueMessage + JSON.stringify(state));


     const objArray = Object.keys(state).map(function (key) {
   console.log("loop state" + JSON.stringify(uniqueMessage + "passedState category_id" + JSON.stringify(state[key].category_id) + "category"));
     let dynamicPath = "path" + [key];
     //return console.log(JSON.stringify(state[key]));
     //this.categoryObj.package.searchQuery.path = state[key].category_id;
     //console.log(uniqueMessage+"loopState categoryObj= "+obj.package.searchQuery.path);

     return(<div key={"categoryWrapper" + state[key].category_id}>
          <div key={"category" + state[key].category_id} onClick={() => fnc(promise, "path", state[key].category_id, categoryObj, "Indec:MenU:APIGNPSTSV", "stateObj")}>{state[key].name}</div>
</div>)

   });
     return objArray;
   }
////////////////////////////////////////
   scrollAnchor = () => {
     console.log("scrollAnchor executed" );
}

   handleScroll () {
        //console.log("handle scroll executed");
   const scrollY = window.scrollY;
   const scrollTop = this.scrollRef.current.scrollTop;

    if (scrollTop > 67 && this.state.ToolbarClass===false ) {
         const activeToolbarClass = this.state.ToolbarClass;
         //console.log("greater than 70");
         /*console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`);*/
         this.setState({
           ToolbarClass: true
         });
    }else if (scrollTop < 67 && this.state.ToolbarClass===true){
         //console.log("less than 70");
          this.setState({
           ToolbarClass: false
         });
    }
   }
////////////////////////////////////////// noCurlCall
   noCurlCall = (phpAddress, uniqueMessage, obj) => {
   //start

   this.setState({response: ''},
     function () { /*console.log("apiRequest - setState undefined"+this.state.promise);*/
     }
   ); //called this way so as not to unset state

     const method = "POST";
     const body = new FormData();
     console.log(uniqueMessage + " noCurlCall fired");
     ///console.log("this.state.promise equals___"+this.state.promise);
     return  fetch(phpAddress,
     {method, body})
     .then(response => response.json())

     .then(data =>
       this.setState({categories: data}, function () {
       console.log(uniqueMessage + "categories state   " + JSON.stringify(this.state.categories));
       }));
     /*.then(promise =>
      console.log("noCurlResponse   " + JSON.stringify(promise)
      ))*/
     //.then(promise => this.loopState(this.state.categories, uniqueMessage,obj));


     //end
   }
   render() {
/////////////////////////////////////////// render
const {scrollTop} = this.state;
// <editor-fold defaultstate="collapsed" desc=" render folded ">

//const Component = "HomePage";

   const components = {related: Related};
//console.log("{related:Related}"+components.related);
//{console.log("test state now changed to:___"+this.state.test);}

     const exampleText = 'this is example text';
     const subtitle = 'testing all files are working';
     const imageAddress1 = 'assets/all-the-jingle-ladies-sack.png';
     const imageAddress2 = 'assets/christmas_carol_1.png';
     const productName1 = 'Bath Blaster';
     const productDesc1 = 'Enjoy the bubbles';
     const productName2 = 'Christmas Carol';
     const productDesc2 = 'Lovely Gift set';
//const blogImage1 = "url('/assets/blog_image_1.jpg')";
//const blogImage2 = "url('/assets/stockingFiller 2.jpg')";
//const blogImage3 = "url('/assets/Pet_Set_1.png')";
     const bigImageAddress1 = "url('/assets/stockingFiller.jpg')";
     const bigImageAddress2 = "url('/assets/bigImage_2.png')";
     const container_bigImageMarginAndPadding = "container_bigImageMarginAndPadding";
     const container_bigImageMargin = "container_bigImageMargin";
     const color = "red";
     const testObj = {value: "one value"};
// </editor-fold>///////////props bank
     //console.log("INDE:REN:Toolbarobj" + Object.keys(this.ToolbarObj));
//////////////////////////////////////// relatedObj
     const relatedHandlerObj = {
     masterObj: this.masterObj,
       components: Related
     }
///////////////////// product page const
   /*const name = this.state.resources.name;
    const description = this.state.resources.description 
    const quantity = this.state.resources.quantity;
    const image = this.state.resources.image;
    const price = this.state.resources.price;
    const imageAd = "http://localhost:8888/3.0.2.0-OpenCart/upload/image/" + image;*/
////////////////////////////////////////*product page const
   const renderArchive = /*  <Header ></Header>
    <Toolbar ></Toolbar>
    
    <Product 
    fetch={this.fetch}
    route={this.route}
    name = {this.state.resources.name}
    description = {this.state.resources.description}
    quantity = {this.state.resources.quantity}
    image  = {this.state.resources.image}
    price = {this.state.resources.price}
    test = {this.test}
    testState = {this.state.test}
    pageOpen = {this.pageOpen}
    resources = {this.state.resources}
    /> 
    
    
    <Basket
    fetch={this.fetch}
    route={this.route}
    name={this.state.resources.name}
    description = {this.state.resources.description}
    quantity = {this.state.resources.quantity}
    image  = {this.state.resources.image}
    price = {this.state.resources.price}
    /> 
    
    
    {this.state.promise &&
    <PaymentProcess1
    api_token = {this.state.promise.api_token}
    routeMultiple = {this.routeMultiple}
    route = {this.route}
    routeMultiplePost = {this.routeMultiplePost}
    fetch = {this.fetch}
    callBck = {this.callBck}
    testFunc = {this.testFunc}
    queueResponse = {this.queueResponse}
    addCartQueue = {this.addCartQueue}    
    cartInfoQueue = {this.cartInfoQueue}
    checkOutButtQueue = {this.checkOutButtQueue}
    guestCheckQueue = {this.guestCheckQueue}
    finishQueue = {this.finishQueue}
    guestSave = {this.guestSave}
    testSubmit = {this.testSubmit}
    codePen = {this.codePen}
    startup = {this.startup}
    genericQ = {this.genericQ}
    APIRequest2 = {this.APIRequest2}
    APIRequest3 = {this.APIRequest3}
    APIAddCustomer = {this.APIAddCustomer}
    testObj = {testObj.value}
    
    />
    }
    
    
    {this.state.promise &&
    <ChildState 
    APIGenericPostSave = {this.APIGenericPostSave}
    testObj = {testObj}
    categoryObj = {categoryObj}
    state = {this.state}
    stateStorage = {this.stateStorage}
    components = {Related}
    
    />*/ + 2;
//<editor-fold defaultstate="collapsed" desc="lets">
     let displayComp;
     let displayToolbar;
     let greeting = "Hello User";
     let slideMenuContent;
     let slideMenu;
     let menuMult;
     let hamburgerVert;
     let scrollBoi;
     let currentObj;
     //let availableCategories = this.noCurlCall("www.testonly.forevermecosmetics.ie/opencart-3.0.3.1/upload/index.php?route=product/category/apiCategories","Indec:CDM",this.categoryObj);
     const mobileDetect = window.matchMedia("(max-width: 500px)");
     const mainApp = "appDiv " + scrollBoi;
//</editor-fold>
     //console.log("give me my message"+Object.keys(this.ToolbarObj));
     const ToolbarRenderMessage = "render: Toolbar: api_token= " + JSON.stringify(this.state.promise);
     displayToolbar = this.renderedComp(ToolbarRenderMessage, this.ToolbarObj, this.state.Toolbar);
     const testComp = Basket;
//<editor-fold defaultstate="collapsed" desc="comment">
// const node = ReactDOM.findDOMNode(this); 
//       const node2 = ReactDOM.findDOMNode(this); 
//      console.log("scrolltop val= "+node2.scrollTop);
//                if (node.id ==="mainApp" ) {
//       let scrollBoi = "ToolbarWrapperMoves";
//       console.log("Ladies and Gentleman we have ourselves a scrollBoi");
//   
//  } else {
//       let scrollBoi =  "ToolbarWrapperMoves";
//       console.log("We have no scroll boy");
//  } 
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="comment">
     if (mobileDetect.matches) { // If media query matches
   //mobile view
   this.menuMult = 1;
   } else {
   //desktop view
   this.menuMult = 1.5;
   }

   if (this.state.open === true) {
   slideMenu = "slideMenu";
     slideMenuContent = "slideMenuContentOpen slideMenuContent ";
   } else {
   slideMenu = "slideMenuClosed";
     slideMenuContent = "slideMenuContentClosed slideMenuContent ";
   }

   const myRef = React.createRef();
//const node = myRef.current;

     const categoryBomb = {searchQuery: {path: "59"}}
   const Toolbar = <Toolbar 

    />;
//</editor-fold>

   {
   if (this.state.currentComponent) {
   if (this.stateStorage) {
   //console.log("Indec: disaplyComp: setStorage exists")
   } else
   {
   //console.log("Inde: display: setStorage does not exist");
   }
   displayComp = this.renderedComp("render  : currentComp", this.state.currentObj, this.state.currentComponent);
//condition to handle the prop Obj


   }
   }
////////////////////////////*eturn    
   return (
<div id={"mainApp"} className={"appDiv scrollTop"} ref={this.scrollRef} onScroll={this.handleScroll}>
          
          <Header />
          
          
     
          <div className={this.state.ToolbarClass ? 'ToolbarWrapperScroll':'ToolbarWrapper'}  >
                    <div className={slideMenu}>
                    <div className={slideMenuContent}>
                                        {
     this.state.categories &&
     this.loopState(this.state.promise, this.state.categories, "Indec:ren: loopState", this.categoryHandlerObj, this.APICategoryPostSaveGlobal)
                                        }
                              </div></div>   

                    <div className={ "hamburgerMenu"}>
                              {
                              <HamburgerMenu
                                  isOpen={
     this.state.open}
                                  menuClicked={
     this.menuHandleClick.bind(this)}
                                  width={
     18 * this.menuMult}
                                  height={
     15 * this.menuMult}
                                  strokeWidth={
     1}
                                  rotate={
     0}
                                  color='White'
                                  borderRadius={
     0}
                                  animationDuration={
     0.5}

                                  />
                              }</div>

                    
   

                    <div>{displayToolbar}</div>
                    <div>
                
            </div>
          </div>
         

          <div className="masterDiv"  >{displayComp}</div>
</div>
////////////////////////////return    
     )
/////////////////////////////////////////// *ender
   }
/////////////////////////////////////////////////////////// *ain component   
   }

 IndecisionApp.defaultProps = {
 options: []
 };