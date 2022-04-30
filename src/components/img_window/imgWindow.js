import React from "react";
import './imgWindow.css'

import { connect } from 'react-redux';
import { saveCoordinates } from '../../redux/actions'

class ImgWindow extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            contact: 'off',
            left: 300,
            top: 400,
          };
      }
      



      componentWillUpdate(nextProps, nextState) {
        if(this.props.saveToStore === true){
            this.props.onChangeSave()
          }
        if(nextState.left <= 110){
            this.setState({contact: 'off'})

            this.setState({left: nextState.left + 1})
        }
        else if(nextState.left >= 580){
            this.setState({contact: 'off'})

            this.setState({left: nextState.left - 1})
        }
        else if(nextState.top <= 150){
            this.setState({contact: 'off'})

            this.setState({top: nextState.top + 1})
        }
        else if(nextState.top >= 615){
            this.setState({contact: 'off'})

            this.setState({top: nextState.top - 1})
        }
        
      }
    
      moveAt(pageX, pageY) {
        this.setState({left: pageX - 40 / 2})
        this.setState({top: pageY - 40 / 2})
      }
    
      onMouseMove(event){
        if (this.state.contact === 'on'){
          this.moveAt(event.pageX, event.pageY);
        }
      };
    
    
      onMouseDown(event){
    
        if (this.state.contact === 'on'){
          this.moveAt(event.pageX, event.pageY);
          this.setState({contact: 'off'})
        }
        if (this.state.contact === 'off'){
          this.moveAt(event.pageX, event.pageY);
          this.setState({contact: 'on'})
        }
      
    
      }
    

    
    render() {
        if(this.props.saveToStore){
            let coordinates = {
                axis_x: this.state.top,
                axis_y: this.state.left,
            }
            this.props.onSaveCoordinates(coordinates)
            this.props.onChangeSave()
          }
        return (
            <div className='work-window'>
                      <img 
  id='ball' 
  onMouseDown={(event)=>{this.onMouseDown(event)}}
  onMouseMove={(event)=>{this.onMouseMove(event)}}
  src={'https://js.cx/clipart/ball.svg'} 
  style={{color: "#FF8C00", cursor: "pointer", position: "absolute", z_index: "100", left: `${this.state.left}px`, top: `${this.state.top}px`}}
  
  />
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
        onSaveCoordinates: (val) => dispatch(saveCoordinates(val)),
        
        onChangeSave: ()=>{
            const action = {type: 'DISALLOW_SAVING'}
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ImgWindow);