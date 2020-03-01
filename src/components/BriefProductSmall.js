/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 /* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react';
const BriefProductSmall = (props) => (
<div className="briefContainer_ProductSmall">
{/*overlap Div*/} 
<div className="briefContainer_ProductSmall_overlapWrapper">
     <div className="topShelfSmall_Image">
                     
                 {/*// photo //*/}
                        
                            <img src="https://pauldowlingportfolio.com/opencart-3.0.3.1/assets/christmas_carol_1.png" className="topShelfSmall_Image_photo"/>
                        
                 {/*// *hoto //*/}
                 
                 {/*// vegan //*/}
                        
                             <img className="topShelfSmall_Image_vegan" src="https://pauldowlingportfolio.com/opencart-3.0.3.1/assets/V_de_Vegan.png" />
                         
                 {/*// *egan //*/}
                 
      </div>
 </div>
     {/*text container*/}
     <div className="briefContainer_ProductSmall_text ">
          {/*name*/}
          <div className="briefContainer_ProductSmall_text_name">
               <h1>{props.productName}</h1>
          </div>    
          
          {/*type*/}
          <div className="briefContainer_ProductSmall_text_type">
               Gift
          </div>
          
          {/*partial description*/}
          <div className="briefContainer_ProductSmall_text_desc">
               {props.productDesc}
          </div>
          
          {/*price measurement*/}
          <div className="briefContainer_ProductSmall_text_price">
               €12
          </div>
          
          <div className="briefContainer_ProductSmall_text_measure">
               <strong>
                    / Each
               </strong>
          </div>
      
    </div>
    </div>
);



export default BriefProductSmall;

