import React, { useEffect, useRef } from 'react';
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js';
import 'video.js/dist/video-js.css';

interface VideoProps {
  options: VideoJsPlayerOptions;
}

const VideoByVideoJS = ({ options }: VideoProps) => {
  const videoRef = useRef(null);
  const playerRef = useRef<VideoJsPlayer | null>(null);

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      playerRef.current = videojs(videoElement, options, () => {
        console.log('player is ready');
        playerRef.current?.on('waiting', () => {
          console.log('player is waiting');
        });
        playerRef.current?.on('dispose', () => {
          console.log('player will dispose');
        });
      });
    }
  }, [options]);

  useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player style={{ height: '100%', width: '100%' }} onClick={() => console.log('aaa')}>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
};

export default VideoByVideoJS;
