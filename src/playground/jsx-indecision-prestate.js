console.log("App,js running");

const obj = {
    name : 'Henrt',
    getName(){
        return this.name;
    },
    age: 0
};

const getName = obj.getName.bind({name: 'andrew'});
console.log(getName());
class IndecisionApp extends React.Component {
render(){
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['thing One','Thing Two','Thing Three Four'];
        return (<div>
                <Header title={title} subtitle={subtitle}/> 
      <Action />
      <Options options={options} />
      <AddOption />
                </div>
                );
    }       
}

class Header extends React.Component {
    render(){
        console.log(this.props);
        return (<div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
                </div>
                );
    }   
};

class Action extends React.Component {
    handlePick() {
        console.log("handle pick");
    }
    render (){
        return (<div>
                <button onClick={this.handlePick}>What Should I do?</button>
                </div>);
    }
};

class Options extends React.Component {
    constructor(props){
        super(props);
        this.removeOption = this.removeOption.bind(this);
    }
    removeOption(){
        console.log(this.props.options);
    }
    
    
    
    render (){  
        return (<div>
                <button onClick={this.removeOption}>Remove All</button>
               {
                   this.props.options.map((option) => <Option key={option} optionText={option}/> )
               }
               
               <p>Length of Options: {this.props.options.length}</p>
               
               
                </div>);
    }
};


class Option extends React.Component {
    
    render(){
        return (
                <div>
        
       {this.props.optionText}
                </div>
                );
    }
};

class AddOption extends React.Component {
    addOption (e){
        console.log("option added");
        e.preventDefault();
        const userOption = e.target.elements.optionSubmit.value.trim();
        if(userOption){
            alert("option picked="+userOption);
            /*this.props.options.push(userOption);*/
          e.target.elements.option.value = "";
         
        }
    }
    //
    
    render (){
        return (<div>
            <form onSubmit={this.addOption}>
                
                <input  type="text" name='optionSubmit'/>
                <button>Add Option</button>
                
            </form>
               
           add option component here
                </div>);
    }
};


    
const appRoot = document.getElementById("app");

ReactDOM.render(<IndecisionApp />,appRoot);