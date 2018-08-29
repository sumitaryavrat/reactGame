import { connect } from 'react-redux'; //npm install react-redux
import * as Action from './ActionTypes';

import Home from '../Components/Home';

const mapDispatchToProps = dispatch => {
    return {
        changeNameInput: (text) => dispatch({type: 'CHANGE_NAME_INPUT',text}),
        checkNameInput: (text) => dispatch({type: 'check_NAME_INPUT',text}),
        check2NameInput: (text) => dispatch({type: 'check2_NAME_INPUT',text}),
        secondsInput: (text) => dispatch({type: 'seconds_INPUT',text}),
        minutesInput: (text) => dispatch({type: 'minutes_INPUT',text}),
        decInput: (text) => dispatch({type: 'dec_INPUT',text}),
         
    };
  };
  const mapStateToProps = state => {
    return {
        change: state.changeinputReducer.change,
        check: state.changeinputReducer.check,
        check2: state.changeinputReducer.check2,
        seconds: state.changeinputReducer.seconds,
        minutes: state.changeinputReducer.minutes,
        dec: state.changeinputReducer.dec,
    };
  };
  //const name = Home

export default connect(mapStateToProps,mapDispatchToProps)(Home);
