const Projects = () => {
    const projects = [
        {
            title: "Pomodoro Timer",
            description: "生産性向上のためのタイマーアプリ。ReactとAIコーディングツールを活用して短期間で開発しました。",
            image: "https://placehold.co/600x400?text=Pomodoro+Timer",
            tags: ["React", "Vite", "Web Audio API"],
            link: "#"
        }
    ];

    return (
        <section className="py-20 px-6 bg-gray-800">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-400">Projects</h2>
                <div className="flex justify-center">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-green-500/50 transition-all group max-w-2xl w-full">
                            <div className="overflow-hidden h-64">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-300 mb-6 text-lg">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-4 py-1.5 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href="https://pomo-timer-lilac.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium text-lg shadow-lg hover:shadow-green-500/30"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href="https://github.com/hashimoten/pomo-timer"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-medium text-lg border border-gray-600"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
