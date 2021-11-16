import React, { useEffect, useRef, useState } from 'react';
import PlayButton from './PlayButton';
import SideBar from './SideBar';
import styled from 'styled-components';
import useShareAPI from '../hooks/useShareAPI';

const StyledVideoContainer = styled.div`
  position: relative;
  background-color: white;
  width: 100%;
  height: 100%;
`;

const StyledVideo = styled.video`
  height: 100%;
  max-width: 100%;
  object-fit: cover;
`;

interface Props {
  isActive: boolean;
  fileName: string;
}

const Video = ({ isActive, fileName }: Props) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [muted, setMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { share } = useShareAPI();

  useEffect(() => {
    isActive ? videoRef.current?.play() : videoRef.current?.pause();
    setPlaying(isActive);
  }, [isActive]);

  const onVideoPress = () => {
    playing ? videoRef.current?.pause() : videoRef.current?.play();
    setPlaying(prev => !prev);
  };

  const toggleSound = () => setMuted(muted => !muted);

  const handleSharedClick = () => share(`${location.href}video/${fileName}`);

  return (
    <StyledVideoContainer>
      <StyledVideo
        ref={videoRef}
        src={`${process.env.RESOURCE_SERVER}/video/style/${fileName}.mp4`}
        onClick={onVideoPress}
        preload="none"
        muted={muted}
        loop
        playsInline
      ></StyledVideo>
      <SideBar handleShareClick={handleSharedClick} handleSoundButtonClick={toggleSound} muted={muted} />
      {!playing && <PlayButton handleClick={onVideoPress} />}
    </StyledVideoContainer>
  );
};

export default Video;
