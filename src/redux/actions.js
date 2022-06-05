import { 
    SAVE_COORDINATE_AXIS_X, SAVE_COORDINATE_AXIS_Y, 
    ADD_NEW_PAGE, DELETE_PAGE, CHANGE_ELEMENT_TYPE , ADD_ELEMENT, DELETE_ELEMENT,
    CHANGE_Z_INDEX, SAVE_COMIX_PAGE, ADD_COMIXES
} from "./types";
import axios from "axios";
import {baseUrl} from '../config/config'



export const addComixPage = (comix_id) => {
  return (dispatch) => {
    axios
        .get(baseUrl + `comix_page/${comix_id}`)
        .then(res => {
            dispatch(saveComixPage(res.data));
        })
        .catch(err => {
            console.log('err.message', err.message)
        });
  };
};


export const addComixList = () => {
    return (dispatch) => {
      axios
          .get(baseUrl + `comix`)
          .then(res => {
              dispatch(addComixes(res.data));
          })
          .catch(err => {
              console.log('err.message', err.message)
          });
    };
  };



export function addComixes(comixes){
    return {
        type: ADD_COMIXES, 
        comixes: comixes
}
}

export function saveComixPage(comixPage){
    return {
        type: SAVE_COMIX_PAGE, 
        comixPage: comixPage
}
}


export function saveCoordinate_axis_x(pageId, elId, val){
    return {
        type: SAVE_COORDINATE_AXIS_X, 
        pageId: pageId,
        elId : elId,
        value: val
}
}

export function saveCoordinate_axis_y(pageId, elId, val){
    return {
        type: SAVE_COORDINATE_AXIS_Y, 
        pageId: pageId,
        elId : elId,
        value: val
}
}

export function addNewPage(val){
    return {
        type: ADD_NEW_PAGE, 
        value: val
}
}

export function deletePage(pageId){
    return {
        type: DELETE_PAGE, 
        pageId: pageId
}
}

export function changeElementType(pageId, elId, val){
    return {
        type: CHANGE_ELEMENT_TYPE, 
        pageId: pageId,
        elId : elId,
        value: val
}
}

export function saveZIndex(val){
    return {
        type: CHANGE_Z_INDEX,
        value: val
}
}

export function addElement(pageId, newElid){
    return {
        type: ADD_ELEMENT,
        pageId: pageId,
        newElid: newElid,
}
}

export function deleteElement(pageId, elId){
    return {
        type: DELETE_ELEMENT,
        pageId: pageId,
        elId: elId,
}
}
