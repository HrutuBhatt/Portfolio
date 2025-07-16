const achievements = [
  {
    title: "LeetCode Weekly Contest",
    description: "Ranked 750 / 22,000+ participants",
  },
  {
    title: "LeetCode Stats",
    description: "Solved 480+ problems | Max Rating: 1725",
    link: "https://leetcode.com/hrutu03", 
  },
  {
    title: "BNY Mellon Code Divas’ 25",
    description: "Top 1000 out of 50,000+ participants",
  },
  {
    title: "AWS Cloud Foundations Certified",
    link: "https://www.credly.com/badges/0baa5f0c-4c7f-448a-af6d-4bd17ffb5a6f/public_url", 
  },
  {
    title: "DuHacks 4.0",
    description: "Built FoodUcate in a team of 4 during hackathon",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="bg-white dark:bg-gray-900 p-10 transition-colors duration-500">
    <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Achievements</h2>
    <ul className="space-y-4 max-w-3xl mx-auto">
        {achievements.map((item, idx) => (
        <li
            key={idx}
            className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md shadow-sm hover:shadow-md transition"
        >
            <p className="text-lg font-medium text-gray-900 dark:text-white">
            {item.title}
            {item.link && (
                <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline ml-2 text-sm"
                >
                [link]
                </a>
            )}
            </p>
            {item.description && (
            <p className="text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
            )}
        </li>
        ))}
    </ul>
    </section>
  );
};

export default Achievements;
