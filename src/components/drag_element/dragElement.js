import React from "react";

import { connect } from 'react-redux';
import { saveCoordinate_axis_x, saveCoordinate_axis_y, saveZIndex } from '../../redux/actions'
import { axisXWindow, axisYWindow } from '../../config/config'
class DragElement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contact: 'off',
          };
      }

      componentDidUpdate(nextProps, nextState) {
        if(nextProps.coordinates.axis_x <= 0){
            this.setState({contact: 'off'})
            this.props.onSaveCoordinate_axis_x(this.props.pageId, this.props.elId, nextProps.coordinates.axis_x + 1)
        }
        else if(nextProps.coordinates.axis_x >= axisXWindow-40){
            this.setState({contact: 'off'})
            this.props.onSaveCoordinate_axis_x(this.props.pageId, this.props.elId, nextProps.coordinates.axis_x - 1)
        }
        else if(nextProps.coordinates.axis_y <= 0){
            this.setState({contact: 'off'})
            this.props.onSaveCoordinate_axis_y(this.props.pageId, this.props.elId, nextProps.coordinates.axis_y + 1)
        }
        else if(nextProps.coordinates.axis_y >= axisYWindow - 40){
            this.setState({contact: 'off'})
            this.props.onSaveCoordinate_axis_y(this.props.pageId, this.props.elId, nextProps.coordinates.axis_y - 1)
        }
        
      }

      moveAtStore(pageX, pageY) {
        this.props.onSaveCoordinate_axis_x(this.props.pageId, this.props.elId, pageX - 40 / 2)
        this.props.onSaveCoordinate_axis_y(this.props.pageId, this.props.elId, pageY - 40 / 2)
        
      }

      mouseDownStore(pageX, pageY) {
        this.props.onSaveCoordinate_axis_x(this.props.pageId, this.props.elId, pageX - 40 / 2)
        this.props.onSaveCoordinate_axis_y(this.props.pageId, this.props.elId, pageY - 40 / 2)
        
      }
    
      onMouseMove(event){
        if (this.state.contact === 'on'){
            this.moveAtStore(event.pageX, event.pageY-this.props.pageTop);
        }
      };
    
      onMouseDown(event){
        this.props.onSaveZIndex(1)
        if (this.state.contact === 'on'){
          this.mouseDownStore(event.pageX, event.pageY-this.props.pageTop);
          this.setState({contact: 'off'})
        }
        if (this.state.contact === 'off'){
          this.mouseDownStore(event.pageX, event.pageY-this.props.pageTop);
          this.setState({contact: 'on'})
        }
    
      }
    
    render() {
        return (

            <div className="drag-element">
                <img 
                    id='ball' 
                    onMouseDown={(event)=>{this.onMouseDown(event)}}
                    onMouseMove={(event)=>{this.onMouseMove(event)}}
                    src={'https://js.cx/clipart/ball.svg'} 
                    style={{color: "#FF8C00", 
                        cursor: "pointer", 
                        position: "absolute", 
                        zIndex: this.props.z_index, 
                        left: `${this.props.coordinates.axis_x}px`, 
                        top: `${this.props.coordinates.axis_y}px`
                    }}
                />

            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        z_index: state.createComixReducer.commonZIndex
    }
}

function mapDispatchToProps(dispatch) {
    return{
        onSaveCoordinate_axis_x: (pageId, elId, val) => dispatch(saveCoordinate_axis_x(pageId, elId, val)),
        onSaveCoordinate_axis_y: (pageId, elId, val) => dispatch(saveCoordinate_axis_y(pageId, elId, val)),
        onSaveZIndex: (val) => dispatch(saveZIndex(val)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragElement);
