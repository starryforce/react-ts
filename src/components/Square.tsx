import React, { FC } from 'react';

const Square: FC<{ black: Boolean }> = (props) => {
  const { black, children } = props;
  const fill = black ? 'black' : 'white';
  const stroke = black ? 'white' : 'black';
  return (
    <div
      style={{
        backgroundColor: fill,
        color: stroke,
        height: '100%',
        width: '100%',
      }}
    >
      {children}
    </div>
  );
};

export default Square;
