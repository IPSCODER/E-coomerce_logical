import React from 'react'
import "./home.css";
import Product from './Product';

const Home = () => {
  return (
    <div className='home' >
        <div className="home__container">
            <img src="https://www.thestatesman.com/wp-content/uploads/2020/10/iStock-ecomm.jpg" alt="" className="home__image" />
        </div>
        <div className="home__row">
            <Product id={1} title={'Fire-Boltt Ninja Call Pro Plus 1.83" Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution'} price={1799} rating={5} img={'https://m.media-amazon.com/images/I/61S9aVnRZDL._AC_UL320_.jpg'} />
            <Product id={2} title={'Fire-Boltt Ninja Call Pro Plus 1.83" Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution'} price={1799} rating={2} img={'https://m.media-amazon.com/images/I/61S9aVnRZDL._AC_UL320_.jpg'} />
        </div>
        <div className="home__row">
        <Product id={3} title={'Fire-Boltt Ninja Call Pro Plus 1.83" Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution'} price={1799} rating={3} img={'https://m.media-amazon.com/images/I/61S9aVnRZDL._AC_UL320_.jpg'} />
        <Product id={4} title={'Fire-Boltt Ninja Call Pro Plus 1.83" Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution'} price={1799} rating={1} img={'https://m.media-amazon.com/images/I/61S9aVnRZDL._AC_UL320_.jpg'} />
        <Product id={4} title={'Fire-Boltt Ninja Call Pro Plus 1.83" Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution'} price={1799} rating={4} img={'https://m.media-amazon.com/images/I/61S9aVnRZDL._AC_UL320_.jpg'} />
        </div>
        <div className="home__row">
        <Product id={5} title={'Fire-Boltt Ninja Call Pro Plus 1.83" Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution'} price={1799} rating={2} img={'https://m.media-amazon.com/images/I/61S9aVnRZDL._AC_UL320_.jpg'} />
        </div>

    </div>
  )
}

export default Home