import SplitText from './SplitText.jsx';
import { SiInstagram, SiTiktok, SiGithub, SiLinkedin } from 'react-icons/si';

export default function Contact () {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <section id='contact' className="flex flex-col justify-center items-center text-center h-screen text-white px-4">
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
        <p className="text-lg md:text-2xl mb-8 max-w-2xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Hit me up on another platform
        </p>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/dhanupnd" 
          target='_blank' className='flex gap-4 justify-center items-center'
          style={{ fontFamily:"'Poppins', sans-serif" }}
          >
            <SiInstagram className='w-10 h-10' />
            <span>@dhanupnd</span>
          </a>

          <div className='w-1 h-10 rounded-lg bg-white'></div>

          <a href="https://www.tiktok.com/@dhanupnd" target='_blank' 
          className='flex gap-4 justify-center items-center'
          style={{ fontFamily:"'Poppins', sans-serif" }}
          >
            <SiTiktok className='w-10 h-10' />
            <span>@dhanupnd</span>
          </a>

          <div className='w-1 h-10 rounded-lg bg-white'></div>

          <a href="https://www.github.com/dhanupnd" target='_blank' 
          className='flex gap-4 justify-center items-center'
          style={{ fontFamily:"'Poppins', sans-serif" }}
          >
            <SiGithub className='w-10 h-10' />
            <span>dhanupnd</span>
          </a>

          <div className='w-1 h-10 rounded-lg bg-white'></div>

          <a href="https://www.linkedin.com/in/dhanu-pandhowo/" target='_blank' 
          className='flex gap-4 justify-center items-center'
          style={{ fontFamily:"'Poppins', sans-serif" }}
          >
            <SiLinkedin className='w-10 h-10' />
            <span>dhanupnd</span>
          </a>
        </div>
    </section>
  )
}