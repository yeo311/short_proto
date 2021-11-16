import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import Video from '../components/Video';
import 'swiper/css';
import { getVideos } from '../api/api';

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

export default function FeedPage() {
  const [videos, setVideos] = useState<string[]>([]);

  const fetchVideo = async () => {
    const { data } = await getVideos();
    setVideos(prev => [...prev, ...data]);
  };

  return (
    <StyledSwiper direction={'vertical'} onReachEnd={() => fetchVideo()}>
      {videos.map((fileName, index) => (
        <SwiperSlide key={index}>{({ isActive }) => <Video isActive={isActive} fileName={fileName} />}</SwiperSlide>
      ))}
    </StyledSwiper>
  );
}
