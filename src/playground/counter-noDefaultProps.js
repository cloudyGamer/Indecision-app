    console.log("counter.js is running");
    class Counter extends React.Component{
        //
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleRemoveOne=this.handleRemoveOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state = {count: 0};
    }    
        //
    handleAddOne() {
        console.log(this.state.count);
        this.setState((prevState)=>{
            return {count: prevState.count+1};
        });
    }
    //
    handleRemoveOne()
    {
        console.log("functional");
        this.setState((prevState)=>{
            return {count: prevState.count-1};
        });
    }
    //
    handleReset()
    {
        console.log("functional");
       this.setState(()=>{
            return {count: 0};
        });
        
        this.setState((prevState)=>{
            return {count: prevState.count +1};
        });
            
    }
    //
        render(){
            return( <div>
                    <h1>Count: {this.state.count}</h1>
                    <button onClick={this.handleAddOne}>+1</button>
                    <button onClick={this.handleRemoveOne}>-1</button>
                    <button onClick={this.handleReset}>Reset</button>
            </div>);
        }
    };
    
    const appRoot = document.getElementById('app');
    ReactDOM.render(<Counter />,appRoot);
 /*   const templateObj = {
        title: "Indecision App",
        subject: "Put Your Life in the Hands of a Computer",
        options: ["one","two"]
    };
    
*/
    //
/*
    let count = 0;
    //
    const addOne = () => {
        count++;
        renderCounter();
    };
    //
     const minusOne = () => {
         count--;
        console.log("minus one");
        renderCounter();
    };
     const reset = () => {
        count = 0;
        console.log("Reset it");
        renderCounter();
    };
    
    
    
    
    const appRoot = document.getElementById("app");
   
    
    const renderCounter = () => {
        const templateTwo = (<div>
            <h1>count: {count}</h1>
                    <button onClick={addOne}>+1</button>
                    <button onClick={minusOne}>-1</button>
                    <button onClick={reset}>Reset</button>
            </div>);
        
         ReactDOM.render(templateTwo,appRoot);  
    };
    
    renderCounter();
    */
   
   