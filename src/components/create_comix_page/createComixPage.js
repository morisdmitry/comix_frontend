import React from "react";
import ComixPage  from '../comix_page/comixPage';
import Buttons  from '../buttons/buttons';
import { connect } from 'react-redux';

import { addNewPage } from '../../redux/actions'
class CreateComixPage extends React.Component {
    constructor(props) {
        super(props);
      }

    handleClick(e){
        this.props.onAddNewPage()
    }


    render() {
        console.log('state', this.props.viewState);
        return (
            <div>
                {
                    this.props.comixPages.map((page)=>{
                        return(
                            <ComixPage 
                                pageId={page.pageId}
                                pageElements={page.pageElements}
                                borders={page.borders}
                                top_test={page.top_test}
                            ></ComixPage>
                        )
                    })
                }
                {/* <Elements></Elements> */}
                <button onClick={(e)=>{this.handleClick(e)}}>add new page</button>
                {/* <Buttons></Buttons> */}
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