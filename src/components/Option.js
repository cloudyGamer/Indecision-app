import React from 'react'; 

const Option = (props) => (
 
    <div>
      {props.optionText}
      <div className="widget-header">
      <h3>Your Options</h3>
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
      </div>
      </div>

);

export default Option;