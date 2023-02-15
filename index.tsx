import MainPage from "pages/MainPage";
import { render } from "react-dom";
import * as React from 'react';

render(<MainPage />, document.getElementById('root'));

if(module.hot) {
    module.hot.accept();
  }