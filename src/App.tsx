import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/Homepage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import SamplesPage from './pages/SamplesPage';
import ContactPage from './pages/ContactPage';
import CostCalculator from './components/CostCalculator';

type Page = 'home' | 'services' | 'about' | 'samples' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [showCalculator, setShowCalculator] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'services':
        return <ServicesPage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'samples':
        return <SamplesPage onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}

      <button
        onClick={() => setShowCalculator(true)}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-amber-500/50 hover:scale-110 transition-all duration-300 z-40 group"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        <span className="absolute -top-2 -left-2 bg-blue-900 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Calculate Cost
        </span>
      </button>

      {showCalculator && (
        <CostCalculator onClose={() => setShowCalculator(false)} />
      )}
    </div>
  );
}

export default App;
