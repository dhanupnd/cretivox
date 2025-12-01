import TextFollow from './TextFollow.jsx'
import SplitText from './SplitText.jsx';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

export default function About () {
  return (
    <section id='about' className="flex flex-col justify-center items-center text-center h-screen gap-5 text-white px-4">
        <SplitText
          text="About me"
          style={{ fontFamily: "'Momo Signature', cursive" }}
          className="text-5xl md:text-7xl font-bold py-10"
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
        <TextFollow />
    </section>
  )
}