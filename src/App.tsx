import React, { useEffect } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import ButtonGroup from './components/ButtonGroup/ButtonGroup';
import Switch from './components/Switch/Switch';
import Search from './components/Search/Search';
import Link from './components/Link/Link';
import User from './components/User/User';

import IconHome from "./images/IconHome.svg"
import IconSetting from "./images/IconSetting.svg"
import IconTrends from "./images/IconTrends.svg"
import Select from './components/Select/Select';
import Card from './components/Card/Card';
import MainPage from './pages/MainPage/MainPage';
import Spinner from './components/Spinner/Spinner';
import SelectedMoviePage from './pages/SelectedMoviePage/SelectedMoviePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
    <BrowserRouter>
      <div className="background">
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route path='/movie/:movieId' element={<SelectedMoviePage></SelectedMoviePage>}></Route>
        </Routes>
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
