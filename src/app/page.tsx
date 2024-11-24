
import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { LuInstagram } from "react-icons/lu";
import { IoIosCall } from "react-icons/io";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center">
      
      <div className="w-full max-w-screen-lg px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between pt-16">
          
          <div className="text-center md:text-left">
            <p>Welcome</p>
            <h1 className="text-2xl font-bold">I am</h1>
            <span className="text-teal-400 text-3xl font-bold">Rehana Ali</span>
            <h2 className="text-lg font-bold pt-3">
              I am a <span className="text-teal-400">Frontend Web Developer...</span>
            </h2>
            <p className="pt-4 text-sm md:text-base">
              Discover my expertise in web development through showcased<br/> projects, highlighting
              proficiency in frontend development.
            </p>

            
            <div className="flex gap-4 pt-5 justify-center md:justify-start">
              <h3 className="border-2 border-teal-400 rounded-full p-2">
                <BsFacebook />
              </h3>
              <h3 className="border-2 border-teal-400 rounded-full p-2">
                <LuInstagram />
              </h3>
              <h3 className="border-2 border-teal-400 rounded-full p-2">
                <GrLinkedin />
              </h3>
              <h3 className="border-2 border-teal-400 rounded-full p-2">
                <IoIosCall />
              </h3>
            </div>

            
            <div className="flex flex-wrap gap-4 pt-8 justify-center md:justify-start">
              <button className="px-6 py-2 bg-teal-400 text-black rounded-2xl">
                Download CV
              </button>
              <button className="px-6 py-2 bg-teal-400 text-black rounded-2xl">
                Hire Me
              </button>
            </div>
          </div>

          
          <div className="mt-12 md:mt-0">
            <Image
              src={"/rport image.jpg"}
              width={400}
              height={600}
              alt="portfolio"
              className="rounded-lg mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
