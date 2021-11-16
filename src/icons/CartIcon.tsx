import React from 'react';

const CartIcon = () => {
  return (
    <svg width="60" height="60" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
      <path
        d="M6.5 20.5V7.5H23.5V26H11.5M6.5 22V26H10M10.5 10V8.43881C10.5 5.71118 12.5147 3.5 15 3.5C17.4853 3.5 19.5 5.71118 19.5 8.43881V10"
        stroke="black"
      />
    </svg>
  );
};

export default React.memo(CartIcon);
