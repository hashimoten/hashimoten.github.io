const Skills = () => {
    const skills = [
        { name: "Java", icon: "☕" },
        { name: "Python", icon: "🐍" },
        { name: "React", icon: "⚛️" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "JavaScript", icon: "📜" },
        { name: "HTML/CSS", icon: "🌐" },
        { name: "Git", icon: "📦" },
        { name: "SQL", icon: "🗄️" },
    ];

    return (
        <section className="py-20 px-6 bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-500">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-4 border border-gray-700 hover:border-purple-500/50"
                        >
                            <span className="text-4xl">{skill.icon}</span>
                            <span className="font-semibold text-gray-200">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
