"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "EJS", "GSAP"],
  },
  {
    category: "Backend & Database",
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs"],
  },
  {
    category: "Security & Tools",
    items: ["JWT", "bcrypt", "Helmet", "express-rate-limit", "Multer", "Git", "Linux", "VS Code", "Python", "C", "C++"],
  },
];

const certifications = [
  { name: "Cybersecurity Essentials", issuer: "Cisco Networking Academy", date: "Sept 2025" },
  { name: "Cybersecurity Internship", issuer: "Cisco × NIIT Foundation", date: "Oct 2025" },
  { name: "Introduction to Python", issuer: "Cisco Networking Academy", date: "Nov 2025" },
];

export default function Skills() {
  return (
    <section className="relative z-20 bg-[#0a0a0a] min-h-screen py-32 px-4 md:px-12 overflow-hidden" id="skills">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Arsenal</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A focused stack built for shipping secure, scalable full-stack web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skills.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              <h3 className="text-2xl font-bold text-blue-300 mb-6 uppercase tracking-wider">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 bg-black/40 rounded-full text-sm text-gray-300 border border-white/10 hover:border-white/30 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">
            Certifications <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">&</span> Credentials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors flex flex-col gap-2"
              >
                <span className="text-xs font-mono text-blue-400 border border-blue-500/30 px-2 py-1 rounded-full bg-blue-500/10 w-fit">{cert.date}</span>
                <h4 className="text-white font-semibold">{cert.name}</h4>
                <p className="text-sm text-gray-400">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
