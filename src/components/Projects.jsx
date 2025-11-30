const Projects = () => {
    const projects = [
        {
            title: "Japan Stock Manager",
            description: "高配当株投資のための個人用管理ツール",
            image: "https://placehold.co/600x400?text=Japan+Stock+Manager",
            tags: ["React", "Tailwind CSS", "Chart.js"],
            link: "#"
        },
        {
            title: "Pomodoro Timer",
            description: "生産性向上のためのタイマーアプリ",
            image: "https://placehold.co/600x400?text=Pomodoro+Timer",
            tags: ["React", "Vite", "Web Audio API"],
            link: "#"
        }
    ];

    return (
        <section className="py-20 px-6 bg-gray-800">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-400">Projects</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-green-500/50 transition-all group">
                            <div className="overflow-hidden h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    className="inline-block px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
