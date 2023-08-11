import React from 'react'
import './AudioBook.css';
import { useNavigate } from 'react-router-dom';
const AudioBook = () => {
  let navigate = useNavigate();
  function CardHandler1() {
     navigate('/jild-one')
  }
   function CardHandler2() {
    navigate('/jild-two')
   }
   function CardHandler3() {
    navigate('/jild-three')
   }
  return (
  <>
        <section className='container'>
          <div className="card" onClick={CardHandler1}  style={{width: '24rem'}}>
          <center>
          <img src='./images/20230307_135954.png' alt='logo' />
          </center>
         
        <div className="card-body">
          <h2 className="card-title">Jild 1</h2>
        </div>
      </div>

      <div className="card" onClick={CardHandler2} style={{width: '24rem'}}>
      <center>
      <img src='./images/20230307_135954.png' alt='logo' />
      </center>
      <div className="card-body">
        <h2 className="card-title">Jild 2</h2>
      </div>
    </div>
    <div className="card" onClick={CardHandler3} style={{width: '24rem'}}>
    <center>
          <img src='./images/20230307_135954.png' alt='logo' />
          </center>
    <div className="card-body">
      <h2 className="card-title">Jild 3</h2>
    </div>
  </div>
        </section>
  </>
  )
}

export default AudioBook