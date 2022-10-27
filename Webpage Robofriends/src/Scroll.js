import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '4px double black', height: '600px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;