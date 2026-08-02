import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Home,
  Map,
  Lightbulb,
  ClipboardCheck,
} from "lucide-react";

function Services() {
  const services = [
    {
      number: "01",
      icon: Building2,
      title: "Architecture",
      description:
        "We create thoughtful architectural solutions that balance function, context, material, and visual identity.",
      details:
        "From early concepts and planning to detailed design, we develop spaces that respond to the needs of the people who use them.",
    },
    {
      number: "02",
      icon: Home,
      title: "Interior Design",
      description:
        "We design interior environments that feel cohesive, functional, and connected to the architecture around them.",
      details:
        "Our approach considers materials, lighting, furniture, proportions, and details to create interiors with character and purpose.",
    },
    {
      number: "03",
      icon: Map,
      title: "Urban Planning",
      description:
        "We think beyond individual buildings to create places that connect people, movement, community, and environment.",
      details:
        "Our planning approach considers context, accessibility, public spaces, and long-term development.",
    },
    {
      number: "04",
      icon: Lightbulb,
      title: "Design Consulting",
      description:
        "We provide strategic design guidance to help clients make confident decisions throughout their projects.",
      details:
        "From initial ideas to design refinement, we bring architectural thinking and creative problem solving to every challenge.",
    },
    {
      number: "05",
      icon: ClipboardCheck,
      title: "Project Management",
      description:
        "We help coordinate design, documentation, communication, and project goals from concept through completion.",
      details:
        "Our structured approach keeps projects organized while maintaining design quality and attention to detail.",
    },
  ];

  return (
    <main className="bg-[#F7F6F2] text-[#111111]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-150 lg:min-h-screen flex items-center overflow-hidden bg-[#111111]">

        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90"
          alt="Architecture and interior design"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-zinc-950/20" />

        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-900/70 to-transparent" />

        <div className="relative z-10 max-w-350 mx-auto w-full px-6 lg:px-10 pt-24">

          <div className="max-w-4xl">

            <div className="flex items-center gap-3 mb-7">
              <span className="w-12 h-0.5 bg-[#E8A72B]" />

              <span className="text-[#E8A72B] text-xs font-semibold uppercase tracking-[0.3em]">
                What We Do
              </span>
            </div>

            <h1 className="text-white text-5xl sm:text-6xl lg:text-8xl font-semibold leading-[0.92] tracking-tight">
              DESIGN WITH <br />
              <span className="text-[#E8A72B]">
                PURPOSE.
              </span>
            </h1>

            <p className="text-white/75 text-base lg:text-lg leading-7 max-w-2xl mt-8">
              From architecture and interiors to planning and project
              management, we bring thoughtful design thinking to every stage
              of a project.
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

        <div className="absolute bottom-8 right-6 lg:right-10 text-white/50 text-xs tracking-[0.25em]">
          02 / SERVICES
        </div>

      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="pt-20 lg:pt-28">

        <div className="max-w-350 mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20">

            <div className="lg:col-span-4">

              <p className="text-[#E8A72B] text-xs font-bold uppercase tracking-[0.3em]">
                Our Expertise
              </p>

              <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mt-5">
                One studio.
                <br />
                <span className="text-black/40">
                  Many possibilities.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-7 lg:col-start-6">

              <p className="text-black/60 text-lg lg:text-xl leading-8">
                We approach every project as an opportunity to create
                something meaningful. Our multidisciplinary services allow us
                to look at architecture from both the larger context and the
                smallest detail.
              </p>

              <p className="text-black/50 leading-7 mt-6">
                Whether we are designing a new building, transforming an
                interior, planning a development, or helping guide a project,
                our goal remains the same: create spaces that are functional,
                considered, and built to last.
              </p>

            </div>

          </div>

        </div>

        {/* ================= STATS ================= */}
        <section className="bg-amber-600 text-black mt-16">

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



      </section>

      {/* =====================================================
          SERVICES LIST
      ===================================================== */}
      <section className="bg-[#111111] text-white py-10 lg:py-16">

        <div className="max-w-350 mx-auto ">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 px-6 lg:px-10">

            <div>

              <p className="text-[#E8A72B] text-xs font-bold uppercase tracking-[0.3em]">
                Our Services
              </p>

              <h2 className="text-4xl lg:text-6xl font-semibold mt-5">
                What we
                <br />
                <span className="text-white/40">
                  bring to the table.
                </span>
              </h2>

            </div>

            <p className="text-white/45 max-w-md leading-7">
              Every service is built around collaboration, careful thinking,
              and a clear understanding of the client's goals.
            </p>

          </div>

          {/* Services */}
          <div className="border-t border-white/15">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.number}
                  className="group border-b border-white/15 py-10 lg:py-12 hover:bg-slate-900 transition-all duration-500 px-6 lg:px-10"
                >

                  <div className="grid lg:grid-cols-12 gap-8 items-start">

                    {/* Number */}
                    <div className="lg:col-span-1">

                      <span className="text-[#E8A72B] text-sm font-semibold">
                        {service.number}
                      </span>

                    </div>

                    {/* Icon */}
                    <div className="lg:col-span-1">

                      <div className="w-12 h-12 border border-white/15 flex items-center justify-center group-hover:bg-[#E8A72B] group-hover:text-black group-hover:border-[#E8A72B] transition duration-300">
                        <Icon
                          size={22}
                          strokeWidth={1.5}
                        />
                      </div>

                    </div>

                    {/* Title */}
                    <div className="lg:col-span-3">

                      <h3 className="text-2xl lg:text-3xl font-semibold group-hover:text-[#E8A72B] transition">
                        {service.title}
                      </h3>

                    </div>

                    {/* Description */}
                    <div className="lg:col-span-4">

                      <p className="text-white/55 leading-7">
                        {service.description}
                      </p>

                    </div>

                    {/* Arrow */}
                    <div className="lg:col-span-3 flex lg:justify-end">

                      <div className="flex items-center gap-4 text-white/40 group-hover:text-[#E8A72B] transition">

                        <span className="hidden lg:block text-xs uppercase tracking-[0.2em]">
                          Explore Service
                        </span>

                        <ArrowUpRight
                          size={24}
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                        />

                      </div>

                    </div>

                  </div>

                  {/* Details */}
                  <div className="lg:ml-[16.66%] lg:mr-[25%] mt-6">

                    <p className="text-white/35 text-sm leading-7 max-w-3xl">
                      {service.details}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="py-20 lg:py-32">
        

        <div className="max-w-350 mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-12 gap-12">

            <div className="lg:col-span-4"> 

              <p className="text-[#E8A72B] text-xs font-bold uppercase tracking-[0.3em]">
                Our Process
              </p>

              <h2 className="text-4xl lg:text-6xl font-semibold leading-tight mt-5">
                From idea
                <br />
                <span className="text-black/40">
                  to reality.
                </span>
              </h2>

              <p className="text-black/50 leading-7 mt-7 max-w-md">
                A clear process helps transform ambitious ideas into
                purposeful spaces.
              </p>

            </div>

            <div className="lg:col-span-7 lg:col-start-6">

              {/* Step 01 */}
              <div className="border-t border-black/15 py-8">

                <div className="flex gap-6">

                  <span className="text-amber-200 h-8 w-8 bg-amber-700 flex justify-center items-center rounded-full text-sm font-semibold">
                    01
                  </span>

                  <div>

                    <h3 className="text-2xl font-semibold">
                      Discover
                    </h3>

                    <p className="text-black/50 leading-7 mt-3">
                      We listen, research, and understand the project's
                      requirements, context, and ambitions.
                    </p>

                  </div>

                </div>

              </div>

              {/* Step 02 */}
              <div className="border-t border-black/15 py-8">

                <div className="flex gap-6">

                  <span className="text-amber-200 h-8 w-8 bg-amber-700 flex justify-center items-center rounded-full text-sm font-semibold">
                    02
                  </span>

                  <div>

                    <h3 className="text-2xl font-semibold">
                      Develop
                    </h3>

                    <p className="text-black/50 leading-7 mt-3">
                      Ideas become concepts, drawings, materials, and
                      considered design solutions.
                    </p>

                  </div>

                </div>

              </div>

              {/* Step 03 */}
              <div className="border-t border-black/15 py-8">

                <div className="flex gap-6">

                  <span className="text-amber-200 h-8 w-8 bg-amber-700 flex justify-center items-center rounded-full text-sm font-semibold">
                    03
                  </span>

                  <div>

                    <h3 className="text-2xl font-semibold">
                      Deliver
                    </h3>

                    <p className="text-black/50 leading-7 mt-3">
                      We coordinate the details and guide the project toward
                      a successful final result.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-amber-500 py-20 lg:py-24">

        <div className="max-w-350 mx-auto px-6 lg:px-10">

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">

            <div>

              <p className="text-black text-xs font-bold uppercase tracking-[0.3em]">
                Have a project?
              </p>

              <h2 className="text-4xl lg:text-6xl font-semibold mt-4 text-black">
                Let's build something
                <br />
                meaningful.
              </h2>

            </div>

            <Link
              to="/contact"
              className="bg-[#111111] text-white px-7 py-4 font-bold text-sm flex items-center gap-3 w-fit hover:bg-white hover:text-black transition"
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

export default Services;