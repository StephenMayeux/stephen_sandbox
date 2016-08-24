import React from 'react';

export default (props) => {
  return (
    <div>
      <div className="container">
        <h1>Hello SandBox!!</h1>
        {props.children}
      </div>
    </div>
  );
};
