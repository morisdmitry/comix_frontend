import { SAVE_COORDINATE_AXIS_X, SAVE_COORDINATE_AXIS_Y,
    ADD_NEW_PAGE, CHANGE_ELEMENT_TYPE , CHANGE_Z_INDEX, ADD_ELEMENT, DELETE_ELEMENT
} from "./types"


import { centerAxisX, centerAxisY, fullHeightPage } from '../config/config'




const initialState = {
    commonZIndex: 1,
    comixPages: [],

}

export const createComixReducer = (state= initialState, action) => {
    switch(action.type) {
        case SAVE_COORDINATE_AXIS_X:
            const resAxisX = state.comixPages.map((page)=>{
                if(page.pageId === action.pageId){
                    const element = page.pageElements.map((el)=>{
                        if(el.id=== action.elId){
                            return{...el, 
                                coordinates: {...el.coordinates, 
                                    axis_x: action.value}
                                }
                        }
                        return el
                    })
                    return {...page, pageElements: element}
                }
                return page
            })

            return {
                ...state, comixPages: resAxisX
            }



        case SAVE_COORDINATE_AXIS_Y:

            const resAxisY= state.comixPages.map((page)=>{
                if(page.pageId === action.pageId){
                    const element = page.pageElements.map((el)=>{
                        if(el.id=== action.elId){
                            return{...el, 
                                coordinates: {...el.coordinates, 
                                    axis_y: action.value}
                                }
                        }
                        return el
                    })
                    return {...page, pageElements: element}
                }
                return page
            })

            return {
                ...state, comixPages: resAxisY
            }


        case CHANGE_ELEMENT_TYPE:

            const res = state.comixPages.map((page)=>{
                if(page.pageId === action.pageId){
                    const element = page.pageElements.map((el)=>{
                        if(el.id=== action.elId){
                            return{...el, elType: action.value}
                        }
                        return el
                    })
                    return {...page, pageElements: element}
                }
                return page
            })

            return {
                ...state, comixPages: res
            }

        case CHANGE_Z_INDEX:
            return {
                ...state, commonZIndex: action.value +1
            }

        case ADD_ELEMENT:

            const newArr = {
                id: action.newElid,
                elType: "image",
                coordinates: {
                    axis_x: centerAxisX,
                    axis_y: centerAxisY,
            
                },
            }

            const addElement = state.comixPages.map((page)=>{
                if(page.pageId === action.pageId){
                    return {...page, pageElements: [...page.pageElements, newArr]}
                }
                return page
            })
            return {
                ...state, comixPages: addElement
                }
        
        case DELETE_ELEMENT:

            const delElement = state.comixPages.map((page)=>{
                if(page.pageId === action.pageId){
                    return {...page, pageElements: page.pageElements.filter(item => item.id !== action.elId)}
                }
                return page
            })
            
            return {
                ...state, comixPages: delElement
                }
            
            
        case ADD_NEW_PAGE:
            let lastId = 1
            if(state.comixPages.length >= 1){
                lastId = state.comixPages[state.comixPages.length - 1].pageId + 1
            }
            
            let pageTop = 0

            console.log('length >>> ', state.comixPages.length)
            if(state.comixPages.length >= 1){
                pageTop = state.comixPages.length * fullHeightPage
            }
            console.log('pageTop', pageTop)
            const newPage = {
                pageId: lastId,
                top_test: pageTop,
                pageElements: [],
            }
            
            return {
                ...state, comixPages: [...state.comixPages, newPage]
                }
            
        default: 
            return state
    }
}