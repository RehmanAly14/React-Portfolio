import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiServer, FiLayout } from 'react-icons/fi';
import img from '../../assests/IMG_20240408_005811_746.jpg';

const About = () => {
  const technologies = [
    'JavaScript (ES6+)',
    'React.js',
    'Node.js',
    'MongoDB',
    'Express.js',
    'TypeScript',
    'Next.js',
    'TailwindCSS'
  ];

  const experiences = [
    {
      icon: <FiCode className="text-2xl text-secondary" />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with modern frameworks and tools."
    },
    {
      icon: <FiServer className="text-2xl text-secondary" />,
      title: "Backend Development",
      description: "Creating robust server-side applications and RESTful APIs."
    },
    {
      icon: <FiDatabase className="text-2xl text-secondary" />,
      title: "Database Management",
      description: "Designing and optimizing database schemas for scalable applications."
    },
    {
      icon: <FiLayout className="text-2xl text-secondary" />,
      title: "UI/UX Design",
      description: "Crafting intuitive and visually appealing user experiences."
    }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-tertiary">
        <div className="absolute w-96 h-96 bg-secondary/5 rounded-full blur-3xl -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 bg-secondary/10 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading">About Me</h2>
          <p className="subheading max-w-2xl mx-auto">
            Passionate about creating meaningful digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative Frames */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-secondary/20 rounded-xl"
                style={{ transform: 'rotate(10deg)' }}
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-secondary/30 rounded-xl"
                style={{ transform: 'rotate(-5deg)' }}
              ></motion.div>

              {/* Main Image */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={img}
                  alt="Rehman"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60"></div>
              </div>

              {/* Floating Tech Icons */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-tertiary p-3 rounded-lg shadow-lg"
              >
                <FiCode className="text-2xl text-secondary" />
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-tertiary p-3 rounded-lg shadow-lg"
              >
                <FiDatabase className="text-2xl text-secondary" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4 text-textSecondary">
              <p className="leading-relaxed">
                Hello! I'm Rehman, a passionate MERN Stack Developer who loves building things that live on the internet. 
                My interest in web development started back when I decided to try customizing various web templates — turns 
                out hacking together a custom reblog button taught me a lot about HTML & CSS!
              </p>
              <p className="leading-relaxed">
                Fast-forward to today, and I've had the privilege of working on diverse projects. My main focus these 
                days is building accessible, inclusive products and digital experiences for various clients.
              </p>
            </div>

            {/* Experience Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary/50 p-6 rounded-lg backdrop-blur-sm border border-secondary/10 hover:border-secondary/30 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    {exp.icon}
                    <h3 className="text-lg font-semibold text-textPrimary">{exp.title}</h3>
                  </div>
                  <p className="text-textSecondary text-sm">{exp.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-semibold text-textPrimary mb-4">
                Technologies I've been working with:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-secondary">▹</span>
                    <span className="text-textSecondary hover:text-secondary transition-colors duration-300">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 