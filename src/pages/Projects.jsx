import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");

    const projects = [
        {
            id: 1,
            title: "Modern Residence",
            category: "Residential",
            location: "Detroit, Michigan",
            year: "2026",
            image:
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=90",
        },
        {
            id: 2,
            title: "Urban House",
            category: "Residential",
            location: "Detroit, Michigan",
            year: "2025",
            image:
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=90",
        },
        {
            id: 3,
            title: "Central Office",
            category: "Commercial",
            location: "Chicago, Illinois",
            year: "2025",
            image:
                "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=90",
        },
        {
            id: 4,
            title: "Concrete House",
            category: "Residential",
            location: "Michigan",
            year: "2024",
            image:
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90",
        },
        {
            id: 5,
            title: "Oak Interior",
            category: "Interior",
            location: "Detroit, Michigan",
            year: "2024",
            image:
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=90",
        },
        {
            id: 6,
            title: "City Development",
            category: "Urban Planning",
            location: "Michigan",
            year: "2023",
            image:
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=90",
        },
    ];

    const categories = [
        "All",
        "Residential",
        "Commercial",
        "Interior",
        "Urban Planning",
    ];

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter(
                (project) => project.category === activeCategory
            );

    return (
        <main className="bg-stone-50 text-black">

            {/* ================= HERO ================= */}

            <section className="relative min-h-screen flex items-center overflow-hidden">

                <img
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2200&q=90"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-zinc-950/20"></div>

                <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-900/70 to-transparent"></div>

                <div className="relative z-10 max-w-350 mx-auto w-full px-6 lg:px-10">

                    <div className="max-w-4xl">

                        <div className="flex items-center gap-4 mb-8 pt-10">

                            <span className="w-14 h-0.5 bg-[#E8A72B]"></span>

                            <span className="text-[#E8A72B] uppercase tracking-[0.35em] text-xs font-semibold">
                                Selected Work
                            </span>

                        </div>

                        <h1 className="text-white text-6xl lg:text-8xl font-bold leading-[0.9]">

                            SPACES THAT

                            <br />

                            <span className="text-[#E8A72B]">

                                MATTER.

                            </span>

                        </h1>

                        <p className="text-white/70 text-lg leading-8 mt-8 max-w-2xl">

                            Explore our portfolio of architecture, interiors,
                            commercial developments, and urban planning
                            projects crafted with precision and purpose.

                        </p>

                        <div className="flex flex-wrap gap-5 mt-10">

                            <Link
                                to="/contact"
                                className="bg-[#E8A72B] text-black px-8 py-4 font-bold text-sm flex items-center gap-3 hover:bg-white transition"
                            >
                                START A PROJECT

                                <ArrowRight size={17} />

                            </Link>

                            <a
                                href="#portfolio"
                                className="border border-white/40 text-white px-8 py-4 font-bold text-sm flex items-center gap-3 hover:bg-white hover:text-black transition"
                            >
                                VIEW PORTFOLIO

                                <ArrowRight size={17} />

                            </a>

                        </div>

                    </div>

                </div>

                <div className="absolute bottom-8 right-8 text-white/50 text-xs tracking-[0.3em]">

                    03 / PROJECTS

                </div>

            </section>

            {/* ================= INTRO ================= */}

            <section
                id="portfolio"
                className="py-24 lg:py-32"
            >

                <div className="max-w-350 mx-auto px-6 lg:px-10">

                    <div className="grid lg:grid-cols-2 gap-20 items-end">

                        <div>

                            <span className="text-[#E8A72B] uppercase tracking-[0.3em] text-xs font-bold">

                                Our Portfolio

                            </span>

                            <h2 className="text-5xl lg:text-7xl font-bold leading-[1.05] mt-6">

                                Architecture

                                <br />

                                <span className="text-black/35">

                                    in context.

                                </span>

                            </h2>

                        </div>

                        <div>

                            <p className="text-black/60 text-lg leading-9">

                                Every project tells a unique story.

                                We create architecture that balances
                                aesthetics, functionality, and timeless
                                craftsmanship across residential,
                                commercial, and urban environments.

                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* Filter Buttons */}
            <section className="py-12 border-t border-black/10">
                <div className="max-w-350 mx-auto px-6 lg:px-10">

                    <div className="flex flex-wrap gap-4">

                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 text-sm uppercase tracking-wider transition-all duration-300 border
            ${activeCategory === category
                                        ? "bg-[#E8A72B] text-black border-[#E8A72B]"
                                        : "bg-white text-gray-600 border-gray-300 hover:bg-black hover:text-white hover:border-black"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}

                    </div>

                </div>
            </section>

            {/* Projects Grid */}
            <section className="pb-24">
                <div className="max-w-350 mx-auto px-6 lg:px-10">

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                        {filteredProjects.map((project) => (

                            <div
                                key={project.id}
                                className="group cursor-pointer"
                            >

                                <div className="overflow-hidden">

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-105 object-cover transition duration-700 group-hover:scale-105"
                                    />

                                </div>

                                <div className="pt-5">

                                    <p className="text-[#E8A72B] text-xs uppercase tracking-[0.25em] font-semibold">
                                        {project.category}
                                    </p>

                                    <h3 className="text-2xl font-semibold mt-2 group-hover:text-[#E8A72B] transition">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-500 mt-2">
                                        {project.location}
                                    </p>

                                    <div className="mt-5 flex items-center justify-between">

                                        <span className="text-gray-400 text-sm">
                                            {project.year}
                                        </span>

                                        <button className="w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-[#E8A72B] hover:text-black transition">
                                            <ArrowUpRight size={20} />
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>

            {/* Dark Section */}
            <section className="bg-[#111111] py-24">
                <div className="max-w-350 mx-auto px-6 lg:px-10">

                    <div className="grid lg:grid-cols-2 gap-16">

                        <div>

                            <p className="text-[#E8A72B] uppercase tracking-[0.25em] text-xs mb-5">
                                OUR APPROACH
                            </p>

                            <h2 className="text-white text-5xl font-bold leading-tight">
                                Every project <br />
                                tells a story.
                            </h2>

                        </div>

                        <div>

                            <p className="text-gray-300 leading-8">
                                We believe every project deserves a unique identity.
                                Our process combines thoughtful planning, creative
                                exploration and technical precision to deliver spaces
                                that remain timeless.
                            </p>

                        </div>

                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="bg-amber-500 py-24">
                <div className="max-w-350 mx-auto px-6 lg:px-10">

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                        <div>

                            <p className="uppercase tracking-[0.25em] text-xs mb-4">
                                HAVE A PROJECT IN MIND?
                            </p>

                            <h2 className="text-5xl font-bold max-w-xl">
                                Let's create something remarkable.
                            </h2>

                        </div>

                        <Link
                            to="/contact"
                            className="bg-black text-white px-8 py-4 uppercase tracking-wider hover:bg-white hover:text-black transition"
                        >
                            Start A Project
                        </Link>

                    </div>

                </div>
            </section>

        </main>
    );
}

export default Projects;