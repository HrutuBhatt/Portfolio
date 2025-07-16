import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Model Viz - Spam Detection System",
    description: "An AI-powered spam detection system with model training, visualization and analytics.",
    tech: ["Flask", "React.js", "Chart.js", "Keras", "Scikit-Learn"],
    github: "https://github.com/HrutuBhatt/ModelViz",
    demo: "https://drive.google.com/file/d/1inZbaFzvl2ZYvTYi3BYIULA0Dm0EE6jG/view?usp=sharing",
    image: "https://drive.google.com/uc?export=view&id=1wYhcaX8mFRtFnU5IFRS5fzeRI3S_CyDd", 
  },
  {
    title: "ShopNext - E-commerce WebApp",
    description: "A full-stack e-commerce platform with seller dashboard, analytics, and recommendation engine.",
    tech: ["Spring Boot", "React.js", "MaterialUI", "Docker"],
    github: "https://github.com/HrutuBhatt/ShopNext",
    demo: "https://drive.google.com/file/d/1ERdrvX6dpcnx9cJm6bqgTktIPPGG9aSo/view?usp=drive_link",
    image: "https://drive.google.com/uc?export=view&id=1tyXuTFGuPhWXbbu8yTLPgZLWWuSi0Sbu",
  },
  {
    title: "FoodUcate - Nutrition Recommendation System",
    description: "ML-based app offering personalized diet suggestions via food image recognition and manual entry.",
    tech: ["React.js", "Flask", "Scikit-Learn", "MongoDB", "Gemini API", "Chart.js"],
    github: "https://github.com/HrutuBhatt/FoodUCate",
    demo: "https://youtu.be/lHSedr7yuJw?si=y0xdUBUNxYtlyeKU",
    image: "https://drive.google.com/uc?export=view&id=1wFT4WGq84FMTPzptmQrDGOQAnGySbEmg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="p-10 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
