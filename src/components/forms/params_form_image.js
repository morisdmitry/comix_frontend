import React from "react";
import { connect } from 'react-redux';
import { saveCoordinate_axis_y, saveCoordinate_axis_x, deleteElement} from '../../redux/actions'
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBFile
  } from 'mdb-react-ui-kit';


class ParamsFormImage extends React.Component {

    
    constructor(props) {
        super(props);
      }


      handlerFuncAxisX(e){
        this.props.onSaveCoordinate_axis_x(this.props.pageId, this.props.elId, e.target.value)

      }

      handlerFuncAxisY(e){
        this.props.onSaveCoordinate_axis_y(this.props.pageId, this.props.elId, e.target.value)
      }

      handleUploadFile(e){
        console.log('file', e.target.files[0].name)
        
      }

      handleDelete(e){
        
        console.log('delete', this.props.elId)
        this.props.onDeleteElement(this.props.pageId, this.props.elId)
      }

    render() {
       return(
<div style={{ width: '23rem' }}>

<MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form3Example1'
          
            type="text" 
            name="ax_x" 
            value={this.props.coordinates.axis_x}
            onChange={(e)=> this.handlerFuncAxisX(e)} 
          />
        <label class="form-label">axis X</label>
        </MDBCol>
        <MDBCol>
          <MDBInput id='form3Example2' 
            type="text" 
            name="ax_y" 
            value={this.props.coordinates.axis_y}
            onChange={(e)=> this.handlerFuncAxisY(e)} 
          />
        <label class="form-label">axis Y</label>
        </MDBCol>
        <MDBCol md='5'>
            <div className='file-container'>
                <MDBFile  id='customFile' />
            </div>
        </MDBCol>
        <MDBCol >
        <button onClick={(e)=> this.handleDelete(e)}>del</button>
        </MDBCol>
        
      </MDBRow>
    </div>
    //     <div className="params-form">
    //         <p>params</p>
    //         <p>{this.props.elId}</p>

    //         <p><label>
    //             upload image:
    //             <input 
    //             type="file" 
    //             name="ax_x" 
    //             // value={this.props.coordinate_x}
    //             onChange={(e)=> this.handleUploadFile(e)} 
    //             />
    //         </label></p>
    //         <p><label>
    //             zoom:
    //             <input type="integer" name="imagzoome_tilt" />
    //         </label></p>
    //         <p><label>
    //         image tilt:
    //             <input type="integer" name="image_tilt" />
    //         </label></p>
    //         <p><label>
    //             axis X:
    //             <input 
    //             type="text" 
    //             name="ax_x" 
    //             value={this.props.coordinates.axis_x}
    //             onChange={(e)=> this.handlerFuncAxisX(e)} 
    //             />
    //         </label></p>
    //         <p><label>
    //             axis y:
    //             <input 
    //             type="text" 
    //             name="ax_y" 
    //             value={this.props.coordinates.axis_y}
    //             onChange={(e)=> this.handlerFuncAxisY(e)} 
    //             />
    //         </label>
    //         </p>
    //         <button onClick={(e)=> this.handleDelete(e)}>del</button>
    
    
    // </div>
       )



     
    }
}





function mapStateToProps(state) {
    return {
        // coordinate_x: state.createComixReducer.coordinates.axis_x,
        // coordinate_y: state.createComixReducer.coordinates.axis_y,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        onSaveCoordinate_axis_x: (pageId, elId, val) => dispatch(saveCoordinate_axis_x(pageId, elId, val)),
        onSaveCoordinate_axis_y: (pageId, elId, val) => dispatch(saveCoordinate_axis_y(pageId, elId, val)),
        onDeleteElement: (pageId, elId) => dispatch(deleteElement(pageId, elId)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ParamsFormImage);