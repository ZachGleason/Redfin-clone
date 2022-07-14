import React from 'react';
import './Header.css';
import Button from '@mui/material/Button';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
  return (
    <div className='header'>
        <div className='header_text'>
        <img 
        src="https://eac-network.org/wp-content/uploads/2018/03/Redfin-Logo.png"
        alt="logo"
        className='header_icon'
        />

        <div className='header_content'>
            <p>1-844-759-7732</p>
            <p>Buy</p>
            <p>Rent</p>
            <p>Sell</p>
            <Button variant='outlined' className='button'>Log In</Button>
            <Button variant='outlined'  className='button'>Sign Up</Button>
        </div>
       </div>
        <div className='banner_content'>
           <p>Find homes first.</p>
           <p>Tour homes fast.</p>
        </div>
        <div className='banner'>
            <p className='banner_options'>Buy</p>
            <p className='banner_options'>Rent</p>
            <p className='banner_options'>Sell</p>
            <p className='banner_options'>Mortgage</p>
            <p className='banner_options'>Home Estimate</p>
        </div>
        <div className='input'>
            <input type="text" placeholder="City, County, Zip" className='input_controller'></input>
            <div className='search_container'>
                <AiOutlineSearch className='search_icon' />
            </div>
        </div>
    </div>
  )
}

export default Header