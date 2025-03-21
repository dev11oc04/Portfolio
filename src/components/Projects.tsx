
// import { useRef } from 'react';
// import { useInView } from '@/utils/animations';
// import { ExternalLink, Github } from 'lucide-react';

// interface Project {
//   title: string;
//   description: string;
//   image: string;
//   date: string;
//   technologies: string[];
//   liveUrl?: string;
//   githubUrl?: string;
// }

// const Projects = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const isInView = useInView(sectionRef);
  
//   const projects: Project[] = [
//     {
//       title: "Age Calculator",
//       description: "A user-friendly Age Calculator App that provides instant age details along with zodiac insights and hobbies predictions based on birth date. Features visualized age metrics and adaptive UI for seamless user experience.",
//       date: "April 2023",
//       image: "https://via.placeholder.com/640x360?text=Age+Calculator",
//       technologies: ["Python", "Tkinter", "Pandas"],
//       githubUrl: "#"
//     },
//     {
//       title: "Modern Wardrobe",
//       description: "Modern wardrobe blends evolving fashion, sustainability, and practicality. Emphasizes versatile, timeless pieces, promoting conscious consumption. Tech and online platforms enable convenient shopping, personal styling, shaping contemporary fashion.",
//       date: "September 2023",
//       image: "https://via.placeholder.com/640x360?text=Modern+Wardrobe",
//       technologies: ["React", "CSS", "JavaScript"],
//       liveUrl: "#",
//       githubUrl: "#"
//     },
//     {
//       title: "Omnilock-Smart Door Lock Systems",
//       description: "Omnilock is a smart access control system integrating biometrics and IoT, offering fingerprint, touchpad, and remote entry via ESP32 for enhanced security and convenience.",
//       date: "January 2024",
//       image: "https://via.placeholder.com/640x360?text=Face+Recognition",
//       technologies: ["C++", "Arduino", "Embedded Systems", "IOT"],
//       githubUrl: "#"
//     },
//     {
//       title: "Energy Management for Hospital Equipments",
//       description: "Created a solution using an LSTM model to forecast hourly energy consumption levels for hospital equipment. Implemented anomaly detection to identify abnormal energy usage patterns and prevent equipment failures.",
//       date: "November 2024",
//       image: "https://via.placeholder.com/640x360?text=Energy+Management",
//       technologies: ["Python", "Machine Learning", "LSTM", "Keras"],
//       githubUrl: "#"
//     }
    
//   ];
  
//   return (
//     <section id="projects" ref={sectionRef} className="py-20 md:py-28 bg-muted/30">
//       <div className="container px-6 mx-auto">
//         {/* Section heading */}
//         <div className="text-center mb-16">
//           <span className="inline-block px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
//             Portfolio
//           </span>
//           <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gradient">Featured Projects</h2>
//           <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
//             Explore my recent work showcasing my expertise in AI, Web Development, and innovative solutions.
//             Each project represents my approach to problem-solving and attention to detail.
//           </p>
//         </div>
        
//         {/* Projects grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <div 
//               key={project.title}
//               className={`group relative transform transition-all duration-700 ease-out ${
//                 isInView 
//                   ? 'translate-y-0 opacity-100' 
//                   : 'translate-y-10 opacity-0'
//               }`}
//               style={{ transitionDelay: `${index * 150}ms` }}
//             >
//               <div className="h-full flex flex-col overflow-hidden rounded-xl bg-card border transition-all duration-300 group-hover:shadow-lg">
//                 {/* Project image */}
//                 <div className="h-48 overflow-hidden">
//                   <img 
//                     src={project.image} 
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                   />
//                 </div>
                
//                 {/* Content */}
//                 <div className="flex flex-col flex-grow p-6">
//                   <div className="flex justify-between items-center mb-2">
//                     <h3 className="text-xl font-semibold">{project.title}</h3>
//                     <span className="text-xs text-muted-foreground">{project.date}</span>
//                   </div>
                  
//                   <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                  
//                   {/* Technologies */}
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.technologies.map(tech => (
//                       <span key={tech} className="inline-block px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
                  
//                   {/* Links */}
//                   <div className="flex justify-between items-center">
//                     {project.liveUrl && (
//                       <a 
//                         href={project.liveUrl}
//                         className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <ExternalLink size={16} className="mr-1" />
//                         Live Preview
//                       </a>
//                     )}
                    
//                     {project.githubUrl && (
//                       <a 
//                         href={project.githubUrl}
//                         className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <Github size={16} className="mr-1" />
//                         Source Code
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* View more button */}
//         <div className="text-center mt-12">
//           <a
//             href="#"
//             className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
//           >
//             View More Projects
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import { useRef, useState, useEffect } from 'react';
import { useInView } from '@/utils/animations';
import { ExternalLink, Github, Loader2 } from 'lucide-react';
import { Octokit } from 'octokit';

interface Repository {
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
  created_at: string;
  language: string;
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);
  
  const [projects, setProjects] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const octokit = new Octokit();
        const response = await octokit.request('GET /users/{username}/repos', {
          username: 'dev11oc04',
          sort: 'created',
          direction: 'desc',
          per_page: showAll ? 100 : 4
        });

        const repos = response.data
          .filter(repo => !repo.fork && repo.description) // Filter out forks and repos without descriptions
          .map(repo => ({
            name: repo.name,
            description: repo.description || '',
            html_url: repo.html_url,
            homepage: repo.homepage,
            topics: repo.topics,
            created_at: new Date(repo.created_at).toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric'
            }),
            language: repo.language || 'Not specified'
          }));

        setProjects(repos);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch projects. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [showAll]);
  
  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-28 bg-muted/30">
      <div className="container px-6 mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
            Portfolio
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gradient">Featured Projects</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Explore my recent work showcasing my expertise in AI, Web Development, and innovative solutions.
            Each project represents my approach to problem-solving and attention to detail.
          </p>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <>
            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.name}
                  className={`group relative transform transition-all duration-700 ease-out ${
                    isInView 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="h-full flex flex-col overflow-hidden rounded-xl bg-card border transition-all duration-300 group-hover:shadow-lg">
                    {/* Content */}
                    <div className="flex flex-col flex-grow p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-semibold">{project.name}</h3>
                        <span className="text-xs text-muted-foreground">{project.created_at}</span>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-block px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">
                          {project.language}
                        </span>
                        {project.topics.map(tech => (
                          <span key={tech} className="inline-block px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Links */}
                      <div className="flex justify-between items-center">
                        {project.homepage && (
                          <a 
                            href={project.homepage}
                            className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={16} className="mr-1" />
                            Live Preview
                          </a>
                        )}
                        
                        <a 
                          href={project.html_url}
                          className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} className="mr-1" />
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* View more button */}
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {showAll ? 'Show Less' : 'View More Projects'}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;