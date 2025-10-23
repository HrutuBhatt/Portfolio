const experience = [
  {
    org: "Huptech Web – AI/ML Intern",
    duration: "April 2025 – May 2025",
    description: [
      "Built an AI Agent specializing in pharmaceutical marketing simulations.",
      "Created a budget allocation model tailored to client-specific needs.",
      "Worked with Agno Framework, LangChain, BERTopic, and Google Colab."
    ],
  },
  {
    org: "GirlScript Summer of Code – Open Source Contributor",
    duration: "May 2024 – June 2024",
    description: [
      "Contributed to open-source projects in the GirlScript Summer of Code program.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-50 dark:bg-gray-900 py-12 px-6 transition-colors duration-500">
    <h2 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">Experience</h2>
    <div className="max-w-4xl mx-auto relative border-l-4 border-blue-500 pl-6 space-y-12">
        {experience.map((item, index) => (
        <div key={index} className="relative pl-6">
            <div className="absolute -left-3 top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.org}</h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">{item.duration}</span>
            <ul className="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300 text-sm space-y-1">
            {item.description.map((point, i) => (
                <li key={i}>{point}</li>
            ))}
            </ul>
        </div>
        ))}
    </div>
    </section>
  );
};

export default Experience;
