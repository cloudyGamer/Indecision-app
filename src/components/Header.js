import React from 'react'; 
import HomePage from './HomePage';
const Header = (props) => (

    <div className="header" onClick={()=> props.setHomePage("header")} xmlns="http://www.w3.org/1999/xhtml">
         <div className="container">
             <h1 className="header__title">{props.title}</h1>
           {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
         </div>
    </div>
   

);

Header.defaultProps = {title: 'Forever Me'};

export default Header;