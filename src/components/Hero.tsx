import Image from "next/image";
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-gradient-to-r from-purple-100 to-blue-200">
      <Image
        src="https://drive.google.com/uc?export=view&id=1tjeSa33X0Y7IEeGdrJljgSQR7ce0HkPQ" 
        alt="Profile Picture"
        width={150}
        height={150}
        className="rounded-full shadow-lg mb-6 object-cover"
      />

      <h1 className="text-4xl md:text-5xl font-bold">Hi, I’m Hrutu👋</h1>
      <p className="mt-4 text-xl max-w-xl">
        Software Developer. Combining Code and Creativity. Passionate about Building Impactful Web and AI projects.
      </p>
      <div className="mt-6 flex gap-4">
        <a href="#projects" className="px-6 py-2 bg-black text-white rounded">View Projects</a>
        <a href="https://docs.google.com/document/d/1VojUp-sCtcHiCzGteEXp2OZqHLDJGMrGIL8XPPXUW0Y/edit?usp=sharing" className="px-6 py-2 border border-black rounded">Resume</a>
      </div>
    </section>
  );
};

export default Hero;
