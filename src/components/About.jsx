export default function About() {
  return (
    <section id="about" className="p-10 border-b-4 border-black bg-purple-400">
      <div className="max-w-5xl mx-auto bg-white border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          
          {/* Bagian Teks */}
          <div className="md:w-2/3">
            <h2 className="text-4xl font-black mb-6 uppercase bg-yellow-300 inline-block px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1">
              About Me
            </h2>
            <p className="font-bold text-xl mb-4 leading-relaxed">
              Halo! Saya <span className="bg-cyan-300 px-1 border-2 border-black">Rizki Ramdani Nugraha</span>, seorang mahasiswa Teknik Informatika di Universitas Taruna Bakti.
            </p>
            <p className="font-medium text-lg leading-relaxed text-gray-800">
              Saya memiliki ketertarikan besar dalam membangun aplikasi web *full-stack* menggunakan ekosistem React, sekaligus mengeksplorasi estetika visual melalui desain grafis dan fotografi. Sebagai calon inovator masa depan dan *impact leader*, saya percaya bahwa perpaduan antara baris kode yang efisien dan desain antarmuka yang berani dapat menciptakan solusi digital yang bermakna.
            </p>
          </div>

          {/* Bagian Visual/Aksesoris Neobrutalism */}
          <div className="md:w-1/3 flex justify-center">
            <div className="w-full aspect-square bg-pink-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-3 flex items-center justify-center p-6 text-center hover:rotate-0 transition-transform cursor-pointer">
               <h3 className="font-black text-3xl uppercase leading-tight">
                 Code. <br/> Design. <br/> Impact.
               </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}