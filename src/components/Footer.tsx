
import { Link } from 'react-router-dom';
import { ArrowUp, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-muted/40 py-10 md:py-16">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and about */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="text-xl font-bold">
              <span className="text-gradient font-display tracking-tight">Devansh Mishra</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Computer Science Engineering student focusing on developing innovative solutions 
              and creating exceptional digital experiences through clean, elegant design.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://github.com/dev11oc04"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
              </a>
              <a 
                href="https://www.linkedin.com/in/devansh-mishra-59b898284/"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/#about' },
                { name: 'Projects', path: '/#projects' },
                { name: 'Contact', path: '/#contact' },
              ].map(link => (
                <li key={link.name}>
                  <a 
                    href={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-muted-foreground" />
                <a 
                  href="mailto:devanshm344@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  devanshm344@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-muted-foreground" />
                <a 
                  href="tel:+91 8886560223"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  +91 888 6560 223
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Hyderabad, Telangana<br />
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <hr className="my-8 border-border" />
        
        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center md:justify-start mb-4 md:mb-0">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Devansh Mishra. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Malla Reddy University | IIC Council Member
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center rounded-full w-10 h-10 bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
