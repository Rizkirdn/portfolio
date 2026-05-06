import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Mengirim...");

    const formData = new FormData(event.target);
    
    // GANTI TULISAN DI BAWAH DENGAN ACCESS KEY WEB3FORMS KAMU
    formData.append("access_key", "83bfb910-5dfb-4863-8e33-4b40306cd3a8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Pesan Berhasil Terkirim! 🚀");
        event.target.reset(); 
      } else {
        console.log("Error", data);
        setStatus("Yah, gagal mengirim pesan. 😢");
      }
    } catch (error) {
      console.error(error);
      setStatus("Terjadi kesalahan jaringan.");
    }
  };

  return (
    <section id="contact" className="p-10 border-b-4 border-black bg-orange-400">
      <div className="max-w-3xl mx-auto bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-4xl font-black mb-6 uppercase text-center bg-yellow-300 inline-block px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
          Let's Connect!
        </h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
          <input 
            type="text" 
            name="name"
            required
            placeholder="Nama Kamu" 
            className="border-4 border-black p-3 font-bold text-lg focus:outline-none focus:bg-pink-100 transition-colors" 
          />
          <input 
            type="email" 
            name="email"
            required
            placeholder="Email Kamu" 
            className="border-4 border-black p-3 font-bold text-lg focus:outline-none focus:bg-pink-100 transition-colors" 
          />
          <textarea 
            name="message"
            required
            placeholder="Ada project apa nih?" 
            rows="4" 
            className="border-4 border-black p-3 font-bold text-lg focus:outline-none focus:bg-pink-100 transition-colors"
          ></textarea>
          
          <button 
            type="submit" 
            className="bg-black text-white border-4 border-black py-3 font-black text-xl uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all mt-2"
          >
            Kirim Pesan
          </button>
        </form>

        {status && (
          <div className="mt-6 border-4 border-black p-3 text-center font-bold text-lg bg-green-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {status}
          </div>
        )}
      </div>
    </section>
  );
}