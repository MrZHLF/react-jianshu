import React ,{ Fragment }from 'react';
import Header from './common/header/index'
import {GlobalStyled} from './style.js';
import {GlobalStyleds} from './statics/iconfont/iconfont';
function App() {
  return (
    <Fragment>
      <GlobalStyled/>
      <GlobalStyleds/>
      <Header/>
    </Fragment>
  );
}

export default App;
