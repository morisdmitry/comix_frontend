import { SAVE_COORDINATES, SAVE_COORDINATE_AXIS_X, SAVE_COORDINATE_AXIS_Y, ADD_NEW_UNIT } from "./types";


export function saveCoordinates(val){
    return {
        type: SAVE_COORDINATES, 
        value: val
}
}

export function saveCoordinate_axis_x(val){
    return {
        type: SAVE_COORDINATE_AXIS_X, 
        value: val
}
}

export function saveCoordinate_axis_y(val){
    return {
        type: SAVE_COORDINATE_AXIS_Y, 
        value: val
}
}

export function addNewUnit(val){
    return {
        type: ADD_NEW_UNIT, 
        value: val
}
}