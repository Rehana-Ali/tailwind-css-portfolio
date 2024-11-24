
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-black text-white flex flex-col md:flex-row items-center md:items-start min-h-screen px-4 md:px-16">
    
      <div className="w-full md:w-1/2 flex justify-center md:justify-start pt-10 md:pt-20">
        <Image
          src={"/rport image2.jpg"}
          width={400}
          height={600}
          alt="portfolio"
          className="rounded-lg"
        />
      </div>

    
      <div className="w-full md:w-1/2 pt-10 md:pt-32 text-center md:text-left">
        <span className="text-teal-400 text-4xl font-bold block">About Me</span>
        <h2 className="pt-3 text-2xl font-semibold">Meet the Developer</h2>
        <p className="pt-3 text-sm md:text-base leading-relaxed">
          I am a passionate frontend developer dedicated to crafting exceptional
          digital experiences. With a keen eye for design and a knack for
          problem-solving, I bring innovative ideas to life through clean,
          efficient, and user-friendly interfaces.
        </p>

        <div className="pt-8">
          <button className="px-6 py-2 bg-teal-400 text-black font-medium rounded-2xl hover:bg-teal-500 transition-all duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
About