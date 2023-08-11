import React from 'react'
import {Route , Routes , Navigate} from 'react-router-dom';
import Home from '../Pages/Home';
import AudioBook from '../Pages/AudioBook';
import Bayanaat from '../Pages/Bayanaat';
import Naat from '../Pages/Naat';
import ContactUs from '../Pages/ContactUs';
import JildOne from '../Pages/JildOne';
import JildTwo from '../Pages/JildTwo';
import JildThree from '../Pages/JildThree';
const Router = () => {
  return (
   
    <Routes>
    <Route path='/' element={<Navigate to='/home' />} />
    <Route path='/home' element={<Home />} />
    <Route path='/audioBook' element={<AudioBook />} />
    <Route path='/bayanaat' element={<Bayanaat />} />
    <Route path='/naat' element={<Naat />} />
    <Route path='/contact-us' element={<ContactUs />} />
    <Route path='/jild-one' element={<JildOne />} />
    <Route path='/jild-two' element={<JildTwo />} />
    <Route path='/jild-three' element={<JildThree />} />
    </Routes>
  )
}

export default Router