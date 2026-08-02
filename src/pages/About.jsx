import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Layers3,
  Lightbulb,
  Target,
} from "lucide-react";

function About() {
  return (
    <main className="bg-[#F7F6F2] text-[#111111]">

      {/* ================= HERO ================= */}
      <section className="relative min-h-150 lg:min-h-screen flex items-center overflow-hidden bg-[#111111]">

        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90"
          alt="Modern architecture"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-zinc-950/20" />

        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-900/70 to-transparent" />

        <div className="relative z-10 max-w-350 mx-auto w-full px-6 lg:px-10 pt-24">

          <div className="max-w-4xl">

            <div className="flex items-center gap-3 mb-7">
              <span className="w-12 h-0.5 bg-[#E8A72B]" />

              <span className="text-[#E8A72B] text-xs font-semibold uppercase tracking-[0.3em]">
                About Centric
              </span>
            </div>

            <h1 className="text-white text-5xl sm:text-6xl lg:text-8xl font-semibold leading-[0.92] tracking-tight">
              DESIGNING
              <br />
              WITH
              <br />
              <span className="text-[#E8A72B]">
                PURPOSE.
              </span>
            </h1>

            <p className="text-white/75 text-base lg:text-lg leading-7 max-w-2xl mt-8">
              We are an architecture and design studio focused on creating
              meaningful spaces that connect people, purpose, and place.
            </p>

          </div>

        </div>

        {/* Page Number */}
        <div className="absolute bottom-8 right-6 lg:right-10 text-white/50 text-xs tracking-[0.25em]">
          01 / ABOUT
        </div>

      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-20 lg:py-32 text-slate-600">

        <div className="max-w-350 mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Image */}
            <div className="lg:col-span-6">

              <div className="relative">

                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=90"
                  alt="Architectural building"
                  className="w-full h-125 lg:h-162.5 object-cover"
                />

                <div className="absolute -bottom-6 -right-6 bg-[#E8A72B] w-32 h-32 hidden md:flex items-center justify-center">
                  <span className="text-black text-xs font-bold tracking-[0.2em] -rotate-45deg">
                    EST. 2020
                  </span>
                </div>

              </div>

            </div>

            {/* Content */}
            <div className="lg:col-span-6 lg:pl-10">

              <p className="text-[#E8A72B] text-xs font-bold uppercase tracking-[0.3em]">
                Our Story
              </p>

              <h2 className="text-4xl lg:text-6xl font-semibold leading-tight mt-5 text-slate-900">
                Architecture
                <br />
                <span className="text-slate-400">
                  that feels human.
                </span>
              </h2>

              <div className="space-y-5 mt-8 text-black/60 leading-7">

                <p>
                  Centric Design Studio is an architecture and design practice
                  built around a simple idea: great spaces should be both
                  purposeful and inspiring.
                </p>

                <p>
                  From residential environments to commercial spaces, we
                  approach every project with curiosity, precision, and a
                  strong understanding of how people interact with their
                  surroundings.
                </p>

                <p>
                  We believe architecture is more than creating buildings.
                  It is about shaping experiences, responding to context, and
                  creating places that remain meaningful over time.
                </p>

              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 mt-9 text-sm font-bold border-b border-black pb-2 hover:text-[#E8A72B] hover:border-[#E8A72B] transition"
              >
                START A CONVERSATION
                <ArrowUpRight size={17} />
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="bg-[#111111] text-white py-20 lg:py-28">

        <div className="max-w-350 mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-12 gap-12">

            <div className="lg:col-span-4">

              <p className="text-[#E8A72B] text-xs font-bold uppercase tracking-[0.3em]">
                Our Philosophy
              </p>

              <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mt-5">
                Less noise.
                <br />
                More meaning.
              </h2>

            </div>

            <div className="lg:col-span-7 lg:col-start-6">

              <p className="text-white/55 text-lg lg:text-xl leading-8">
                We believe the best architecture doesn't compete with its
                surroundings. It responds to them. Every line, material,
                opening, and detail has a purpose.
              </p>

              <p className="text-white/55 text-lg lg:text-xl leading-8 mt-7">
                Our work balances creativity with functionality, creating
                spaces that are visually distinctive while remaining practical,
                comfortable, and timeless.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-20 lg:py-28 bg-stone-50">

        <div className="max-w-350 mx-auto px-6 lg:px-10">

          <div className="grid md:grid-cols-2 gap-px ">

            {/* Mission */}
            <div className="bg-white rounded-tl-xl rounded-bl-xl shadow-sm hover:shadow-xl transition p-10 lg:p-16">

              <Target
                size={34}
                strokeWidth={1.5}
                className="text-[#E8A72B]"
              />

              <p className="text-xs font-bold tracking-[0.3em] uppercase mt-8">
                Our Mission
              </p>

              <h3 className="text-3xl lg:text-4xl font-semibold mt-4">
                Create spaces
                <br />
                with purpose.
              </h3>

              <p className="text-black/55 leading-7 mt-6 max-w-lg">
                To design thoughtful environments that improve everyday
                experiences while responding intelligently to their
                surroundings.
              </p>

            </div>

            {/* Vision */}
            <div className="bg-white rounded-tr-xl rounded-br-xl shadow-sm hover:shadow-xl transition p-10 lg:p-16">

              <Compass
                size={34}
                strokeWidth={1.5}
                className="text-[#E8A72B]"
              />

              <p className="text-xs font-bold tracking-[0.3em] uppercase mt-8">
                Our Vision
              </p>

              <h3 className="text-3xl lg:text-4xl font-semibold mt-4">
                Shape the future
                <br />
                through design.
              </h3>

              <p className="text-black/55 leading-7 mt-6 max-w-lg">
                To create architecture that remains relevant, adaptable, and
                inspiring for generations to come.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY CENTRIC ================= */}
      <section className="border-t border-black/10 py-20 lg:py-28">

        <div className="max-w-350 mx-auto px-6 lg:px-10">

          <div className="max-w-3xl">

            <p className="text-[#E8A72B] text-xs font-bold uppercase tracking-[0.3em]">
              Why Centric
            </p>

            <h2 className="text-4xl lg:text-6xl font-semibold mt-5">
              Thoughtful by
              <br />
              <span className="text-black/40">
                design.
              </span>
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {/* Card 1 */}
            <div className="border-t px-4 py-7 rounded-xl hover:shadow-lg border border-stone-200">

              <Lightbulb
                size={30}
                strokeWidth={1.5}
                className="text-[#E8A72B]"
              />

              <h3 className="text-xl font-semibold mt-7">
                Creative Thinking
              </h3>

              <p className="text-black/55 leading-7 mt-4">
                We challenge conventional ideas to find thoughtful solutions
                that give every project its own identity.
              </p>

            </div>

            {/* Card 2 */}
            <div className="border-t px-4 py-7 rounded-xl hover:shadow-lg border border-stone-200">

              <Layers3
                size={30}
                strokeWidth={1.5}
                className="text-[#E8A72B]"
              />

              <h3 className="text-xl font-semibold mt-7">
                Attention to Detail
              </h3>

              <p className="text-black/55 leading-7 mt-4">
                From the overall concept to the smallest material detail,
                precision is part of everything we do.
              </p>

            </div>

            {/* Card 3 */}
            <div className="border-t px-4 py-7 rounded-xl hover:shadow-lg border border-stone-200">

              <Compass
                size={30}
                strokeWidth={1.5}
                className="text-[#E8A72B]"
              />

              <h3 className="text-xl font-semibold mt-7">
                Context Driven
              </h3>

              <p className="text-black/55 leading-7 mt-4">
                Every design responds to its location, environment, people,
                and purpose.
              </p>

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



      {/* ================= CTA ================= */}
      <section className="bg-[#F7F6F2] py-20 lg:py-28">

        <div className="max-w-350 mx-auto px-6 lg:px-10">

          <div className="bg-[#111111] px-8 py-14 lg:px-16 lg:py-20 flex flex-col lg:flex-row lg:items-center justify-between gap-10">

            <div>

              <p className="text-[#E8A72B] text-xs font-bold uppercase tracking-[0.3em]">
                Let's Create Together
              </p>

              <h2 className="text-white text-4xl lg:text-6xl font-semibold mt-5">
                Have an idea?
              </h2>

              <p className="text-white/50 mt-5 max-w-xl leading-7">
                Let's turn your vision into a thoughtful architectural
                experience.
              </p>

            </div>

            <Link
              to="/contact"
              className="bg-amber-700 text-white hover:text-black px-7 py-4 font-bold text-sm flex items-center gap-3 w-fit hover:bg-white transition"
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

export default About;