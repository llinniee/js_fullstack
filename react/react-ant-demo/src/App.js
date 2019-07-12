import React from 'react';

import Layout from './page/Layout'
import 'ants/dist/antd.css'

import { BrowserRouter as Router,
        Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path="/" component={Layout} />
    </Router>
  );
}

export default App;
