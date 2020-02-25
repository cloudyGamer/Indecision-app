/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'; 

export default class FeaturedProduct extends React.Component {
     constructor(props) {
           super(props)

           this.callState = this.props.propObj.featuredProductObj.callState();
           this.master = this.props.propObj.featuredProductObj.masterObj;
           this.state = this.props.propObj.feature1;
           this.state2 = this.props.propObj.feature2;
     }
     
     componentDidMount() {
      let uniqueMessage = "FP:CDM:";
     const parentState = this.callState;
     
     //console.log(uniqueMessage+"parent state"+JSON.stringify(this.state.state));
     //console.log('FeaturedProduct component did mount');
     console.log(uniqueMessage+"this.props"+Object.keys(this.state));
          console.log(uniqueMessage+"this.props2"+Object.keys(this.state2));

     }        

     render() {
        let uniqueMessage = "FP:REN";
        const parentState = this.callState;
        let description = this.state.description;
        var firstLine = description.split('', 6);
        var productImage = "http://localhost:8888/opencart-3.0.3.1/upload/image/"+this.state.image;
        const trimmedPrice = Math.round(this.state.price * 100) / 100;

          return(
          <div > 
               <div className={'featProd_sidea'}>
                    <img src={productImage}  alt="product_photo" className="featProd_Image_photo"/>
               </div>
               <div className={'featProd_sideb'}>
                    <div className={'featProd_titleHold'}>
                         <div className={'featProd_titleHold_title'}>{this.state.name}</div>
                         
                         <div className={'topShelf_titleHold_subtitle greyBorder'}>{trimmedPrice}</div>
                         <div className={'topShelf_titleHold_subtitle greyBorder'}>{"first line"+firstLine}</div>
                         
                         
                    </div>
               </div>
          </div>)
     }  
    
}

