import React from "react";
import './comixPage.css'
import ElementSettings from '../element_settings/elementSettings'
import DragSpace from '../drag_space/dragSpace'

import { addElement, deletePage } from '../../redux/actions'
import { connect } from 'react-redux';
import { marginBetweenPages } from '../../config/config'
import { axisYWindow } from '../../config/config'

class ComixPage extends React.Component {

    constructor(props) {
        super(props);
      }

      handleAddElement(e){
        if(this.props.pageElements.length >= 1){
            const lastId = this.props.pageElements[this.props.pageElements.length -1].id
            this.props.onAddElement(this.props.pageId, lastId+1)
        }
        else{
            this.props.onAddElement(this.props.pageId, 1)
        }
    }
    handleDelPage(e){
        this.props.onDeletePage(this.props.pageId)
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
                    pageTop={this.props.pageTop}
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
                        <button onClick={(e)=>{this.handleAddElement(e)}}>add new element</button>
                    </div>
                </div>
                <div className="del-page-button">
                    <button onClick={(e)=>{this.handleDelPage(e)}}>del page</button>
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
        onAddElement: (pageId, newElid) =>  dispatch(addElement(pageId, newElid)),
        onDeletePage: (pageId) =>  dispatch(deletePage(pageId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ComixPage);
