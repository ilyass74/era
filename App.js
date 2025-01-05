import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landing/LandingPage';
import LoginPage from './components/auth/LoginPage';
import SignupPage from './components/auth/SignupPage';
import PasswordRecovery from './components/auth/PasswordRecovery';
import DashboardView from './components/dashboard/DashboardView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/recover-password" element={<PasswordRecovery />} />
        <Route path="/dashboard" element={<DashboardView />} />
      </Routes>
    </Router>
  );
}

export default App;
