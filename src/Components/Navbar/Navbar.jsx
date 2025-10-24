import React from 'react';
import logoImg from '../../../assets/logo.png'
import github from '../../../assets/github.png'
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>


        <Link to='/' className="btn btn-ghost text-xl border-0 hover:bg-transparent hover:border-0 focus:bg-transparent focus:border-0 shadow-none">
          <img className='w-[40px] h-[40px]' src={logoImg} />
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold transition-none">
            HERO.IO
          </span>
        </Link>



      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-black"}>Home</NavLink></li>
          <li><NavLink to="/apps" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-black"}> Apps</NavLink></li>
          <li><NavLink to="/installation" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-black"}>Installation</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end ">
        <div className='mt-[-20px]'>
          <a className="btn flex items-center gap-1 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-bold px-6 py-2 rounded mt-5">
            <img className='w=[20px] h-[20px] rounded-md' src={github} alt="" />   Contribute
          </a>
        </div>

      </div>
    </div>
  );
};

export default Navbar;