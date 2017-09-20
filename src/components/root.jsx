import React from 'react';

function Root(props) {
  return (
    <div className="paper">
        {props.children}
    </div>
  );
}

export default Root;
