const About = () => {
  return (
    <section id="about" className="p-10 bg-white ">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg max-w-3xl">
        I am a final year B.Tech Computer Engineering student at Dharmsinh Desai University.
        I enjoy solving real-world problems using my skills and learn new technologies. I am currently exploring Deep Learning and NLP.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        {["Springboot" , "React", "Node.js", "MongoDB", "Java", "C++", "Docker", "Python", "Flask"].map(skill => (
          <span key={skill} className="bg-gray-200 px-3 py-1 rounded">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default About;
