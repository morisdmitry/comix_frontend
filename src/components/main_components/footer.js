import React from "react";
import { connect } from "react-redux";

class Footer extends React.Component {
  render() {
      return(
        <div>
        footer
      </div>
      )
    
  }
    
}

const mapStateToProps = (state) => {
  return {
  };
};


export default connect(mapStateToProps)(Footer);
