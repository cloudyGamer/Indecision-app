console.log("personalWebsite.js is running  brand new");
//styles
const introStyle = {
    marginTop :"5%"    
};

const homePageStyle ={
fontFamily : "'Open Sans', sans-serif"
};

const androidTitleStyle = {
 margin: "0px" ,
 padding: "0px",
 marginTop: "2.5%"
};

const androidLinksStyle = {
 position : "relative",
 top: "-15px",
 margin: "0px",
 padding: "0px",
 borderWidth : "2px"
};

const aStyle = {
textDecoration : "none",
color : "black"
};

const androidPicture = {
marginBottom : "50px"    
};

//
//components
class PersonalWebsite extends React.Component {
constructor(props){
super(props);

}

render(){

        return(<div style={homePageStyle} className='wrapper'>
        

                <Header />
                <ComponentApp 
          
                />
                </div>
                ); 
}
}

//
//component Header
const Header = (props) =>{
console.log('header component');

return (<div>
         <img src="assets/mainLogo.png" alt=""  className="logo"/>
    <div id="intro" style={introStyle} className="greyFont">
        <div>I am a full stack developer for ios, android and the web. I am skilled in ES6, React, Jquery, PHP, HTML, CSS, Photoshop, Figma, SQL, managing EC2 Instances, Amazon AWS RDS Databases, Cordova, X-Code and App Store Connect.</div>

    </div>   
            </div>);
};
//
class ComponentApp extends React.Component {
constructor(props){
super(props);
this.state = {
           visibility :true,
           testValue : "correct_testValue_string"
        };

//bind functions
this.moreInfo = this.moreInfo.bind(this);
//
}
//
componentDidUpdate (prevState,prevProps){
    console.log('update to state',this.state.visibility); 
}
    //
//
//functions (this function works in toggling state)

moreInfo () {
console.log("more info triggered");   
//set state
/*this.setState(()=>{
            return {visibility: true};
        });*/
this.setState((prevState)=>{
            return {visibility: !prevState.visibility};
        });
}
//
render(){
return (<div>

<div id="androidTitle" className='parent' style={androidTitleStyle}>
                            <h2 className='heading'>DIT App</h2></div>
<div id='androidLinks' className='parent' style={androidLinksStyle}>
                <div  className='link leftLink'><a style={aStyle} href="http://ec2-54-246-238-240.eu-west-1.compute.amazonaws.com/Index.html" target="_blank" >Visit</a></div >
                 <div  className='link'><a onClick={this.moreInfo} target="_blank" style={aStyle}>{this.state.visibility? "Hide" : "Learn More"}</a></div>
              </div>
              {/* new  info */}
            {this.state.visibility && (<div className="parent greyFont"><p>here are some details</p></div>)}
            
              <div className='parent'>  
                  <img src="assets/AndroidApp.png" alt="" style={androidPicture} className='appIphone'/>
              </div>    
            </div>);    
}
//
};

//

//
//call App
const appRoot = document.getElementById("app");

ReactDOM.render(<PersonalWebsite />,appRoot);
//
//old website instance
/*
const render = () =>{
const template = (<div>
        <div id="homePage"  style={homePageStyle}>
        <div id="wrapper"  className="wrapper">
        <img src="assets/mainLogo.png" alt=""  className="logo"/>
        <div id="intro" style={introStyle} className="greyFont">
                  <div>I am a full stack developer for ios, android and the web. I am skilled in ES6, React, Jquery, PHP, HTML, CSS, Photoshop, Figma, SQL, managing EC2 Instances, Amazon AWS RDS Databases, Cordova, X-Code and App Store Connect.</div>
                
              </div>
             
                            <div id="androidTitle" className='parent' style={androidTitleStyle}>
                            <h2 className='heading'>DIT App</h2></div>
<div id='androidLinks' className='parent' style={androidLinksStyle}>
                <div  className='link leftLink'><a style={aStyle} href="http://ec2-54-246-238-240.eu-west-1.compute.amazonaws.com/Index.html" target="_blank" >Visit</a></div >
                  <div  className='link'><a onClick={moreInfo} target="_blank" style={aStyle}>{visibility? "Hide" : "Learn More"}</a></div>
              </div>
              {visibility && (<div className="parent greyFont"><p>here is some details</p></div>)}
              <div className='parent'>  
                  <img src="assets/AndroidApp.png" alt="" style={androidPicture} className='appIphone'/>
              </div>

        </div>
        
        </div>

        </div>);
  ReactDOM.render(template,appRoot);
};


        const appRoot = document.getElementById("app");
  render();
*/