const calculate = () => {
    return {
      type: 'calculate'
    };
  };

const reset = () => {   
    return {
        type:'reset'
    };
};
    
const backspace = () => {
    return{
        type:'backspace'
    };
};

const keypad = (key) => {
    return {
        type: 'keypad',
        payload:{key:key}
      };
}
export {calculate,reset,backspace,keypad};