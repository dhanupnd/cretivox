import LogoLoop from './LogoLoop';
import { SiReact, SiJavascript, SiHtml5, SiTailwindcss, SiFigma } from 'react-icons/si';
import SplitText from './SplitText.jsx';

const techLogos = [
  { node: <SiReact />, title: "React"},
  { node: <SiJavascript />, title: "Javascript"},
  { node: <SiHtml5 />, title: "Html"},
  { node: <SiFigma />, title: "Figma"},
  { node: <SiTailwindcss />, title: "Tailwind CSS"},
];

export default function Skills () {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return(
        <section id='skills' className="flex flex-col justify-center items-center text-center h-screen text-white px-4">
            <SplitText
                text="What can i do?"
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
            <p className="text-lg md:text-2xl mb-8 max-w-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
                I do web development using modern technologies to create responsive and user-friendly websites and applications.
            </p>
            <h1 className='text-xl md:text-3xl my-10' style={{ fontFamily:"'Momo Signature', cursive" }}>Tech stack that i usually use :</h1>
            <LogoLoop
                logos={techLogos}
                speed={120}
                direction="left"
                logoHeight={48}
                gap={40}
                hoverSpeed={0}
                scaleOnHover
                ariaLabel="Technology partners"
            />
        </section>
    )
}