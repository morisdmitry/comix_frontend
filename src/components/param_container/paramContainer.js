import React from "react";
import { useParams } from 'react-router-dom';
const ParamsContainer = (props) => {
  // need because react-router-dom doesnt send throw props
    const {id} = useParams()
    const newEl = React.cloneElement(props.children, {
        comix_id_get: id
      })
    return(
        <>
          {newEl}
        </>
    )
}


export default ParamsContainer