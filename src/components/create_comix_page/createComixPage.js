import React from "react";
import ComixPage  from '../comix_page/comixPage';
import Buttons  from '../buttons/buttons';
import { connect } from 'react-redux';
import { queueHandler } from '../../redux/utils'
import { addNewPage } from '../../redux/actions'
class CreateComixPage extends React.Component {
    constructor(props) {
        super(props);
      }

    handleClick(e){
        this.props.onAddNewPage()
    }


    render() {
        return (
            <div>
                {
                    this.props.comixPages.map((page, index)=>{
                        return(
                            <ComixPage 
                                pageId={page.pageId}
                                pageElements={page.pageElements}
                                borders={page.borders}
                                pageTop={queueHandler(index)}
                            ></ComixPage>
                        )
                    })
                }
                <button onClick={(e)=>{this.handleClick(e)}}>add new page</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        viewState: state.createComixReducer,
        comixPages: state.createComixReducer.comixPages,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        onAddNewPage: () => dispatch(addNewPage()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateComixPage);