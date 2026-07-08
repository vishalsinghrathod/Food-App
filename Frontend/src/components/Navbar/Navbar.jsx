import React, { useContext, useState } from 'react'
import './Navbar.css';
import {assets} from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = () => {

const [menu, setMenu] = useState("menu");

const { getTotalCartAmount, user, logout, setShowLogin, searchQuery, setSearchQuery, setCategory } = useContext(StoreContext)

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      const element = document.getElementById("food-display");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className='navbar'>
        <Link onClick={() => { setCategory("All"); setSearchQuery(""); }} className='logo-name' to='/'><h1><span>V</span>-Kitchen</h1></Link>
        <ul className="navbar-menu">
            
            <Link to='/' onClick={()=>{ setMenu("home"); setCategory("All"); setSearchQuery(""); }} className={menu==="home"?"active":""}>home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
        </ul>
        <div className="navbar-right">
            <div className="navbar-search-container">
                <input 
                    type="text" 
                    placeholder="Search dishes..." 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    onKeyDown={handleSearchSubmit}
                />
                <img onClick={handleSearchSubmit} src={assets.search_icon} alt="" />
            </div>
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            {!user ? (
              <button onClick={()=>setShowLogin(true)}>Sign In</button>
            ) : (
              <div className='navbar-profile'>
                  <div className='navbar-profile-container'>
                      <img src={assets.profile_icon} alt="" />
                      <span>{user.name}</span>
                  </div>
                  <ul className="nav-profile-dropdown">
                      <li onClick={logout}>
                          <img src={assets.logout_icon} alt="" />
                          <p>Logout</p>
                      </li>
                  </ul>
              </div>
            )}
        </div>
    </div>
  )
}

export default Navbar;