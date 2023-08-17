import React , {useState , useEffect} from 'react'
import './ContactUs.css'
import axios from 'axios'
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  // const data = {name:'' , email:'' , number:'' , subject:'' , message:''}
  const [data , setData] = useState([]);

  const [input , setInput] = useState(data);
  const [flag , setFlag] = useState(false)
  const InputChangeHandler = (event ) => {
     setInput({...input , [event.target.name]:event.target.value});
  }

 
  const fetchData = () => {
    let apiURL = 'https://zadeashiqanemustafa.com/api/contact-us'
    axios.post(apiURL, {
      name: input.name,
      email: input.email,
      number: input.number,
      subject: input.subject,
      message: input.message,
    }, {
      headers : { 'Content-Type': 'application/json' },
    }).then((response)=> {
      toast.success('Your Feedback was successfully received')
      setData(response.data);
    }).catch((err)=> {
      console.log(err);
    })
  }

  useEffect(()=> {
    fetchData();
  },[]);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(input.name , input.email , input.number , input.subject , input.message)
    if(!input.name || !input.email || !input.subject || !input.message || !input.number){
     toast.warning('Please enter All fileds')
    }
    else {
      setFlag(true)
      fetchData()
    }
   
  }
  useEffect(()=>{
  }, [flag])
  return (
    <div className='container'>
    <ToastContainer />

        <div className='row'>
        <div className='col-md-12'>
        <center>
        <span className='question'>Have a Question</span>
        <h1>Send FeedBack</h1>
        </center>
        <form onSubmit={submitHandler}>
        <div className="row g-3">
          <div className="col">
            <input type="text" className="form-control" placeholder="Enter Your Name" aria-label="First name" name='name' onChange={InputChangeHandler} value={input.name}  />
          </div>
          <div className="col">
            <input type="email" className="form-control" placeholder="Your Email" aria-label="Last name" name='email' onChange={InputChangeHandler} value={input.email}  />
          </div>
        </div>
        <div className="row g-3 mt-4">
        <div className="col">
          <input type="number" className="form-control" placeholder="Phone" aria-label="First name" name='number' onChange={InputChangeHandler} value={input.number} />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Subject" aria-label="Last name" name='subject' onChange={InputChangeHandler}  value={input.subject} />
        </div>
      </div>
      <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
      <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Write Your Message' name='message' onChange={InputChangeHandler} rows={5} defaultValue={""} value={input.message}  />
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