import React from "react";
import { Link, useMatch, useResolvedPath} from 'react-router-dom';




const Header = () => {
  return (

<header class="sticky top-0 z-50">
<div className="navbar bg-base-200 bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow-xl bg-base-200 rounded-box w-52">
      <Link to="/"/>
        <CustomLink className="btn normal-case btn-ghost text-lg" to="/">Home</CustomLink>
        <CustomLink className="btn normal-case btn-ghost text-lg" to="/resume">Resume</CustomLink>
        <CustomLink className="btn normal-case btn-ghost text-lg" to="/projects">Projects</CustomLink>
        <CustomLink className="btn normal-case btn-ghost text-lg" to="/about">About</CustomLink>
        <CustomLink className="btn normal-case btn-ghost text-lg" to="/contact">Contact</CustomLink>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-2xl text-white" to="#top">Christian Macias</a>
  </div>
  <div className="navbar-end hidden lg:flex"> 
    <ul className="menu menu-horizontal px-1">
     <CustomLink className="btn normal-case btn-ghost text-lg" to="/home">Home</CustomLink>
     <CustomLink className="btn normal-case btn-ghost text-lg" to="/projects">Resume</CustomLink>
     <CustomLink className="btn normal-case btn-ghost text-lg" to="/projects">Projects</CustomLink>
     <CustomLink className="btn normal-case btn-ghost text-lg" to="/about">About</CustomLink>
     <CustomLink className="btn normal-case btn-ghost text-lg" to="/contact">Contact</CustomLink>
    </ul> 
  </div> 
</div> 
</header>
)}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})
   
   return (
       <li className={isActive ? "active": ""}>
           <Link to={to} {...props}>
               {children}
       </Link>
       </li>
   )
 }

export default Header