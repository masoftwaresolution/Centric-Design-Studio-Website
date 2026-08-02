import emailjs from "@emailjs/browser";
import { useState } from "react";
import {
    ArrowRight,
    Mail,
    Phone,
    MapPin,
    Clock,
    ArrowUpRight,
} from "lucide-react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        message: "",
    });

    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send(
                "service_zzb5tlk",
                "template_wdw9r0o",
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    projectType: formData.projectType,
                    budget: formData.budget,
                    message: formData.message,
                },
                "GP1q3o9cw-I-qzFih"
            );

            setFormData({
                name: "",
                email: "",
                phone: "",
                projectType: "",
                budget: "",
                message: "",
            });

            setSuccess(true);

            setTimeout(() => {
                setSuccess(false);
            }, 5000);

        } catch (error) {
            console.log(error);
            alert("Failed to send message.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="bg-[#F7F6F2] text-[#111111]"> 
            <section className="relative min-h-150 lg:min-h-screen flex items-center overflow-hidden bg-[#111111]">

                <img
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2200&q=90"
                    alt="Centric Design Studio architecture"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-zinc-950/20" />

                <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-900/70 to-transparent" />

                <div className="relative z-10 max-w-350 mx-auto w-full px-6 lg:px-10 pt-24">

                    <div className="max-w-5xl">

                        <div className="flex items-center gap-3 mb-7">

                            <span className="w-12 h-0.5 bg-[#E8A72B]" />

                            <span className="text-[#E8A72B] text-xs font-semibold uppercase tracking-[0.3em]">
                                Get In Touch
                            </span>

                        </div>

                        <h1 className="text-white text-5xl sm:text-6xl lg:text-8xl font-semibold leading-[0.92] tracking-tight">
                            LET'S 
                            START
                            <br />
                            <span className="text-[#E8A72B]">
                                SOMETHING.
                            </span>
                        </h1>

                        <p className="text-white/75 text-base lg:text-lg leading-7 max-w-2xl mt-8">
                            Have a project, idea, or question? Tell us a little about it and
                            let's start a conversation.
                        </p>

                    </div>

                </div>

                <div className="absolute bottom-8 right-6 lg:right-10 text-white/50 text-xs tracking-[0.25em]">
                    05 / CONTACT
                </div>

            </section>

            {/* =====================================================
          CONTACT INTRO
      ===================================================== */}
            <section className="py-20 lg:py-28 bg-slate-950">

                <div className="max-w-350 mx-auto px-6 lg:px-10">

                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

                        {/* Left */}
                        <div className="lg:col-span-5">

                            <p className="text-[#E8A72B] text-xs font-bold uppercase tracking-[0.3em]">
                                Start a Conversation
                            </p>

                            <h2 className="text-4xl lg:text-6xl font-semibold leading-tight mt-5 text-white">
                                Tell us about
                                <br />
                                <span className="text-gray-600">
                                    your project.
                                </span>
                            </h2>

                            <p className="text-gray-300 leading-7 mt-7 max-w-lg">
                                Whether you're planning a new building, transforming an
                                existing space, or simply exploring an idea, we'd love to hear
                                from you.
                            </p>

                            {/* Contact Info */}
                            <div className="mt-10 space-y-7">

                                {/* Email */}
                                <div className="flex gap-5">

                                    <div className="w-11 h-11 border border-amber-600 text-amber-600 flex items-center justify-center shrink-0">
                                        <Mail size={19} strokeWidth={1.5} />
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-[0.2em] text-white">
                                            Email
                                        </p>

                                        <a
                                            href="mailto:hello@centricdesignstudio.com"
                                            className="text-sm font-medium mt-1 block text-amber-700 hover:text-amber-800 transition"
                                        >
                                            hello@centricdesignstudio.com
                                        </a>
                                    </div>

                                </div>

                                {/* Phone */}
                                <div className="flex gap-5">

                                    <div className="w-11 h-11 border border-amber-600 text-amber-600 flex items-center justify-center shrink-0">
                                        <Phone size={19} strokeWidth={1.5} />
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-[0.2em] text-white">
                                            Phone
                                        </p>

                                        <a
                                            href="tel:+13135550189"
                                            className="text-sm font-medium mt-1 block text-amber-700 hover:text-amber-800 transition"
                                        >
                                            +1 (313) 555-0189
                                        </a>
                                    </div>

                                </div>

                                {/* Address */}
                                <div className="flex gap-5">

                                    <div className="w-11 h-11 border border-amber-600 text-amber-600 flex items-center justify-center shrink-0">
                                        <MapPin size={19} strokeWidth={1.5} />
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-[0.2em] text-white">
                                            Studio
                                        </p>

                                        <p className="text-sm font-medium mt-1 text-amber-700 hover:text-amber-800">
                                            Detroit, Michigan
                                        </p>
                                    </div>

                                </div>

                                {/* Hours */}
                                <div className="flex gap-5">

                                    <div className="w-11 h-11 border border-amber-600 text-amber-600 flex items-center justify-center shrink-0">
                                        <Clock size={19} strokeWidth={1.5} />
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-[0.2em] text-white">
                                            Office Hours
                                        </p>

                                        <p className="text-sm font-medium mt-1 text-amber-700 hover:text-amber-800">
                                            Mon — Fri · 9:00 AM — 6:00 PM
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Right - Form */}
                        <div className="lg:col-span-6 lg:col-start-7 ">

                            <form
                                onSubmit={handleSubmit}
                                className="bg-slate-900 p-7 lg:p-12 shadow-sm border border-slate-700"
                            >
                                {success && (
                                    <div className="mb-6 rounded-lg border border-green-300 bg-green-50 p-5">
                                        <h3 className="text-lg font-semibold text-green-700">
                                            ✓ Thank You!
                                        </h3>

                                        <p className="mt-2 text-sm text-green-600">
                                            Your inquiry has been sent successfully.
                                            Our team will contact you within 24 hours.
                                        </p>
                                    </div>
                                )}

                                <div className="mb-9">

                                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E8A72B]">
                                        Project Inquiry
                                    </p>

                                    <h3 className="text-2xl lg:text-3xl font-semibold mt-3 text-white">
                                        Let's talk about your project.
                                    </h3>

                                </div>

                                {/* Name + Email */}
                                <div className="grid md:grid-cols-2 gap-6">

                                    <div>

                                        <label className="text-xs uppercase tracking-[0.15em] text-white ">
                                            Your Name *
                                        </label>

                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Smith"
                                            className="w-full border-b border-black/20 bg-transparent py-4 outline-none focus:border-amber-500 transition placeholder:text-slate-400 text-white"
                                        />

                                    </div>

                                    <div>

                                        <label className="text-xs uppercase tracking-[0.15em] text-white">
                                            Email *
                                        </label>

                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@example.com"
                                            className="w-full border-b border-black/20 bg-transparent py-4 outline-none focus:border-amber-500 transition placeholder:text-slate-400 text-white"
                                        />

                                    </div>

                                </div>

                                {/* Phone + Project */}
                                <div className="grid md:grid-cols-2 gap-6 mt-7">

                                    <div>

                                        <label className="text-xs uppercase tracking-[0.15em] text-white">
                                            Phone
                                        </label>

                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+1 (000) 000-0000"
                                            className="w-full border-b border-black/20 bg-transparent py-4 outline-none focus:border-amber-500 transition placeholder:text-slate-400 text-white"
                                        />

                                    </div>

                                    <div>

                                        <label className="text-xs uppercase tracking-[0.15em] text-white">
                                            Project Type
                                        </label>

                                        <select
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleChange}
                                            className="w-full border-b border-black/20 bg-transparent py-4 outline-none focus:border-amber-500 transition text-slate-400"
                                        >

                                            <option value="" className="text-black">
                                                Select type
                                            </option>

                                            <option value="Residential" className="text-black">
                                                Residential
                                            </option>

                                            <option value="Commercial" className="text-black">
                                                Commercial
                                            </option>

                                            <option value="Interior" className="text-black">
                                                Interior Design
                                            </option>

                                            <option value="Urban Planning" className="text-black">
                                                Urban Planning
                                            </option>

                                            <option value="Other" className="text-black">
                                                Other
                                            </option>

                                        </select>

                                    </div>

                                </div>

                                {/* Budget */}
                                <div className="mt-7">

                                    <label className="text-xs uppercase tracking-[0.15em] text-white">
                                        Estimated Budget
                                    </label>

                                    <select
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="w-full border-b border-black/20 bg-transparent py-4 outline-none focus:border-amber-500 transition text-slate-400"
                                    >

                                        <option value="" className="text-black">
                                            Select budget range
                                        </option>

                                        <option value="Under $100K" className="text-black">
                                            Under $100K
                                        </option>

                                        <option value="$100K - $250K" className="text-black">
                                            $100K — $250K
                                        </option>

                                        <option value="$250K - $500K" className="text-black">
                                            $250K — $500K
                                        </option>

                                        <option value="$500K+" className="text-black">
                                            $500K+
                                        </option>

                                        <option value="Not Sure" className="text-black">
                                            Not Sure
                                        </option>

                                    </select>

                                </div>

                                {/* Message */}
                                <div className="mt-7">

                                    <label className="text-xs uppercase tracking-[0.15em] text-white">
                                        Tell Us About Your Project *
                                    </label>

                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="3"
                                        placeholder="Tell us about your project, location, goals and timeline..."
                                        className="w-full border-b border-black/20 bg-transparent py-4 outline-none focus:border-amber-500 transition resize-none placeholder:text-slate-400 text-white"
                                    />

                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-amber-500 px-7 py-4 font-semibold flex items-center gap-3 hover:bg-white text-black transition disabled:opacity-50"
                                >
                                    {loading ? "SENDING..." : "SEND INQUIRY"}

                                    {!loading && <ArrowRight size={18} />}
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================
          LOCATION
      ===================================================== */}
            <section className="bg-[#111111] text-white">

                <div className="grid lg:grid-cols-2">

                    {/* Image */}
                    <div className="min-h-112.5 lg:min-h-150">

                        <img
                            src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1400&q=90"
                            alt="Detroit city"
                            className="w-full h-full object-cover"
                        />

                    </div>

                    {/* Info */}
                    <div className="flex items-center">

                        <div className="px-8 py-16 lg:px-16 lg:py-20">

                            <p className="text-[#E8A72B] text-xs font-bold uppercase tracking-[0.3em]">
                                Visit Our Studio
                            </p>

                            <h2 className="text-4xl lg:text-6xl font-semibold mt-5">
                                Detroit,
                                <br />
                                Michigan.
                            </h2>

                            <p className="text-white/50 leading-7 max-w-md mt-7">
                                Our studio is based in Detroit and works with clients across
                                the region and beyond.
                            </p>

                            <div className="flex items-center gap-3 mt-8 text-sm">

                                <MapPin
                                    size={18}
                                    className="text-[#E8A72B]"
                                />

                                <span>
                                    Detroit, Michigan, USA
                                </span>

                            </div>

                            <a
                                href="#"
                                className="inline-flex items-center gap-3 mt-9 text-sm font-semibold border-b border-white/30 pb-2 hover:text-[#E8A72B] hover:border-[#E8A72B] transition"
                            >
                                GET DIRECTIONS
                                <ArrowUpRight size={17} />
                            </a>

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================
          FINAL CTA
      ===================================================== */}
            <section className="bg-[#E8A72B] py-20 lg:py-24">

                <div className="max-w-350 mx-auto px-6 lg:px-10">

                    <div className="text-center">

                        <p className="text-black/60 text-xs font-bold uppercase tracking-[0.3em]">
                            Have a question?
                        </p>

                        <h2 className="text-4xl lg:text-6xl font-semibold mt-4">
                            We're here to help.
                        </h2>

                        <p className="text-black/60 max-w-xl mx-auto mt-5 leading-7">
                            Start a conversation with our studio and let's explore what we
                            can create together.
                        </p>

                        <a
                            href="mailto:hello@centricdesignstudio.com"
                            className="inline-flex items-center gap-3 bg-[#111111] text-white px-7 py-4 mt-8 font-bold text-sm hover:bg-white hover:text-black transition"
                        >
                            EMAIL THE STUDIO
                            <ArrowRight size={17} />
                        </a>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Contact;