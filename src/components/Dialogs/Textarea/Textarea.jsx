import React from 'react';
import classes from './Textarea'





const Textarea = (props) => {
    const newMessageElement = React.createRef();
    const sendMessage = () => {
        props.sendMessage()
    };

    const onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text)
    };
    return (
        <div className={classes.textarea}>
            <div><textarea ref={newMessageElement} onChange={onMessageChange} value={props.newMessageText}></textarea></div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Textarea