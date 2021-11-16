import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Video from '../components/Video';

const StyledContainer = styled.section`
  width: 100%;
  height: 100%;
`;

const SharedPage = () => {
  const { fileName } = useParams();
  return (
    <StyledContainer>
      <Video isActive fileName={fileName as string} />
    </StyledContainer>
  );
};

export default SharedPage;
