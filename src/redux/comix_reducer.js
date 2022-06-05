import { ADD_COMIXES } from "./types"



const initialState = {
    comixes: [],
}

export const comixList = (state= initialState, action) => {
    
    switch(action.type) {
        case ADD_COMIXES:
            return {
                ...state, comixes: [...action.comixes.comixes]
                }
            
        default: 
            return state
    }
}