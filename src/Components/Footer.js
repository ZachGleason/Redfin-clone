import React from 'react';
import './Footer.css';
import { AiOutlineSearch } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer'> 
        <div className='footer_left'>
            <h2>Talk to a Redfin Agent</h2>
            <p>Start your search with an expert local agent—there’s no pressure or obligation.</p>
        </div>
        <div className='footer_right'>
            <p>Where are you searching for homes?</p>
            <div className='footer_input'>
                <input type="text" placeholder='City, Address, ZIP'></input>
                <div className='search_zone'>
                    <AiOutlineSearch className='search_icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer