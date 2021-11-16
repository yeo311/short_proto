import React from 'react';
import styled from 'styled-components';
import SoundMutedIcon from '../icons/SoundMutedIcon';
import SoundUnMutedIcon from '../icons/SoundUnMutedIcon';
import LikeIcon from '../icons/LikeIcon';
import SharedIcon from '../icons/SharedIcon';

const StyledFabFunction = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70%;
  right: 20px;
  z-index: 500;
`;

const StyledFabButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: rgba(10, 10, 10, 0.2);
  border-radius: 100%;
  border: none;

  > svg {
    vertical-align: top;
    width: 60px;
    height: 60px;

    > path {
      stroke: white;
      stroke-width: 1;
    }
  }

  > span {
    color: white;
    font-size: 20px;
  }

  & + & {
    margin-top: 30px;
  }
`;

interface Props {
  handleShareClick: () => void;
  handleSoundButtonClick: () => void;
  muted: boolean;
}

const SideBar = ({ handleShareClick, handleSoundButtonClick, muted }: Props) => {
  return (
    <StyledFabFunction>
      <StyledFabButton onClick={handleSoundButtonClick}>
        {muted ? <SoundMutedIcon /> : <SoundUnMutedIcon />}
      </StyledFabButton>
      <StyledFabButton onClick={handleShareClick}>
        <SharedIcon />
      </StyledFabButton>
      <StyledFabButton>
        <LikeIcon />
        <span>230</span>
      </StyledFabButton>
    </StyledFabFunction>
  );
};

export default SideBar;
