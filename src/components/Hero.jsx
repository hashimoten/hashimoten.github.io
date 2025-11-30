const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-gradient-to-b from-gray-900 to-gray-800">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                hashimoten
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
                Building digital experiences with code and creativity.
            </p>
            <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">
                    <i className="fab fa-github"></i> GitHub
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">
                    <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">
                    <i className="fab fa-linkedin"></i> LinkedIn
                </a>
            </div>
        </section>
    );
};

export default Hero;
