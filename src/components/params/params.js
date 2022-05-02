import React from "react";
import './params.css'

import { connect } from 'react-redux';
import ParamsFormText from '../forms/params_form_text'
import ParamsFormImage from '../forms/params_form_image'

class Params extends React.Component {

    
    constructor(props) {
        super(props);     
      }


    render() {
        if(this.props.paramsType === 'text'){
            return <ParamsFormText/>
        }
        else if(this.props.paramsType === 'image'){
            return <ParamsFormImage/>
        }
    }
}





function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return{
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Params);