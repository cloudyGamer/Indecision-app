/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react';

/*
const BlogFeature = (props) => (
        <div>
        <button
        onClick={props.propFunction}
      >
        remove
      </button>
        <div className="blogBrief" style={{ "background-image": props.blogImage}}>
        <div className="blogBrief_title">Features</div>
        <div className="blogBrief_subtitle">
        <div>Secret Santa</div> 
        <div>Gift</div> 
        <div>Ideas</div>
       </div>
        
        <div className="blogBrief_link">Find out more</div>
        
        
        </div>
    </div>
);*/

export default class BlogFeature extends React.Component {

//constructor(props){
        //super(props);
        //this.blogImage = this.blogImage.bind(this);
        //this.exampleText = this.exampleText.bind(this);
        //this.state = {count: 0};
        //this.counter = this.counter.bind(this);
   // }    
     
    
    


/*counterEs6 = () => {
console.log(this.props.counter);
this.setState((prevState)=>{
            return {counter: prevState.count+1};
        });
};*/



componentDidMount() {
    console.log("blog loaded");
    this.props.counterEs6();
  }


render() {
    console.log("blogFeature component loaded");
    return (
            
<div >
      
 <div className="blogBrief"  style={{ "background-image": this.props.blogImage}}>
          
        <div className="blogBrief_title">{this.props.exampleText}</div>
                
         <button
        onClick={this.props.counterEs6}
      >
        count
      </button>       
                
        <div className="blogBrief_subtitle">
        <div>Secret Santa</div> 
        <div>Gift</div> 
        <div>Ideas</div>
       </div>
        
        <div className="blogBrief_link">{this.props.counter}</div>
        
        
        </div>
    </div> 
    );
        }
}



//BlogFeature.defaultProps = {title: 'Forever Me'};

