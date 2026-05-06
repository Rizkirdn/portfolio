export default function Navbar() {
  return (
    <nav className="border-b-4 border-black bg-white p-5 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-black uppercase tracking-tighter">Rizki Ramdani</h1>
        <ul className="flex gap-6 font-bold">
          <li>
            <a href="#about" className="hover:underline decoration-4 underline-offset-4 cursor-pointer">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:underline decoration-4 underline-offset-4 cursor-pointer">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:underline decoration-4 underline-offset-4 cursor-pointer">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}