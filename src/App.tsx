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

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="background">
          <div className="container">
            <Aside></Aside>
            <div className="main-page-block">
              <Header></Header>
              <Routes>
                <Route path="/" element={<MainPage></MainPage>}></Route>
                <Route path='/movie/:movieId' element={<SelectedMoviePage></SelectedMoviePage>}></Route>
                <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
                <Route path='/search' element={<SearchPage></SearchPage>}></Route>
                <Route path='/favorites' element={<FavoritesPage></FavoritesPage>}></Route>
                <Route path='/signIn' element={<SignInFormPage></SignInFormPage>}></Route>
                <Route path='/signUp' element={<SignUpFormPage></SignUpFormPage>}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
