import React , {useState , useEffect} from 'react'
import './ContactUs.css'
const ContactUs = () => {
  const data = {name:'' , email:'' , number:'' , subject:'' , message:''}
  const [input , setInput] = useState(data);
  const [flag , setFlag] = useState(false)
  const InputChangeHandler = (event ) => {
     setInput({...input , [event.target.name]:event.target.value});
     console.log(input);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if(!input.name || !input.email || !input.subject || !input.message || !input.number){
      alert('All Fields are required')
    }
    else {
      setFlag(true)
    }
   
  }
  useEffect(()=>{
    console.log('Feedback sent Successfully')
  }, [flag])
  return (
    <div className='container'>
        <div className='row'>
        <div className='col-md-12'>
        <center>
        <span className='question'>Have a Question</span>
        <h1>Send FeedBack</h1>
        </center>
        <form onSubmit={submitHandler}>
        <div className="row g-3">
          <div className="col">
            <input type="text" className="form-control" placeholder="Enter Your Name" aria-label="First name" name='name' onChange={InputChangeHandler} value={input.name}  required/>
          </div>
          <div className="col">
            <input type="email" className="form-control" placeholder="Your Email" aria-label="Last name" name='email' onChange={InputChangeHandler} value={input.email}  required/>
          </div>
        </div>
        <div className="row g-3 mt-4">
        <div className="col">
          <input type="number" className="form-control" placeholder="Phone" aria-label="First name" name='number' onChange={InputChangeHandler} value={input.number} required/>
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Subject" aria-label="Last name" name='subject' onChange={InputChangeHandler}  value={input.subject} required/>
        </div>
      </div>
      <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
      <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Write Your Message' name='message' onChange={InputChangeHandler} rows={5} defaultValue={""} value={input.message} required />
    </div>
        <center><button type="submit" class="btn btn-success btn-lg">Contact Us</button></center>
        </form>
        </div>
        <div className='col-md-12'></div>
        </div>
    </div>
  )
}

export default ContactUs