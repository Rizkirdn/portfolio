export default function Projects() {
  const projects = [
    {
      title: "Candy-Mart",
      desc: "Platform E-commerce full-stack dengan fitur manajemen produk dan update stok real-time.",
      tech: ["React.js", "Node.js", "Tailwind"],
      color: "bg-green-400",
      // Ganti link ini dengan link web/github asli kamu
      link: "https://github.com/Rizkirdn/candymart" 
    },
    {
      title: "E-Learning Management System (LMS)",
      desc: "Sistem LMS lengkap dengan fitur upload tugas mahasiswa dan presensi menggunakan QR Code.",
      tech: ["React.js", "Node.js", "Express"],
      color: "bg-yellow-300",
      // Ganti link ini dengan link web/github asli kamu
      link: "https://github.com/Rizkirdn/elearning-kampus" 
    },
    {
      title: "Luminous TopUp",
      desc: "Webseite TopUp all game.",
      tech: ["React.js", "Node.js", "Express"],
      color: "bg-red-300",
      // Ganti link ini dengan link web/github asli kamu
      link: "https://luminous-store1.vercel.app/" 
    }
  ];

  return (
    <section id="projects" className="p-10 bg-white border-b-4 border-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-8 uppercase inline-block px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-purple-400">
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div 
              key={idx} 
              className={`${proj.color} flex flex-col border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform`}
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-black mb-3">{proj.title}</h3>
                <p className="font-medium text-lg mb-4">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="bg-white border-2 border-black px-3 py-1 text-sm font-bold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Tombol Link Project */}
              <a 
                href={proj.link} 
                target="_blank" 
                rel="noreferrer"
                className="bg-black text-white text-center font-black uppercase text-lg border-4 border-black py-3 mt-auto hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                Lihat Project ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}