import { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import merbabuImg from '../assets/images/merbabu.jpg';

export default function PersonalHub() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [timeNow, setTimeNow] = useState(new Date());

  // --- SOLUSI ERROR: Membuat 6 "Kait" (Ref) untuk ke-6 Widget ---
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  useEffect(() => {
    const targetDate = new Date("May 24, 2026 20:00:00").getTime();
    const f1Interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    const clockInterval = setInterval(() => setTimeNow(new Date()), 1000);
    return () => { clearInterval(f1Interval); clearInterval(clockInterval); };
  }, []);

  const formatTime = (date) => date.toLocaleTimeString('id-ID', { hour12: false });

  return (
    <section className="p-10 border-b-4 border-black bg-emerald-400 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-8 uppercase bg-white inline-block px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black rotate-1">
          Drag My Widgets!
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 place-items-start relative min-h-[600px]">

          {/* WIDGET 1 */}
          <Draggable bounds="parent" nodeRef={ref1}>
            <div ref={ref1} className="w-full bg-[#ff2800] text-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-move z-10 active:z-50 active:scale-105 transition-transform">
              <div className="flex justify-between items-start border-b-4 border-black pb-2 mb-4">
                <h3 className="font-black text-2xl uppercase italic tracking-wider">F1 Race</h3>
                <span className="text-4xl">🏎️</span>
              </div>
              <p className="font-bold text-lg mb-4 bg-black text-white inline-block px-2 border-2 border-white">Target: Monaco GP</p>
              <div className="grid grid-cols-4 gap-2 text-center text-black">
                <div className="bg-white border-2 border-black p-2 font-black">{timeLeft.days} <div className="text-[10px]">DAYS</div></div>
                <div className="bg-white border-2 border-black p-2 font-black">{timeLeft.hours} <div className="text-[10px]">HRS</div></div>
                <div className="bg-white border-2 border-black p-2 font-black">{timeLeft.minutes} <div className="text-[10px]">MIN</div></div>
                <div className="bg-white border-2 border-black p-2 font-black bg-yellow-300">{timeLeft.seconds} <div className="text-[10px]">SEC</div></div>
              </div>
            </div>
          </Draggable>

          {/* WIDGET 2 */}
          <Draggable bounds="parent" nodeRef={ref2}>
            <div ref={ref2} className="w-full relative bg-yellow-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-move rotate-3 z-10 active:z-50 active:scale-105 transition-transform">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-black/80 backdrop-blur-sm border-2 border-black rotate-2"></div>
              <h3 className="font-black text-2xl uppercase mb-3 border-b-4 border-black inline-block">📌 Focus</h3>
              <ul className="font-bold text-base leading-snug space-y-2 list-disc list-inside mt-2">
                <li>UTS Matdas & Arsitektur Komputer.</li>
                <li>Daftar Novo Club Batch 4.</li>
                <li>Refactoring web portfolio.</li>
              </ul>
            </div>
          </Draggable>

          {/* WIDGET 3 */}
          <Draggable bounds="parent" nodeRef={ref3}>
            <div ref={ref3} className="w-full bg-[#dde5b6] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-move -rotate-1 z-10 active:z-50 active:scale-105 transition-transform">
              <div className="border-b-4 border-black h-32 bg-gray-300 overflow-hidden relative group">
                <img src={merbabuImg} alt="Merbabu" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 pointer-events-none" />
              </div>
              <div className="p-4">
                <h3 className="font-black text-2xl uppercase mb-1">Gn. Merbabu</h3>
                <p className="font-bold text-sm text-gray-700 bg-white inline-block px-2 border-2 border-black mb-3">Elevasi: 3.142 mdpl</p>
              </div>
            </div>
          </Draggable>

          {/* WIDGET 4 */}
          <Draggable bounds="parent" nodeRef={ref4}>
            <div ref={ref4} className="w-full bg-black text-[#00ff00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-move flex flex-col justify-center min-h-[200px] z-10 active:z-50 active:scale-105 transition-transform">
               <div className="font-mono uppercase text-xs tracking-widest mb-2 border-b border-[#00ff00]/30 pb-2">Location // Bandung, ID</div>
               <div className="font-mono text-5xl font-black tracking-tighter pointer-events-none">{formatTime(timeNow)}</div>
            </div>
          </Draggable>

          {/* WIDGET 5 */}
          <Draggable bounds="parent" nodeRef={ref5}>
            <div ref={ref5} className="w-full bg-blue-800 text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-move min-h-[200px] flex flex-col z-10 active:z-50 active:scale-105 transition-transform">
              <div className="bg-gray-300 border-b-4 border-black px-3 py-2 flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full border border-black"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full border border-black"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full border border-black"></div>
                <span className="ml-2 font-black text-black text-xs uppercase tracking-wider">Bash</span>
              </div>
              <div className="p-4 font-mono text-sm leading-relaxed flex-grow pointer-events-none">
                <p className="text-green-400">ngrahafrzk@dev:~$ status --learning</p>
                <ul className="mt-2 list-none space-y-1">
                  <li><span className="text-cyan-300">➜</span> React / Vite</li>
                  <li><span className="text-cyan-300">➜</span> Neobrutalism UI</li>
                </ul>
              </div>
            </div>
          </Draggable>

          {/* WIDGET 6 */}
          <Draggable bounds="parent" nodeRef={ref6}>
            <div ref={ref6} className="w-full bg-fuchsia-400 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-move flex flex-col justify-center min-h-[200px] rotate-2 z-10 active:z-50 active:scale-105 transition-transform">
              <h3 className="font-black text-2xl uppercase mb-2 pointer-events-none">Dev Fuel ☕</h3>
              <div className="w-full h-4 border-2 border-black bg-white mb-4 pointer-events-none">
                <div className="h-full bg-black w-[80%]"></div>
              </div>
              <p className="font-bold text-lg bg-white inline-block px-2 border-2 border-black self-start mb-2 pointer-events-none">Caffeinated</p>
            </div>
          </Draggable>

        </div>
      </div>
    </section>
  );
}