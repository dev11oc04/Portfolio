
// import { useRef } from 'react';
// import { useInView, useCounter } from '@/utils/animations';
// import { Check } from 'lucide-react';

// const About = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const isInView = useInView(sectionRef);
  
//   const experienceYears = useCounter(0,0, 2000);
//   const projectsCompleted = useCounter(5, 0, 2000);
//   const clientsSatisfied = useCounter(0, 0, 2000);
  
//   return (
//     <section id="about" ref={sectionRef} className="py-20 md:py-28">
//       <div className="container px-6 mx-auto">
//         {/* Section heading */}
//         <div className="text-center mb-16">
//           <span className="inline-block px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
//             About Me
//           </span>
//           <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gradient">Who I Am</h2>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           {/* About text */}
//           <div className="order-2 md:order-1">
//             <div 
//               className={`space-y-6 transform transition-all duration-1000 ease-out ${
//                 isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//               }`}
//             >
//               <h3 className="text-2xl font-semibold">Software Developer</h3>
              
//               <p className="text-justify">
//                 Computer Science Engineering graduate from Malla Reddy University with expertise in full-stack 
//                 development and  AI applications. I combine technical process with creative design 
//                 thinking to build applications that are both functional and visually appealing.
//               </p>
              
//               <p  className="text-justify">
//                 Currently pursuing my Bachelor of Technology in Computer Science Engineering,I've developed projects 
//                 ranging from AI-powered applications to energy management systems for hospitals, IOT-based Application
//                 Smart Door Look system, Aquasense (Govt. Water supply management based prototype). I'm passionate about 
//                 creating sustainable digital solutions that make a positive impact.
//               </p>
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
//                 {[
//                   'Python', 'JavaScript', 'React', 'Mongodb', 
//                   'Web Technologies', 'My SQL', 
//                   'Django', 'Java', 
//                   'Springboot'
//                 ].map((skill) => (
//                   <div key={skill} className="flex items-center">
//                     <Check size={16} className="text-primary flex-shrink-0 mr-2" />
//                     <span className="text-sm">{skill}</span>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="pt-2">
//                 <a
//                   href="#contact"
//                   className="inline-flex h-10 items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-2 text-sm font-medium shadow transition-colors hover:bg-primary/90 relative overflow-hidden group"
//                 >
//                   <span className="relative z-10">Get In Touch</span>
//                   <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
//                 </a>
//               </div>
//             </div>
//           </div>
          
//           {/* Image or stats with education */}
//           <div className="order-1 md:order-2">
//             <div 
//               className={`relative p-6 transform transition-all duration-1000 ease-out delay-300 ${
//                 isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//               }`}
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-secondary to-transparent rounded-xl opacity-60" />
              
//               {/* Profile image with stats */}
//               <div className="relative glass rounded-xl overflow-hidden p-6">
//                 <div className="aspect-square rounded-xl overflow-hidden mb-6">
//                   <div className="w-full h-full bg-muted flex items-center justify-center">
//                     {/* Placeholder for image - replace with your actual image */}
//                     <div className="text-8xl font-bold text-gradient">DM</div>
//                   </div>
//                 </div>
                
//                 {/* Education */}
//                 <div className="mb-6 space-y-4">
//                   <h4 className="font-semibold">Education</h4>
                  
//                   <div className="space-y-2">
//                     <div className="space-y-1">
//                       <div className="text-sm font-medium">Malla Reddy University</div>
//                       <div className="text-xs text-muted-foreground">B.Tech in Computer Science Engineering</div>
//                       <div className="text-xs text-muted-foreground">Sep 2022 - Sep 2026</div>
//                     </div>
                    
//                     <div className="space-y-1">
//                       <div className="text-sm font-medium">Sri Amogha Junior College</div>
//                       <div className="text-xs text-muted-foreground">MPC</div>
//                       <div className="text-xs text-muted-foreground">June 2020 - May 2022</div>
//                     </div>
                    
//                     <div className="space-y-1">
//                       <div className="text-sm font-medium">Gautami Vidya Dhammam School</div>
//                       <div className="text-xs text-muted-foreground">Class X</div>
//                       <div className="text-xs text-muted-foreground">March 2020</div>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Stats */}
//                 <div className="grid grid-cols-3 gap-4 text-center">
//                   <div className="space-y-1">
//                     <div className="text-3xl font-bold">{isInView ? experienceYears : 0}</div>
//                     <div className="text-xs text-muted-foreground">Years<br/>Experience</div>
//                   </div>
                  
//                   <div className="space-y-1">
//                     <div className="text-3xl font-bold">{isInView ? projectsCompleted : 0}</div>
//                     <div className="text-xs text-muted-foreground">Projects<br/>Completed</div>
//                   </div>
                  
//                   <div className="space-y-1">
//                     <div className="text-3xl font-bold">{isInView ? clientsSatisfied : 0}</div>
//                     <div className="text-xs text-muted-foreground">Clients<br/>Satisfied</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import React, { useRef } from 'react';
import { useInView, useCounter } from '@/utils/animations';
import { Check } from 'lucide-react';
import { Octokit } from 'octokit';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);
  
  const experienceYears = useCounter(0, 0, 2000);
  const projectsCompleted = useCounter(10, 0, 2000);
  const clientsSatisfied = useCounter(0, 0, 2000);
  
  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28">
      <div className="container px-6 mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
            About Me
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gradient">Who I Am</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* About text */}
          <div className="order-2 md:order-1">
            <div 
              className={`space-y-6 transform transition-all duration-1000 ease-out ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h3 className="text-2xl font-semibold">Software Developer</h3>
              
              <p className="text-justify">
                Computer Science Engineering graduate from Malla Reddy University with expertise in full-stack 
                development and AI applications. I combine technical process with creative design 
                thinking to build applications that are both functional and visually appealing.
              </p>
              
              <p className="text-justify">
                Currently pursuing my Bachelor of Technology in Computer Science Engineering, I've developed projects 
                ranging from AI-powered applications to energy management systems for hospitals, IOT-based Application
                Smart Door Look system, Aquasense (Govt. Water supply management based prototype). I'm passionate about 
                creating sustainable digital solutions that make a positive impact.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Python', 'JavaScript', 'React', 'Mongodb', 
                  'Web Technologies', 'My SQL', 
                  'Django', 'Java', 
                  'Springboot'
                ].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <Check size={16} className="text-primary flex-shrink-0 mr-2" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-2 text-sm font-medium shadow transition-colors hover:bg-primary/90 relative overflow-hidden group"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Image or stats with education */}
          <div className="order-1 md:order-2">
            <div 
              className={`relative p-6 transform transition-all duration-1000 ease-out delay-300 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-transparent rounded-xl opacity-60" />
              
              {/* Profile image with stats */}
              <div className="relative glass rounded-xl overflow-hidden p-6">
                <div className="aspect-square rounded-xl overflow-hidden mb-6">
                  <img
                    src="src/images/profileiit.png" // Replace with your actual image path
                    alt="Devansh Mishra"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                
                {/* Education */}
                <div className="mb-6 space-y-4">
                  <h4 className="font-semibold">Education</h4>
                  
                  <div className="space-y-2">
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Malla Reddy University</div>
                      <div className="text-xs text-muted-foreground">B.Tech in Computer Science Engineering</div>
                      <div className="text-xs text-muted-foreground">Sep 2022 - Sep 2026</div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Sri Amogha Junior College</div>
                      <div className="text-xs text-muted-foreground">MPC</div>
                      <div className="text-xs text-muted-foreground">June 2020 - May 2022</div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Gautami Vidya Dhammam School</div>
                      <div className="text-xs text-muted-foreground">Class X</div>
                      <div className="text-xs text-muted-foreground">March 2020</div>
                    </div>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold">{isInView ? experienceYears : 0}</div>
                    <div className="text-xs text-muted-foreground">Years<br/>Experience</div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-3xl font-bold">{isInView ? projectsCompleted : 0}</div>
                    <div className="text-xs text-muted-foreground">Projects<br/>Completed</div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-3xl font-bold">{isInView ? clientsSatisfied : 0}</div>
                    <div className="text-xs text-muted-foreground">Clients<br/>Satisfied</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;