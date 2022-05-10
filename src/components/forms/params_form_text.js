import React from "react";

import { connect } from 'react-redux';

class ParamsFormText extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {
            contact: 'off',
            axis_x: 100,
            // axis_y: this.props.coordinates.axis_y,
          };
        
      }
    

    render() {
       return(
           <div className="params-form">
                <div>
                    <p>params</p>
                    <p><label>
                        text:
                        <input type="text" name="text" />
                    </label></p>
                    <p><label>
                        axis X:
                        <input type="text" name="ax_x" />
                    </label></p>
                    <p><label>
                        axis Y:
                        <input type="text" name="ax_y" />
                    </label></p>
                </div>
           </div>
       )



     
    }
}





function mapStateToProps(state) {
    return {
        coordinates: state.createComixReducer.coordinates,
    }
}

function mapDispatchToProps(dispatch) {
    return{

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ParamsFormText);