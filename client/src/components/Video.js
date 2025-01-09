import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

import { useParams } from "react-router-dom";

const Video=()=>{
  const {roomID }= useParams();

  const Meeting= async(element)=>{
    const appID = 892794830;
     const serverSecret = 'bd09f3530fecae21c85265bd588669c8';
const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Maharaj");

 const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: element,
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
    }

  return ( 
  <div  className='room-page'>
    <div ref={Meeting}/>
  </div>
  );
};

export default Video;

  

