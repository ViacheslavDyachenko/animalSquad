import React from 'react';
import styles from './MainPage.module.scss'

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, FirestoreDataConverter, WithFieldValue, DocumentData, QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore';
import { useCollection, useCollectionData, useDocument } from 'react-firebase-hooks/firestore';

const MainPage: React.FC = () => {
    //const configuration = {
    //    iceServers: [
    //      {
    //        urls: [
    //          'stun:stun1.l.google.com:19302',
    //          'stun:stun2.l.google.com:19302',
    //        ],
    //      },
    //    ],
    //    iceCandidatePoolSize: 10,
    //  };
    
    //let peerConnection: RTCPeerConnection = null;
    
    //(async function useCreateRoom() {
    //    const app = initializeApp({ projectId: 'animal-squad-5a642' });
    
    //    const [value] = useCollection(collection(getFirestore(app), 'rooms'));
      
    //    console.log('Create PeerConnection with configuration: ', configuration);
    //    peerConnection = new RTCPeerConnection(configuration);

    //    registerPeerConnectionListeners();
      
    //    // Code for collecting ICE candidates below
    //    const [callerCandidatesCollection] = useDocument(doc(getFirestore(app), 'rooms', 'MPJ7YAEM3c8N1oji3ZVO'),
    //    {
    //      snapshotListenOptions: { includeMetadataChanges: true },
    //    });
    //    console.log(value.docs.map((doc) => JSON.stringify(doc.data())), callerCandidatesCollection.data());
        
    //    peerConnection.addEventListener('icecandidate', event => {
    //        if (!event.candidate) {
    //          console.log('Got final candidate!');
    //          return;
    //        }
    //        console.log('Got candidate: ', event.candidate);
    //        callerCandidatesCollection.data().add(event.candidate.toJSON());
    //    });
    //    const offer = await peerConnection.createOffer();
    //    await peerConnection.setLocalDescription(offer);
    //    console.log('Created offer:', offer);

    //    const roomWithOffer = {
    //        'offer': {
    //            type: offer.type,
    //            sdp: offer.sdp,
    //        },
    //    };

    //    const postConverter: FirestoreDataConverter<any> = {
    //        toFirestore(post: WithFieldValue<any>): DocumentData {
    //          return roomWithOffer;
    //        },
    //        fromFirestore(
    //          snapshot: QueryDocumentSnapshot,
    //          options: SnapshotOptions
    //        ): any {
    //          const data = snapshot.data(options);
    //          return {
    //            author: data.author,
    //            id: snapshot.id,
    //            ref: snapshot.ref,
    //            title: data.title,
    //          };
    //        },
    //      };

    //    console.log(callerCandidatesCollection.data());

    //    const value2 = collection(getFirestore(app), 'rooms').withConverter(postConverter);
        
    //    const [data, loading, error] = useCollectionData(value2);
    //    console.log(data);
        
    //    const roomId = value.data().id;
    
    //    peerConnection.addEventListener('track', event => {
    //        console.log('Got remote track:', event.streams[0]);
    //        event.streams[0].getTracks().forEach(track => {
    //            console.log('Add a track to the remoteStream:', track);
    //        });
    //    });
    //    value.onSnapshot(async (snapshot: { data: () => any; }) => {
    //        const data = snapshot.data();
    //        if (!peerConnection.currentRemoteDescription && data && data.answer) {
    //          console.log('Got remote description: ', data.answer);
    //          const rtcSessionDescription = new RTCSessionDescription(data.answer);
    //          await peerConnection.setRemoteDescription(rtcSessionDescription);
    //        }
    //      });
    //      // Listening for remote session description above
        
    //      // Listen for remote ICE candidates below
    //      value.data().collection('calleeCandidates').onSnapshot((snapshot: { docChanges: () => any[]; }) => {
    //        snapshot.docChanges().forEach(async change => {
    //            if (change.type === 'added') {
    //                let data = change.doc.data();
    //                console.log(`Got new remote ICE candidate: ${JSON.stringify(data)}`);
    //                await peerConnection.addIceCandidate(new RTCIceCandidate(data));
    //            }
    //        });
    //    });
    //})()

    //function registerPeerConnectionListeners() {
    //    peerConnection.addEventListener('icegatheringstatechange', () => {
    //      console.log(
    //          `ICE gathering state changed: ${peerConnection.iceGatheringState}`);
    //    });
      
    //    peerConnection.addEventListener('connectionstatechange', () => {
    //      console.log(`Connection state change: ${peerConnection.connectionState}`);
    //    });
      
    //    peerConnection.addEventListener('signalingstatechange', () => {
    //      console.log(`Signaling state change: ${peerConnection.signalingState}`);
    //    });
      
    //    peerConnection.addEventListener('iceconnectionstatechange ', () => {
    //      console.log(
    //          `ICE connection state change: ${peerConnection.iceConnectionState}`);
    //    });
    //  }

    return <p className={styles.title}>Привет</p>;
}
export default MainPage;