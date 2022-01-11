import React from 'react';

import './styles/global.css';

import Routing from './routes';

/*
interface TitleProps {
  text: string;
}

function Title(props: TitleProps) {
  return (
    <h1>{props.text}</h1>
  );
}
*/

function App() {
  return (
    <Routing />
  );
}

export default App;
