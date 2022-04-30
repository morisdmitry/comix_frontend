import { ALLOW_SAVING, DISALLOW_SAVING, SAVE_COORDINATES} from "./types"

const initialState = {
    SAVE_TO_STORE: true,
    coordinates: {
        axis_x: 0,
        axis_y: 0,

    }
}

export const createComixReducer = (state= initialState, action) => {
    switch(action.type) {
        case ALLOW_SAVING:
            return {
                ...state, 
                SAVE_TO_STORE: true
            }
        case DISALLOW_SAVING:
            return {
                ...state, 
                SAVE_TO_STORE: false
            }
        case SAVE_COORDINATES:
            return {
                ...state, 
                coordinates: action.value
            }

        default: 
            return state
    }
}