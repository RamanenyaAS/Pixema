import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import ButtonGroup from './components/ButtonGroup/ButtonGroup';
import Switch from './components/Switch/Switch';
import Search from './components/Search/Search';
import { Link } from 'react-router-dom';
import IconFavorite from "./images/IconFavorites.svg"
import User from './components/User/User';

function App() {
  return (
    <>
      <div className="background">  
        <Button text='Primary' type='button-primary' isDisabled={false}></Button>
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
        {/* <Link title="Home" src={IconFavorite}></Link> */}
        <User username="User name"></User>
      </div>
    </>
  );
}

export default App;
