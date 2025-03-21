
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useScrollPosition } from '@/utils/animations';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 50;
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.main-nav')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);
  
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-500 backdrop-blur-xs",
        isScrolled ? "py-3 glass" : "py-5 bg-transparent"
      )}
    >
      <div className="container px-6 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-xl font-bold relative z-10 transition-all duration-300 hover:opacity-80"
        >
          <span className="text-gradient font-display tracking-tight">Devansh Mishra</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/#about' },
            { name: 'Projects', path: '/#projects' },
            { name: 'Contact', path: '/#contact' },
          ].map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="group text-sm text-muted-foreground font-medium transition-colors hover:text-foreground relative"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          <a
            href="/#contact"
            className="relative inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 before:absolute before:-inset-0.5 before:rounded-lg before:border before:border-primary/40 before:opacity-0 hover:before:opacity-100 before:transition"
          >
            Let's Talk
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative z-10 w-8 h-8 flex flex-col justify-center items-center"
          aria-label="Toggle menu"
        >
          <span 
            className={cn(
              "w-6 h-0.5 bg-foreground rounded-full transition-all duration-300",
              isMenuOpen ? "transform rotate-45 translate-y-1" : "mb-1.5"
            )} 
          />
          <span 
            className={cn(
              "w-6 h-0.5 bg-foreground rounded-full transition-all duration-300",
              isMenuOpen ? "opacity-0" : "mb-1.5"
            )} 
          />
          <span 
            className={cn(
              "w-6 h-0.5 bg-foreground rounded-full transition-all duration-300",
              isMenuOpen ? "transform -rotate-45 -translate-y-1" : ""
            )} 
          />
        </button>
        
        {/* Mobile Navigation */}
        <div 
          className={cn(
            "main-nav fixed inset-0 bg-background/95 backdrop-blur-md transition-transform duration-500 transform md:hidden flex flex-col justify-center",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="container flex flex-col items-center justify-center space-y-8 text-center">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/#about' },
              { name: 'Projects', path: '/#projects' },
              { name: 'Contact', path: '/#contact' },
            ].map((item, index) => (
              <a
                key={item.name}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "text-2xl font-display font-medium text-foreground transition-all delay-100 transform",
                  isMenuOpen 
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0",
                  `transition-delay-${index * 100}`
                )}
                style={{ 
                  transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms' 
                }}
              >
                {item.name}
              </a>
            ))}
            
            <a
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "relative mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-all delay-500 transform",
                isMenuOpen 
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              )}
              style={{ 
                transitionDelay: isMenuOpen ? '500ms' : '0ms' 
              }}
            >
              Let's Talk
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
