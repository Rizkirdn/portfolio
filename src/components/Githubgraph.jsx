export default function GithubGraph() {
  return (
    <section className="p-10 border-b-4 border-black bg-purple-400">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-8 uppercase bg-white inline-block px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black -rotate-1">
          GitHub Stats
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card 1: Statistik Total */}
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:translate-x-2 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all p-2 flex justify-center items-center cursor-pointer">
            <img 
              src="https://github-readme-stats.vercel.app/api?username=Rizkirdn&show_icons=true&theme=light&hide_border=true&title_color=000000&text_color=000000&icon_color=000000&bg_color=ffffff" 
              alt="GitHub Stats" 
              className="w-full max-w-[400px]"
            />
          </div>

          {/* Card 2: Bahasa Pemrograman Favorit */}
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:translate-x-2 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all p-2 flex justify-center items-center cursor-pointer bg-yellow-300">
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Rizkirdn&layout=compact&theme=light&hide_border=true&title_color=000000&text_color=000000&bg_color=fde047" 
              alt="Top Languages" 
              className="w-full max-w-[400px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}