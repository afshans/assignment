import React from 'react';
import './App.scss';
import Header from './Header';
import SideBar from './SideBar';
import Launches from './Launches';
import Footer from './Footer';

const App = () => {
  return (
    <main className="space-x-page">
      <div className="container-fluid">
        < Header />
         <div className="row">
          <SideBar />
          <Launches />
          < Footer />
        </div>
      </div> 
    </main>
  );
};

export default App;
