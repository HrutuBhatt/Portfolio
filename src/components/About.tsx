const education = [
  {
    org: "Dharmsinh Desai University, Nadiad",
    course: "Computer Engineering",
    duration: "Sept 2022 – May 2026",
    grade: "8.71"
  },

];

const About = () => {
  return (
    <section id="about" className="p-10 bg-white dark:bg-gray-900">
      <h2 className="text-4xl font-bold mb-4 dark:text-white" >About Me</h2>
      <p className="text-lg max-w-3xl dark:text-white">
        I am a final year B.Tech Computer Engineering student at Dharmsinh Desai University.
        I enjoy solving real-world problems using my skills and learn new technologies. I am currently exploring Deep Learning and NLP.
      </p>
      <br></br><br></br>
      <h2 className="text-3xl font-bold mb-4 dark:text-white">Skills</h2>
      <div className="mt-6 flex flex-wrap gap-3 dark:text-white dark:bg-blue-900">
        {["Springboot" , "React", "Node.js", "MongoDB", "Java", "C++", "Docker", "Python", "Flask", "AWS", "SQL"].map(skill => (
          <span key={skill} className="bg-gray-200 px-3 py-1 rounded">{skill}</span>
        ))}
      </div>
    <br></br><br></br>
    <h2 className="text-3xl font-bold mb-4 dark:text-white">Education</h2>
    <div className=" mx-auto relative border-l-4 border-blue-500 pl-6 space-y-12">
        {education.map((item, index) => (
        <div key={index} className="relative pl-6">
            <div className="absolute -left-3 top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.org}</h3>
            <p className="text-sm text-600 dark:text-white">{item.course}</p>
            <p className="text-sm text-600 dark:text-white">{item.duration}</p>
            <p className="text-sm text-600 dark:text-white">CPI: {item.grade}</p>
            
        </div>
        ))}
    </div>
    </section>
  );
};

export default About;
