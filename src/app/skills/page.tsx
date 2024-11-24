
function Skill() {
  return (
    <main className="bg-black min-h-screen">
      
      <div className="pt-10 pb-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-teal-400">My Skills</h2>
      </div>

      {/* Skills Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16 lg:px-32">
        
        <div className="text-white bg-stone-900 rounded-lg p-6 hover:bg-teal-400 transition duration-300">
          <h2 className="font-bold text-xl">HTML</h2>
          <p className="mt-2 text-sm md:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit!
          </p>
        </div>

        
        <div className="text-white bg-stone-900 rounded-lg p-6 hover:bg-teal-400 transition duration-300">
          <h2 className="font-bold text-xl">CSS</h2>
          <p className="mt-2 text-sm md:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit!
          </p>
        </div>

        
        <div className="text-white bg-stone-900 rounded-lg p-6 hover:bg-teal-400 transition duration-300">
          <h2 className="font-bold text-xl">TypeScript</h2>
          <p className="mt-2 text-sm md:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit!
          </p>
        </div>

        
        <div className="text-white bg-stone-900 rounded-lg p-6 hover:bg-teal-400 transition duration-300">
          <h2 className="font-bold text-xl">Tailwind</h2>
          <p className="mt-2 text-sm md:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit!
          </p>
        </div>

      
        <div className="text-white bg-stone-900 rounded-lg p-6 hover:bg-teal-400 transition duration-300">
          <h2 className="font-bold text-xl">Next.js</h2>
          <p className="mt-2 text-sm md:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit!
          </p>
        </div>

        
        <div className="text-white bg-stone-900 rounded-lg p-6 hover:bg-teal-400 transition duration-300">
          <h2 className="font-bold text-xl">JavaScript</h2>
          <p className="mt-2 text-sm md:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit!
          </p>
        </div>
      </div>
    </main>
  );
}

export default Skill;
