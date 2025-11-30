const About = () => {
    return (
        <section className="py-20 px-6 bg-gray-800">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-400">About Me</h2>
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="w-full md:w-1/3">
                        <img
                            src="https://placehold.co/300x300"
                            alt="Profile"
                            className="rounded-full shadow-lg border-4 border-blue-500/20 w-48 h-48 md:w-64 md:h-64 mx-auto object-cover"
                        />
                    </div>
                    <div className="w-full md:w-2/3 text-gray-300 leading-relaxed">
                        <p className="mb-4">
                            Hello! I'm a 30-year-old System Engineer with a passion for building robust and scalable applications.
                            My journey began with Java and Python, where I honed my skills in backend development and system architecture.
                        </p>
                        <p>
                            Recently, I've been focusing on development using Generative AI (Windsurf, Antigravity) and exploring modern web technologies.
                            I also have a keen interest in asset formation and real estate investment, applying analytical skills to financial growth.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
