//import firestore from 'firebase/firestore';
//import {addDoc, collection} from 'firebase/firestore';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';

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

async function getCurrentAudioUrl(){
    const storageRef = ref(storage, 'audios/audio.mp3');

    const url = await getDownloadURL(storageRef);

    return url;
}

export {addAudioChunk, getCurrentAudioUrl};