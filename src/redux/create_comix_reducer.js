import { ALLOW_SAVING, DISALLOW_SAVING, 
    SAVE_COORDINATES, SAVE_COORDINATE_AXIS_X, SAVE_COORDINATE_AXIS_Y,
    ADD_NEW_UNIT } from "./types"

const initialState = {
    SAVE_TO_STORE: true,
    coordinates: {
        axis_x: 400,
        axis_y: 450,

    },
    unit1: {
        coordinates: {
            axis_x: 400,
            axis_y: 450,

        }
    },
    utils: {
        counter: 2,
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
        case SAVE_COORDINATE_AXIS_X:
            return {
                ...state, coordinates: {...state.coordinates, axis_x: action.value}
            }
        case SAVE_COORDINATE_AXIS_Y:
            return {
                ...state, coordinates: {...state.coordinates, axis_y: action.value}
            }
        case ADD_NEW_UNIT:
            let key = `newUnit${state.utils.counter}`
            state[key] = {
                coordinates: {
                    axis_x: 300,
                    axis_y: 350,
            
                }
            }
            // state.utils.counter += 1
            return {
                ...state, utils: {...state.utils, counter: state.utils.counter + 1}
            }

        default: 
            return state
    }
}