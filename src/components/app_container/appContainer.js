import React from "react";
import { connect } from "react-redux";
import Header from "../main_components/header"
import Footer from "../main_components/footer"

class AppContainer extends React.Component {
  render() {
    console.log('appcontainer props', this.props)
      return(
        <div className="App">
        <Header/>
        <header className="App-main">
          <div className="main-content">
            {this.props.children}
          </div>
        </header>
        <Footer/>
      </div>
      )
    
  }
    
}

const mapStateToProps = (state) => {
  return {
  };
};


export default connect(mapStateToProps)(AppContainer);
