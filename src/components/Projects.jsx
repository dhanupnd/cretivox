import SplitText from './SplitText.jsx';

export default function Projects () {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  
  return (
    <section id='projects' className="flex flex-col justify-center items-center text-center h-screen text-white px-4">
        <SplitText
          text="Recent Projects"
          style={{ fontFamily: "'Momo Signature', cursive" }}
          className="text-5xl md:text-7xl font-bold pb-10"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <div className="grid grid-cols-4 grid-rows-1 gap-4">
          <div className="col-start-2 w-full h-auto border rounded-lg border-white">
            <img src="/summitz-homepage.png" alt="Project 1" className="w-full h-full object-cover rounded-lg mb-5"/>
            <a href="https://summitz-app.vercel.app" target="_blank" 
              className="px-5 py-2 bg-transparent rounded-full border-2 border-white text-white hover:bg-white 
              hover:text-black hover:shadow-lg transition-all" 
              style={{ fontFamily:"'Poppins', sans-serif" }}
            >
              View site
            </a>
          </div>

          <div className="col-start-3 w-full h-auto border rounded-lg border-white">
            <img src="/ticktime-homepage.png" alt="Project 1" className="w-full h-full object-cover rounded-lg mb-5"/>
            <a href="https://tick-time-eight.vercel.app" target="_blank" 
              className="px-5 py-2 bg-transparent rounded-full border-2 border-white text-white hover:bg-white 
              hover:text-black hover:shadow-lg transition-all" 
              style={{ fontFamily:"'Poppins', sans-serif" }}
            >
              View site
            </a>
          </div>
        </div>
        
    </section>
  )
}