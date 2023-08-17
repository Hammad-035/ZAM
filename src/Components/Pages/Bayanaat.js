import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
const Bayanaat = () => {
  const [audioList , setAudioList] = useState([])
  const audioRef = useRef(null);
  const [selectedAudio, setSelectedAudio] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const [name ,  setName] =  useState('');



  const fetchData = ()=> {
    let apiURL = 'https://zadeashiqanemustafa.com/api/bayan'
    axios.get(apiURL).then((response)=> {
      console.log(response.data);
      setAudioList(response.data)
    }).catch((err)=>{
      console.log(err)
    })

  }

useEffect(()=>{
  fetchData();
}, []);

  useEffect(() => {
    if (selectedAudio) {
      audioRef.current.src = `https://zadeashiqanemustafa.com/storage/${selectedAudio.link}`
      audioRef.current.load();
      audioRef.current.play().catch((error) => {
        console.error('Failed to play audio:', error);
      });
    }
  }, [selectedAudio]);

  useEffect(() => {
    if (audioList.length > 0 && currentTrackIndex !== null) {
      setSelectedAudio(audioList[currentTrackIndex]);
    }
  }, [currentTrackIndex]);

  const handleAudioClick = (index) => {
    setCurrentTrackIndex(index);
    setName(audioList[index].name)
  };
  const handlePlay = () => {
    if(currentTrackIndex !== null) {
      setName(audioList[currentTrackIndex].name);
    }
  }

  const handleEnded = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % audioList.length);
  };

  return (
    <>
      <div className="audio-container">
        <section className='audio-section'>
        <h5>{name}</h5>
          <audio ref={audioRef} controls autoPlay onEnded={handleEnded} onPlay={handlePlay}>
            {selectedAudio && <source src={`https://zadeashiqanemustafa.com/storage/${selectedAudio.link}`} type='audio/mpeg' />}
          </audio>
        </section>

        <ol>
          {audioList.map((audio, index) => (
            <li
              key={audio.id}
              onClick={() => handleAudioClick(index)}
              className={selectedAudio === audio ? 'active' : ''}
            >
              {audio.name}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};
export default Bayanaat