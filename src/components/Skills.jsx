export default function Skills() {
  const skills = ["React.js", "Node.js", "Tailwind CSS", "JavaScript", "Express", "Git", "Alight Motion", "Photoshop", "Snapseed"];

  return (
    <section className="p-10 border-b-4 border-black bg-pink-400">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-8 uppercase bg-white inline-block px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white border-4 border-black px-6 py-3 font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}