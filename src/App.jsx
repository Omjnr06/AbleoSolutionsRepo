import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgencyHome from './pages/AgencyHome';
import ClinicDemo from './pages/ClinicDemo';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Agency Site */}
        <Route path="/" element={<AgencyHome />} />

        {/* Hidden Clinic Demo */}
        <Route path="/demo-clinic-v1" element={<ClinicDemo />} />
      </Routes>
    </Router>
  );
}


export default App;