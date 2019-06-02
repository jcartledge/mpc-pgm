import React from 'react';
import styled from 'styled-components';

type Props = { onClick: () => void; isOn: boolean };

const Button = styled.button`
  width: 100px;
  height: 100px;
`;

const Pad: React.FC<Props> = ({ onClick, isOn, children }) => {
  return (
    <Button
      onClick={onClick}
      style={{ backgroundColor: isOn ? 'white' : 'silver' }}
    >
      {children}
    </Button>
  );
};

export default Pad;
