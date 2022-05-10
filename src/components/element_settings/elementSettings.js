import React from "react";
import './elementSettings.css'
import Params from "../params/params";

import { changeElementType } from '../../redux/actions'

import { connect } from 'react-redux';

class ElementSettings extends React.Component {
    
    constructor(props) {
        super(props);
      }


    handleChange(e) {
        this.props.onChangeElementType(this.props.pageId, this.props.elId, e.target.value)
        }
    
    render() {
        
        return (
            
            <div className="work-settings" key={this.props.elId}>
                <select value={this.props.elType} onChange={(e)=>{this.handleChange(e)}}>
                    <option value="text">text</option>
                    <option value="image">image</option>
                </select>
                <Params
                    elType = {this.props.elType}
                    coordinates={this.props.coordinates}
                    pageId={this.props.pageId}
                    elId={this.props.elId}
                />
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch){
    return{
        onChangeElementType: (pageId, elId, val) =>  dispatch(changeElementType(pageId, elId, val))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ElementSettings);
