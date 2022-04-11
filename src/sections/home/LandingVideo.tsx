import React, { useEffect, useState, SyntheticEvent, ReactEventHandler } from 'react';
import { styled } from '@mui/material/styles';

const source = 'https://res.cloudinary.com/karolinauploads/video/upload/v1646124336/MOV_0014_1__AdobeCreativeCloudExpress.mp4'
const poster = 'https://firebasestorage.googleapis.com/v0/b/archweb-c117f.appspot.com/o/projects%2Fvlcsnap-2022-03-01-10h11m46s198.jpg?alt=media&token=e880f81d-b40a-4460-8ebb-945297f675de'

const VideoStyle = styled('video')(({ theme }) => ({
    zIndex: 8,
    width: '100%',
    height: '100%',
    margin: 'auto',
    objectFit: 'cover',
    position: 'absolute',

  }));

export default function LandingVideo() {

    return (
        <VideoStyle
            controls={false}
            autoPlay
            muted
            loop
            poster={poster}
        >
            <source src={source} type="video/mp4" />
            Your browser does not support the video tag.
        </VideoStyle>
    )
}
/*
export default function LandingVideo({ onCanPlay }: {
    onCanPlay: any;
}): JSX.Element {
    return (
        <video
            width="100%"
            height="auto"
            controls={false}
            autoPlay
            muted
            loop
            //poster={poster}
            onCanPlayThrough={onCanPlay}
        >
            <source src={source} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}
*/
