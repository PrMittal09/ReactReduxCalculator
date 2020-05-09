import React from 'react';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";
import {calculate,reset,backspace,keypad} from "./actions/calculate";
import {connect} from 'react-redux';
import './App.css';

function App(props) {
  return (
      <div className="calculator-body">
                  <h1>React- Redux Calculator</h1>
                  <ResultComponent result={props.result}/>
                  <KeyPadComponent onClick={props.onClick}/>
      </div>
  );
}
function mapStateToProps(state) {
  return {
     result: state.result
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick:(button) => {
    if (button=='=') {
      dispatch(calculate());
    }
    
    else if (button=='C') {
        dispatch(reset());
    }
    
    else if (button=='CE') {
        dispatch(backspace());
    }
    else {
        dispatch(keypad(button));
    }
  }
}
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
