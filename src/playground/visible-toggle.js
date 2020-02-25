    console.log("visibility toggle is running");
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
    
    

    