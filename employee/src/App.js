import React from 'react';
import PageHdr from './components/PageHeader';
import Search from './components/Search';

// Two main parts of the page: static page header,

function App() {
  return (
    <div>
      <PageHdr />
      <Search />
    </div>
  );
}

export default App;