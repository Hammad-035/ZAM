import React, { useState, useRef, useEffect } from 'react';

const JildThree = () => {
  const audioList = [
    '1. Intisaab.mp3',
    '2. Fazail e Quran.mp3',
    '3. Quran Ka Dosra Maienay.mp3',
    '4. Quran Ka Ik Naam Majeed Bhi Hai.mp3',
    '5. Quran Pak Ka Louh e Mehfooz Mein Hona.mp3',
    '6. Sahib e Quran Tamam Uloom Jantay Hain.mp3',
    '7. Quran Pak Se Quran Pak Ki Shan Ka Bayan.mp3',
    '8. Quran Parhaiz Garon Ke Liye Hidaayat Hai.mp3',
    '9. Fazail e Quran Ahadees Ki Roshni Mein.mp3',
    '10. Ahal e Quran Hi Auliya Allah Hain.mp3',
    '11. Quran Pak Tarteel Se Parha Jaye.mp3',
    '12. Sahib e Quran Ki Tilawat Ka Aalam.mp3',
    '13. Quran Pak Pr Amal Karne Wala Azeem Insaan Hai.mp3',
    '14. Duniya Aur Us Ki Haqeeqat.mp3',
    '15. Duniya Kya Hai.mp3',
    '16. Duniya Ki Haqeeqat Kya Hai.mp3',
    '17. Duniya Ki Mohabbat Ke Nuqsanaat.mp3',
    '18. Masaaib Mein Bhi Hamara Hi Faida Hai.mp3',
    '19. Duniya Daar Ka Dil Andha Hota Hai.mp3',
    '20. Duniya Dhokay Ka Ghar Hai.mp3',
    '21. Duniya Se Be Raghbati Ke Fawaid.mp3',
    '22. Huzoor ﷺ Allah Ki Raah Mein Sab Se Ziyada Satay Gaye.mp3',
    '23. Duniya Se Be Raghbati Ka Teesra Faida.mp3',
    '24. Duniya Se Be Raghbati Ka Choutha Faida.mp3',
    '25. Ghaflat Ka ilaaj.mp3',
    '26. Ghaflat Se Bachney Ka Behtareen Irshad.mp3',
    '27. Part 2 Ghaflat Se Bachney Ka Behtareen Irshad.mp3',
    '28. Huzoor ﷺ Malik e Shariat Hain.mp3',
    '29. Pani Peenay Ke Baad Ki Dua.mp3',
    '30. Allah Pak Ki Nematon Ke Suhkrany Ki Dua.mp3',

  ]; // Your audio list here
  const audioRef = useRef(null);
  const [selectedAudio, setSelectedAudio] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const [name , setName] = useState('');

  useEffect(() => {
    if (selectedAudio) {
      audioRef.current.load();
      audioRef.current.play().catch((error) => {
        console.error('Failed to play audio:', error);
      });
    }
  }, [selectedAudio]);

  useEffect(() => {
    if (audioList.length > 0 && currentTrackIndex >= 0 && currentTrackIndex < audioList.length) {
      setSelectedAudio(audioList[currentTrackIndex]);
    }
  }, [currentTrackIndex]);
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
    if (currentTrackIndex !== null) {
      setName(audioList[currentTrackIndex]);
    }
  };

  const handleEnded = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % audioList.length);
  };

  return (
    <>
      <div className="audio-container">
        <section className='audio-section'>
        <h5>{name}</h5>
          <audio ref={audioRef} controls autoPlay onEnded={handleEnded} onPlay={handlePlay}>
            {selectedAudio && <source src={`/jild3/${selectedAudio}`} type='audio/mpeg' />}
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

export default JildThree