import { Link, useLocation } from "react-router-dom";
import React from "react";
import {
    ArrowRight,
    ArrowUpRight,
    Menu,
    X,
    Building2,
    Home,
    Ruler,
    Compass,
    Check,
} from "lucide-react";
import { useState } from "react";

const services = [
    {
        icon: Building2,
        title: "Architecture",
        text: "Thoughtful spaces designed around people, place, and purpose.",
    },
    {
        icon: Home,
        title: "Interior Design",
        text: "Refined interiors that combine functionality with character.",
    },
    {
        icon: Compass,
        title: "Urban Planning",
        text: "Smart planning solutions for sustainable communities.",
    },
    {
        icon: Ruler,
        title: "Design Consulting",
        text: "Professional guidance from concept through completion.",
    },
];

const projects = [
    {
        title: "Modern Residence",
        location: "Detroit, Michigan",
        category: "Residential",
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Urban Office",
        location: "Detroit, Michigan",
        category: "Commercial",
        image:
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Contemporary Villa",
        location: "Michigan",
        category: "Residential",
        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Creative Interior",
        location: "Detroit, Michigan",
        category: "Interior",
        image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    },
];

const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "120+", label: "Projects Completed" },
    { number: "25+", label: "Design Awards" },
    { number: "08", label: "Design Specialists" },
];

function HomePage() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#F7F6F2] text-[#111111]">

            {/* ================= HERO ================= */}
            <section
                id="home"
                className="relative h-screen flex items-center overflow-hidden bg-zinc-950"
            >
                {/* Background */}
                <img
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90"
                    alt="Modern architecture"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-zinc-950/20"></div>

                {/* Gradient */}
                <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-900/70 to-transparent"></div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-350 mx-auto w-full px-6 lg:px-10 pt-20">
                    <div className="max-w-3xl">

                        <div className="flex items-center gap-3 mb-7">
                            <span className="w-12 h-0.5 bg-[#E8A72B]"></span>
                            <span className="text-[#E8A72B] uppercase tracking-[0.25em] text-xs font-semibold">
                                Architecture & Design
                            </span>
                        </div>

                        <h2 className="text-white text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.92] tracking-tight">
                            DESIGNING
                            <br />
                            SPACES
                            <br />
                            <span className="text-[#E8A72B]">THAT INSPIRE.</span>
                        </h2>

                        <p className="text-white/80 text-base lg:text-lg leading-7 max-w-xl mt-8">
                            We create thoughtful architectural spaces where design,
                            function, and place come together to shape meaningful
                            experiences.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-9">
                            <Link
                                to="/Projects"
                                className="bg-amber-500 text-black px-7 py-4 text-sm font-bold flex items-center gap-3 hover:bg-white transition"
                            >
                                EXPLORE PROJECTS
                                <ArrowRight size={16} />
                            </Link>
                            <Link
                                to="/contact"
                                className="border border-white/60 text-white px-7 py-4 text-sm font-bold flex items-center gap-3 hover:bg-white hover:text-black transition"
                            >
                                START A PROJECT
                                <ArrowRight size={16} />
                            </Link> 
                        </div>
                    </div>
                </div> 
            </section>

            {/* ================= STATS ================= */}
            <section className="bg-stone-100 border-b border-gray-200">
                <div className="max-w-350 mx-auto grid grid-cols-2 lg:grid-cols-4">

                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={`px-6 lg:px-10 py-9 ${index !== 0 ? "border-l border-stone-300" : ""
                                }`}
                        >
                            <h3 className="text-4xl lg:text-5xl font-bold">
                                {stat.number}
                            </h3>

                            <p className="text-gray-500 text-sm mt-2">
                                {stat.label}
                            </p>
                        </div>
                    ))}

                </div>
            </section>

            {/* ================= ABOUT ================= */}
            <section id="about" className="py-24 lg:py-32 bg-white">
                <div className="max-w-350 mx-auto px-6 lg:px-10">

                    <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

                        {/* Image */}
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=85"
                                alt="Architecture project"
                                className="w-full h-125 lg:h-162.5 object-cover"
                            />

                            <div className="absolute -bottom-7 -right-5 lg:-right-8 bg-[#E8A72B] w-32 h-32 lg:w-40 lg:h-40 flex flex-col justify-center items-center">
                                <span className="text-4xl lg:text-5xl font-bold">15+</span>
                                <span className="text-xs uppercase tracking-widest mt-1">
                                    Years
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-[#D49318] uppercase text-xs font-bold tracking-[0.25em]">
                                    About Us
                                </span>
                                <span className="w-12 h-px bg-[#D49318]"></span>
                            </div>

                            <h2 className="text-slate-900 text-4xl lg:text-6xl font-bold leading-tight">
                                Architecture
                                <br />
                                <span className="text-gray-400">With Purpose.</span>
                            </h2>

                            <p className="text-slate-600 leading-7 mt-7 max-w-xl">
                                Centric Design Studio is an architecture and design practice
                                focused on creating spaces that are purposeful, beautiful,
                                and connected to their surroundings.
                            </p>

                            <p className="text-gray-600 leading-7 mt-5 max-w-xl">
                                From residential environments to commercial spaces, we
                                approach every project with curiosity, precision, and a
                                commitment to thoughtful design.
                            </p>

                            <div className="mt-8 space-y-4">
                                {[
                                    "Human-centered design",
                                    "Context-driven architecture",
                                    "Attention to every detail",
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <span className="w-6 h-6 bg-[#E8A72B] rounded-full flex items-center justify-center">
                                            <Check size={14} />
                                        </span>

                                        <span className="font-medium text-sm">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="#studio"
                                className="inline-flex items-center gap-3 mt-9 font-bold text-sm border-b-2 border-[#E8A72B] pb-2"
                            >
                                DISCOVER OUR STUDIO
                                <ArrowUpRight size={17} />
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <section
                id="services"
                className="bg-[#111111] text-white py-24 lg:py-32"
            >
                <div className="max-w-350 mx-auto px-6 lg:px-10">

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">

                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-[#E8A72B] uppercase text-xs font-bold tracking-[0.25em]">
                                    What We Do
                                </span>
                                <span className="w-12 h-px bg-[#E8A72B]"></span>
                            </div>

                            <h2 className="text-4xl lg:text-6xl font-bold">
                                Our Expertise
                            </h2>
                        </div>

                        <p className="text-white/60 max-w-md leading-7">
                            From the first sketch to the final detail, we bring together
                            strategy, creativity, and technical expertise.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-white/20">

                        {services.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={service.title}
                                    className={`group py-10 lg:px-8 border-b lg:border-b-0 border-white/20 ${index !== 0 ? "lg:border-l" : ""
                                        }`}
                                >
                                    <Icon
                                        size={42}
                                        strokeWidth={1.2}
                                        className="text-[#E8A72B] mb-10"
                                    />

                                    <span className="text-white/30 text-sm">
                                        0{index + 1}
                                    </span>

                                    <h3 className="text-2xl font-semibold mt-3">
                                        {service.title}
                                    </h3>

                                    <p className="text-white/50 leading-7 mt-4 text-sm">
                                        {service.text}
                                    </p>

                                    <div className="mt-8 flex items-center gap-2 text-[#E8A72B] text-sm font-semibold">
                                        LEARN MORE
                                        <ArrowRight
                                            size={16}
                                            className="group-hover:translate-x-2 transition"
                                        />
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </section>

            {/* ================= PROJECTS ================= */}
            <section id="projects" className="py-24 lg:py-32 bg-white">
                <div className="max-w-350 mx-auto px-6 lg:px-10">

                    <div className="flex items-end justify-between mb-12">

                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-[#D49318] uppercase text-xs font-bold tracking-[0.25em]">
                                    Selected Work
                                </span>
                                <span className="w-12 h-px bg-[#D49318]"></span>
                            </div>

                            <h2 className="text-4xl lg:text-6xl font-bold">
                                Featured Projects
                            </h2>
                        </div>

                        <a
                            href="#projects"
                            className="hidden md:flex items-center gap-2 text-sm font-bold border-b border-black pb-2"
                        >
                            VIEW ALL PROJECTS
                            <ArrowRight size={16} />
                        </a>

                    </div>

                    <div className="grid md:grid-cols-2 gap-5">

                        {projects.map((project, index) => (
                            <a
                                href="#contact"
                                key={project.title}
                                className={`group relative overflow-hidden ${index === 0 || index === 3
                                    ? "md:h-150"
                                    : "md:h-112.5"
                                    } h-112.5`}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                                />

                                <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/10 to-transparent"></div>

                                <div className="absolute top-6 right-6 w-11 h-11 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                    <ArrowUpRight size={19} />
                                </div>

                                <div className="absolute bottom-7 left-7 text-white">
                                    <span className="text-[#E8A72B] text-xs uppercase tracking-[0.2em] font-semibold">
                                        {project.category}
                                    </span>

                                    <h3 className="text-2xl lg:text-3xl font-semibold mt-2">
                                        {project.title}
                                    </h3>

                                    <p className="text-white/70 text-sm mt-1">
                                        {project.location}
                                    </p>
                                </div>
                            </a>
                        ))}

                    </div>

                    <a
                        href="#projects"
                        className="md:hidden flex items-center justify-center gap-2 mt-10 font-bold text-sm"
                    >
                        VIEW ALL PROJECTS
                        <ArrowRight size={16} />
                    </a>

                </div>
            </section>

            {/* ================= PHILOSOPHY ================= */}
            <section
                id="studio"
                className="relative min-h-162.5 flex items-center overflow-hidden"
            >
                <img
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2200&q=90"
                    alt="Architectural building"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 max-w-350 mx-auto w-full px-6 lg:px-10">

                    <div className="max-w-4xl">

                        <span className="text-[#E8A72B] text-xs uppercase font-bold tracking-[0.3em]">
                            Our Philosophy
                        </span>

                        <h2 className="text-white text-5xl lg:text-8xl font-bold leading-[0.95] mt-6">
                            WE DON'T JUST
                            <br />
                            DESIGN BUILDINGS.
                            <br />
                            <span className="text-[#E8A72B]">
                                WE DESIGN EXPERIENCES.
                            </span>
                        </h2>

                    </div>

                </div>
            </section>

            {/* ================= PROCESS ================= */}
            <section className="py-24 lg:py-32 bg-stone-50">
                <div className="max-w-350 mx-auto px-6 lg:px-10">

                    <div className="max-w-2xl mb-14">
                        <span className="text-[#D49318] text-xs uppercase font-bold tracking-[0.25em]">
                            Our Approach
                        </span>

                        <h2 className="text-4xl lg:text-6xl font-bold mt-4">
                            From Idea
                            <br />
                            <span className="text-gray-400">to Reality.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 bg-white border-t border-black/15 ">

                        {[
                            {
                                number: "01",
                                title: "Discover",
                                text: "We understand your vision, needs, site, and ambitions.",
                            },
                            {
                                number: "02",
                                title: "Concept",
                                text: "We transform ideas into a clear architectural direction.",
                            },
                            {
                                number: "03",
                                title: "Design",
                                text: "We develop every detail with precision and purpose.",
                            },
                            {
                                number: "04",
                                title: "Deliver",
                                text: "We help bring the final vision into the real world.",
                            },
                        ].map((step, index) => (
                            <div
                                key={step.number}
                                className={`py-9 pr-8 pl-8 hover:shadow-xl ${index !== 0 ? "lg:border-l border-black/15 lg:pl-8" : ""
                                    }`}
                            >
                                <span className="text-[#D49318] text-sm font-bold">
                                    {step.number}
                                </span>

                                <h3 className="text-2xl font-bold mt-5">
                                    {step.title}
                                </h3>

                                <p className="text-gray-500 leading-7 text-sm mt-4">
                                    {step.text}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section
                id="contact"
                className="relative py-28 lg:py-40 overflow-hidden"
            >
                <img
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90"
                    alt="Architecture"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10 max-w-350 mx-auto px-6 lg:px-10 text-center">

                    <span className="text-[#E8A72B] uppercase text-xs font-bold tracking-[0.3em]">
                        Let's Work Together
                    </span>

                    <h2 className="text-white text-5xl lg:text-8xl font-bold leading-tight mt-5">
                        HAVE A VISION
                        <br />
                        <span className="text-[#E8A72B]">FOR YOUR NEXT PROJECT?</span>
                    </h2>

                    <p className="text-white/70 max-w-xl mx-auto mt-7 leading-7">
                        Let's turn your ideas into a thoughtful architectural space
                        designed around the way you live, work, and experience.
                    </p>

                    <a
                        href="mailto:hello@centricdesignstudio.com"
                        className="inline-flex items-center gap-3 bg-[#E8A72B] text-black px-8 py-4 mt-9 font-bold text-sm hover:bg-white transition"
                    >
                        START A CONVERSATION
                        <ArrowRight size={17} />
                    </a>

                </div>
            </section>



        </div>
    );
}

export default HomePage;