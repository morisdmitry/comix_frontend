import React from "react";
import './header.css'
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render() {
      return(
        <div className="header">
            <div className="container">
                <div className="menu">
                    <Link to="/">home</Link>
                </div>
            </div>
      </div>
      )
    
  }
    
}

const mapStateToProps = (state) => {
  return {
  };
};


export default connect(mapStateToProps)(Header);
