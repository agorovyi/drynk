import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';

import { tryFetchData } from './api/fetchdata';

tryFetchData()
  .then(data => {
    if (data) {
      render(<App data={data.result} />, document.getElementById('root'));
    }
  })
  .catch(error => {
    console.error(error);
  });
