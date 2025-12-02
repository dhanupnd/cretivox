import SplitText from './SplitText.jsx';
import { SiInstagram, SiTiktok, SiGithub, SiLinkedin } from 'react-icons/si';
import FadeIn from './FadeIn.jsx';

export default function Contact () {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <section id='contact' className="relative flex flex-col justify-center items-center text-center h-screen text-white px-4">
        <SplitText
          text="Contact"
          style={{ fontFamily: "'Momo Signature', cursive" }}
          className="text-5xl md:text-7xl font-bold mb-6"
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

        <div className='flex flex-col gap-4'>
          <div className=''>
            <FadeIn delay={0.1}>
              <span className="text-lg md:text-2xl mb-8 max-w-2xl" style={{ fontFamily: "'Poppins', sans-serif" }}>Hit me up on another platform</span>
            </FadeIn>
          </div>

          <div className='grid grid-cols-1 grid-rows-2 gap-4'>
            <FadeIn delay={0.3}>
              <a href="https://www.instagram.com/dhanupnd" 
              target='_blank'
              style={{ fontFamily:"'Poppins', sans-serif" }}
              >
                <div className='w-full h-full px-5 py-3 bg-transparent 
                hover:scale-[1.1] hover:bg-white hover:text-black transition-all rounded-lg flex gap-4 
                justify-start items-center border-2 border-white'
                >
                  <SiInstagram className='w-10 h-10' />
                  <span>instagram/dhanupnd</span>
                </div>
              </a>
            </FadeIn>

            <FadeIn delay={0.3}>
              <a href="https://www.tiktok.com/@dhanupnd" target='_blank' 
              className='flex gap-4 justify-center items-center'
              style={{ fontFamily:"'Poppins', sans-serif" }}
              >
                <div className='w-full h-full px-5 py-3 bg-transparent 
                hover:scale-[1.1] hover:bg-white hover:text-black transition-all rounded-lg flex gap-4 
                justify-start items-center border border-white'>
                  <SiTiktok className='w-10 h-10' />
                  <span>TikTok/@dhanupnd</span>
                </div>
              </a>
            </FadeIn>

            <FadeIn delay={0.3}>
              <a href="https://www.github.com/dhanupnd" target='_blank' 
              className='flex gap-4 justify-center items-center'
              style={{ fontFamily:"'Poppins', sans-serif" }}
              >
                <div className='w-full h-full px-5 py-3 bg-transparent 
                hover:scale-[1.1] hover:bg-white hover:text-black transition-all rounded-lg flex gap-4 
                justify-start items-center border-2 border-white'>
                  <SiGithub className='w-10 h-10' />
                  <span>GitHub/dhanupnd</span>
                </div>
              </a>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <a href="https://www.linkedin.com/in/dhanu-pandhowo/" target='_blank' 
              className='flex gap-4 justify-center items-center'
              style={{ fontFamily:"'Poppins', sans-serif" }}
              >
                <div className='w-full h-full px-5 py-3 bg-transparent 
                hover:scale-[1.1] hover:bg-white hover:text-black transition-all rounded-lg flex gap-4 
                justify-start items-center border-2 border-white'>
                  <SiLinkedin className='w-10 h-10' />
                  <span>LinkedIn/Dhanu Pandhowo</span>
                </div>
              </a>
            </FadeIn>
            
          </div>
        </div>

        {/* <p className="text-lg md:text-2xl mb-8 max-w-2xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Hit me up on another platform
        </p>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/dhanupnd" 
          target='_blank'
          style={{ fontFamily:"'Poppins', sans-serif" }}
          >
            <div className='px-5 py-3 bg-gray-700 hover:scale-[1.1] transition-all rounded-lg flex gap-4 justify-center items-center'>
              <SiInstagram className='w-10 h-10' />
              <span>@dhanupnd</span>
            </div>
          </a>

          <a href="https://www.tiktok.com/@dhanupnd" target='_blank' 
          className='flex gap-4 justify-center items-center'
          style={{ fontFamily:"'Poppins', sans-serif" }}
          >
            <div className='px-5 py-3 bg-gray-700 hover:scale-[1.1] transition-all rounded-lg flex gap-4 justify-center items-center'>
              <SiTiktok className='w-10 h-10' />
              <span>@dhanupnd</span>
            </div>
          </a>

          <a href="https://www.github.com/dhanupnd" target='_blank' 
          className='flex gap-4 justify-center items-center'
          style={{ fontFamily:"'Poppins', sans-serif" }}
          >
            <div className='px-5 py-3 bg-gray-700 hover:scale-[1.1] transition-all rounded-lg flex gap-4 justify-center items-center'>
              <SiGithub className='w-10 h-10' />
              <span>dhanupnd</span>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/dhanu-pandhowo/" target='_blank' 
          className='flex gap-4 justify-center items-center'
          style={{ fontFamily:"'Poppins', sans-serif" }}
          >
            <div className='px-5 py-3 bg-gray-700 hover:scale-[1.1] transition-all rounded-lg flex gap-4 justify-center items-center'>
              <SiLinkedin className='w-10 h-10' />
              <span>Dhanu Pandhowo</span>
            </div>
          </a>
        </div> */}
    </section>
  )
}