import React from 'react';
import classes from './Textarea'
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/state";





const Textarea = (props) => {
    const newMessageElement = React.createRef();
    const sendMessage = () => {
        let action = sendMessageActionCreator()
        props.dispatch(action)
    };

    const onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(text)
        props.dispatch(action)
    };
    return (
        <div className={classes.textarea}>
            <div><textarea placeholder={'Enter message'} ref={newMessageElement} onChange={onMessageChange} value={props.newMessageText}></textarea></div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Textarea