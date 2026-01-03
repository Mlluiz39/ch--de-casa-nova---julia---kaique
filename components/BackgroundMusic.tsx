import React, { useEffect, useRef } from 'react';
import { useMusic } from '../contexts/MusicContext';

const BackgroundMusic: React.FC = () => {
  const { isPlaying, pauseMusic } = useMusic();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.log("Autoplay prevented:", error);
          pauseMusic(); // Sync state if browser blocks autoplay
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, pauseMusic]);

  return (
    <audio ref={audioRef} loop>
      <source src="/music.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default BackgroundMusic;
