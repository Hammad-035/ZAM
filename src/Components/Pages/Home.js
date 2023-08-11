import React , {useState , useEffect} from 'react'
import axios from 'axios';
import './Home.css';
import Clock from '../Clock';
const Home = () => {
  const [data , setData] = useState({});

  const apiKey = '4ce8c9ae39c17de4b81f33628707fc69';

  const getWeatherDetail = (cityName) => {
    if (!cityName) return;
    
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
    
    axios.get(apiURL)
      .then((res) => {
        console.log('response', res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const weatherMain = data?.weather?.[0]?.main ?? "Unknown";
  
  useEffect(() => {
    getWeatherDetail('Lahore');
  }, []);
  return (
     <>
    <div className='col-lg-6'>
    <Clock />
    </div>
     <div className="col-lg-6">
  <div className="weather-container">
    <div className="widget">
      <div className="left">
        <img src="/images/CloudIcon.png" alt="zam-logo" className="icon" />
        <h5 className="weather-status">{weatherMain}</h5>
      </div>
      <div className="right">
        <h5 className="city">{data?.name} {data?.sys?.country}</h5> 
        <h5 className="degree">{((data?.main?.temp) - 273.15).toFixed(0)}°C</h5>
      </div>
      <div className="bottom">
        <div>
         Wind speed: {data?.wind?.speed} mph
        </div>
        <div>
        Clouds:  {data?.clouds?.all} %
        </div>
        <div>
       Humidity : {data?.main?.humidity} %
        </div>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}
export default Home