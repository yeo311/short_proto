import React from 'react';
import styled from 'styled-components';

const StyledPlayButton = styled.div`
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
`;

interface Props {
  handleClick: () => void;
}

const PlayButton = ({ handleClick }: Props) => {
  return (
    <StyledPlayButton onClick={handleClick}>
      <svg
        width="100"
        height="100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </StyledPlayButton>
  );
};

export default PlayButton;
