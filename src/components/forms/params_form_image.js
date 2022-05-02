import React from "react";
import { connect } from 'react-redux';
import { saveCoordinate_axis_y, saveCoordinate_axis_x } from '../../redux/actions'
class ParamsFormImage extends React.Component {

    
    constructor(props) {
        super(props);
      }


      handlerFuncAxisX(e){
        this.props.onSaveCoordinate_axis_x(e.target.value)

      }

      handlerFuncAxisY(e){
        this.props.onSaveCoordinate_axis_y(e.target.value)
      }

      handleUploadFile(e){
        console.log('file', e.target.files[0].name)
        
      }

    render() {
       return(
        <div>
        <p>params</p>
        <p><label>
            upload image:
            <input 
            type="file" 
            name="ax_x" 
            // value={this.props.coordinate_x}
            onChange={(e)=> this.handleUploadFile(e)} 
            />
        </label></p>
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
            <input 
            type="text" 
            name="ax_x" 
            value={this.props.coordinate_x}
            onChange={(e)=> this.handlerFuncAxisX(e)} 
            />
        </label></p>
        <p><label>
            axis y:
            <input 
            type="text" 
            name="ax_y" 
            value={this.props.coordinate_y}
            onChange={(e)=> this.handlerFuncAxisY(e)} 
            />
        </label></p>
        
    </div>
       )



     
    }
}





function mapStateToProps(state) {
    return {
        coordinate_x: state.createComixReducer.coordinates.axis_x,
        coordinate_y: state.createComixReducer.coordinates.axis_y,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        onSaveCoordinate_axis_x: (val) => dispatch(saveCoordinate_axis_x(val)),
        onSaveCoordinate_axis_y: (val) => dispatch(saveCoordinate_axis_y(val)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ParamsFormImage);