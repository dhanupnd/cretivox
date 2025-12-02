import LogoLoop from './LogoLoop';
import { SiReact, SiGit, SiCss3, SiVercel, SiClaude, SiGithub, SiJavascript, SiHtml5, SiTailwindcss, SiFigma } from 'react-icons/si';
import SplitText from './SplitText.jsx';
import FadeIn from './FadeIn.jsx';

const techLogos = [
  { node: <SiReact />, title: "React"},
  { node: <SiJavascript />, title: "Javascript"},
  { node: <SiHtml5 />, title: "Html"},
  { node: <SiCss3 />, title: "Css"},
  { node: <SiTailwindcss />, title: "Tailwind CSS"},
  { node: <SiFigma />, title: "Figma"},
  { node: <SiGithub />, title: "GitHub"},
  { node: <SiGit />, title: "Git"},
  { node: <SiVercel />, title: "Vercel"},
  { node: <SiClaude />, title: "Claude AI"},
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

            <FadeIn delay={0.3}>
                <p className="text-lg md:text-2xl mb-8 max-w-lg text-justify" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    I do web development using modern technologies to create responsive and user-friendly websites and applications.
                </p>
            </FadeIn>
            
            <h1 className='text-xl md:text-3xl my-10' 
                style={{ fontFamily:"'Momo Signature', cursive" }}
            >
                Tech and tools that i usually use :
            </h1>

            <LogoLoop
                logos={techLogos}
                speed={120}
                direction="left"
                logoHeight={48}
                gap={40}
                hoverSpeed={0}
                scaleOnHover
                ariaLabel="Technology partners"
                className="mb-5"
            />

            <LogoLoop
                logos={techLogos}
                speed={120}
                direction="right"
                logoHeight={48}
                gap={40}
                hoverSpeed={0}
                scaleOnHover
                ariaLabel="Technology partners"
            />
        </section>
    )
}