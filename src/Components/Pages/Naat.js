import React, { useState, useRef, useEffect } from 'react';

const Naat = () => {
  const audioList = [
    '1. Duhai Dun Ga Mein Jis Waqt Keh Kar Ya Rasool-Allah.mp3',
    '2. Khudaaraa Zara Haath Seenay Pay Rakh Do.mp3',
    '3. Hai Saraapaa Ujala Hamara Nabi.mp3',

  ]; // Your audio list here
  const audioRef = useRef(null);
  const [selectedAudio, setSelectedAudio] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const [name , setName] = useState(true);

  useEffect(() => {
    if (selectedAudio) {
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
    setName(audioList[index])
  };
  const handlePlay = ()=> {
    if(currentTrackIndex !== null) {
      setName(audioList[currentTrackIndex]);
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
            {selectedAudio && <source src={`/naat/${selectedAudio}`} type='audio/mpeg' />}
          </audio>
        </section>

        <ul>
          {audioList.map((audio, index) => (
            <li
              key={index}
              onClick={() => handleAudioClick(index)}
              className={selectedAudio === audio ? 'active' : ''}
            >
              {audio}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Naat