
import React, { useState, useEffect, useRef } from 'react';
import { Speaker, SpeakerOff } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio('/halloween-music.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    // Clean up on component unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // For browsers that require user interaction before playing audio
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Playback prevented by browser:", error);
        });
      }
    }
    
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button 
        onClick={toggleMusic}
        className="bg-halloween-darkPurple/80 hover:bg-halloween-darkPurple p-3 rounded-full shadow-lg border border-halloween-orange/30 transition-all hover:scale-110"
        aria-label={isPlaying ? "Mute Music" : "Play Music"}
      >
        {isPlaying ? (
          <Speaker className="w-6 h-6 text-halloween-orange" />
        ) : (
          <SpeakerOff className="w-6 h-6 text-halloween-ghostWhite" />
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
