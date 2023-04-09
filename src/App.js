import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      
      {/* < Login /> */}
      <Router>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/register'>SignUp</Link>
          <Link to='/login'>SignIn</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
