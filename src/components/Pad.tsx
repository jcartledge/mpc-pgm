import React from 'react';
import styled from 'styled-components';

export type PadProps = { onClick?: () => void };

export const PadButton = styled.button`
  width: 100px;
  height: 100px;
  &.active {
    background-color: silver;
  }
`;

const Pad: React.FC<PadProps> = ({ onClick, children }) => {
  return (
    <>
      <PadButton onClick={onClick || undefined} disabled={!onClick}>
        {children}
      </PadButton>
    </>
  );
};

export default Pad;
