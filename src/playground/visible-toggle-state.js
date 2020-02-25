    console.log("visibility toggle state is running");
    /*const details = ["show details","hide details"];
    const infoArray = ["","a series of points"];
    let infoDisplay = infoArray[0];
    let currentDetail = details[0];

    const showDetails = () =>{
        if(currentDetail === details[0]){console.log("details show");}else
            {currentDetail = details[1];}
    };
    const showDetails = ()=> {
        if(currentDetail===details[0]){currentDetail = details[1];
            infoDisplay = infoArray[1];
        newRender();
        console.log(currentDetail);}else{currentDetail=details[0];
        infoDisplay = infoArray[0];
            newRender();}
    };*/
   let visibility = false; 
   const toggleVisibility = () =>{
       visibility=!visibility;
       newRender ();
   };
   //
class visibilityToggle extends React.Component {
    constructor(props){
      super(props); 
      this.hideDetails = this.hideDetails.bind(this);    
      this.state = {visibility : false};
    }
    
    hideDetails (){
        this.setState((prevState)=>{
            return {
              visibility: !visibility  
            };
        });
        console.log(this.state.visibility);
    }
    
    render(){
        <div>
                <h1 className="heading">Visible Toggle</h1>
                <button onClick={this.hideDetails}>{visibility ? "Learn More": "Hide"}</button>
                {visibility && (<div><p>here is some details</p></div>)}     
       
            </div>
    };
};
  //template contents
    const newRender = () =>{
     const template = (
            <div>
                <h1 className="heading">Visible Toggle</h1>
                <button onClick={toggleVisibility}>{visibility ? "Learn More": "Hide"}</button>
                {visibility && (<div><p>here is some details</p></div>)}     
       
            </div>
            ); 
     ReactDOM.render(template,appRoot);
     
    };
    
    const appRoot = document.getElementById("app");
    newRender();
    
    

    