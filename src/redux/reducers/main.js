import {combineReducers} from "redux";
import { cartreducer } from "./reducer";
import { accountreducer } from "./account";


const rootred = combineReducers({
    cartreducer,accountreducer
});


export default rootred