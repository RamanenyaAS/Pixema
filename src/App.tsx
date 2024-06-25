import './App.css';
import MainPage from './pages/MainPage/MainPage';
import SelectedMoviePage from './pages/SelectedMoviePage/SelectedMoviePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import SearchPage from './pages/SearchPage/SearchPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import SignInFormPage from './pages/SignInFormPage/SignInFormPage';
import SignUpFormPage from './pages/SignUpFormPage/SignUpFormPage';
import { ThemeProvider, ThemeContext } from './providers/myContext';
import { useContext } from 'react';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

function AppContent() {
  const [theme] = useContext(ThemeContext);

  return (
    <div className={`background_${theme}`}>
      <div className="container">
        <div className="main-page-block">
          <Header />
          <main className="main">
            <Aside />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/movie/:movieId" element={<SelectedMoviePage />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/signIn" element={<SignInFormPage />} />
              <Route path="/signUp" element={<SignUpFormPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
