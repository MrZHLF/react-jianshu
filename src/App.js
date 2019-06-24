import React ,{ Fragment }from 'react';
import Header from './common/header/index'
import {GlobalStyled} from './style.js';
function App() {
  return (
    <Fragment>
      <GlobalStyled/>
      <Header/>
    </Fragment>
  );
}

export default App;
