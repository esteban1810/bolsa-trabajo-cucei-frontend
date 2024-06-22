import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import './styles/App.css';

function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="custom-width py-6">
        <Login />
      </div>
      <Footer />
    </div>
  );
}

export default App;
