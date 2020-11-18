import React from 'react';
import classes from './Music.module.css'
import ReactPlayer from 'react-player'


const Music = () => {
    return (<div className={classes.video}>
        <ReactPlayer
        url='https://www.youtube.com/watch?v=IDVlvA_pISQ'
        controls
        playbackRate = {1}
        width = "60em"
        height = "35em"
        />
        <ReactPlayer
        url='https://www.youtube.com/watch?v=XnTPJFqFVCg'
        controls
        playbackRate = {1}
        width = "600px"
        height = "400px"
        />
</div>

    )
}

export default Music

