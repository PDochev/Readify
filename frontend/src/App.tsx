import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { AuthorizationProvider } from "./context/AuthContext";
import { lazy, Suspense } from "react";
import SpinnerFullPage from "./components/SpinnerFullPage";

const Home = lazy(() => import("./pages/HomePage/Home"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const Documents = lazy(() => import("./pages/DocumentsPage/Documents"));
const ReadifyApp = lazy(() => import("./pages/ApplicationPage/ReadifyApp"));
const NotFound = lazy(() => import("./components/NotFound"));

// import Home from "./pages/HomePage/Home";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import Documents from "./pages/DocumentsPage/Documents";
// import ReadifyApp from "./pages/ApplicationPage/ReadifyApp";
// import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <AuthorizationProvider>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/documents/:id" element={<ReadifyApp />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Toaster />
        </AuthorizationProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
