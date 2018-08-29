import * as Action from '../Action/ActionTypes';
import {AsyncStorage,Alert

} from 'react-native';

 const changeinputReducer = (state = {change:0,check:0,check2:2,seconds:0,minutes:0,dec:true}, action) => {
        switch (action.type) { 
          case 'CHANGE_NAME_INPUT':
            return {...state, change: action.text };
            case 'check_NAME_INPUT':
            return {...state, check: action.text };
            case 'check2_NAME_INPUT':
            return {...state, check2: action.text };
            case 'seconds_INPUT':
            return {...state, seconds: action.text };
            case 'minutes_INPUT':
            return {...state, minutes: action.text };
            case 'dec_INPUT':
            return {...state, dec: action.text };
           default:
            return state;
        }
      };

export default changeinputReducer;