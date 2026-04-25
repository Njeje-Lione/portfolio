export default function Contact() {
  return (
    <section id="about" data-aos="fade-up" className="py-24 px-6 bg-black text-white">

      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-orange-500">
          Contact Me
        </h2>

        <p className="mt-4 text-gray-400">
          Let’s work together or talk about opportunities
        </p>

        {/* Contact Box */}
        <div className="mt-10 border border-gray-800 p-6 rounded-lg">

          <p className="text-gray-300">
            Email: <span className="text-orange-500">njejelione@email.com</span>
          </p>

          <p className="text-gray-300 mt-2">
            Phone: <span className="text-orange-500">+254 791505941</span>
          </p>

        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center gap-6 text-gray-400">

          <a href="#" className="hover:text-orange-500">GitHub</a>
          <a href="#" className="hover:text-orange-500">LinkedIn</a>
          <a href="#" className="hover:text-orange-500">Twitter</a>

        </div>

      </div>

    </section>
  );
}