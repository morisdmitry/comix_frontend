import React from "react";
import Elements  from '../elements/elements';
import Buttons  from '../buttons/buttons';
import { connect } from 'react-redux';

import { addNewUnit } from '../../redux/actions'
class CreateComixPage extends React.Component {
    constructor(props) {
        super(props);
      }

    hanldeAddNewUnit(){
        // console.log('add new unit')
        console.log('counter', this.props.counter)
        this.props.onAddNewUnit()

        console.log('add new store', this.props.unit)
        console.log('counter', this.props.counter)
    }
    render() {
        return (
            <div>
                
                <Elements></Elements>
                <Buttons></Buttons>
                <button onClick={()=> this.hanldeAddNewUnit()}>add new unit</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        unit: state.createComixReducer,

        counter: state.createComixReducer.utils.counter,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        onAddNewUnit: () => dispatch(addNewUnit()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateComixPage);