// import DarkModeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 shadow-md sticky top-0 bg-white z-50">
      <h1 className="text-2xl font-bold">Hrutu Bhatt</h1>
      <ul className="flex gap-6">
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#about" className="hover:text-blue-500">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#achievements" className="hover:text-blue-500">Achievements</a></li>
        <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        {/* <DarkModeToggle /> */}
      </ul>
    </nav>
  );
};

export default Navbar;
