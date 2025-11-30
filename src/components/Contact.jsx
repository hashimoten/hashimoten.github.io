const Contact = () => {
    return (
        <section className="py-20 px-6 bg-gray-900">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-pink-500">Contact</h2>
                <p className="text-gray-300 mb-10 text-lg">
                    Interested in working together? Feel free to reach out!
                </p>
                <form className="space-y-6 text-left">
                    <div>
                        <label htmlFor="email" className="block text-gray-400 mb-2 text-sm font-medium">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-400 mb-2 text-sm font-medium">Message</label>
                        <textarea
                            id="message"
                            rows="5"
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
                            placeholder="Hello, I'd like to talk about..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02]"
                    >
                        Send Message
                    </button>
                </form>
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <p className="text-gray-500">
                        &copy; {new Date().getFullYear()} hashimoten. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                        Built with Google Antigravity
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
