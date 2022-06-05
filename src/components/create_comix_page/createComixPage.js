import React from "react";
import ComixPage  from '../comix_page/comixPage';
import { connect } from 'react-redux';
import { queueHandler } from '../../utils/utils'
import { addNewPage, addComixPage } from '../../redux/actions'

class CreateComixPage extends React.Component {
    constructor(props) {
        super(props);
      }

    handleClick(e){
        this.props.onAddNewPage()
    }

    componentDidMount() {

        this.props.onAddComixPage(this.props.comix_id_get)
    }

    render() {
        return (
            <div>
                {
                    this.props.comixPages.map((page, index)=>{
                        return(
                            <ComixPage 
                                key={page.id}
                                pageId={page.id}
                                pageElements={page.elements}
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
        onAddComixPage: (comixId) => dispatch(addComixPage(comixId)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateComixPage);