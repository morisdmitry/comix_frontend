import React from "react";
import { connect } from "react-redux";
import Content from "../main_components/content"
class MainPage extends React.Component {
  render() {
      
      return(
        <>
        <Content/>
        </>
      )
    
  }
    
}

const mapStateToProps = (state) => {
  return {
  };
};


export default connect(mapStateToProps)(MainPage);
