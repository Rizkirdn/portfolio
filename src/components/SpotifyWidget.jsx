export default function SpotifyWidget() {
  return (
    <div className="mt-8 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-sm w-full hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default">
      
      {/* Header Kotak Neobrutalism */}
      <div className="bg-yellow-300 border-b-4 border-black px-3 py-1 flex items-center gap-2">
         <span className="w-3 h-3 bg-red-500 rounded-full border border-black"></span>
         <span className="w-3 h-3 bg-green-500 rounded-full border border-black animate-pulse"></span>
         <span className="font-black text-xs uppercase tracking-widest ml-2 text-black">
           Now Playing
         </span>
      </div>

      {/* Spotify Official Embed Iframe (SUDAH FORMAT JSX) */}
      <div className="p-2 bg-gray-100 flex justify-center">
        <iframe 
          style={{ borderRadius: '0px' }} 
          src="https://open.spotify.com/embed/track/3gjRRs7gmh3Euynu1cau1d?utm_source=generator" 
          width="100%" 
          height="152" 
          frameBorder="0" 
          allowFullScreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
        </iframe>
      </div>
      
    </div>
  );
}
