import React from "react";
import { connect } from "react-redux";

import { addComixList } from '../../redux/actions';
import ComixList from '../comix_list/comixList';

import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
      }



    componentDidMount() {
        this.props.onAddComixList()
    }


    render() {
        return(
            <div>

            <MDBListGroup style={{ minWidth: '22rem' }}>
            {this.props.state.comixes.map((comix, index) => {
                return <MDBListGroupItem><ComixList
                key = {index}
                comix_id = {comix.id}

            /></MDBListGroupItem>
                
            })
            }
            </MDBListGroup>
            
            </div>
        )
            
    }
    
}

const mapStateToProps = (state) => {
  return {

    state: state.comixList,
  };
};


function mapDispatchToProps(dispatch) {
    return{
        onAddComixList: () => dispatch(addComixList()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
