import React from 'react';

function SquareComponent(props) {
  let classes = props.className ? `${props.className}` : 'square';
  return <span className={classes}>X</span>;
}

export default SquareComponent;
