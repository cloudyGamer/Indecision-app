

import React from 'react'; 
import ChildState from './ChildState';

export default class Basket extends React.Component {
        
  componentDidMount() { 
    const cdmBas = "bas:cdm";
    console.log("basket mounted");
    console.log("basket mounted with props"+JSON.stringify(this.props));
    
   // console.log(cdmBas+"staleObj"+Object.keys(this.props.propObj.masterObj));  
  }
 
          
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
          console.log("Basket: clickHandler()");
       this.props.setGlobalState("product_id",this.props.propObj.state.product_id); 
     }   
  
        render() {
         //console.log("stateObj exists  "+JSON.stringify(this.props.propObj.masterObj.state.stateObj));
         let childState;
         
         if(this.props.propObj){
              const getProduct = "product/product&product_id="+this.props.propObj.product_id;
                //console.log("BAS: REN: stateObj keys detected"+JSON.stringify(Object.keys(this.props.propObj.masterObj.state)));
                //console.log("BAS: REN: stateObj detected"+JSON.stringify(this.props.propObj.masterObj.state.stateObj));
             const liveState = this.props.propObj.masterObj.callState();
             const stateObj = liveState.basketState.products;
             
             console.log("bas:ren stateObj"+JSON.stringify(stateObj));
             console.log("bas:ren staleObj"+JSON.stringify(this.props.propObj.masterObj));
             
             childState= <ChildState 
                        stateObj = {stateObj}
                        staleObj = {this.props.propObj}
                        parent = {" parent:basket "}
                    />;
                    
               }else{childState=console.log("BAS:REN: stateObj undetected");}
           //const info = this.setState((state)=> {return state.stateObj})
           //const category = this.state.stateObj;
           //<div onClick={()=>this.setState(this.props.state: "51")}>
           //onClick={()=>this.clickMe("product_id",56)}
           return(
           <div>
         {console.log("Bas ren")}
           <h1>Basket</h1>
              <div>{childState}</div>
               </div>)
    }   
    
}







