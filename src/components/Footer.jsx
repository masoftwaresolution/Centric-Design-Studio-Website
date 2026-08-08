import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";   

function Footer() {
  return (
    <footer className="bg-[#111111] text-white"> 

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-350 mx-auto px-6 lg:px-10 py-16 lg:py-20">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

          {/* ================= BRAND ================= */}
          <div className="lg:col-span-5">

            <Link
              to="/"
              className="inline-flex items-center gap-4"
            >

              {/* Logo */}
              <div className="w-12 h-12 border border-white/30 flex items-center justify-center">
                <span className="text-xl font-bold">
                  C
                </span>
              </div>

              <div>
                <h3 className="font-bold tracking-[0.18em] text-sm">
                  CENTRIC
                </h3>

                <p className="text-white/40 text-[9px] tracking-[0.35em] mt-1">
                  DESIGN STUDIO
                </p>
              </div>

            </Link>

            <p className="text-white/45 leading-7 text-sm max-w-md mt-7">
              Centric Design Studio is an architecture and design practice
              creating thoughtful spaces where people, purpose, and place
              come together.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 mt-8">

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 border border-white/15 flex items-center justify-center hover:bg-[#E8A72B] hover:text-black hover:border-[#E8A72B] transition"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 border border-white/15 flex items-center justify-center hover:bg-[#E8A72B] hover:text-black hover:border-[#E8A72B] transition"
              >
                <FaLinkedinIn size={17} />
              </a>

            </div>

          </div>

          {/* ================= NAVIGATION ================= */}
          <div className="lg:col-span-2">

            <h4 className="text-xs font-semibold tracking-[0.25em] text-[#E8A72B] uppercase">
              Explore
            </h4>

            <div className="flex flex-col gap-4 mt-7">

              <Link
                to="/"
                className="text-sm text-white/50 hover:text-white transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-sm text-white/50 hover:text-white transition"
              >
                About
              </Link>

              <Link
                to="/services"
                className="text-sm text-white/50 hover:text-white transition"
              >
                Services
              </Link>

              <Link
                to="/projects"
                className="text-sm text-white/50 hover:text-white transition"
              >
                Projects
              </Link>

              <Link
                to="/studio"
                className="text-sm text-white/50 hover:text-white transition"
              >
                Studio
              </Link>

              <Link
                to="/contact"
                className="text-sm text-white/50 hover:text-white transition"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* ================= SERVICES ================= */}
          <div className="lg:col-span-2">

            <h4 className="text-xs font-semibold tracking-[0.25em] text-[#E8A72B] uppercase">
              Services
            </h4>

            <div className="flex flex-col gap-4 mt-7">

              <span className="text-sm text-white/50">
                Architecture
              </span>

              <span className="text-sm text-white/50">
                Interior Design
              </span>

              <span className="text-sm text-white/50">
                Urban Planning
              </span>

              <span className="text-sm text-white/50">
                Design Consulting
              </span>

              <span className="text-sm text-white/50">
                Project Management
              </span>

            </div>

          </div>

          {/* ================= CONTACT ================= */}
          <div className="lg:col-span-3">

            <h4 className="text-xs font-semibold tracking-[0.25em] text-[#E8A72B] uppercase">
              Contact
            </h4>

            <div className="flex flex-col gap-5 mt-7">

              {/* Location */}
              <div className="flex items-start gap-3">

                <MapPin
                  size={18}
                  className="text-[#E8A72B] mt-1 shrink-0"
                />

                <p className="text-sm text-white/50 leading-6">
                  Street ABC City XYZ
                  <br />
                  Country ABC
                </p>

              </div>

              {/* Phone */}
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition"
              >
                <Phone
                  size={17}
                  className="text-[#E8A72B]"
                />

                +1 234 567 890
              </a>

              {/* Email */}
              <a
                href="mailto:hello@centricdesignstudio.com"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition break-all"
              >
                <Mail
                  size={17}
                  className="text-[#E8A72B] shrink-0"
                />

                Professional Contact Form
              </a>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-white/10 mt-16 pt-7">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">

            <p className="text-xs text-white/30">
              © 2026 Centric Design Studio. All rights reserved.
            </p>

            <div className="flex items-center gap-6">

              <Link
                to="/privacy"
                className="text-xs text-white/30 hover:text-white transition"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-xs text-white/30 hover:text-white transition"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;