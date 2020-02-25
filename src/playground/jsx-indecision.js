    console.log("app.js is running today");
    const templateObj = {
        title: "Indecision App",
        subject: "Put Your Life in the Hands of a Computer",
        options: []
    };
    
     
    
    
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option){
        templateObj.options.push(option);
         e.target.elements.option.value = "";
         newRender();
    }
};

const clearData = () =>{
templateObj.options = [];
newRender();

};
//
const onMakeDecision = () =>{
const ranNum = Math.floor(Math.random()*templateObj.options.length);
const option = templateObj.options[ranNum];
console.log(option);
};
//
  const strings = ["apple","orange","mango"];
  
  //template contents
    const newRender = () =>{
     const template = (
            <div>
                <h1>{templateObj.title}</h1>
                {templateObj.subject && <p>subject: {templateObj.subject}</p> }
                <p>{templateObj.options.length > 0 ? "here are your options 2" : "no options present"}</p>
                <button disabled={templateObj.options.length ===0} onClick={onMakeDecision}>What Should I do?</button>
                <button id="clearBtn" onClick={clearData}>Clear</button>
              
                <ol>
                {templateObj.options.map((string) =>{return <li key={string}> string: {string}</li>}
               
               )
               }   
                </ol>
                
                <form onSubmit={onFormSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
            ); 
     ReactDOM.render(template,appRoot);
     
    };
    
    const appRoot = document.getElementById("app");
    newRender();
    
    

    