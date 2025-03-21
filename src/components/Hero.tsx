
import { useRef, useEffect } from 'react';
import { useTypewriter, useParallax } from '@/utils/animations';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const parallaxOffset = useParallax(0.2);
  
  const role = useTypewriter("Developer. Designer. AI Enthusiast.", 50, 500);
  
  useEffect(() => {
    if (!titleRef.current) return;
    
    const moveText = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate the movement - small effect
      const moveX = (clientX - innerWidth / 2) * 0.005;
      const moveY = (clientY - innerHeight / 2) * 0.005;
      
      if (titleRef.current) {
        titleRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };
    
    window.addEventListener('mousemove', moveText);
    
    return () => {
      window.removeEventListener('mousemove', moveText);
    };
  }, []);
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={heroRef}>
      {/* Background elements */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%)',
          transform: `translateY(${parallaxOffset * 0.5}px)`
        }}
      />
      
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary opacity-10 rounded-full filter blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary opacity-10 rounded-full filter blur-3xl" />
      
      {/* Main content */}
      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center">
        <span className="text-sm md:text-base text-muted-foreground mb-3 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          Hello, I'm
        </span>
        
        <h1 
          className="mb-4 font-display animate-fade-in opacity-0"
          style={{ animationDelay: '0.5s' }}
          ref={titleRef}
        >
          <span className="block text-gradient">Devansh Mishra</span>
        </h1>
        
        <div className="h-8 mb-6 flex items-center justify-center">
          <p className="text-lg md:text-xl text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: '0.7s' }}>
            {role}<span className="animate-cursor-blink ml-0.5">|</span>
          </p>
        </div>
        
        <p className="max-w-lg text-center text-base md:text-lg text-muted-foreground mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>
          Computer Science Engineering student at Malla Reddy University, passionate about building innovative solutions and creating exceptional digital experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: '1.1s' }}>
          <a
            href="#projects"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-2 text-sm font-medium shadow transition-colors hover:bg-primary/90 relative overflow-hidden group"
          >
            <span className="relative z-10">View My Work</span>
            <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </a>
          
          <a
            href="#about"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            About Me
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce-light">
        <span className="text-xs text-muted-foreground mb-2">Scroll Down</span>
        <ArrowDown size={16} className="text-primary" />
      </div>
    </div>
  );
};

export default Hero;
