import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import Documents from "./pages/DocumentsPage/Documents";
import ReadifyApp from "./pages/ApplicationPage/ReadifyApp";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { AuthorizationProvider } from "./context/AuthContext";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <AuthorizationProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/register" element={<RegistrationPage />} /> */}
            <Route path="/documents" element={<Documents />} />
            <Route path="/documents/:id" element={<ReadifyApp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </AuthorizationProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
