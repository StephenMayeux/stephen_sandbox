import React from 'react';

import Header from './header';
import Footer from './footer';

export default (props) => {
  return (
    <div>
      <Header />
      <div className="container">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};
