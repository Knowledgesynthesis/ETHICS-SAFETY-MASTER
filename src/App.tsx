import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useThemeStore } from './store/themeStore';
import Layout from './components/Layout';
import Home from './pages/Home';
import ModuleOverview from './pages/ModuleOverview';
import LessonView from './pages/LessonView';
import Cases from './pages/Cases';
import Reference from './pages/Reference';
import Settings from './pages/Settings';
import Quiz from './pages/Quiz';

function App() {
  const { updateEffectiveTheme } = useThemeStore();

  useEffect(() => {
    // Initialize theme
    updateEffectiveTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => updateEffectiveTheme();

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [updateEffectiveTheme]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="modules/:moduleId" element={<ModuleOverview />} />
          <Route path="modules/:moduleId/lesson/:sectionId" element={<LessonView />} />
          <Route path="modules/:moduleId/quiz" element={<Quiz />} />
          <Route path="cases" element={<Cases />} />
          <Route path="reference" element={<Reference />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
