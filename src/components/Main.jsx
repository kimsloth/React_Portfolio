import React from 'react';


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