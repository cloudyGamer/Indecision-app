/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';

const BigImage = (props) => (

      <div xmlns="http://www.w3.org/1999/xhtml" 
          className={props.class} 
          onClick={() => props.pageOpen(props.articleLink)}>

          <div className={props.titleClass}>
               <span className={props.span}>{props.title}</span>
          </div>
          
          <div className={props.buttonClass}> 
               <div className="rel_bigImage_button_text">
                   READ
               </div>
          </div>
          
      </div>
                  
);


export default BigImage;

