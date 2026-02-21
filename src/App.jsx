import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgencyHome from './pages/AgencyHome';
import ClinicDemo from './pages/ClinicDemo'; // We will create this next

function App() {
  return (
    <Router>
      <Routes>
        {/* Your live Agency Site */}
        <Route path="/" element={<AgencyHome />} />

        {/* Your "Hidden" Product Demo - No one knows this URL exists yet! */}
        <Route path="/demo-clinic-v1" element={<ClinicDemo />} />
      </Routes>
    </Router>
  );
}

export default App;