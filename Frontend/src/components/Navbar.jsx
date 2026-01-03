import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const updateUser = () => {
      const userInfo = localStorage.getItem('userInfo');
      setUser(userInfo ? JSON.parse(userInfo) : null);
    };
    updateUser();
    window.addEventListener('storage', updateUser);
    return () => window.removeEventListener('storage', updateUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    setUser(null);
    navigate('/');
  };

  return (
    <div className="navbar bg-white text-black shadow-sm min-h-[80px]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
  <li><Link to="/" className="hover:text-black hover:underline transition-colors duration-200">Home</Link></li>
  <li><Link to="/contact" className="hover:text-black hover:underline transition-colors duration-200">Reviews</Link></li>
  <li><Link to="/about" className="hover:text-black hover:underline transition-colors duration-200">About</Link></li>
  <li><Link to="/profile" className="hover:text-black hover:underline transition-colors duration-200">Profile</Link></li>
      </ul>
    </div>
  <Link to="/" className="btn btn-ghost text-xl">FoodHive</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1 text-xl text-black">
  <li><Link to="/" className="hover:text-black hover:underline transition-colors duration-200">Home</Link></li>
  <li><Link to="/review" className="hover:text-black hover:underline transition-colors duration-200">Reviews</Link></li>
  <li><Link to="/about" className="hover:text-black hover:underline transition-colors duration-200">About</Link></li>
  <li><Link to="/profile" className="hover:text-black hover:underline transition-colors duration-200">Profile</Link></li>
     
      
    </ul>
  </div>
  <div className="navbar-end">
    {user ? (
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn m-1 cursor-pointer flex items-center gap-2">
          <span className="font-semibold">{user.name || 'User'}</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-32 mt-2">
          <li><button onClick={handleLogout} className="text-red-600">Logout</button></li>
        </ul>
      </div>
    ) : (
      <Link to="/signup" className="btn">Sign Up</Link>
    )}
  </div>
</div>
    
  )
}

export default Navbar
