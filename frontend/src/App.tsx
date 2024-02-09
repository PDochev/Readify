import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import Documents from "./pages/DocumentsPage/Documents";
import ReadifyApp from "./pages/ApplicationPage/ReadifyApp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/documents/:id" element={<ReadifyApp />} />
    </Routes>
  );
}

export default App;
