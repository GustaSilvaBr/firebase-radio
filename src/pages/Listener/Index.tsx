import React from 'react';

import {getCurrentAudioUrl} from '../../services/service';

export function Listener(){

    function handlePlayAudio(){
        getCurrentAudioUrl().then((url)=>{
            playAudio(url);
        }).catch((err)=>{
            console.log(err);
        })
    }

    function playAudio(url: string){
        const audio = new Audio(url);
        audio.play();
    }


    return (
        <div>
            Hello, listener

            <button onClick={handlePlayAudio}>
                play audio
            </button>

        </div>
    )
}