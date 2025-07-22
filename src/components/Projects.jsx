import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import { BiLockAlt } from 'react-icons/bi';
import { TbTemplate } from 'react-icons/tb';

// Import images
import blogifyImage from '/assests/blodify.png';
import urlShortenerImage from '/assests/Url-Shortner.png';

const Projects = () => {
  const projects = [
    {
      title: 'Blogify',
      description: 'A full-featured blog website built with Node.js and EJS templates. Users can create, edit, and manage their blog posts with a clean and intuitive interface.',
      image: blogifyImage,
      technologies: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'EJS', icon: <TbTemplate /> },
      ],
      features: [
        'User authentication & authorization',
        'Create, edit, and delete blog posts',
        'Rich text editor for content',
        'Comment system',
        'Responsive design for all devices'
      ],
      github: 'https://github.com/RehmanAly14/BLOG-WEBSITE.git',
      
    },
    {
      title: 'URL Shortener',
      description: 'A secure URL shortening service with user authentication and analytics. Create shortened URLs and track their usage with detailed statistics.',
      image: urlShortenerImage,
      technologies: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'EJS', icon: <TbTemplate /> },
        { name: 'JWT', icon: <BiLockAlt /> },
      ],
      features: [
        'JWT-based authentication',
        'Custom URL slugs',
        'Click tracking & analytics',
        'QR code generation',
        'User dashboard'
      ],
      github: 'https://github.com/RehmanAly14/Short-UrL/tree/1c01c94680cd4dfa4b86a44ff9244a534201982c',
      
    },
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-tertiary via-primary to-tertiary">
        <div className="absolute w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl animate-pulse -top-64 -right-64"></div>
        <div className="absolute w-[400px] h-[400px] bg-secondary/10 rounded-full blur-2xl animate-pulse delay-300 bottom-0 -left-32"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading">Featured Projects</h2>
          <p className="subheading">Some Things I've Built</p>
        </motion.div>

        <div className="grid gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center bg-primary/50 backdrop-blur-sm rounded-2xl p-8 border border-secondary/10">
               
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="bg-tertiary p-3 rounded-full text-secondary hover:bg-secondary hover:text-primary transition-colors duration-300"
                    >
                      <FaGithub className="text-2xl" />
                    </motion.a>
                   
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-textPrimary group-hover:text-secondary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-textSecondary">
                    {project.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-textPrimary">Key Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 text-textSecondary"
                        >
                          <span className="text-secondary">▹</span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 bg-tertiary px-3 py-1 rounded-full group-hover:bg-secondary/10 transition-colors duration-300"
                      >
                        <span className="text-secondary text-lg">{tech.icon}</span>
                        <span className="text-textSecondary text-sm">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 