import React, { useState, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";
import { LuPlay } from "react-icons/lu";

const DemoVideo = () => {
  const [isDemoPlaying, setIsDemoPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlayDemo = () => {
    if (videoRef.current) {
      if (isDemoPlaying) {
        videoRef.current.pause();
        setIsDemoPlaying(false);
      } else {
        videoRef.current.play();
        setIsDemoPlaying(true);
      }
    }
  };

  return (
    <div
      className="group border mt-6 border-white/10 shadow-xl bg-neutral-900 aspect-video bg-gradient-primary rounded-xl flex items-center justify-center relative overflow-hidden cursor-pointer"
      onClick={handlePlayDemo}
    >
      {/* Show preview image if not playing */}
      {!isDemoPlaying && (
        <Image
          src="https://ik.imagekit.io/vah26qifw/Devolution%20PH/devosuite/assets/devosuite%20demo%20thumbnail_j4bEGwOZW.png?updatedAt=1758781158914"
          alt="Video Preview"
          className="absolute inset-0 w-full h-full object-cover z-0"
          height={500}
          width={500}
        />
      )}

      {/* Video */}
      <video
        ref={videoRef}
        src="https://ik.imagekit.io/vah26qifw/Devolution%20PH/devosuite/assets/video%20demo_aZ-jxSvel.mp4?updatedAt=1758781722067"
        className={clsx(
          "absolute inset-0 w-full h-full object-fit z-0",
          !isDemoPlaying && "hidden" // hide until play
        )}
        controls={isDemoPlaying}
      />

      {/* Overlay (only when not playing) */}
      {!isDemoPlaying && (
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-200 z-10" />
      )}

      {/* Play button (only when not playing) */}
      {!isDemoPlaying && (
        <button className="flex items-center relative z-20 border bg-red-500 border-white/50 text-white rounded-lg px-4 py-2 backdrop-blur-sm transition-all duration-200 group-hover:scale-105 hover:bg-red-600 cursor-pointer">
          <LuPlay className="w-8 h-8 mr-3" />
          Play Demo
        </button>
      )}
    </div>
  );
};

export default DemoVideo;
