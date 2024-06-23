import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './styles/App.css';
import Layout from './components/layout/Layout'
import Login from './views/auth/Login'
import Register from './views/auth/Register'
import Home from './views/Home'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
