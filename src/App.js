import React from 'react';
import FilterableJobList from './components/FilterableJobList';
import data from './data.json';

function App() {
  return (  
    <FilterableJobList data={data} />
  );
};

export default App;