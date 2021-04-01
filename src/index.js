import React from 'react';
import ReactDOM from 'react-dom';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'soft-ui-design-system/assets/css/soft-design-system.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './css/global.css';
import './css/header.css';
import './css/footer.css';
import './css/homepage.css';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
