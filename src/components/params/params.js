import React from "react";
import './params.css'

import { connect } from 'react-redux';

class Params extends React.Component {

    
    constructor(props) {
        super(props);
        
      }
      


    render() {
        function getParams(type, coordinates) {
            if(type === 'text'){
                return(
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
                )
            }
            else if(type === 'image'){
                return(
                    <div>
                    <p>params</p>
                    <p><label>
                        zoom:
                        <input type="integer" name="imagzoome_tilt" />
                    </label></p>
                    <p><label>
                    image tilt:
                        <input type="integer" name="image_tilt" />
                    </label></p>
                    <p><label>
                        axis X:
                        <input type="text" name="ax_x" value={coordinates.axis_x} />
                    </label></p>
                    <p><label>
                        axis Y:
                        <input type="text" name="ax_y" value={coordinates.axis_x}/>
                    </label></p>
                </div>
                )
            }
            
        }

        return (
            <div className="work-params">
                {getParams(this.props.paramsType, this.props.coordinates)}
            </div>
        )
    }
}





function mapStateToProps(state) {
    return {
        saveToStore: state.createComixReducer.SAVE_TO_STORE,
        coordinates: state.createComixReducer.coordinates,
    }
}

function mapDispatchToProps(dispatch) {
    return{

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Params);