import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard, Auth } from './layouts';

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
