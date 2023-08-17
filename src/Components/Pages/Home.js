import React , {useState , useEffect} from 'react'
import axios from 'axios';
import './Home.css';
import Clock from '../Clock';
const Home = () => {
  const [data , setData] = useState({});

  const getWeatherDetail = () => {
    const apiURL = "https://zadeashiqanemustafa.com/api/weather"
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
    getWeatherDetail();
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
        <img src={data?.current?.weather_icons} alt="zam-logo" className="icon" />
      
      </div>
      <div className="right">
        <h5 className="city">{data.location?.name} </h5> 
        <h5 className="degree">{data?.current?.temperature}°C</h5>
      </div>
      <div className="bottom">
        <div>
         Wind speed: {data?.current?.wind_speed} mph
        </div>
        <div>
        Clouds:  {data?.current?.cloudcover} %
        </div>
        <div>
       Humidity : {data?.current?.humidity} %
        </div>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}
export default Home