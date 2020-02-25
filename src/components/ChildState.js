
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import RelatedProduct from './RelatedProduct';
import BasketProduct from './BasketProduct';
import Categories from './Categories';

export default class ChildState extends React.Component {
     state = {
       
     }
////////////////////////////////////////
     componentDidMount() {
           
//          if(this.props.staleObj.masterObj.APIAddToCart){
//               console.log("cs:cdm apiAddtoCart passed"); 
//           }else{
//             console.log("cs: cdm apiAddToCart not added");   
//           }

          
          //console.log("cs:cdm iteratedComp  "+this.props.staleObj.payLoad.childStateComponent.component);
          //console.log("cs:cdm: state obj"+JSON.stringify(this.props));
          //console.log("cs:cdm: staleObj: masterObj keys"+JSON.stringify(Object.keys(this.props.staleObj.masterObj)));
          //this.props.setComponent(ChildState);
          let isMounted = true;
          console.log('ChildState component did mount');
          console.log("cs:cdm: parent comp"+this.props.parent);
     }
     componentWillUnmount() {
          let isMounted = false;
          console.log("Childstate unmounted");
     }
     
     componentWillUpdate () {
          //console.log("cwu stateObj="+this.setState((state) =>{console.log(state.stateObj);}))
     }
     
          createComponent = (component,passedProp,propsObj,staleObj,uniqueMessage,parent,masterObj) => {
               console.log(uniqueMessage+" runs");
         if(passedProp.prop){
          console.log(uniqueMessage+"createComponent ran");
         /////////// lets and condition
         let Comp;
       
         if(this.props.staleObj.payLoad.childStateComponent.component === "RelatedProduct"){
              
              console.log(uniqueMessage+"relatedProd comp detected-proof "+this.props.staleObj.payLoad.childStateComponent.component);
              Comp = RelatedProduct;    
         }else if(this.props.staleObj.payLoad.childStateComponent.component === "BasketProduct"){
              console.log(uniqueMessage+"basketProd comp detected-proof "+this.props.staleObj.payLoad.childStateComponent.component);
              Comp = BasketProduct;
         }else{console.log(uniqueMessage+"no components detected");}
         ///////////
         const objArray = Object.keys(passedProp.prop).map(function(key) {
              console.log("childState: createComponent"+(uniqueMessage+"passedProp"+JSON.stringify(passedProp.prop[key])+"category"));
              console.log(uniqueMessage + "propsObj4life"+JSON.stringify(propsObj));
         const NewComponent = component;
              //const Comp = RelatedProduct;
       
              const divKey = "divWrapper"+parent+[key];
              
              return(
                <div key={divKey} xmlns="http://www.w3.org/1999/xhtml">
                     <Comp 
                    masterObj = {masterObj}
                    staleObj = {staleObj}
                    setComponent={propsObj.setComponent} 
                    propObj={passedProp.prop[key]}
                    key={passedProp.prop[key].name} 
                    />
                </div>)
                
         });
         return objArray;
                    console.log("obj array");
               }
     const rows = [];
    
}

     render() {
          {console.log("cs:render: props"+JSON.stringify(this.props));}
        const bool = "string";
        const masterObj = this.props.staleObj.masterObj;
        const renderedComp = this.props.staleObj.masterObj.renderedComp;
        const propObj = {prop1:"string1",
                         prop2:"string2"};
        //const targetComp = RelatedProuct;
        let displayReady;
        const RelatedProductComp = this.props.staleObj.payLoad.childStateComponent.component;
        const passedProp = {prop: this.props.stateObj,setGlobalState: this.props.staleObj.masterObj.setGlobalState};
        if(this.props.stateObj){
             console.log("cs:ren: if(this.props.stateObj){");
           displayReady = this.createComponent(this.props.staleObj.payLoad.childStateComponent.component,passedProp,this.props.staleObj.payLoad.category,this.props.staleObj,"cs:ren:cc",this.props.parent,this.props.staleObj.masterObj);
           }else{displayReady = console.log("Display not ready");}
          return(<div>
           <div className="bottomShelf_relContent">
            {displayReady}
           </div> 
          </div>)
     }  

}

