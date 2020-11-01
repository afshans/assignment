import React from 'react';
import './App.scss';

import SideBar from './SideBar';
import Launches from './Launches';

const App = () => {
  return (
    <main className="space-x-page">
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col-12">
            <h1 className="heading">SpacEx Launch programs</h1>
          </div>
        </div>
        <div className="row">
        <SideBar />
        <Launches />
        </div>
      </div> 
    </main>
  );
};

export default App;
