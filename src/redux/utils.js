import { fullHeightPage } from '../config/config'

export function queueHandler(index){
    if(index===0){
        return 0
    }
    return index * fullHeightPage
}