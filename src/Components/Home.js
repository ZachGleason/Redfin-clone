import React from 'react';
import './Home.css'
import Button from '@mui/material/Button';

const Home = () => {
  return (
    <div className='home'>
        <div className='home_top'>
            <img 
            src='https://ssl.cdn-redfin.com/v426.2.0/images/merch/generalImages/CompleteSolution_Q1_2020_557_YardSign2.jpg'
            alt=''
            className='images'
            />
            <div className='home_content'>
                <h2>Sell for more than the home next door</h2>
                <p>Local Redfin Agents price your home right and make it shine online. Get started with a free consultation.</p>
                <input type="text" placeholder='Enter your street address'></input>
                <Button variant='contained' className="next_button">Next</Button>
            </div>
        </div>
        <div className='home_center'>
            <div className='home_content_two'>
                <h2>Your perfect rental is now on Redfin</h2>
                <p>Finding the apartment, condo, or house you’ll love to rent just got easier.</p>
                <input type="text" placeholder='City, Address, School, Building, Zip'></input>
                <Button variant='contained' className="next_button">Next</Button>
            </div>
        <img 
            src='https://i0.wp.com/www.have-clothes-will-travel.com/wp-content/uploads/2022/03/mn-cabing-1.jpg?resize=1024%2C593&ssl=1'
            alt=''
            className='images_two'
            />
        </div>
        <div className='home_center'>
        <img 
            src='https://pbs.twimg.com/media/FTJxEbvUcAAe4Et?format=jpg&name=medium'
            alt=''
            className='images_three'
            />
            <div className='home_content_three'>
                <h2>Get real-time market updates</h2>
                <p>We’re bringing you the latest on how COVID-19 is impacting the real estate market.</p>
                <Button variant='contained' className="news_button">See Housing News</Button>
            </div>
        </div>
    </div>
  )
}

export default Home