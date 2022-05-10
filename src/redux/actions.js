import { 
    SAVE_COORDINATE_AXIS_X, SAVE_COORDINATE_AXIS_Y, 
    ADD_NEW_PAGE, CHANGE_ELEMENT_TYPE , CHANGE_Z_INDEX, ADD_ELEMENT, DELETE_ELEMENT,
    SAVE_BORDERS
} from "./types";



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

export function saveBorders(pageId, borders){
    return {
        type: SAVE_BORDERS,
        pageId: pageId,
        borders: borders,
}
}