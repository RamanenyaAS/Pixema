import React, { useEffect } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import ButtonGroup from './components/ButtonGroup/ButtonGroup';
import Switch from './components/Switch/Switch';
import Search from './components/Search/Search';
import Link from './components/Links/Links';
import User from './components/User/User';


import Select from './components/Select/Select';
import Card from './components/Card/Card';
import MainPage from './pages/MainPage/MainPage';
import Spinner from './components/Spinner/Spinner';
import SelectedMoviePage from './pages/SelectedMoviePage/SelectedMoviePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import SearchPage from './pages/SearchPage/SearchPage';

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
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>


      {/* <Button text='Primary' type='button-primary' isDisabled={false}></Button>
        <Button text='Primary' type='button-primary' isDisabled={true}></Button>
        <Button text='Secondary' type='button-secondary' isDisabled={false}></Button>
        <Button text='Secondary' type='button-secondary' isDisabled={true}></Button>
        <Input title="Title" type="text" placeholder="Placeholder" isDisabled={true}></Input>
        <Input title="Title" type="text" placeholder="Placeholder" isDisabled={false}></Input>
        <ButtonGroup></ButtonGroup>
        <Switch isDisabled={false}></Switch>
        <Switch isDisabled={true}></Switch>
        <Search isDisabled={false}></Search>
        <Search isDisabled={true}></Search>
        <User username="User name"></User>
        <Link title="Home" src={IconHome} isDisabled={false}></Link>
        <Link title="Setting" src={IconSetting} isDisabled={true}></Link>
        <Link title="Trends" src={IconTrends} isDisabled={false}></Link>
        <Select></Select>
        <Card text="Wonder Woman: 1984"></Card> */}
      {/* <MainPage></MainPage> */}
      {/* <Spinner></Spinner> */}
      {/* <SelectedMoviePage></SelectedMoviePage> */}
    </>
  );
}

export default App;
