import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
    const onMessageChange = (e) => {
        let body = e.target.value;
        props.onMessageChange(body)
    };
    const sendMessage = () => {
      props.sendMessage();
    };
    const dialogsElements = props.messagePage.dialogData.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id} url = {dialog.pic} />)
    const messagesElements = props.messagePage.messageData.map(message => <Message message = {message.message} id = {message.id}/>)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea placeholder='Enter message'
                                   onChange={onMessageChange}
                                   value={props.messagePage.newMessageText}>

                        </textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;