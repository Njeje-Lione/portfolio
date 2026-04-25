export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      image: "/images/portfolio.png",
      description:
        "A personal portfolio built with React and Tailwind CSS to showcase my skills, projects, and experience.",
      tech: ["React", "Tailwind CSS", "Vite"],
      github: "https://github.com/Njeje-Lione",
      live: null,
    },
    {
      title: "Invoice Management System",
      image: "/images/invoice.png",
      description:
        "A web-based invoicing system for managing clients, generating invoices, and tracking payments efficiently.",
      tech: ["Django", "JavaScript", "HTML/CSS"],
      github: "https://github.com/Njeje-Lione",
      live: null,
    },
    {
      title: "Nurse Duty Roster System",
      image: "/images/nurse.png",
      description:
        "A scheduling system designed to manage nurse shifts efficiently, ensuring balanced workloads in healthcare environments.",
      tech: ["React", "Django", "PostgreSQL"],
      github: "https://github.com/Njeje-Lione",
      live: null,
    },
  ];

  return (
    <section id="projects" data-aos="zoom-in" className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl font-bold text-orange-500 text-center">
          My Projects
        </h2>

        <p className="mt-4 text-gray-400 text-center">
          Real systems I’ve designed and built
        </p>

        {/* Grid */}
        <div className="mt-12 grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-gray-800"
            >

              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center p-6">

                <h3 className="text-xl font-bold text-orange-500">
                  {project.title}
                </h3>

                <p className="text-gray-300 mt-3 text-sm">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 border border-gray-600 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="mt-5 flex gap-3">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-500 rounded hover:border-orange-500 hover:text-orange-500 text-sm"
                  >
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-600 text-sm"
                    >
                      Live Demo
                    </a>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}