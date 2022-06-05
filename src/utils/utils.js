import { fullHeightPage, topHeight } from '../config/config'

export function queueHandler(index){

    if(index===0){
        return topHeight
    }
    return index * (fullHeightPage + topHeight)
}