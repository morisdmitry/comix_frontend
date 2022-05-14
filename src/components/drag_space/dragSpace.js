import React from "react";
import './dragSpace.css'
import DragElement from '../drag_element/dragElement'

import { saveBorders } from '../../redux/actions'

import { connect } from 'react-redux';
import { axisXWindow, axisYWindow } from '../../config/config'

class DragSpace extends React.Component {

    constructor(props) {
        super(props);
      }


    render() {
        return (

            <div 
                className="drag-space-container" 
                ref={this.spaceRef} 
                style={{width: `${axisXWindow}px`, 
                        height: `${axisYWindow}px`
                        }}
            >
                {this.props.pageElements.map((el)=>{
                            return(
                                <DragElement
                                    pageTop = {this.props.pageTop}
                                    coordinates={el.coordinates}
                                    elId={el.id}
                                    pageId={this.props.pageId}
                                    elType={el.elType}
                                />
                            )
                        })}

            </div>
        )
    }
}



function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return{
        onSaveBorders: (pageId, borders) => dispatch(saveBorders(pageId, borders))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DragSpace);
