import React from "react";
import { connect } from "react-redux";

class Content extends React.Component {
  render() {
      return(
        <div>
        content
      </div>
      )
    
  }
    
}

const mapStateToProps = (state) => {
  return {
  };
};


export default connect(mapStateToProps)(Content);
