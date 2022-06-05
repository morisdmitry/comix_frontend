import React from "react";
import {Link} from 'react-router-dom'
import './comixList.css'
import { connect } from 'react-redux';
class ComixList extends React.Component {

    constructor(props) {
        super(props);
      }


    
    render() {
        return (

            <div 
                className="comix-list-element" 
                
            >
                {this.props.comix_id}
                
                <Link  to={`create_comix_page/${this.props.comix_id}`}>comix {this.props.comix_id} </Link>
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
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ComixList);
