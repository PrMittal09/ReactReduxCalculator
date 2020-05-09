const initialState = {
    result: ""
};

const calcireducer=(state=initialState,action) => {
    const newState={...state};
        if(action.type== 'calculate')
        {
            try {
            newState.result=eval(newState.result) || "" + "";
            } catch (e) {
                newState.result="error";
            }
            return newState;
        }
        if(action.type== 'reset'){
            newState.result="";
            return newState;
        }
        if(action.type== 'backspace'){
            newState.result=newState.result.toString().slice(0, -1);
            return newState;
            
        }
        if(action.type== 'keypad') {
                newState.result=newState.result + action.payload.key;
            return newState;
        }
        return newState;
};
export default calcireducer;