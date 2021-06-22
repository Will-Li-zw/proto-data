import React from 'react';
import { RecoilRoot } from 'recoil';
import Template from './Components/Template';
import DataTable from './Components/DataTable';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Template />
        <DataTable />
      </RecoilRoot>
    </div>
  );
}

export default App;
