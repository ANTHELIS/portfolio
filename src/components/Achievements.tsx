"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

// ─── HOW TO ADD YOUR PHOTOS ──────────────────────────────────────────────────
// 1. Create folder: public/achievements/
// 2. Drop your photos in, e.g.:
//      public/achievements/hackathon1.jpg
//      public/achievements/hackathon2.jpg
// 3. Update the `gallery` array for the matching achievement below.
// ─────────────────────────────────────────────────────────────────────────────

const ACHIEVEMENTS = [
    {
        id: "hackathon",
        type: "award",
        emoji: "🏆",
        title: "2nd Place – AI Innovation & Ethics Summit",
        subtitle: "Brainware University Hackathon",
        date: "February 2026",
        description:
            "Secured 2nd position in a university-level AI Concept-Pitch Hackathon out of 30+ teams. Presented an AI-driven solution evaluated on innovation, feasibility, and ethical implementation by a panel of academic judges.",
        proof: "#",
        proofLabel: "View Certificate",
        photo: "/achievements/AI Innovation & Ethics Summit/Grp.jpeg",
        // ↓ Your real event photos
        gallery: [
            "/achievements/AI Innovation & Ethics Summit/Grp.jpeg",
            "/achievements/AI Innovation & Ethics Summit/out_grp.jpeg",
            "/achievements/AI Innovation & Ethics Summit/single_U.jpeg",
            "/achievements/AI Innovation & Ethics Summit/R_sir.jpeg",
            "/achievements/AI Innovation & Ethics Summit/R_sir_single.jpeg",
            "/achievements/AI Innovation & Ethics Summit/cert.jpeg",
        ],
        accentColor: "from-yellow-500/30 to-orange-500/30",
        borderColor: "border-yellow-500/20",
        badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
        size: "large",
    },
    {
        id: "ideathon",
        type: "award",
        emoji: "🥈",
        title: "Runner-Up – IDEATHON 2K26",
        subtitle: "Brainware University",
        date: "February 2026",
        description:
            "Secured Runner-Up position in a university-wide innovation competition focused on forward-thinking and societal-impact solutions. Competed across multidisciplinary domains including AI, sustainability, cybersecurity, and emerging technologies.",
        proof: "#",
        proofLabel: "View Certificate",
        photo: "/achievements/IDEATHON 2K26/all.jpeg",
        // ↓ Your real event photos
        gallery: [
            "/achievements/IDEATHON 2K26/all.jpeg",
            "/achievements/IDEATHON 2K26/duo.jpeg",
            "/achievements/IDEATHON 2K26/speech.jpeg",
            "/achievements/IDEATHON 2K26/slide.jpeg",
            "/achievements/IDEATHON 2K26/medal.jpeg",
            "/achievements/IDEATHON 2K26/hand.jpeg",
        ],
        accentColor: "from-cyan-500/30 to-blue-500/30",
        borderColor: "border-cyan-500/20",
        badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
        size: "small",
    },
    {
        id: "book",
        type: "publication",
        emoji: "📖",
        title: "Published Chapter Author",
        subtitle: "Conceptual Pathways in C Programming",
        date: "February 2026",
        description:
            "Authored and published a technical chapter in an ISBN-registered academic book (ISBN: 978-93-6581-962-5) under Natals Publication. Recognized as a contributing author covering foundational and advanced C programming concepts.",
        proof: "https://www.amazon.in/Conceptual-Pathways-Programming-Ranjan-Banerjee/dp/9365819628",
        proofLabel: "Buy on Amazon",
        cert: "https://drive.google.com/file/d/17mpVhl9eljDy90vQ4qtGHxDyu80kTGVm/view?usp=sharing",
        photo: "/achievements/Conceptual Pathways in C Programming/front.jpeg",
        // ↓ Your real event photos
        gallery: [
            "/achievements/Conceptual Pathways in C Programming/front.jpeg",
            "/achievements/Conceptual Pathways in C Programming/chapter.jpeg",
            "/achievements/Conceptual Pathways in C Programming/index.jpeg",
            "/achievements/Conceptual Pathways in C Programming/group.jpeg",
            "/achievements/Conceptual Pathways in C Programming/selfie.jpeg",
        ],
        accentColor: "from-purple-500/30 to-pink-500/30",
        borderColor: "border-purple-500/20",
        badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
        size: "small",
    },
    {
        id: "cisco",
        type: "certification",
        emoji: "🔐",
        title: "Cybersecurity Internship – 95% Score",
        subtitle: "Cisco Networking Academy × NIIT Foundation",
        date: "Sept – Oct 2025",
        description:
            "Achieved a 95% average score across all hands-on cybersecurity labs during a virtual internship. Earned Cybersecurity Essentials and Internship Completion certifications.",
        proof: "https://drive.google.com/file/d/1DcEDCMDKQpvFAklvTh7CtXFjcc36VDuk/view?usp=sharing",
        proofLabel: "View Certificate",
        photo: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        gallery: null, // No gallery for this one
        accentColor: "from-emerald-500/30 to-teal-500/30",
        borderColor: "border-emerald-500/20",
        badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
        size: "large",
    },
];

// ─── Types ────────────────────────────────────────────────────────────────────
type Achievement = (typeof ACHIEVEMENTS)[0];

export default function Achievements() {
    const [lightbox, setLightbox] = useState<Achievement | null>(null);
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [galleryIndex, setGalleryIndex] = useState(0);

    const closeAll = useCallback(() => {
        setGalleryOpen(false);
        setLightbox(null);
    }, []);

    const prevPhoto = useCallback(() => {
        if (!lightbox?.gallery) return;
        setGalleryIndex((i) => (i - 1 + lightbox.gallery!.length) % lightbox.gallery!.length);
    }, [lightbox]);

    const nextPhoto = useCallback(() => {
        if (!lightbox?.gallery) return;
        setGalleryIndex((i) => (i + 1) % lightbox.gallery!.length);
    }, [lightbox]);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                if (galleryOpen) setGalleryOpen(false);
                else setLightbox(null);
            }
            if (galleryOpen) {
                if (e.key === "ArrowLeft") prevPhoto();
                if (e.key === "ArrowRight") nextPhoto();
            }
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [galleryOpen, prevPhoto, nextPhoto]);

    // Lock scroll when modals open
    useEffect(() => {
        document.body.style.overflow = lightbox ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [lightbox]);

    const openGallery = (index = 0) => {
        setGalleryIndex(index);
        setGalleryOpen(true);
    };

    return (
        <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 overflow-hidden" id="achievements">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[20%] w-[700px] h-[700px] bg-yellow-500/5 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Achievements &amp;{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-400">
                            Milestones
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                        Recognition earned beyond the code — awards, publications, and milestones
                        that define the journey so far.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(320px,auto)]">
                    {ACHIEVEMENTS.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`group relative rounded-3xl overflow-hidden border ${item.borderColor} bg-white/3 backdrop-blur-md cursor-pointer ${item.size === "large" ? "lg:col-span-2" : ""
                                }`}
                            whileHover={{ scale: 1.015 }}
                            onClick={() => setLightbox(item)}
                        >
                            <img
                                src={item.photo}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className={`absolute inset-0 bg-linear-to-br ${item.accentColor} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Gallery badge on card */}
                            {item.gallery && (
                                <div className="absolute top-5 left-5 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg className="w-3 h-3 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                                    </svg>
                                    <span className="text-[10px] text-white/70 font-mono">{item.gallery.length} photos</span>
                                </div>
                            )}

                            {/* Zoom hint */}
                            <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                </svg>
                            </div>

                            <div className="absolute inset-0 p-7 flex flex-col justify-between z-10">
                                <div>
                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${item.badgeColor}`}>
                                        <span>{item.emoji}</span>
                                        <span className="uppercase tracking-wider">{item.type}</span>
                                    </span>
                                </div>
                                <div>
                                    <p className="text-xs text-white/50 font-mono mb-2">{item.date}</p>
                                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-1 drop-shadow-lg">{item.title}</h3>
                                    <p className="text-sm text-white/60 font-medium">{item.subtitle}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-gray-600 text-sm mt-10 font-mono"
                >
                    Click any card to view details &amp; photos
                </motion.p>
            </div>

            {/* ── LIGHTBOX ──────────────────────────────────────────────────────────── */}
            <AnimatePresence>
                {lightbox && !galleryOpen && (
                    <>
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setLightbox(null)}
                            className="fixed inset-0 bg-black/85 backdrop-blur-xl z-[100]"
                        />
                        <motion.div
                            key="modal"
                            initial={{ opacity: 0, scale: 0.92, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.92, y: 30 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-10 pointer-events-none"
                        >
                            <div
                                className="pointer-events-auto w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111] border border-white/10 shadow-2xl flex flex-col md:flex-row"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Photo side */}
                                <div className="relative w-full md:w-1/2 min-h-[280px] md:min-h-[500px] overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none flex-shrink-0">
                                    <img
                                        src={lightbox.photo}
                                        alt={lightbox.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className={`absolute inset-0 bg-linear-to-br ${lightbox.accentColor} mix-blend-overlay`} />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                                    {/* Gallery thumbnail strip on photo — if has gallery */}
                                    {lightbox.gallery && (
                                        <button
                                            onClick={() => openGallery(0)}
                                            className="absolute bottom-5 left-5 right-5 flex items-center gap-2 group/galbtn"
                                        >
                                            <div className="flex -space-x-2">
                                                {lightbox.gallery.slice(0, 3).map((src, i) => (
                                                    <img
                                                        key={i}
                                                        src={src}
                                                        alt=""
                                                        className="w-9 h-9 rounded-full object-cover border-2 border-black/60 group-hover/galbtn:scale-105 transition-transform"
                                                        style={{ transitionDelay: `${i * 40}ms` }}
                                                    />
                                                ))}
                                                {lightbox.gallery.length > 3 && (
                                                    <div className="w-9 h-9 rounded-full bg-black/60 border-2 border-black/60 flex items-center justify-center text-[10px] text-white font-bold backdrop-blur-sm">
                                                        +{lightbox.gallery.length - 3}
                                                    </div>
                                                )}
                                            </div>
                                            <span className="text-xs text-white/80 font-semibold bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10 group-hover/galbtn:bg-white/20 transition-colors">
                                                View Gallery →
                                            </span>
                                        </button>
                                    )}

                                    {/* Badge */}
                                    <div className="absolute top-5 left-5">
                                        <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold border backdrop-blur-md ${lightbox.badgeColor}`}>
                                            <span>{lightbox.emoji}</span>
                                            {lightbox.type.charAt(0).toUpperCase() + lightbox.type.slice(1)}
                                        </span>
                                    </div>
                                </div>

                                {/* Content side */}
                                <div className="flex-1 p-8 md:p-10 flex flex-col">
                                    <button
                                        onClick={() => setLightbox(null)}
                                        className="self-end mb-6 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 hover:text-white transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>

                                    <p className="text-xs text-white/40 font-mono mb-3">{lightbox.date}</p>
                                    <h3 className="text-3xl font-bold text-white leading-tight mb-2">{lightbox.title}</h3>
                                    <p className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-6">{lightbox.subtitle}</p>
                                    <p className="text-gray-300 leading-relaxed text-base flex-1">{lightbox.description}</p>

                                    {/* Buttons */}
                                    <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-3">
                                        <a
                                            href={lightbox.proof}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105 bg-linear-to-r ${lightbox.accentColor.replace("/30", "/80")} text-white border ${lightbox.borderColor}`}
                                        >
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            {lightbox.proofLabel}
                                        </a>

                                        {(lightbox as any).cert && (
                                            <a
                                                href={(lightbox as any).cert}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-105"
                                            >
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                View Certificate
                                            </a>
                                        )}

                                        {lightbox.gallery && (
                                            <button
                                                onClick={() => openGallery(0)}
                                                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-105"
                                            >
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                                                </svg>
                                                Gallery ({lightbox.gallery.length} photos)
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* ── GALLERY MODAL ─────────────────────────────────────────────────────── */}
            <AnimatePresence>
                {lightbox && galleryOpen && lightbox.gallery && (
                    <>
                        {/* Gallery backdrop */}
                        <motion.div
                            key="gallery-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setGalleryOpen(false)}
                            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[110]"
                        />

                        <motion.div
                            key="gallery-modal"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed inset-0 z-[111] flex flex-col items-center justify-center p-4 pointer-events-none"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="pointer-events-auto w-full max-w-5xl flex items-center justify-between mb-4 px-2">
                                <div>
                                    <p className="text-white font-bold text-lg">{lightbox.title}</p>
                                    <p className="text-white/40 text-sm font-mono">{galleryIndex + 1} / {lightbox.gallery.length}</p>
                                </div>
                                <button
                                    onClick={() => setGalleryOpen(false)}
                                    className="p-2.5 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Main image */}
                            <div className="pointer-events-auto relative w-full max-w-5xl flex-1 min-h-0 max-h-[65vh] flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={galleryIndex}
                                        src={lightbox.gallery[galleryIndex]}
                                        alt={`${lightbox.title} – photo ${galleryIndex + 1}`}
                                        initial={{ opacity: 0, x: 40 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -40 }}
                                        transition={{ duration: 0.25 }}
                                        className="w-full h-full object-contain rounded-2xl select-none"
                                        draggable={false}
                                    />
                                </AnimatePresence>

                                {/* Prev / Next arrows */}
                                {lightbox.gallery.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevPhoto}
                                            className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-sm"
                                        >
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={nextPhoto}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-sm"
                                        >
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Thumbnail strip */}
                            <div className="pointer-events-auto flex gap-3 mt-5 overflow-x-auto pb-1 max-w-5xl w-full px-2 scrollbar-hide">
                                {lightbox.gallery.map((src, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setGalleryIndex(i)}
                                        className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 ${i === galleryIndex
                                            ? "border-white scale-105 shadow-lg shadow-white/10"
                                            : "border-white/20 opacity-50 hover:opacity-80"
                                            }`}
                                    >
                                        <img src={src} alt="" className="w-full h-full object-cover" draggable={false} />
                                    </button>
                                ))}
                            </div>

                            {/* Keyboard hint */}
                            <p className="pointer-events-none text-white/20 text-xs font-mono mt-4">
                                ← → to navigate &nbsp;·&nbsp; Esc to close
                            </p>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
