export default function Marquee() {
  return (
    <div className="bg-yellow-300 border-b-4 border-black py-4 overflow-hidden flex whitespace-nowrap items-center">
      <div className="animate-marquee font-black text-2xl md:text-3xl uppercase tracking-widest flex items-center">
        {/* Teks diulang 2 kali agar animasinya nyambung tanpa putus */}
        <span className="mx-6">✦</span> RIZKI RAMDANI NUGRAHA <span className="mx-6">✦</span> FULLSTACK DEVELOPER <span className="mx-6">✦</span> CREATIVE DESIGNER <span className="mx-6">✦</span> INFORMATICS ENGINEERING <span className="mx-6">✦</span> IMPACT LEADER 
        <span className="mx-6">✦</span> RIZKI RAMDANI NUGRAHA <span className="mx-6">✦</span> FULLSTACK DEVELOPER <span className="mx-6">✦</span> CREATIVE DESIGNER <span className="mx-6">✦</span> INFORMATICS ENGINEERING <span className="mx-6">✦</span> IMPACT LEADER 
      </div>
    </div>
  );
}