/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Categoriess
 * and open the template in the editor.
 */
import React from 'react'; 
import ChildState from './ChildState'

export default class Categories extends React.Component {
     
  state = {
       example: 'string'
       }
    
  clickMe = () => {
            console.log("you clicked me!");
       }
       
 async componentDidMount() {
           let uniqueMessage = "CAT:CDM:"
           if(this.props.propObj.staleObj.masterObj.APIAddToCart){
               console.log("cat:cdm apiAddtoCart passed");
               const master = this.props.propObj.staleObj.masterObj;
               const uniqueMessage = "CAT:CDU";
               console.log(uniqueMessage); 
               const stateObj = this.props.propObj.stateObj;
               console.log(uniqueMessage+"stateObj"+JSON.stringify(stateObj[0].product_id));
               this.setState({category : await master.fetchCategory(stateObj[0].product_id,uniqueMessage)});

           }else{
             console.log("cat cdm apiAddToCart not added");   
           }
           
           if(this.props.propObj.staleObj.removeBasketItem) {
                console.log("cat cdm removeBasketItem added");
           }else{
                console.log("remove basket item not added");
           } 
            console.log("Cat: CDM: props "+JSON.stringify(this.props));
            console.log("Cat:CDM: propObj: keys"+JSON.stringify(Object.keys(this.props.propObj)));
            //console.log("Cat:CDM: propObj: keys"+JSON.stringify(this.props.propObj));
            console.log('Categories component did mount');
            /*this.props.propObj.APIGenericPostSave(this.props.propObj.payLoad)
  .then(res =>this.propObj.setGlobalState("stateObjNew","ranString"));*/
            //this.props.setGlobalState("product_id",56);
            /* if(this.props.propObj.masterObj.testVal){
                 console.log("categories: setGlobalState exists");
                
            }else{
            console.log("child: set global state doesnt exist");}
            console.log("categories mounted");
            console.log("related: globalState"+JSON.stringify(this.props.propObj.globalState));*/
               }        
  
 async componentDidUpdate(prevProps,prevState) {
           if(prevProps!==this.props){
                let uniqueMessage = "CAT:CDU: change detected"
                console.log(uniqueMessage);
                const stateObj = this.props.propObj.stateObj;                
                const master = this.props.propObj.staleObj.masterObj;
                this.setState({category : await master.fetchCategory(stateObj[0].product_id,uniqueMessage)});

            }       
          /* if(prevProps.propObj.masterObj.state.stateObj!==this.props.propObj.masterObj.state.stateOb){
           console.log("CAT:CDU:PROPS updated");
           const test = this.props.propObj.masterObj.setGlobalState("objState","testVal");
      }else{
           console.log("CAT:CDU:PROPS you aint about to get about it");
      }*/
  }

////////////////////////////////////////
  displayChildState = () =>{
     let g;
}
////////////////////////////////////////
  clickHandler = (e) => {
          console.log("categories: clickHandler()");
       this.props.setGlobalState("product_id",this.props.propObj.state.product_id); 
     }   
  
  render() {
         //console.log("stateObj exists  "+JSON.stringify(this.props.propObj.masterObj.state.stateObj));
         let childState;
         let staleObjKeys = Object.keys(this.props.propObj.staleObj);
         let staleObj = JSON.stringify(this.props.propObj.staleObj.category);
         let uniqueMessage = "CAT:REN:";
         
         console.log(uniqueMessage+"eyes here"+JSON.stringify(staleObjKeys));
                  console.log(uniqueMessage+"eyes here"+staleObj);

         if(this.props.propObj){
                //console.log("CAT: REN: stateObj keys detected"+JSON.stringify(Object.keys(this.props.propObj.masterObj.state)));
                //console.log("CAT: REN: stateObj detected"+JSON.stringify(this.props.propObj.masterObj.state.stateObj));
                console.log("CAT:REN: staleObj"+JSON.stringify(this.props.propObj.staleObj));
                console.log("CAT:REN: stateObj"+JSON.stringify(this.props.propObj.stateObj));
             childState= <ChildState 
                        stateObj = {this.props.propObj.stateObj}
                        staleObj = {this.props.propObj.staleObj}
                        parent = {"parent- categories"}
                    />;
                    
               }else{childState=console.log("CAT:REN: stateObj undetected");}
          // const info = this.setState((state)=> {return state.stateObj})
           //const category = this.state.stateObj;
           //<div onClick={()=>this.setState(this.props.state: "51")}>
           //onClick={()=>this.clickMe("product_id",56)}
           return(
           <div>
         {console.log("cat ren")}
           <div className="categories_title_wrapper"><h1 className="topShelf_category_titleHold_title">{this.state.category}</h1></div>
           
              <div> {childState} </div>
               </div>)
    }  
    
}

