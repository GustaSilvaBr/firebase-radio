//import firestore from 'firebase/firestore';
//import {addDoc, collection} from 'firebase/firestore';
import {ref, uploadBytes,} from 'firebase/storage';

import {storage} from '../config/storage';

//import {db} from './firestore';

async function addAudioChunk(audioFile: Blob[]){
    const storageRef = ref(storage, 'audios/audio.mp3');

    uploadBytes(storageRef, audioFile[0]).then((snapshot)=>{
        console.log('successfully uploaded');
    }).catch((err)=>{
        console.log(err);
    });
}

export {addAudioChunk};