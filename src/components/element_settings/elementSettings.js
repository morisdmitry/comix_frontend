import React from "react";
import './elementSettings.css'
import Params from "../params/params";

import { connect } from 'react-redux';

class ElementSettings extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            val: 'text',
          };
      }


    handleChange() {

        if(this.state.val === 'image'){
            this.setState({val: 'text'})
        }
        else if(this.state.val === 'text'){
            this.setState({val: 'image'})
        }
        }
    
    render() {
        
        return (
            <div className="work-settings">
                <select onChange={()=>{this.handleChange()}}>
                    <option>text</option>
                    <option>image</option>
                </select>
                <Params
                    paramsType = {this.state.val}
                />
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        save: state.createComixReducer.SAVE_TO_STORE,
    }
}


export default connect(mapStateToProps)(ElementSettings);
