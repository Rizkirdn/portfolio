import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Mengecek seberapa jauh halaman di-scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Fungsi untuk scroll mulus ke paling atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {isVisible && (
        <button 
          onClick={scrollToTop}
          title="Kembali ke Atas"
          className="fixed bottom-8 right-8 z-50 bg-yellow-300 border-4 border-black w-14 h-14 flex items-center justify-center font-black text-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none hover:bg-white transition-all"
        >
          ↑
        </button>
      )}
    </>
  );
}