import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Toaster } from "./components/ui/sonner";
import { HomePage } from "./pages/HomePage";
import { UXCaseStudiesPage } from "./pages/UXCaseStudiesPage";
import { TechnicalWritingPage } from "./pages/TechnicalWritingPage";
import { DesignGalleryPage } from "./pages/DesignGalleryPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ResumePage } from "./pages/ResumePage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ux-case-studies" element={<UXCaseStudiesPage />} />
            <Route path="/technical-writing" element={<TechnicalWritingPage />} />
            <Route path="/design-gallery" element={<DesignGalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resume" element={<ResumePage />} />
            {/* Catch-all route for unmatched paths */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}