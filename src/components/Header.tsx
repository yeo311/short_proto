import React from 'react';
import styled from 'styled-components';
import CartIcon from '../icons/CartIcon';
import LogoMusinsa from '../icons/LogoMusinsa';
import SearchIcon from '../icons/SearchIcon';

const StyledHeader = styled.header`
  height: 50px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 500;
`;

const StyledArea = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
`;

const StyledLogoArea = styled(StyledArea)`
  left: 15px;
`;

const StyledButtonArea = styled(StyledArea)`
  right: 20px;
`;

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogoArea>
        <LogoMusinsa />
      </StyledLogoArea>
      <StyledButtonArea>
        <StyledButton>
          <SearchIcon />
        </StyledButton>
        <StyledButton>
          <CartIcon />
        </StyledButton>
      </StyledButtonArea>
    </StyledHeader>
  );
};

export default Header;
