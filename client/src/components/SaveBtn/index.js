import React from "react";

function SaveBtn(props) {
    return (
      <button type="button" className="btn btn-info" {...props}  tabIndex="0" style={{ float: "right" }}>SAVE</button>
     
    );
  }
  
  export default SaveBtn;