import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Users,
  Ruler,
  Layers3,
  Sparkles,
} from "lucide-react";

function Studio() {
  const values = [
    {
      number: "01",
      icon: Users,
      title: "Collaboration",
      text: "We believe the strongest ideas come from open communication and collaboration between clients, designers, consultants, and builders.",
    },
    {
      number: "02",
      icon: Ruler,
      title: "Precision",
      text: "Every proportion, material, detail, and decision is considered carefully to create architecture that feels intentional.",
    },
    {
      number: "03",
      icon: Layers3,
      title: "Context",
      text: "We study the surrounding environment, history, culture, and people before developing a design response.",
    },
    {
      number: "04",
      icon: Sparkles,
      title: "Innovation",
      text: "We explore new ideas, technologies, materials, and processes while keeping the human experience at the center.",
    },
  ];

  return (
    <main className="bg-[#F7F6F2] text-[#111111]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-150 lg:min-h-screen flex items-center overflow-hidden bg-[#111111]">

        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=90"
          alt="Centric Design Studio"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-zinc-950/20" />

        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-900/70 to-transparent" />

        <div className="relative z-10 max-w-350 mx-auto w-full px-6 lg:px-10 pt-24">

          <div className="max-w-5xl">

            <div className="flex items-center gap-3 mb-7">

              <span className="w-12 h-0.5 bg-[#E8A72B]" />

              <span className="text-[#E8A72B] text-xs font-semibold uppercase tracking-[0.3em]">
                The Studio
              </span>

            </div>

            <h1 className="text-white text-5xl sm:text-6xl lg:text-8xl font-semibold leading-[0.92] tracking-tight">
              PEOPLE
              <br />
              BEHIND
              <br />
              <span className="text-[#E8A72B]">
                THE WORK.
              </span>
            </h1>

            <p className="text-white/75 text-base lg:text-lg leading-7 max-w-2xl mt-8">
              A collaborative architecture studio bringing together ideas,
              experience, curiosity, and a shared passion for meaningful
              design.
            </p>

          </div>

        </div>

        <div className="absolute bottom-8 right-6 lg:right-10 text-white/50 text-xs tracking-[0.25em]">
          04 / STUDIO
        </div>

      </section>

      {/* =====================================================
          STUDIO INTRO
      ===================================================== */}
      <section className="py-20 lg:py-32">

        <div className="max-w-350 mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            <div className="lg:col-span-5">

              <p className="text-[#E8A72B] text-xs font-bold uppercase tracking-[0.3em]">
                Inside Centric
              </p>

              <h2 className="text-4xl lg:text-6xl font-semibold leading-tight mt-5">
                A studio built
                <br />
                <span className="text-black/40">
                  around ideas.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-6 lg:col-start-7">

              <p className="text-black/65 text-lg lg:text-xl leading-8">
                Centric Design Studio is a place where architecture,
                creativity, and collaboration come together.
              </p>

              <p className="text-black/50 leading-7 mt-7">
                Our studio brings together designers and thinkers who share a
                belief that good architecture begins with asking the right
                questions. We explore each project from different perspectives
                before arriving at a clear design direction.
              </p>

              <p className="text-black/50 leading-7 mt-5">
                We work closely with our clients throughout the process,
                creating an environment where ideas can evolve and better
                solutions can emerge.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          STUDIO IMAGE
      ===================================================== */}
      <section className="pb-20 lg:pb-32">

        <div className="max-w-350 mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-12 gap-6">

            <div className="lg:col-span-8">

              <div className="relative overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=90"
                  alt="Architecture studio workspace"
                  className="w-full h-112.5 lg:h-162.5 object-cover hover:scale-105 transition duration-700"
                />

              </div>

            </div>

            <div className="lg:col-span-4 flex items-end">

              <div className="bg-[#111111] text-white p-8 lg:p-12 w-full">

                <p className="text-[#E8A72B] text-xs font-bold uppercase tracking-[0.25em]">
                  Our Belief
                </p>

                <p className="text-2xl lg:text-3xl font-medium leading-relaxed mt-6">
                  "Architecture should make everyday life feel a little more
                  meaningful."
                </p>

                <div className="w-12 h-0.5 bg-[#E8A72B] mt-8" />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          VALUES
      ===================================================== */}
      <section className="bg-[#111111] text-white py-20 lg:py-32">

        <div className="max-w-350 mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-12 gap-12 mb-16">

            <div className="lg:col-span-5">

              <p className="text-[#E8A72B] text-xs font-bold uppercase tracking-[0.3em]">
                What Drives Us
              </p>

              <h2 className="text-4xl lg:text-6xl font-semibold leading-tight mt-5">
                Principles
                <br />
                <span className="text-white/40">
                  that guide us.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-5 lg:col-start-7">

              <p className="text-white/50 text-lg leading-8">
                Our values shape how we think, how we design, and how we work
                with the people who trust us with their projects.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 border-t border-white/15">

            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.number}
                  className="border-b border-white/15 md:border-r last:border-r-0 p-8 lg:p-12 group"
                >

                  <div className="flex items-start justify-between">

                    <span className="text-[#E8A72B] text-sm font-semibold">
                      {value.number}
                    </span>

                    <Icon
                      size={28}
                      strokeWidth={1.5}
                      className="text-white/50 group-hover:text-[#E8A72B] transition"
                    />

                  </div>

                  <h3 className="text-2xl lg:text-3xl font-semibold mt-12 group-hover:text-[#E8A72B] transition">
                    {value.title}
                  </h3>

                  <p className="text-white/45 leading-7 mt-5 max-w-lg">
                    {value.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          TEAM
      ===================================================== */}
      <section className="py-20 lg:py-32">

        <div className="max-w-350 mx-auto px-6 lg:px-10">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">

            <div>

              <p className="text-[#E8A72B] text-xs font-bold uppercase tracking-[0.3em]">
                Our Team
              </p>

              <h2 className="text-4xl lg:text-6xl font-semibold mt-5">
                The people
                <br />
                <span className="text-black/40">
                  behind Centric.
                </span>
              </h2>

            </div>

            <p className="text-black/50 max-w-md leading-7">
              A multidisciplinary team working together to turn ideas into
              thoughtful spaces.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {/* Team Member 1 */}
            <div className="group">

              <div className="overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=90"
                  alt="Studio Director"
                  className="w-full h-112.5 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
                />

              </div>

              <div className="flex items-start justify-between mt-5">

                <div>

                  <h3 className="text-xl font-semibold">
                    Alex Carter
                  </h3>

                  <p className="text-black/45 text-sm mt-1">
                    Founder & Design Director
                  </p>

                </div>

                <ArrowUpRight
                  size={20}
                  className="text-black/30 group-hover:text-[#E8A72B] transition"
                />

              </div>

            </div>

            {/* Team Member 2 */}
            <div className="group">

              <div className="overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=90"
                  alt="Senior Architect"
                  className="w-full h-112.5 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
                />

              </div>

              <div className="flex items-start justify-between mt-5">

                <div>

                  <h3 className="text-xl font-semibold">
                    Jordan Miller
                  </h3>

                  <p className="text-black/45 text-sm mt-1">
                    Senior Architect
                  </p>

                </div>

                <ArrowUpRight
                  size={20}
                  className="text-black/30 group-hover:text-[#E8A72B] transition"
                />

              </div>

            </div>

            {/* Team Member 3 */}
            <div className="group">

              <div className="overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=90"
                  alt="Interior Designer"
                  className="w-full h-112.5 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
                />

              </div>

              <div className="flex items-start justify-between mt-5">

                <div>

                  <h3 className="text-xl font-semibold">
                    Taylor Morgan
                  </h3>

                  <p className="text-black/45 text-sm mt-1">
                    Interior Designer
                  </p>

                </div>

                <ArrowUpRight
                  size={20}
                  className="text-black/30 group-hover:text-[#E8A72B] transition"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}
      <section className="bg-amber-600 text-black">

        <div className="max-w-350">

          <div className="grid grid-cols-2 lg:grid-cols-4 overflow-hidden">

            <div className="py-16 border-r border-black/20 px-10 bg-amber-600 transition-all duration-300 hover:bg-amber-700 hover:shadow-2xl cursor-pointer hover:scale-[1.03]" >
              <p className="text-5xl text-white lg:text-5xl font-bold">
                25+
              </p>
              <p className="text-xs text-gray-200 uppercase tracking-[0.2em] mt-3">
                Projects
              </p>
            </div>

            <div className="py-16 border-r border-black/20 px-10 bg-amber-600 transition-all duration-300 hover:bg-amber-700 hover:shadow-2xl cursor-pointer hover:scale-[1.03]">
              <p className="text-5xl text-white lg:text-5xl font-bold">
                12
              </p>
              <p className="text-xs text-gray-200 uppercase tracking-[0.2em] mt-3">
                Cities
              </p>
            </div>

            <div className="py-16 border-r border-black/20 px-10 bg-amber-600 transition-all duration-300 hover:bg-amber-700 hover:shadow-2xl cursor-pointer hover:scale-[1.03]">
              <p className="text-5xl text-white lg:text-5xl font-bold">
                8+
              </p>
              <p className="text-xs text-gray-200 uppercase tracking-[0.2em] mt-3">
                Years Experience
              </p>
            </div>

            <div className="py-16 border-r border-black/20 px-10 bg-amber-600 transition-all duration-300 hover:bg-amber-700 hover:shadow-2xl cursor-pointer hover:scale-[1.03]">
              <p className="text-5xl text-white lg:text-5xl font-bold">
                100%
              </p>
              <p className="text-xs text-gray-200 uppercase tracking-[0.2em] mt-3">
                Commitment
              </p>
            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="py-20 lg:py-28">

        <div className="max-w-350 mx-auto px-6 lg:px-10">

          <div className="bg-[#111111] px-8 py-14 lg:px-16 lg:py-20 flex flex-col lg:flex-row lg:items-center justify-between gap-10">

            <div>

              <p className="text-[#E8A72B] text-xs font-bold uppercase tracking-[0.3em]">
                Work With Us
              </p>

              <h2 className="text-white text-4xl lg:text-6xl font-semibold mt-5">
                Let's create
                <br />
                something together.
              </h2>

            </div>

            <Link
              to="/contact"
              className="bg-[#E8A72B] text-black px-7 py-4 font-bold text-sm flex items-center gap-3 w-fit hover:bg-white transition"
            >
              START A PROJECT
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Studio;