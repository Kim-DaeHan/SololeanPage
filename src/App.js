import React from 'react';
import './styles/styles.scss';

import { Header, Footer, AppBox, AppButton, SearchInput } from './components';

const App = () => {
  return (
    <div className="app" style={{ display: 'flex', flexDirection: 'column' }}>
      <Header activeIndex={2} />
      <section className="container" style={{ flex: 1 }}>
        <AppBox title='Q&A Discussions'>
          <AppButton>NEW QUESTION</AppButton>
          <SearchInput onSearch={() => alert('Search button clicked')}></SearchInput>
        </AppBox>
      </section>
      <Footer />
    </div>
  );
}

export default App;
