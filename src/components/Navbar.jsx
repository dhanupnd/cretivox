export default function Navbar() {
  return (
    <nav className="navbar flex fixed w-full justify-between items-center p-4 z-30 bg-transparent backdrop-filter backdrop-blur text-white">
      
      <a href="#home">
        <img src="/public/cretivoxLogo.webp" alt="" className="w-10 rounded-lg"/>
      </a>

      <ul className="navbar-links flex gap-10">
        <li><a href="#home" className="hover:text-gray-700 hover:px-4 hover:py-1 hover:bg-white hover:rounded-full transition-all" style={{ fontFamily:"'Poppins', sans-serif" }}>Home</a></li>
        <li><a href="#about" className="hover:text-gray-700 hover:px-4 hover:py-1 hover:bg-white hover:rounded-full transition-all" style={{ fontFamily:"'Poppins', sans-serif" }}>About</a></li>
        <li><a href="#skills" className="hover:text-gray-700 hover:px-4 hover:py-1 hover:bg-white hover:rounded-full transition-all" style={{ fontFamily:"'Poppins', sans-serif" }}>Skills</a></li>
        <li><a href="#projects" className="hover:text-gray-700 hover:px-4 hover:py-1 hover:bg-white hover:rounded-full transition-all" style={{ fontFamily:"'Poppins', sans-serif" }}>Projects</a></li>
        <li><a href="#contact" className="hover:text-gray-700 hover:px-4 hover:py-1 hover:bg-white hover:rounded-full transition-all" style={{ fontFamily:"'Poppins', sans-serif" }}>Contact</a></li>
      </ul>
    </nav>
  );
}