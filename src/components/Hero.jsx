import SpotifyWidget from "./SpotifyWidget";

export default function Hero() {
  return (
    <section id="about" className="p-10 border-b-4 border-black bg-blue-400">
      <div className="max-w-4xl mx-auto bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        
        <h1 className="text-5xl md:text-6xl font-black mb-4 uppercase leading-tight">
          Halo, saya Rizki Ramdani Nugraha! 👋
        </h1>
        
        <p className="text-2xl font-bold mb-6 bg-yellow-300 inline-block px-2 border-2 border-black">
          Mahasiswa Teknik Informatika @ Universitas Taruna Bakti
        </p>
        
        <p className="text-lg md:text-xl mb-8 font-medium">
          Fokus ngulik Full-stack Web Development. Suka ngebangun aplikasi interaktif dari frontend sampai backend. Kadang suka ngedit juga.
        </p>
        
        {/* Tombol Call to Action (Digabung jadi satu baris yang rapi) */}
        <div className="flex flex-wrap gap-4 mb-8">
          <a 
            href="#projects" 
            className="bg-black text-white border-4 border-black py-3 px-8 font-black text-xl uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all"
          >
            Explore My Work
          </a>
          
          <a 
            href="/CV_Rizki_Ramdani.pdf" 
            download="CV_Rizki_Ramdani.pdf"
            className="bg-cyan-400 text-black border-4 border-black py-3 px-8 font-black text-xl uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-white hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all"
          >
            Download CV 📄
          </a>
        </div>

        {/* Section Social Media */}
        <div className="flex flex-wrap gap-4 pt-6 border-t-4 border-black border-dashed">
          <a 
            href="https://github.com/Rizkirdn" 
            target="_blank" 
            rel="noreferrer"
            className="bg-gray-200 border-4 border-black px-4 py-2 font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all flex items-center gap-2"
          >
            🐙 GitHub
          </a>

          <a 
            href="https://linkedin.com/in/rizki-ramdani-nugraha" 
            target="_blank" 
            rel="noreferrer"
            className="bg-[#0a66c2] text-white border-4 border-black px-4 py-2 font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all flex items-center gap-2"
          >
            💼 LinkedIn
          </a>

          <a 
            href="https://instagram.com/ngrhafrzk_" 
            target="_blank" 
            rel="noreferrer"
            className="bg-pink-400 border-4 border-black px-4 py-2 font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all flex items-center gap-2"
          >
            📸 Instagram
          </a>
        </div>

        {/* Pemanggilan Spotify Widget */}
        <SpotifyWidget />

      </div>
    </section>
  );
}