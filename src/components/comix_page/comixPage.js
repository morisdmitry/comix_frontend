import React from "react";
import './comixPage.css'
import ElementSettings from '../element_settings/elementSettings'
import DragSpace from '../drag_space/dragSpace'

import { addElement } from '../../redux/actions'
import { connect } from 'react-redux';
import { marginBetweenPages } from '../../config/config'
import { axisYWindow } from '../../config/config'

class ComixPage extends React.Component {

    constructor(props) {
        super(props);
      }

      handleClickElement(e){
        if(this.props.pageElements.length >= 1){
            const lastId = this.props.pageElements[this.props.pageElements.length -1].id
            this.props.onAddElement(this.props.pageId, lastId+1)
        }
        else{
            this.props.onAddElement(this.props.pageId, 1)
        }
    }
    
    render() {
        return (

            <div 
                className="comix-page" 
                key={this.props.pageId}
                style={{marginBottom: marginBetweenPages}}
            >
                <div className="drag-space">
                <DragSpace 
                    pageId={this.props.pageId}
                    pageElements={this.props.pageElements}
                    borders={this.props.borders}
                    top_test={this.props.top_test}
                />
                </div>
                

                <div className="element-settings"
                    style={{
                        maxHeight: axisYWindow
                    }}
                >
                    {this.props.pageElements.map((el)=>{
                            return(
                                <ElementSettings
                                    pageId={this.props.pageId}
                                    elId={el.id}
                                    elType={el.elType}
                                    coordinates={el.coordinates}
                                />
                            )
                        })}
                    <div>
                        <button onClick={(e)=>{this.handleClickElement(e)}}>add new element</button>
                    </div>
                </div>
                


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
        onAddElement: (pageId, newElid) =>  dispatch(addElement(pageId, newElid))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ComixPage);
