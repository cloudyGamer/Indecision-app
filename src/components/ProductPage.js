/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//import from './'
import React from 'react'; 
import Banner from './Banner'
import ToolBar from './ToolBar'
import Product from './Product'
import Template from './Template'
//import Template from './Template'

export default class ProductPage extends React.Component {
  componentDidMount() {
  console.log('productPage component did mount');
  }         
  
        render() {return(<div>
                   {this.props.fetch("product/product&product_id=53")}
                   <Product 
                   fetch={this.props.fetch}
                   route={this.props.route}
                   
          route={this.props.route}
          name = {this.props.name}
         description = {this.props.description}
          quantity = {this.props.quantity}
        image  = {this.props.image}
         price = {this.props.price}
         imageAd = {this.props.imageAd}
               />
                   
                    </div>)  }  
    
}
