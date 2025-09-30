import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HazardWatchDashboard from './Dashboard/HazardWatchDashboard';
import HazardWatchAnalytics from './Analytics/HarardWatchAnalytics';
import AddHazardForm from './AddForm/Add';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-500">
        <Routes>
          <Route path="/" element={<HazardWatchDashboard />} />
          <Route path="/analytics" element={<HazardWatchAnalytics />} />
          <Route path='/add' element={ <AddHazardForm/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
