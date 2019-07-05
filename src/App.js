import React from 'react';
import './styles/styles.scss';

import { Header, Footer } from './components';

function App() {
  return (
    <div className="app" style={{display: 'flex', flexDirection: 'column'}}>
      <Header activeIndex={2}/>
      <section className="container" style={{ flex: 1}}>
        test
      </section>
      <Footer />
    </div>
  );
}

export default App;
