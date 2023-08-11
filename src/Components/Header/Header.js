import React from 'react'
import './Header.css';
import Nav from '../Navbar/Nav';
import SelectMenu from '../SelectMenu/SelectMenu';
const Header = () => {
    return (
        <>
            <div>
                <header className='header'>
                    <nav>
                        <div className='logo-container'>
                            <div className='logo'>
                                <img src='./images/20230307_135954.png' alt='logo' />
                            </div>
                            <div className='left-image'>
                                <img src='./images/20230307_140545_50.png' alt='bismillah' />
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        



            <section>
                <div className='middle-container'>
                    <div className='left-middleImage'>
                        <img src='./images/pics/YaMuhammad.png' alt='Ya Muhammad' />
                    </div>
                    <div className='middleImage'>
                    <img src='./images/pics/Untitled-1.png' alt='middle' />
                    </div>
                    <div className='right-middleImage'>
                    <img src='./images/pics/YaAllah.png' alt='Ya Allah' />
                    </div>
                    
                </div>
                <Nav />
                <SelectMenu />
               
            </section>
            
        </>


    )
}

export default Header;