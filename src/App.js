import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SharePlace from './Pages/SharePlace';
import MyPlace from './Pages/MyPlace';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharePlace />} />
        <Route path="/my-place" element={<MyPlace />} />
      </Routes>
    </Router>
  );
}

export default App;
