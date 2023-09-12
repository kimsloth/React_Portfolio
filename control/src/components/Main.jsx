import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ children }) => {
    return (
      <main id="main" role="main">
          {children}
      </main>
    );
};

Main.propTypes = {
    
};

export default Main;