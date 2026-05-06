import logo1 from '../assets/images/logo/kemateksa1.jpg';
import logo2 from '../assets/images/logo/kemateksa2.jpg';

export default function Identity() {
  return (
    <section className="p-10 border-b-4 border-black bg-cyan-400">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-8 uppercase bg-white inline-block px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black -rotate-1">
          Identity & Branding
        </h2>
        
        <div className="bg-white border-4 border-black flex flex-col md:flex-row shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
          
          {/* Logo Showcase */}
          <div className="md:w-1/3 bg-yellow-300 border-b-4 md:border-b-0 md:border-r-4 border-black p-8 flex items-center justify-center">
            <img 
              src={logo1} 
              alt="BEM Logo" 
              className="w-full max-w-[200px] hover:scale-110 transition-transform"
            />
          </div>
          
          {/* Deskripsi Filosofi */}
          <div className="md:w-2/3 p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-black mb-2 uppercase">KEMATEKSA Universitas Taruna Bakti</h3>
            <div className="w-16 h-2 bg-black mb-4"></div>
            <p className="font-medium text-lg leading-relaxed">
              Konsep desain identitas visual untuk Keluarga Mahasiswa Fakultas Sains dan Teknologi. Menggunakan elemen bentuk dasar yang elegan dengan <span className="font-black bg-yellow-300 px-1">ikon burung hantu (owl)</span> sebagai representasi filosofis dari kebijaksanaan, ilmu pengetahuan, dan visi teknologi masa depan.
            </p>
          </div>
          <div className="md:w-1/3 bg-purple-300 border-b-4 md:border-b-0 md:border-r-4 border-black p-8 flex items-center justify-center">
            <img 
              src={logo2} 
              alt="KEMAKTEKSA Logo V2" 
              className="w-full max-w-[200px] hover:scale-110 transition-transform"
            />
          </div>
          
          {/* Deskripsi Filosofi */}
          <div className="md:w-2/3 p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-black mb-2 uppercase"> KEMATEKSA Universitas Taruna Bakti V2</h3>
            <div className="w-16 h-2 bg-black mb-4"></div>
            <p className="font-medium text-lg leading-relaxed">
              Konsep desain identitas visual untuk Keluarga Mahasiswa Fakultas Sains dan Teknologi. Menggunakan elemen bentuk dasar yang elegan dengan <span className="font-black bg-yellow-300 px-1">ikon burung hantu (owl)</span> sebagai representasi filosofis dari kebijaksanaan, ilmu pengetahuan, dan visi teknologi masa depan.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}