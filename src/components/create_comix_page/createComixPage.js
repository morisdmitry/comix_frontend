import React from "react";
import Elements  from '../elements/elements';
import Buttons  from '../buttons/buttons';
import { connect } from 'react-redux';

class CreateComixPage extends React.Component {
    constructor(props) {
        super(props);
        
      }
    render() {
        return (
            <div>

                <Elements paramsState={this.props.paramsState}></Elements>
                <Buttons></Buttons>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        likes: state.likes,
        paramsState: state.paramsState
    }
}


export default connect(mapStateToProps)(CreateComixPage);