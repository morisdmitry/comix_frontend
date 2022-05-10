import React from "react";
import './imgWindow.css'

import { connect } from 'react-redux';
import { saveCoordinates, saveCoordinate_axis_x, saveCoordinate_axis_y } from '../../redux/actions'

class ImgWindow extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            contact: 'off'
          };
      }
      



      componentWillUpdate(nextProps, nextState) {

        if(this.props.SAVE_TO_STORE === true){
            this.props.onChangeSave()
          }
        if(nextProps.coordinates.axis_x <= 80){
            this.setState({contact: 'off'})

            this.props.onSaveCoordinate_axis_x(nextProps.coordinates.axis_x + 1)
        }
        else if(nextProps.coordinates.axis_x >= 540){
            this.setState({contact: 'off'})

            this.props.onSaveCoordinate_axis_x(nextProps.coordinates.axis_x - 1)
        }
        else if(nextProps.coordinates.axis_y <= 150){
            this.setState({contact: 'off'})

            this.props.onSaveCoordinate_axis_y(nextProps.coordinates.axis_y + 1)
        }
        else if(nextProps.coordinates.axis_y >= 615){
            this.setState({contact: 'off'})

            this.props.onSaveCoordinate_axis_y(nextProps.coordinates.axis_y - 1)
        }
        
      }
    

      moveAtStore(pageX, pageY) {

        this.props.onSaveCoordinate_axis_x(pageX - 40 / 2)
        this.props.onSaveCoordinate_axis_y(pageY - 40 / 2)
        
      }
    
      onMouseMove(event){
        if (this.state.contact === 'on'){
          this.moveAtStore(event.pageX, event.pageY);
        }
      };
    
    
      onMouseDown(event){
    
        if (this.state.contact === 'on'){
          this.moveAtStore(event.pageX, event.pageY);
          this.setState({contact: 'off'})
        }
        if (this.state.contact === 'off'){
          this.moveAtStore(event.pageX, event.pageY);
          this.setState({contact: 'on'})
        }
      
    
      }
    

    
    render() {
        return (
            <div className='work-window'>
              {/* <img 
                id='ball' 
                onMouseDown={(event)=>{this.onMouseDown(event)}}
                onMouseMove={(event)=>{this.onMouseMove(event)}}
                src={'https://js.cx/clipart/ball.svg'} 
                style={{color: "#FF8C00", 
                  cursor: "pointer", 
                  position: "absolute", 
                  z_index: "100", 
                  left: `${this.props.coordinates.axis_x}px`, 
                  top: `${this.props.coordinates.axis_y}px`
                }}
              /> */}
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
        onSaveCoordinate_axis_x: (val) => dispatch(saveCoordinate_axis_x(val)),
        onSaveCoordinate_axis_y: (val) => dispatch(saveCoordinate_axis_y(val)),
        
        onChangeSave: ()=>{
            const action = {type: 'DISALLOW_SAVING'}
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ImgWindow);