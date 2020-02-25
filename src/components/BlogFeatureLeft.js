/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react';
const BlogFeatureLeft = (props) => (
        <div>
        <div className="blogBriefLeft">
        <div className="blogBrief_title">Features</div>
        <div className="blogBrief_subtitle">
        <div>Secret Santa</div> 
        <div>Gift</div> 
        <div>Ideas</div>
       </div>
        
        <div className="blogBrief_link">Different Text</div>
        
        
        </div>
    </div>
);

BlogFeatureLeft.defaultProps = {title: 'Forever Me'};

export default BlogFeatureLeft;
