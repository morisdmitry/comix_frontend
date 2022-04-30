import React from "react";
import './elements.css'
import ElementSettings from '../element_settings/elementSettings'
import ImgWindow from '../img_window/imgWindow'

import { connect } from 'react-redux';

class Elements extends React.Component {

    constructor(props) {
        super(props);
      }


    
    render() {
        return (
            <div className="str-field">
                <ImgWindow saveToStore={this.props.SAVE_TO_STORE}/>
                <ElementSettings/>
                <button onClick={this.props.onChangeSave}>save data</button>

            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        save: state.createComixReducer.SAVE_TO_STORE,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        onChangeSave: ()=>{
            const action = {type: 'ALLOW_SAVING'}
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Elements);
