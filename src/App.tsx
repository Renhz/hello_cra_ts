import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Homepage from './pages/Homepage';
import Test0 from './pages/Test0';
import Test1 from './pages/Test1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Homepage />} />
          <Route path="tools/chartpie" element={<Test0 />} />
          <Route path="tools/chartpie" element={<Test1 />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There$aposs nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
