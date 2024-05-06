import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Title from './components/Title/Title';
import Input from './components/Input/Input';
import ButtonGroup from './components/ButtonGroup/ButtonGroup';
import Switch from './components/Switch/Switch';
import Search from './components/Search/Search';

function App() {
  return (
    <>
      <div className="background">  
        <Button text='Primary' type='button-primary' isDisabled={false}></Button>
        <Button text='Primary' type='button-primary' isDisabled={true}></Button>
        <Button text='Secondary' type='button-secondary' isDisabled={false}></Button>
        <Button text='Secondary' type='button-secondary' isDisabled={true}></Button>
        <Title></Title>
        <Input type="text" placeholder="Placeholder" isDisabled={true}></Input>
        <Input type="text" placeholder="Placeholder" isDisabled={false}></Input>
        <ButtonGroup></ButtonGroup>
        <Switch isDisabled={false}></Switch>
        <Switch isDisabled={true}></Switch>
        <Search></Search>
      </div>
    </>
  );
}

export default App;
