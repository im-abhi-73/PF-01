import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { ProfilePicture } from './components/ProfilePicture';
import { PageTransition, useInView } from './components/PageTransition';
import { Code, Database, Globe, Mail, Server, Smartphone, Zap } from 'lucide-react';

function App() {
  const [heroRef, heroInView] = useInView(0.1);

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-all duration-700 bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <Navbar />
        
        {/* Hero Section */}
        <section id="home" ref={heroRef} className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900/20">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute rounded-full -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/20 to-accent-400/20 blur-3xl animate-float" />
            <div className="absolute rounded-full -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent-400/20 to-success-400/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-primary-300/10 to-accent-300/10 blur-3xl animate-pulse-slow" />
          </div>
          
          <div className="relative z-10 text-center">
            <PageTransition isVisible={heroInView} direction="up">
              <div className="mb-8">
                <ProfilePicture 
                  size="xl" 
                  animated={true}
                  className="mx-auto mb-6 animate-float"
                />
              </div>
            </PageTransition>
            
            <PageTransition isVisible={heroInView} direction="up" delay={300}>
              <h1 className="mb-6 text-5xl font-bold text-transparent lg:text-7xl bg-gradient-to-r from-primary-600 via-accent-600 to-success-600 bg-clip-text animate-fade-in">
                Abhishek Ahire
              </h1>
            </PageTransition>
            
            <PageTransition isVisible={heroInView} direction="up" delay={500}>
              <p className="mb-8 text-xl font-medium text-gray-600 lg:text-2xl dark:text-gray-300">
                Java Full Stack Developer
              </p>
            </PageTransition>
            
            <PageTransition isVisible={heroInView} direction="up" delay={700}>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-500 lg:text-base dark:text-gray-400">
                <span className="px-3 py-1 font-medium rounded-full bg-primary-100 dark:bg-primary-900/30">Java</span>
                <span className="px-3 py-1 font-medium rounded-full bg-accent-100 dark:bg-accent-900/30">Spring Boot</span>
                <span className="px-3 py-1 font-medium rounded-full bg-success-100 dark:bg-success-900/30">React</span>
                <span className="px-3 py-1 font-medium rounded-full bg-primary-100 dark:bg-primary-900/30">MySQL</span>
                <span className="px-3 py-1 font-medium rounded-full bg-accent-100 dark:bg-accent-900/30">RestAPI</span>
              </div>
            </PageTransition>
            
            <PageTransition isVisible={heroInView} direction="up" delay={900}>
              <div className="flex flex-wrap justify-center gap-4">
<a
  href="#projects"
  className="px-8 py-3 font-medium text-white transition-all duration-500 transform rounded-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 hover:shadow-2xl hover:shadow-primary-500/25 hover:-translate-y-1"
>
  View My Work
</a>

                <button className="px-8 py-3 font-medium transition-all duration-500 transform border-2 rounded-full border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 hover:shadow-2xl hover:shadow-primary-500/25 hover:-translate-y-1">
                  Contact Me
                </button>
              </div>
            </PageTransition>
          </div>
        </section>

        <Section id="about" title="About Me" className="bg-gradient-to-br from-white to-primary-50/50 dark:from-gray-800 dark:to-gray-700/50">
          <div className="max-w-4xl mx-auto">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  Passionate Java Full Stack Developer with expertise in building scalable web applications. 
                  I enjoy creating elegant solutions to complex problems and staying up-to-date with the latest technologies.
                </p>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  With a strong foundation in both frontend and backend development, I specialize in creating 
                  seamless user experiences backed by robust, efficient server-side solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400">
                    <Code className="w-5 h-5" />
                    <span className="font-medium">Clean Code</span>
                  </div>
                  <div className="flex items-center space-x-2 text-accent-600 dark:text-accent-400">
                    <Zap className="w-5 h-5" />
                    <span className="font-medium">Performance</span>
                  </div>
                  <div className="flex items-center space-x-2 text-success-600 dark:text-success-400">
                    <Globe className="w-5 h-5" />
                    <span className="font-medium">Scalability</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <ProfilePicture 
                  size="lg" 
                  animated={true}
                  className="animate-float"
                />
              </div>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid max-w-6xl grid-cols-2 gap-8 mx-auto md:grid-cols-4">
            {[
              { name: 'Java', icon: Code, color: 'primary' },
              { name: 'Spring Boot', icon: Server, color: 'success' },
              { name: 'React', icon: Globe, color: 'accent' },
              { name: 'Angular', icon: Smartphone, color: 'primary' },
              { name: 'Node.js', icon: Server, color: 'success' },
              { name: 'MySQL', icon: Database, color: 'accent' },
              { name: 'MongoDB', icon: Database, color: 'primary' },
              { name: 'Docker', icon: Zap, color: 'success' }
            ].map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={skill.name} 
                  className={`text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 group border border-${skill.color}-100 dark:border-${skill.color}-900/30`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className={`w-8 h-8 mx-auto mb-3 text-${skill.color}-600 dark:text-${skill.color}-400 group-hover:animate-bounce`} />
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</h3>
                </div>
              );
            })}
          </div>
        </Section>

        <Section id="projects" title="Projects" className="bg-gradient-to-br from-primary-50/50 to-accent-50/50 dark:from-gray-800/50 dark:to-gray-700/50">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { id: 1, title: 'E-Commerce Platform', gradient: 'from-primary-500 to-accent-500' },
              { id: 2, title: 'Task Management App', gradient: 'from-accent-500 to-success-500' },
              { id: 3, title: 'Social Media Dashboard', gradient: 'from-success-500 to-primary-500' }
            ].map((project, index) => (
              <div 
                key={project.id} 
                className="overflow-hidden transition-all duration-500 bg-white shadow-lg dark:bg-gray-800 rounded-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 transition-all duration-500 bg-black/20 group-hover:bg-black/10" />
                  <div className="absolute text-white bottom-4 left-4">
                    <Code className="w-8 h-8 animate-pulse" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-800 transition-colors duration-300 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    A comprehensive solution built with modern technologies and best practices.
                  </p>
                  <button className="font-medium transition-all duration-300 text-primary-600 dark:text-primary-400 hover:underline">
                    View Project →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Section>

<Section id="resume" title="Resume">
  <div className="text-center">
    <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600 dark:text-gray-300">
      View my resume to learn more about my experience and qualifications.
    </p>
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-8 py-4 font-medium text-white transition-all duration-500 transform rounded-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 hover:shadow-2xl hover:shadow-primary-500/25 hover:-translate-y-2"
    >
      View Resume
    </a>
  </div>
</Section>



        <Section id="contact" title="Contact Me" className="bg-gradient-to-br from-white to-primary-50/50 dark:from-gray-800 dark:to-gray-700/50">
  <div className="max-w-2xl mx-auto text-center">
    <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
      Let's connect! I'm always open to discussing new opportunities and collaborations.
    </p>

    <div className="grid gap-6 mb-8 md:grid-cols-2">
      {/* Email */}
      <a 
        href="mailto:abheepatil2002@gmail.com" 
        className="p-6 transition-all duration-500 bg-white border shadow-lg dark:bg-gray-800 rounded-xl hover:shadow-2xl hover:-translate-y-2 group border-primary-100 dark:border-primary-900/30"
      >
        <div className="mb-2 text-primary-600 dark:text-primary-400">
          <Mail className="w-8 h-8 mx-auto group-hover:animate-bounce" />
        </div>
        <p className="font-medium text-gray-800 dark:text-gray-200">Email</p>
        <p className="text-primary-600 dark:text-primary-400">abheepatil2002@gmail.com</p>
      </a>

      {/* Phone */}
      <a 
        href="tel:+917378561194" 
        className="p-6 transition-all duration-500 bg-white border shadow-lg dark:bg-gray-800 rounded-xl hover:shadow-2xl hover:-translate-y-2 group border-accent-100 dark:border-accent-900/30"
      >
        <div className="mb-2 text-accent-600 dark:text-accent-400">
          <Smartphone className="w-8 h-8 mx-auto group-hover:animate-bounce" />
        </div>
        <p className="font-medium text-gray-800 dark:text-gray-200">Phone</p>
        <p className="text-accent-600 dark:text-accent-400">+91 7378561194</p>
      </a>

      {/* LinkedIn */}
      <a 
        href="https://www.linkedin.com/in/abhishek-ahire-071791268/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-6 transition-all duration-500 bg-white border border-blue-100 shadow-lg dark:bg-gray-800 rounded-xl hover:shadow-2xl hover:-translate-y-2 group dark:border-blue-900/30"
      >
        <div className="mb-2 text-blue-600 dark:text-blue-400">
          <Globe className="w-8 h-8 mx-auto group-hover:animate-bounce" />
        </div>
        <p className="font-medium text-gray-800 dark:text-gray-200">LinkedIn</p>
        <p className="text-blue-600 dark:text-blue-400">@Abhishek Ahire</p>
      </a>

      {/* GitHub */}
      <a 
        href="https://github.com/your-github-username" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-6 transition-all duration-500 bg-white border border-gray-200 shadow-lg dark:bg-gray-800 rounded-xl hover:shadow-2xl hover:-translate-y-2 group dark:border-gray-700"
      >
        <div className="mb-2 text-gray-800 dark:text-gray-300">
          <Code className="w-8 h-8 mx-auto group-hover:animate-bounce" />
        </div>
        <p className="font-medium text-gray-800 dark:text-gray-200">GitHub</p>
        <p className="text-gray-800 dark:text-gray-300">@your-github-username</p>
      </a>

      {/* Twitter */}
      <a 
        href="https://twitter.com/your-twitter-handle" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-6 transition-all duration-500 bg-white border shadow-lg dark:bg-gray-800 rounded-xl hover:shadow-2xl hover:-translate-y-2 group border-sky-100 dark:border-sky-900/30"
      >
        <div className="mb-2 text-sky-500 dark:text-sky-400">
          <Globe className="w-8 h-8 mx-auto group-hover:animate-bounce" />
        </div>
        <p className="font-medium text-gray-800 dark:text-gray-200">Twitter</p>
        <p className="text-sky-500 dark:text-sky-400">@your-twitter-handle</p>
      </a>
    </div>
  </div>
</Section>


<Section id="contact" title="Message Me">
  <div className="max-w-xl px-6 py-12 mx-auto shadow-2xl bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl">
    <h2 className="mb-4 text-3xl font-bold text-center text-primary-600 dark:text-white">
      Get in Touch
    </h2>
    <p className="mb-8 text-center text-gray-600 dark:text-gray-300">
      Have a thought or question? Drop a quick message.
    </p>
    
    <form
      action="https://formspree.io/f/your-form-id"  // 🔁 Replace with your Formspree ID
      method="POST"
      className="space-y-6"
    >
      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          required
          placeholder="Write your message..."
          className="w-full px-4 py-3 text-gray-800 transition bg-white border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none"
        ></textarea>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="inline-block px-8 py-3 font-semibold text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-primary-600 to-accent-600 hover:shadow-xl hover:from-primary-700 hover:to-accent-700 hover:-translate-y-1"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</Section>


      </div>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
        
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #d946ef);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #c026d3);
        }
        
        .dark ::-webkit-scrollbar-track {
          background: #1f2937;
        }
      `}</style>
    </ThemeProvider>
  );
}

export default App;