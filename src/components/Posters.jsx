import CharlesLeclerc from '../assets/images/design/charles-leclerc.jpg';
import lewisHamilton from '../assets/images/design/lewis-hamilton.jpg';
import pamflet from '../assets/images/design/pamflet-band.jpg';
import pamfletdrama1 from '../assets/images/design/pamflet-drama1.jpg';
import pamfletdrama2 from '../assets/images/design/pamflet-drama2.jpg';

export default function Posters() {
  const posters = [
    {
      title: "Scuderia Ferrari Charles Leclerc",
      style: "Pop Art / Scrapbook Collage",
      imgUrl: CharlesLeclerc,
      bgColor: "bg-red-500",
    },
    {
      title: "Scuderia Ferrari Lewis Hamilton",
      style: "Double Exposure / Sports Montage",
      imgUrl: lewisHamilton,
      bgColor: "bg-teal-400",
    },
    {
      title: "Example Pamflet Band",
      style: "Street Poster / Grunge Aesthetic",
      imgUrl: pamflet,
      bgColor: "bg-yellow-300",
    },
    {
      title: "Pamflet Drama Musikalisasi 'Kian Santang' ",
      style: "Modern-Traditional Fusion / Cinematic Poster",
      imgUrl: pamfletdrama1,
      bgColor: "bg-orange-300",
    },
    {
      title: "Pamflet Drama Musikalisasi 'Kian Santang' V2",
      style: "Flat Design / Digital Illustration (Folklore Style)",
      imgUrl: pamfletdrama2,
      bgColor: "bg-green-300",
    }
  ];

  return (
    <section className="p-10 border-b-4 border-black bg-indigo-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-8 uppercase bg-white inline-block px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
          Design & Editing
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {posters.map((poster, idx) => (
            <div 
              key={idx} 
              className={`${poster.bgColor} border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:translate-x-2 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group`}
            >
              {/* Image Container */}
              <div className="border-4 border-black overflow-hidden mb-4 bg-white">
                <img 
                  src={poster.imgUrl} 
                  alt={poster.title} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300 grayscale group-hover:grayscale-0"
                />
              </div>
              
              {/* Poster Info */}
              <h3 className="text-xl font-black mb-1 uppercase bg-white px-2 border-2 border-black inline-block">
                {poster.title}
              </h3>
              <p className="font-bold mt-2 text-black border-t-2 border-black pt-2">
                Style: {poster.style}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}