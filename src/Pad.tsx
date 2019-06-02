import React from 'react';

type Props = { onClick: () => void; isOn: boolean };

const Pad: React.FC<Props> = ({ onClick, isOn }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: isOn ? 'white' : 'silver' }}
    />
  );
};

export default Pad;
