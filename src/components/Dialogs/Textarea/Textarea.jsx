import React from 'react';
import classes from './Textarea'


const newPostElement = React.createRef();
const sendMessage = () => {
    let message = newPostElement.current.value;
    alert(message)
}

const Textarea = (props) => {
    return (
        <div className={classes.textarea}>
            <div><textarea ref={newPostElement}></textarea></div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Textarea