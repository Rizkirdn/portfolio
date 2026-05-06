import { useEffect, useState } from 'react';

export default function EasterEgg() {
  const [isRacing, setIsRacing] = useState(false);
  const secretCode = "ferrari";

  useEffect(() => {
    let inputBuffer = "";
    
    const handleKeyDown = (e) => {
      // Menyimpan huruf yang diketik
      inputBuffer += e.key.toLowerCase();
      
      // Batasi panjang memori huruf
      if (inputBuffer.length > secretCode.length) {
        inputBuffer = inputBuffer.slice(-secretCode.length);
      }
      
      // Jika kata sandi cocok!
      if (inputBuffer === secretCode) {
        setIsRacing(true);
        
        // Putar efek suara mesin V8 yang melintas
        const v8Sound = new Audio("https://assets.mixkit.co/active_storage/sfx/1569/1569-preview.mp3");
        v8Sound.volume = 0.5;
        v8Sound.play().catch(() => {}); // Catch error kalau browser memblokir auto-play
        
        // Hilangkan mobil setelah 3 detik (animasi selesai)
        setTimeout(() => {
          setIsRacing(false);
        }, 3000);
        
        inputBuffer = ""; // Reset memori
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {isRacing && (
        <div className="fixed top-1/2 left-0 z-[9999] animate-[race_2.5s_ease-in-out_forwards] pointer-events-none">
          <span className="text-8xl md:text-[150px]">🏎️💨</span>
        </div>
      )}
    </>
  );
}