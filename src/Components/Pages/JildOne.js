import React, { useState, useRef, useEffect } from 'react';
import './JildOne.css';
import axios from 'axios';

const JildOne = () => {
  const [audioList, setAudioList] = useState([]);
  const [name, setName] = useState('');
  const audioRef = useRef(null);
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  // const [audioLoaded, setAudioLoaded] = useState(false); // Track audio loading status

  // const audioRef = useRef(null);
  // const [selectedAudio, setSelectedAudio] = useState(false);
  // const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  // const [name , setName] = useState('');
  // const audioList = [
  //   '1. Aqeedah Ki Durustagi Aur Pukhtagi.mp3',
  //   '2. Fazeelat e Sunnat.mp3',
  // ]

  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {
    if (selectedAudio) {
      audioRef.current.src = `https://zadeashiqanemustafa.com/storage/${selectedAudio.link}`;
      audioRef.current.load();
      audioRef.current.play().catch((error) => {
        console.error('Failed to play audio:', error);
    })
  }}, [selectedAudio]);
  


  useEffect(() => {
    if (audioList.length > 0 && currentTrackIndex !== null) {
      setSelectedAudio(audioList[currentTrackIndex]);
      // Reset audio loading status
    }
  }, [currentTrackIndex]);

  const fetchData = async() => {
    let apiURL = 'https://zadeashiqanemustafa.com/api/jild-one';
   await axios.get(apiURL)
      .then((response) => {
        console.log('response', response.data);
        setAudioList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (audioList.length > 0 && currentTrackIndex !== null) {
      setSelectedAudio(audioList[currentTrackIndex]);
    }
  }, [currentTrackIndex]);

  const handleAudioClick = (index) => {
    setCurrentTrackIndex(index);
    setSelectedAudio(audioList[index])
    setName(audioList[index].name);
  };
  const handlePlay = () => {
    if (currentTrackIndex !== null) {
      setName(audioList[currentTrackIndex].name);
    }
  };

  const handleEnded = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % audioList.length);
  };
 

  console.log(selectedAudio )
  console.log(selectedAudio && `${selectedAudio.link}`)


  return (
    <div className="audio-container">
      <section className='audio-section'>
        <h5>{name}</h5>
        <audio ref={audioRef} controls autoPlay onEnded={handleEnded} onPlay={handlePlay}>
        {selectedAudio && <source src={`https://zadeashiqanemustafa.com/storage/${selectedAudio.link}`} type='audio/mp3' />}
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
  );
};

export default JildOne;
