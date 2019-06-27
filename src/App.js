import React from 'react';
import './styles/styles.scss';

import { Header } from './components';

function App() {
  return (
    <div className="app">
      <Header activeIndex={2}/>
      <section className="container">
        test
      </section>
    </div>
  );
}

export default App;
