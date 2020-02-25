/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import Related from './Related';

export default class ChildState extends React.Component {
     state = {
       
     }

//////////////////////////////////////// iterateState
     iterateState = (bool,component) => {
          console.log("iterated comp ran");
//          const components={components:component};
//          const PassedComp = components[components];
          console.log("iterateStateRan"); 
          //for(var i=0;i<bool.length;i++){
               //let newProp = bool[i];
               //console.log("childState-IterateState-"+JSON.stringify(bool[i]));
               return this.props.component;
          //}

               }


// displayRelated = (bool) => {
// return (bool ? this.state.stateObj : "stateObj not set in global state");}
//////////////////////////////////////////
//     componentDidMount() {
//          let isMounted = true;
//          console.log('ChildState component did mount');
//          console.log("childState categoryObj" + JSON.stringify(this.props.categoryObj));
//          this.props.APIGenericPostSave(this.props.categoryObj).then(res => this.props.stateStorage(res));
////////////////////////////////////////// displayRelated
////          const bool = false;
////         displayRelated(bool);
//////////////////////////////////////////
//     }
//////////////////////////////////////////
////////////////////////////////////////// functioning code
//displayRelated = (bool,component) => {
//     //const returnedVal = this.loadComponent(bool);
//     return((bool ? component : "stateObj not set in global state live rendering"));
//   // return console.log("here is your Goddamn message");
//}
//////////////////////////////////////////
//////////////////////////////////////// displayRelated
displayRelated = (bool,component) => {
     //const returnedVal = this.loadComponent(bool);
     return((bool ? this.iterateState(bool,component) : "stateObj not set in global state live rendering"));
   // return console.log("here is your Goddamn message");
}
////////////////////////////////////////

////////////////////////////////////////
     componentDidMount() {
          //this.props.setComponent(ChildState);
          let isMounted = true;
          console.log('ChildState component did mount');
          if(this.props.setGlobalState){console.log("childState: setGlobalState exists");}else{console.log("child: set global state doesnt exist");}
          console.log("childstate categoryObj.category"+this.props.categoryObj.category);
          if(this.props.stateStorage){console.log("ChildState: stateStorage exists");}else{console.log("ChildState: stateStorage does not exist");}
          this.props.APIGenericPostSave(this.props.categoryObj,"ChildState:CDM:APIGenericPost").then(res => this.props.stateStorage(res,isMounted,"ChildState: CDM:"));
     }
////////////////////////////////////////

     componentWillUnmount() {
          let isMounted = false;
          console.log("Childstate unmounted");
     }
     
     componentWillUpdate () {
          //console.log("cwu stateObj="+this.setState((state) =>{console.log(state.stateObj);}))
     }
     
          createComponent = (component,passedProp,category) => {
         if(passedProp.prop.stateObj){
          console.log("createComponent ran");    
         const objArray = Object.keys(passedProp.prop.stateObj).map(function(key) {
       //  console.log("childState: createComponent"+JSON.stringify("passedProp"+passedProp.stateObj[key]+"category"+category));
         const NewComponent = component;
          //console.log("ChildState: createComponent: INFO READY"+JSON.stringify(passedProp.stateObj[key]));
          return(<div className="bottomShelf_relContent_component" key={passedProp.prop.stateObj[key].name}>
          <Related key={passedProp.prop.stateObj[key].name} 
          state={passedProp.prop.stateObj[key]} 
          category={category}
          globalState = {passedProp.prop}
          setGlobalState = {passedProp.setGlobalState}
          /></div>)
         });
         return objArray;
         //const propArray = passedProp.stateObj.map()
         
                    console.log("obj array");
               }else{console.log("INFO NOT READY");}


    
   
     const rows = [];
   
     //console.log("passed prop"+JSON.stringify(passedProp));
          //console.log("access prop"+JSON.stringify(passedProp.stateObj));

   
////     for(let i=0;i<2;i++){
////          const compState = passedProp.stateObj;
////        console.log("passed prop"+JSON.stringify(compState));
////          console.log("passed sample"+JSON.stringify(sampleObj[0]));
////          rows.push(
////          <NewComponent state={sampleObj[i]}
//          />//);
////          rows.push(
////          <NewComponent state={passedProp.stateObj}
//          />//);
////                    
////     }
    
}

     render() {
        
        const bool = "string";
        let displayReady;
        const passedProp = {prop:this.props.state,setGlobalState: this.props.setGlobalState};
        if(this.props.state.stateObj){displayReady = this.createComponent(this.props.components,passedProp,this.props.categoryObj.category);}else{displayReady = console.log("Display not ready");}
          return(<div>
          
         
           <div className="bottomShelf_relContent">
           {displayReady}
           </div> 
          </div>)
     }  

}

