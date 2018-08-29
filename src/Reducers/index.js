import { combineReducers,createStore } from 'redux'; //npm install redux
import changeinputReducer from './MainReducer'
//import secondReducer from './Second'

const AppReducers = combineReducers({
    changeinputReducer


});
const rootReducers = (state,action)=>{
    return AppReducers(state,action);
}
let store = createStore(rootReducers);
export default store;