import { initialIceCreamState } from "./initialState";
import { Buy_IceCream } from "./iceCreamAction";

function iceCreamReducer(state=initialIceCreamState,action){
    switch(action.type){
        case Buy_IceCream:return({
            ...state,
            iceCreams:state.iceCreams-1,
        });
        default:return (initialIceCreamState);
    }
}

export default iceCreamReducer;