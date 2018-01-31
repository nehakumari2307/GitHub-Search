import React from "react";

const Main = function(props) {
    return (
      <div> 
        <div id="root-header">
            GitHub Search!!
        </div>
        <div>
          { props.children }
        </div>
      </div>
    );
};

export default Main;
