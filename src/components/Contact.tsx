
// // import { useState, useRef } from 'react';
// // import { useInView } from '@/utils/animations';
// // import { Send, Mail, Phone, MapPin } from 'lucide-react';
// // import { toast } from '@/components/ui/use-toast';
// // import { Twitter, Linkedin, Github, Dribbble } from "lucide-react";
// // const Contact = () => {
// //   const sectionRef = useRef<HTMLElement>(null);
// //   const isInView = useInView(sectionRef);
  
// //   const [formState, setFormState] = useState({
// //     name: '',
// //     email: '',
// //     subject: '',
// //     message: ''
// //   });
  
// //   const [isSubmitting, setIsSubmitting] = useState(false);
  
// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// //     const { name, value } = e.target;
// //     setFormState(prev => ({
// //       ...prev,
// //       [name]: value
// //     }));
// //   };
  
// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
    
// //     // Simulate form submission
// //     setTimeout(() => {
// //       toast({
// //         title: "Message Sent",
// //         description: "Thank you for your message. I'll get back to you soon!",
// //       });
      
// //       setFormState({
// //         name: '',
// //         email: '',
// //         subject: '',
// //         message: ''
// //       });
      
// //       setIsSubmitting(false);
// //     }, 1500);
// //   };
  
// //   return (
// //     <section id="contact" ref={sectionRef} className="py-20 md:py-28 overflow-hidden">
// //       <div className="container px-6 mx-auto">
// //         {/* Section heading */}
// //         <div className="text-center mb-16">
// //           <span className="inline-block px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
// //             Contact
// //           </span>
// //           <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gradient">Get In Touch</h2>
// //           <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
// //             Have a project in mind or want to discuss a potential collaboration?
// //             Feel free to reach out. I'm always open to new opportunities.
// //           </p>
// //         </div>
        
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
// //           {/* Contact info */}
// //           <div 
// //             className={`space-y-8 transform transition-all duration-1000 ease-out ${
// //               isInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
// //             }`}
// //           >
// //             <h3 className="text-2xl font-semibold">Let's discuss your project</h3>
// //             <p className="text-muted-foreground">
// //               Looking to start a new project or need help with an existing one?
// //               Get in touch and let's create something amazing together.
// //             </p>
            
// //             {/* Contact details */}
// //             <div className="space-y-6">
// //               <div className="flex items-start">
// //                 <div className="flex-shrink-0 glass rounded-full p-2 mr-3">
// //                   <Mail size={20} className="text-primary" />
// //                 </div>
// //                 <div>
// //                   <h4 className="text-base font-medium">Email</h4>
// //                   <a href="devanshm344@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
// //                     devanshm344@gmail.com
// //                   </a>
// //                 </div>
// //               </div>
              
// //               <div className="flex items-start">
// //                 <div className="flex-shrink-0 glass rounded-full p-2 mr-3">
// //                   <Phone size={20} className="text-primary" />
// //                 </div>
// //                 <div>
// //                   <h4 className="text-base font-medium">Phone</h4>
// //                   <a href="tel:+91 8886560223" className="text-sm text-muted-foreground hover:text-primary transition-colors">
// //                     +91 8886560223
// //                   </a>
// //                 </div>
// //               </div>
              
// //               <div className="flex items-start">
// //                 <div className="flex-shrink-0 glass rounded-full p-2 mr-3">
// //                   <MapPin size={20} className="text-primary" />
// //                 </div>
// //                 <div>
// //                   <h4 className="text-base font-medium">Location</h4>
// //                   <p className="text-sm text-muted-foreground">
// //                     Hyderabad,Telangana,India - 500016
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
            
// //             {/* Social links */}
// //             <div className="pt-6">
// //               <h4 className="text-base font-medium mb-3">Connect with me</h4>
// //               <div className="flex space-x-4">
// //                 {[
// //                   { name: 'Twitter', icon: 'M' },
// //                   { name: 'LinkedIn', icon: 'L' },
// //                   { name: 'GitHub', icon: 'G' },
// //                   { name: 'Dribbble', icon: 'D' },
// //                 ].map(social => (
// //                   <a 
// //                     key={social.name}
// //                     href="#"
// //                     className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
// //                     aria-label={social.name}
// //                   >
// //                     {social.icon}
// //                   </a>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
          
// //           {/* Contact form */}
// //           <div 
// //             className={`transform transition-all duration-1000 ease-out delay-300 ${
// //               isInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
// //             }`}
// //           >
// //             <div className="glass rounded-xl overflow-hidden p-6 border">
// //               <form onSubmit={handleSubmit} className="space-y-6">
// //                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
// //                   <div className="space-y-2">
// //                     <label htmlFor="name" className="text-sm font-medium leading-none">
// //                       Name
// //                     </label>
// //                     <input
// //                       id="name"
// //                       name="name"
// //                       type="text"
// //                       value={formState.name}
// //                       onChange={handleChange}
// //                       required
// //                       className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
// //                       placeholder="Your name"
// //                     />
// //                   </div>
                  
// //                   <div className="space-y-2">
// //                     <label htmlFor="email" className="text-sm font-medium leading-none">
// //                       Email
// //                     </label>
// //                     <input
// //                       id="email"
// //                       name="email"
// //                       type="email"
// //                       value={formState.email}
// //                       onChange={handleChange}
// //                       required
// //                       className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
// //                       placeholder="Your email"
// //                     />
// //                   </div>
// //                 </div>
                
// //                 <div className="space-y-2">
// //                   <label htmlFor="subject" className="text-sm font-medium leading-none">
// //                     Subject
// //                   </label>
// //                   <input
// //                     id="subject"
// //                     name="subject"
// //                     type="text"
// //                     value={formState.subject}
// //                     onChange={handleChange}
// //                     required
// //                     className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
// //                     placeholder="Subject of your message"
// //                   />
// //                 </div>
                
// //                 <div className="space-y-2">
// //                   <label htmlFor="message" className="text-sm font-medium leading-none">
// //                     Message
// //                   </label>
// //                   <textarea
// //                     id="message"
// //                     name="message"
// //                     value={formState.message}
// //                     onChange={handleChange}
// //                     required
// //                     rows={5}
// //                     className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
// //                     placeholder="Your message"
// //                   />
// //                 </div>
                
// //                 <button
// //                   type="submit"
// //                   disabled={isSubmitting}
// //                   className="inline-flex h-10 items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-2 text-sm font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-full sm:w-auto"
// //                 >
// //                   {isSubmitting ? (
// //                     <div className="flex items-center">
// //                       <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
// //                       Sending...
// //                     </div>
// //                   ) : (
// //                     <div className="flex items-center">
// //                       <Send size={16} className="mr-2" />
// //                       Send Message
// //                     </div>
// //                   )}
// //                 </button>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Contact;
// import { useState, useRef } from 'react';
// import { useInView } from '@/utils/animations';
// import { Send, Mail, Phone, MapPin, Twitter, Linkedin, Github, Dribbble } from 'lucide-react';
// import { toast } from '@/components/ui/use-toast';

// const Contact = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const isInView = useInView(sectionRef);
  
//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
  
//   const [isSubmitting, setIsSubmitting] = useState(false);
  
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormState(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };
  
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       toast({
//         title: "Message Sent",
//         description: "Thank you for your message. I'll get back to you soon!",
//       });
      
//       setFormState({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//       });
      
//       setIsSubmitting(false);
//     }, 1500);
//   };
  
//   const socialLinks = [
//     { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/yourusername' },
//     { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/devansh-mishra-59b898284/' },
//     { name: 'GitHub', icon: Github, url: 'https://github.com/dev11oc04' },
//     { name: 'Dribbble', icon: Dribbble, url: 'https://dribbble.com/yourusername' }
//   ];
  
//   return (
//     <section id="contact" ref={sectionRef} className="py-20 md:py-28 overflow-hidden">
//       <div className="container px-6 mx-auto">
//         {/* Section heading */}
//         <div className="text-center mb-16">
//           <span className="inline-block px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
//             Contact
//           </span>
//           <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gradient">Get In Touch</h2>
//           <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
//             Have a project in mind or want to discuss a potential collaboration?
//             Feel free to reach out. I'm always open to new opportunities.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           {/* Contact info */}
//           <div 
//             className={`space-y-8 transform transition-all duration-1000 ease-out ${
//               isInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
//             }`}
//           >
//             <h3 className="text-2xl font-semibold">Let's discuss your project</h3>
//             <p className="text-muted-foreground">
//               Looking to start a new project or need help with an existing one?
//               Get in touch and let's create something amazing together.
//             </p>
            
//             {/* Contact details */}
//             <div className="space-y-6">
//               <div className="flex items-start">
//                 <div className="flex-shrink-0 glass rounded-full p-2 mr-3">
//                   <Mail size={20} className="text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="text-base font-medium">Email</h4>
//                   <a href="mailto:devanshm344@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
//                     devanshm344@gmail.com
//                   </a>
//                 </div>
//               </div>
              
//               <div className="flex items-start">
//                 <div className="flex-shrink-0 glass rounded-full p-2 mr-3">
//                   <Phone size={20} className="text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="text-base font-medium">Phone</h4>
//                   <a href="tel:+91 8886560223" className="text-sm text-muted-foreground hover:text-primary transition-colors">
//                     +91 8886560223
//                   </a>
//                 </div>
//               </div>
              
//               <div className="flex items-start">
//                 <div className="flex-shrink-0 glass rounded-full p-2 mr-3">
//                   <MapPin size={20} className="text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="text-base font-medium">Location</h4>
//                   <p className="text-sm text-muted-foreground">
//                     Hyderabad,Telangana,India - 500016
//                   </p>
//                 </div>
//               </div>
//             </div>
            
//             {/* Social links */}
//             <div className="pt-6">
//               <h4 className="text-base font-medium mb-3">Connect with me</h4>
//               <div className="flex space-x-4">
//                 {socialLinks.map(({ name, icon: Icon, url }) => (
//                   <a 
//                     key={name}
//                     href={url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
//                     aria-label={name}
//                   >
//                     <Icon size={18} />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
          
//           {/* Contact form */}
//           <div 
//             className={`transform transition-all duration-1000 ease-out delay-300 ${
//               isInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
//             }`}
//           >
//             <div className="glass rounded-xl overflow-hidden p-6 border">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//                   <div className="space-y-2">
//                     <label htmlFor="name" className="text-sm font-medium leading-none">
//                       Name
//                     </label>
//                     <input
//                       id="name"
//                       name="name"
//                       type="text"
//                       value={formState.name}
//                       onChange={handleChange}
//                       required
//                       className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
//                       placeholder="Your name"
//                     />
//                   </div>
                  
//                   <div className="space-y-2">
//                     <label htmlFor="email" className="text-sm font-medium leading-none">
//                       Email
//                     </label>
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       value={formState.email}
//                       onChange={handleChange}
//                       required
//                       className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
//                       placeholder="Your email"
//                     />
//                   </div>
//                 </div>
                
//                 <div className="space-y-2">
//                   <label htmlFor="subject" className="text-sm font-medium leading-none">
//                     Subject
//                   </label>
//                   <input
//                     id="subject"
//                     name="subject"
//                     type="text"
//                     value={formState.subject}
//                     onChange={handleChange}
//                     required
//                     className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
//                     placeholder="Subject of your message"
//                   />
//                 </div>
                
//                 <div className="space-y-2">
//                   <label htmlFor="message" className="text-sm font-medium leading-none">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formState.message}
//                     onChange={handleChange}
//                     required
//                     rows={5}
//                     className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
//                     placeholder="Your message"
//                   />
//                 </div>
                
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="inline-flex h-10 items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-2 text-sm font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-full sm:w-auto"
//                 >
//                   {isSubmitting ? (
//                     <div className="flex items-center">
//                       <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
//                       Sending...
//                     </div>
//                   ) : (
//                     <div className="flex items-center">
//                       <Send size={16} className="mr-2" />
//                       Send Message
//                     </div>
//                   )}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import { useState, useRef } from 'react';
import { useInView } from '@/utils/animations';
import { Send, Mail, Phone, MapPin, Twitter, Linkedin, Github, Dribbble } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef);
  
  const [formState, setFormState] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        toast({
          title: "Message Sent Successfully",
          description: "Thank you for your message. I'll get back to you soon!",
        });

        setFormState({
          user_name: '',
          user_email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error Sending Message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const socialLinks = [
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/devanshm344'},
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/devansh-mishra-59b898284/' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/dev11oc04' },
    { name: 'Dribbble', icon: Dribbble, url: 'https://dribbble.com/yourusername' }
  ];
  
  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 overflow-hidden">
      <div className="container px-6 mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
            Contact
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gradient">Get In Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Have a project in mind or want to discuss a potential collaboration?
            Feel free to reach out. I'm always open to new opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div 
            className={`space-y-8 transform transition-all duration-1000 ease-out ${
              isInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <h3 className="text-2xl font-semibold">Let's discuss your project</h3>
            <p className="text-muted-foreground">
              Looking to start a new project or need help with an existing one?
              Get in touch and let's create something amazing together.
            </p>
            
            {/* Contact details */}
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 glass rounded-full p-2 mr-3">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-base font-medium">Email</h4>
                  <a href="mailto:devanshm344@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    devanshm344@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 glass rounded-full p-2 mr-3">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-base font-medium">Phone</h4>
                  <a href="tel:+91 8886560223" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    +91 8886560223
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 glass rounded-full p-2 mr-3">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-base font-medium">Location</h4>
                  <p className="text-sm text-muted-foreground">
                    Hyderabad,Telangana,India - 500016
                  </p>
                </div>
              </div>
            </div>
            
            {/* Social links */}
            <div className="pt-6">
              <h4 className="text-base font-medium mb-3">Connect with me</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ name, icon: Icon, url }) => (
                  <a 
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={name}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div 
            className={`transform transition-all duration-1000 ease-out delay-300 ${
              isInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="glass rounded-xl overflow-hidden p-6 border">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="user_name" className="text-sm font-medium leading-none">
                      Name
                    </label>
                    <input
                      id="user_name"
                      name="user_name"
                      type="text"
                      value={formState.user_name}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="user_email" className="text-sm font-medium leading-none">
                      Email
                    </label>
                    <input
                      id="user_email"
                      name="user_email"
                      type="email"
                      value={formState.user_email}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium leading-none">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-2 text-sm font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send size={16} className="mr-2" />
                      Send Message
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;