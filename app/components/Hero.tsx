/* eslint-disable react/no-unescaped-entities */
export default function Hero() {
    return (
        <section
            id="home"
            className="flex flex-col justify-center items-center min-h-[100vh] px-6 text-center bg-gray-50"
        >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
                Hello, I'm Kcode Panuwat.
            </h1>
            <p className="text-gray-600 max-w-2xl leading-relaxed mb-8">
                I like building things that feel simple, thoughtful, and real.
                Sometimes that means designing a clean UI, other times it’s about crafting a strong foundation behind the scenes — but it’s always about bringing ideas to life with purpose.      </p>
            <a
                href="mailto:kcode@email.com"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-md font-medium transition"
            >
                Let’s Connect
            </a>
        </section>
    );
}
