import { useState } from 'react';
import img1 from '../assets/images/photography/japan1.jpg';
import img2 from '../assets/images/photography/japan2.jpg';
import img3 from '../assets/images/photography/japan3.jpg';
import img4 from '../assets/images/photography/street-photo.jpg';
import img5 from '../assets/images/photography/streetphoto2.jpg';
import img6 from '../assets/images/photography/street-photo3.jpg';
import img7 from '../assets/images/photography/street-photo4.jpg';
import img8 from '../assets/images/photography/street-photo5.jpg';
import img9 from '../assets/images/photography/leaf.jpg';

export default function Photography() {
  // State untuk menyimpan foto yang sedang diklik
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    {
      url: img1,
      title: "Japan Vibes 1",
      desc: "Menangkap suasana jalanan Jepang.",
      rotation: "-rotate-3"
    },
    {
      url: img2,
      title: "Japan Vibes 2",
      desc: "Eksplorasi sudut kota yang estetik.",
      rotation: "rotate-2"
    },
    {
      url: img3,
      title: "Japan Vibes 3",
      desc: "Lampu jalan dan hiruk pikuk kota.",
      rotation: "-rotate-2"
    },
    {
      url: img4,
      title: "Street Photo 1",
      desc: "Fotografi jalanan gaya Neobrutalism.",
      rotation: "rotate-3"
    },
    {
      url: img5,
      title: "Street Photo 2",
      desc: "Kontras bayangan dan cahaya.",
      rotation: "-rotate-1"
    },
    {
      url: img6,
      title: "Street Photo 3",
      desc: "Momen raw dan tidak terduga.",
      rotation: "rotate-1"
    },
    {
      url: img7,
      title: "Street Photo 4",
      desc: "Sudut pandang dari pejalan kaki.",
      rotation: "-rotate-3"
    },
    {
      url: img8,
      title: "Street Photo 5",
      desc: "Tekstur urban dan bangunan.",
      rotation: "rotate-2"
    },
    {
      url: img9,
      title: "Nature Leaf",
      desc: "Detail tekstur daun yang tajam.",
      rotation: "-rotate-2"
    }
  ];

  return (
    <section className="p-10 border-b-4 border-black bg-pink-400 overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-12 uppercase bg-white inline-block px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black rotate-1">
          Scattered Polaroids
        </h2>
        
        {/* Diubah menjadi 3 kolom di layar besar (lg:grid-cols-3) agar 9 foto pas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
          {photos.map((photo, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedPhoto(photo)}
              className={`bg-white p-4 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-2 hover:rotate-0 transition-all cursor-crosshair max-w-sm w-full ${photo.rotation}`}
            >
              <div className="border-4 border-black mb-4 bg-gray-200 overflow-hidden aspect-square relative group">
                <img 
                  src={photo.url} 
                  alt={photo.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                {/* Teks "Klik untuk memperbesar" yang muncul saat di-hover */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-yellow-300 border-2 border-black px-3 py-1 font-black uppercase text-sm -rotate-2">
                    Click to Enlarge
                  </span>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="font-black text-xl uppercase leading-tight">{photo.title}</h3>
                <p className="font-bold text-gray-700 mt-1 text-sm">{photo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL LIGHTBOX FULLSCREEN --- */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedPhoto(null)} 
        >
          {/* Kotak Modal Neobrutalism */}
          <div 
            className="relative bg-white border-8 border-black p-4 md:p-8 max-w-5xl max-h-[90vh] overflow-auto shadow-[16px_16px_0px_0px_#fde047]"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Tombol Close */}
            <button 
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 bg-red-500 text-white border-4 border-black w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-black text-xl md:text-2xl hover:bg-black hover:text-red-500 transition-colors z-10"
            >
              X
            </button>

            {/* Gambar Full */}
            <img 
              src={selectedPhoto.url} 
              alt={selectedPhoto.title}
              className="w-full h-auto max-h-[60vh] object-contain border-4 border-black mb-6 bg-gray-100"
            />
            
            {/* Info Gambar di dalam Modal */}
            <div className="bg-cyan-400 border-4 border-black p-4 inline-block">
              <h3 className="text-2xl md:text-4xl font-black uppercase">{selectedPhoto.title}</h3>
              <p className="font-bold text-lg md:text-xl mt-2">{selectedPhoto.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}