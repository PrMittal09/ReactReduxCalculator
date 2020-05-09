import React, {Component} from 'react';

class KeyPadComponent extends Component {
    
    render() {
        const calbuttons=[];
        ["CE","(",")","C","1","2","3","+","4","5","6","-","7","8","9","*",".","0","=","/"].forEach(key => {
            calbuttons.push(
                <button name={key} onClick={e => this.props.onClick(e.target.name)}>
                {key}
                </button>
                )
        });
        return (
            <div className="button">
                {calbuttons}
            </div>
        );
    }
}


export default KeyPadComponent;