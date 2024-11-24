import Image from "next/image";
import Link from "next/link";


// function Project(){
//     return(
//         <main className="bg-black ">
//             <div className="font-bold text-5xl pt-10 pl-96"><h1 className="text-teal-400">My Work</h1></div>
            
//                <div className="flex gap-24 pl-32">
//                 <div className="border-1 border-teal-400 pt-20">
//                 <Image  src={"/resume.png"} width={800} height={700} alt="portfolio"></Image>
//                      <div className="border-2 border-teal-400 bg-white text-black">
//                         <h1 className="">Static Intractiv Resume</h1>
//                 <a href="https://hackathone-milestone12.vercel.app/"><button className=" hover:text-teal-400">Click here</button></a>
                        
//                      </div>
//                 </div>


//                   {/* second image */}

//                   <div>
//                 <Image  src={"/realstate.jfif"} width={300} height={500} alt="portfolio"></Image>
//                      <div>
//                         <h1 className="text-white">Realstate website</h1>
//                         <p className="text-white"></p>
//                      </div>
//                 </div>


//                 {/* Third image */}

//                 <div>
//                 <Image  src={"/carpurple.jfif"} width={300} height={500} alt="portfolio"></Image>
//                      <div>
//                         <h1 className="text-white">Car Rental website</h1>
//                         <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, voluptatibus.</p>
//                      </div>
//                 </div>

//              </div>
        
            
//         </main>
//     )
// }

// export default Project




function Skill() {
    return (
      <main className="bg-black min-h-screen">
        {/* Header Section */}
        <div className="pt-10 pb-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-teal-400">My Skills</h2>
        </div>
  
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16 lg:px-32">
          

          {/* First project */}

          <div className="text-white bg-stone-900 rounded-lg p-6  transition duration-300">
            <h2 className="font-bold text-xl">static Resume</h2>
            <div className="mt-12 md:mt-0">
            <Image
              src={"/rehana resume2.png"}
              width={400}
              height={600}
              alt="portfolio"
              className="rounded-lg mx-auto md:mx-0"
            />
          </div>
            <p className="mt-2 text-sm md:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <a href="https://hackathone-milestone12.vercel.app/"><button className=" hover:text-teal-400">Click here</button></a>
            </div>
  
          

          {/* second project */}

          <div className="text-white bg-stone-900 rounded-lg p-6 transition duration-300">
            <h2 className="font-bold text-xl">figma website</h2>
            <div className="mt-12 md:mt-0">
            <Image
              src={"/figma temp.png"}
              width={400}
              height={600}
              alt="portfolio"
              className="rounded-lg mx-auto md:mx-0"
            />
          </div>
            <p className="mt-2 text-sm md:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          <a href="https://www.linkedin.com/posts/rehana-ali-3a26272bb_typscript-javascript-python-activity-7263473606418915330-qeqd?utm_source=share&utm_medium=member_desktop/"><button className=" hover:text-teal-400">Click here</button></a>
           </div>
  
          
          {/* Third project */}

          <div className="text-white bg-stone-900 rounded-lg p-6 transition duration-300">
            <h2 className="font-bold text-xl pt-5">CSS-Portfolio</h2>
            <div className="mt-12 md:mt-0">
            <Image
              src={"/perfect port.png"}
              width={400}
              height={600}
              alt="portfolio"
              className="rounded-lg mx-auto md:mx-0"
            />
          </div>
            <p className="mt-2 text-sm md:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit!
            </p>
                 <a href="https://css-portfolio-gules.vercel.app/"><button className=" hover:text-teal-400">Click here</button></a>

          </div>
  
         
        </div>
      </main>
    );
  }
  
  export default Skill;
  