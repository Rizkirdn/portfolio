import december from '../assets/videos/pmv/december.mp4';
import nightchanges from '../assets/videos/pmv/night-changes.mp4';
import theending from '../assets/videos/pmv/the-ending.mp4';
import thumbnail1 from '../assets/images/thumb/thumb-december.png';
import thumbnail2 from '../assets/images/thumb/thumb-night-changes.png';
import thumbnail3 from '../assets/images/thumb/thumb-the-end.png';

export default function VideoEditing() {
  const videos = [
    {
      title: "PMV: This December",
      role: "UI",
      thumbnailUrl: thumbnail1,
      videoUrl: december,
      bgColor: "bg-red-400"
    },
    {
      title: "PMV: Akhir Tugas Drama Musikalisasi",
      role: "VFX",
      thumbnailUrl: thumbnail2,
      videoUrl: nightchanges,
      bgColor: "bg-yellow-400"
    },
    {
      title: "PMV: Akhir Tugas Drama Musikalisasi V2",
      role: "UI & Motion Graphic",
      thumbnailUrl: thumbnail3,
      videoUrl: theending,
      bgColor: "bg-cyan-400"
    }
  ];

  return (
    <section className="p-10 border-b-4 border-black bg-lime-400">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-8 uppercase bg-white inline-block px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
          Video Editing
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {videos.map((vid, idx) => (
            <div 
              key={idx} 
              className={`${vid.bgColor} border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform`}
            >
              {/* Pemutar Video */}
              <div className="relative border-4 border-black bg-black mb-4 overflow-hidden">
                <video 
                  controls 
                  preload="metadata"
                  poster={vid.thumbnailUrl} // Menggunakan gambar thumbnail sebagai cover video
                  className="w-full h-auto object-cover aspect-video"
                >
                  <source src={vid.videoUrl} type="video/mp4" />
                  Maaf, browser kamu tidak mendukung pemutaran video ini.
                </video>
              </div>
              
              {/* Info Video */}
              <div className="bg-white border-4 border-black p-3">
                <h3 className="text-xl font-black mb-1 leading-tight">{vid.title}</h3>
                <p className="font-bold text-sm text-gray-700 bg-gray-200 inline-block px-2 border-2 border-black mt-2">
                  Role: {vid.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}