
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Profile from './components/Profile'
import Contact from './components/Contact'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Login from './components/Login'
import Donate from './components/Donate'
import Req from './components/Req'
function App() {

  return (
    <>
      <Navbar />
  <div className="min-h-screen bg-white text-black pb-28"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/> } />
          <Route path="/review" element={<Contact/> } />
          <Route path="/profile" element={<Profile/> } />
          <Route path="/signup" element={<Signup/> } />
          <Route path="/login" element={<Login/> } />
          <Route path="/donate" element={<Donate/> } />
          <Route path="/request" element={<Req/> } />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
