import React from 'react';

import Header from './header';
import Footer from './footer';

export default (props) => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>Hello SandBox!!</h1>
        {props.children}
      </div>
      <Footer />
    </div>
  );
};
