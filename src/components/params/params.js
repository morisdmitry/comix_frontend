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
        if(this.props.elType === 'text'){
            return <ParamsFormText
                coordinates={this.props.coordinates}
                pageId={this.props.pageId}
                elId={this.props.elId}

            />
        }
        else if(this.props.elType === 'image'){
            return <ParamsFormImage
                coordinates={this.props.coordinates}
                pageId={this.props.pageId}
                elId={this.props.elId}
            />
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