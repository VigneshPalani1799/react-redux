import { initialCakeState } from "./initialState";
import {Buy_Cake} from './cakeAction';

function cakeReducer(state=initialCakeState,action){
    switch(action.type){
        case Buy_Cake:return({
            ...state,
            cakes:state.cakes-1,
        });
        default:return state;
    }
}

export default cakeReducer;