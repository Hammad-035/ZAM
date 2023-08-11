import React, { useState, useRef, useEffect } from 'react';

const Bayanaat = () => {
  const audioList = [
    '1. Naik Logon Ki Sohbat.mp3',
    '2. Imaan Kya Hai.mp3',
    '3. Imaan Ke Baad Doosri Cheez Taqwa Hai.mp3',
    '4. Teesri Cheez Schon Ke Sath Ho Jao.mp3',
    '5. Jis Ka Rab Us Ka Sab.mp3',
    '6. Ghaus Pak (رضی اللہ عنہ) Ki Shan.mp3',
    '7. Aala Hazrat (رضی اللہ عنہ) Ka Ghaus Pak (رضی اللہ عنہ) Ki Shan Ke Baray Mein Aqeedah.mp3',
    '8. Darood Taaj.mp3',
    '9. Shan e Syeduna Imam e Hussain(رضی اللہ عنہ).mp3',
    '10. Surah Baqarah Ayat 155 Ka Tarjuma o Tafseer.mp3',
  ]; // Your audio list here
  const audioRef = useRef(null);
  const [selectedAudio, setSelectedAudio] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const [name ,  setName] =  useState('');

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
  const handlePlay = () => {
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
            {selectedAudio && <source src={`/bayaan/${selectedAudio}`} type='audio/mpeg' />}
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
export default Bayanaat