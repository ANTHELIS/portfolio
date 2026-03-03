"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "Secured 2nd place in the AI Innovation & Ethics Summit Hackathon at Brainware University — recognized for innovation, feasibility, and ethical AI design.",
    name: "AI Hackathon – February 2026",
    role: "Brainware University",
    initials: "🏆",
  },
  {
    quote: "Secured Runner-Up position in IDEATHON 2K26, a university-wide innovation competition spanning AI, sustainability, cybersecurity, and emerging technologies at Brainware University.",
    name: "IDEATHON 2K26 – February 2026",
    role: "Brainware University",
    initials: "🥈",
  },
  {
    quote: "Authored a technical chapter in 'Conceptual Pathways in C Programming' (ISBN: 978-93-6581-962-5), published by Natals Publication in February 2026.",
    name: "Published Author – 2026",
    role: "Natals Publication",
    initials: "📖",
  },
  {
    quote: "Achieved a 95% average score across all hands-on cybersecurity labs during the Cisco Networking Academy × NIIT Foundation virtual internship.",
    name: "Cybersecurity Internship",
    role: "Cisco × NIIT Foundation",
    initials: "🔐",
  },
  {
    quote: "Ranked in the top 2% of the batch with a 9.67 SGPA in the first year of the Diploma in Computer Science & Engineering at Brainware University.",
    name: "Academic Excellence",
    role: "Brainware University, 2024",
    initials: "🎓",
  },
];

export default function Testimonials() {
  return (
    <section className="relative z-20 bg-[#0a0a0a] py-32 overflow-hidden" id="testimonials">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 mb-16 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Kind <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Recognition</span>
        </motion.h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
          Milestones, awards, and academic achievements that mark the journey so far.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute top-0 left-0 w-32 h-full z-20 bg-linear-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full z-20 bg-linear-to-l from-[#0a0a0a] to-transparent pointer-events-none" />

        <div className="flex w-max">
          <motion.div
            className="flex gap-8 px-4"
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((item, index) => (
              <div
                key={index}
                className="w-[350px] md:w-[450px] p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shrink-0"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.name}</h4>
                    <p className="text-sm text-gray-400">{item.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
