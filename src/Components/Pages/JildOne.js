import React, { useState, useRef, useEffect } from 'react';
import './JildOne.css';

const JildOne = () => {
  const audioList = [
    '1. Aqeedah Ki Durustagi Aur Pukhtagi.mp3',
    '2. Fazeelat e Sunnat.mp3',
    '3. Arkaan -e- Islam Aur Pehla Rukun Kalmah Tayyibah.mp3',
    '4. Arkaan e Islam Aur Dosra Rukun Namaz.mp3',
    '5. Masnoon Namaz.mp3',
    '6. Arkaan -e- Islam Aur Teesra Rukun Zakat.mp3',
    '7. Arkaan -e- Islam Aur Choutha Rukun Rozah.mp3',
    '8. Arkaan -e- Islam Aur Panchawan Rukun Hajj.mp3',
    '9. Umrah Ki Adaigi Ka Mukhtaser Tareeqah.mp3',
    '10. Hajj Ki Tarteeb Aur Us Ka Tareeqah.mp3',
    '11. Hajj Baitullah Aur Umrah Shareef Ki Adaigi Ke Baad Dar -e- Habib ﷺ Ki Haazri.mp3',
    '12. Sunan o Faraiz e Ghusal.mp3',
    '13. Wudu Ke Faraiz o Sunan.mp3',
    '14. Tayamum Ka Bayan.mp3',
    '15. Khanay Aur Peenay Ki Sunnatain.mp3',
    '16. Peenay Ki Sunnatain.mp3',
    '17. Chhenknay Ka Sunnat Tareeqah.mp3',
    '18. Sunnat Ksb Halal.mp3',
    '19. Khushbu Laganay Ki Sunnat.mp3',
    '20. Mohsin Ka Shukriyah Ada Karne Ki Sunnat.mp3',
    '21. Qanaat Ki Sunnat.mp3',
    '22. Sunnat e Miswaak Shareef.mp3',
    '23. Aainah Dekhnay Ki Sunnat.mp3',
    '24. Istihza Se Momanat Aur Mazah Ki Sunnat.mp3',
    '25. Musafhah Karne Ki Sunnat.mp3',
    '26. Ayadat Yaan Bimaar Pursi Ki Sunnat.mp3',
    '27. Sunnat e Sareed.mp3',
    '28. Bazaar Mein Daakhil Honay Ka Sunnat Tareeqah.mp3',
    '29. Kanghi Karne Tail Laganay Ki Sunnat.mp3',
    '30. Sunnat e Khidaab.mp3',
    '31. Tasweer Nah Bananay Ki Sunnat.mp3',
    '32. Sunnat Daarhi Shareef.mp3',
    '33. Naakhun Taraashney Ki Sunnat.mp3',
    '34. Sunnat e Kefiyat e Takalum.mp3',
    '35. Sunnat e tehband.mp3',
    '36. Sunnat e Nikah.mp3',
    '37. Surmah Laganay Ki Sunnat.mp3',
    '38. Puranay Aur Pewand Lagey Kapray Pahannay Ki Sunnat.mp3',
    '39. Sowal Nah Karny Ki Sunnat.mp3',
    '40. Sunnat e Maoon.mp3',
    '41. Ziyarat e Qobor Ki Sunnat.mp3',
    '42. Aurton Ke Liye Ziyarat e Qobor Ka Hukum.mp3',
    '43. Qabron Par Haazri Ka Tareeqah.mp3',
    '44. Qabar Par Zikar Aur Aazan Ka Jawwaz.mp3',
    '45. Sunnat e Husn e Kholq.mp3',
    '46. Sunnat e Husn e Kholq Part 2.mp3',
    '47. Husn e Kholq Ke Baray Mein Ahadees.mp3',
    '48. Huzoor Nabi Kareem ﷺ Hayaat Hain Aur Aap ﷺ Haazir o Nazir Nain.mp3',
    '49.  Part 2 Huzoor Nabi ﷺ Kareem Hayaat Hain Aur Aap ﷺ Haazir o Nazir Nain.mp3',
    '50. Sunnat e Eesaal e sawab.mp3',
    '51. Part 2 Sunnat e Eesaal e sawab.mp3',
    '52. Sadaqah Karne Ki Fazeelat.mp3',
    '53. Part 2 Sadaqah Karne Ki Fazeelat.mp3',
    '54. Sood Ki Momanat.mp3',
    '55. Sood Ki mazmmt Mein Ahadees.mp3',
    '56. Sood Ki Deeni Aur Dunyawi Kharabian.mp3',
    '57. Qarzzzz e Hasanah Ke Fwaid.mp3',
    '58. Heela Isqaat e Ribaa.mp3',
    '59. Girwi Rakhi Hui Cheez Ka Bayan.mp3',
    '60. Dua Ki Sunnat.mp3',

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
    if (audioList.length > 0 && currentTrackIndex !== null) {
      setSelectedAudio(audioList[currentTrackIndex]);
    }
  }, [currentTrackIndex]);

  const handleAudioClick = (index) => {
    setCurrentTrackIndex(index);
    setName(audioList[index])
    console.log(audioList[index]);
  };
  
  const handlePlay = () => {
    if (currentTrackIndex !== null) {
      setName(audioList[currentTrackIndex]);
    }
  };

  const handleEnded = (prevIndex) => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % audioList.length);
    setName(audioList[prevIndex + 1]);
  };

  return (
    <>
      <div className="audio-container">
        <section className='audio-section'>
         <h5> {name}</h5>
          <audio ref={audioRef} controls autoPlay onEnded={handleEnded} onPlay={handlePlay}>
            {selectedAudio && <source src={`/audios/${selectedAudio}`} type='audio/mpeg' />}
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

export default JildOne;
