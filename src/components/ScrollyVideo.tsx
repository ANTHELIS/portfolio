"use client";

import { useScroll, useMotionValueEvent, MotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";

interface ScrollyVideoProps {
  src: string;
  children?: (progress: MotionValue<number>) => ReactNode;
}

export default function ScrollyVideo({ src, children }: ScrollyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Gentle spring just for the overlay text – NOT applied to video time
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  // Directly scrub video time on raw scroll – no spring delay
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const video = videoRef.current;
    if (!video || !video.duration || !isFinite(video.duration)) return;
    // Clamp away from the very end to prevent the video ending
    const t = Math.max(0, Math.min(latest, 0.999)) * video.duration;
    // Only update if the difference is more than one frame at 30fps
    if (Math.abs(video.currentTime - t) > 0.032) {
      video.currentTime = t;
    }
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    const onReady = () => { video.pause(); video.currentTime = 0; };
    video.addEventListener("loadedmetadata", onReady);
    return () => video.removeEventListener("loadedmetadata", onReady);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          className="h-full w-full object-cover"
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
        />
        {children && children(springScroll)}
      </div>
    </div>
  );
}
