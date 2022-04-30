import { ALLOW_SAVING, DISALLOW_SAVING, SAVE_COORDINATES } from "./types";


export function saveCoordinates(val){
    return {
        type: SAVE_COORDINATES, 
        value: val
}
}