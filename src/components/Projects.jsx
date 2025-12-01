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
        <div className="flex gap-2">
          <div className="w-3/4 h-auto border-2 rounded-lg border-white">
            <img src="/public/summitz-homepage.png" alt="Project 1" className="w-full h-full object-cover rounded-lg mb-5"/>
            <a href="https://summitz-app.vercel.app" target="_blank" 
              className="px-5 py-2 bg-white rounded-full text-black hover:bg-gray-700 hover:text-white hover:shadow-lg transition-all" 
              style={{ fontFamily:"'Poppins', sans-serif" }}
            >
              View site
            </a>
          </div>
          <div className="w-3/4 h-auto border-2 rounded-lg border-white">
            <img src="/public/ticktime-homepage.png" alt="Project 1" className="w-full h-full object-cover rounded-lg mb-5"/>
            <a href="https://tick-time-eight.vercel.app" target="_blank" 
              className="px-5 py-2 bg-white rounded-full text-black hover:bg-gray-700 hover:text-white hover:shadow-lg transition-all" 
              style={{ fontFamily:"'Poppins', sans-serif" }}
            >
              View site
            </a>
          </div>
        </div>
        
    </section>
  )
}