import React, { useState, useRef, useEffect } from 'react';

const JildTwo = () => {
  const audioList = [
    '1. Aqeedah Ki Durustagi Aur Pukhtagi.mp3',
    '2. Sunnat Taubah o Istighfar.mp3',
    '3. Taubah Karne Ke Mazeed Fawaid.mp3',
    '4. Tauba Wilayat Ka Sabab.mp3',
    '5. Part 2 Tauba Wilayat Ka Sabab.mp3',
    '6. Gunaaho Se Bachney Ka Tareeqah.mp3',
    '7. Syed ul istighfar.mp3',
    '8. Anbia Ikram Gunaaho Se Pak Hain.mp3',
    '9. Sahabah Ikram Aur Aqabreen e Ummat Ka Aqeedah.mp3',
    '10. Allah Pak Ka Elaan.mp3',
    '11. ilm Ki Fazeelat.mp3',
    '12. ilm Momin Ki Meeras Hai.mp3',
    '13. Ehley ilm Ke Barray Darajaat Hain.mp3',
    '14. Khof e Khuda Ibadat Mein Zouq Peda Karta Hai.mp3',
    '15. Momin Kabhi ilm Se Sair Nahi Hota.mp3',
    '16. Mehboob e Khuda Kis Par Harees Hain.mp3',
    '17. Aalim Ki Abid Par Fazeelat.mp3',
    '18. Aalim Ko Imam ul Ambiya ﷺ Ka Qurb Miley Ga.mp3',
    '19. Aalim Ban_nay Ka Aasaan Tareeqah.mp3',
    '20. ilm Par Amal Ki Fazeelat.mp3',
    '21. Hazrat Umar Bin Abdul Aaziz (رضی اللہ عنہ) Ka Kamaal.mp3',
    '22. Jo Neki Se Mun Phair Le Us Ke Liye Matay Ghuroor Hai.mp3',
    '23. ilm Par Amal Karny Se Mutaaliq Ahadees Mein Waeed.mp3',
    '24. ilm Par Amal Karny Walon Ke Liye Aap ﷺ Ki Khobsorat Dua.mp3',
    '25. Be Amal Aalim Aqal Se Khaali Hota Hai.mp3',
    '26. Khaliq e Kaayenaat Aalim Ki Aawaz Ko Pasand Farmata Hai.mp3',
    '27. Aalim e Ba Amal Allah Ka Walii Hota Hai.mp3',
    '28. Ksb Nasb Ko Chaar Chaand Laga Deta Hai.mp3',
    '29. Aap ﷺ Ka Qurb Aalim e Deen Ko Naseeb Ho Ga.mp3',
    '30. ilm Par Amal Karny Walon Ko Qayamat Ke Din Allah Pak Ki Mulaqaat Aur Deedar Naseeb Ho Ga.mp3',
    '31. Walidain Ke Haqooq.mp3',
    '32. Walidain Ke Sath Har Qisam Ka Ihsaan Karen.mp3',
    '33. Maan Baap Ka Nafarman Jannat Mein Nahi Jaye Ga.mp3',
    '34. Surah Bani Israel Aayat # 23 Ke Aglay Hissay.mp3',
    '35. Walidain Ke Nafarman Ko Saza Qabal Az Mout Mil Jati Hai.mp3',
    '36. Walidain Ke Liye Behtareen Dua.mp3',
    '37. Maa Baap Ke Liye Dua Rizaq Mein Izafay Ka Taveez Hai.mp3',
    '38. Maa Baap Ke Nafarman Ko Martay Waqt Kalma Naseeb Nahi Hota.mp3',
    '39. Maa Baap Ki Izzat Se Wilayat Chamakti Hai.mp3',
    '40. Huzoor Nabi Kareem ﷺ Ki Razai Maa Ki Shan.mp3',
    '41. Walidain Par Aulaad Ke Haqooq.mp3',
    '42. Ek Sawwal Ka Jawwab.mp3',
    '43. Hakayat.mp3',
    '44. Aulaad Ke Haqooq Ki Adaigi Ke Liye Mundarijah Zail Baatein.mp3',
    '45. Naam Rakhnay Ke Silsilah Mein Kuch Masail.mp3',
    '46. Aulaad Ko Taleem Se Aarasta Karna Walidain Ka Farzz Hai.mp3',
    '47. Hazrat Abbu Hurairah Ka Farmaan.mp3',
    '48. Aulaad Ki Tarbiyat Ke Baray Mein Gayarahawan Qaidah.mp3',
    '49. Khamoshi Ki Ahmiyat Aur Fawaid.mp3',
    '50. Khamoshi Ki Fazeelat Mein Ahadees.mp3',
    '51. Part 2 Khamoshi Ki Fazeelat Mein Ahadees.mp3',
    '52. Sachi Baat Kehnay Ki Fazeelat.mp3',

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
            {selectedAudio && <source src={`/Jald2/${selectedAudio}`} type='audio/mpeg' />}
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

export default JildTwo