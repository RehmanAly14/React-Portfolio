import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import img from '../../assests/IMG_20240408_005811_746.jpg';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="section-padding min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-primary to-tertiary">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-secondary/5 rounded-full blur-3xl -top-48 -right-48 animate-pulse"></div>
        <div className="absolute w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-secondary/10 rounded-full blur-2xl bottom-0 -left-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10 px-4">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl text-center md:text-left mt-8 md:mt-0"
          >
            <motion.p
              variants={itemVariants}
              className="text-secondary font-mono mb-2 sm:mb-4 text-base sm:text-lg"
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="heading mb-2 sm:mb-4"
            >
              Rehman.
            </motion.h1>
            <motion.div
              variants={itemVariants}
              className="subheading mb-4 sm:mb-6"
            >
              <TypeAnimation
                sequence={[
                  'I build things for the web.',
                  2000,
                  'I create modern web applications.',
                  2000,
                  'I develop MERN stack solutions.',
                  2000,
                  'I design user experiences.',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-secondary to-blue-400 bg-clip-text text-transparent"
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="mt-4 sm:mt-6"
            >
             <p className="text-textSecondary text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0">
                I'm a MERN Stack Developer specializing in building exceptional digital experiences.
                Currently, I'm focused on building accessible, human-centered products.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
            >
              <a href="#projects" className="btn-primary w-full sm:w-auto text-center">
                Check out my work!
              </a>
              <a href="#contact" className="btn-primary bg-secondary/10 w-full sm:w-auto text-center">
                Get in touch
              </a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group w-[250px] sm:w-[280px] md:w-[320px] lg:w-[380px] mx-auto"
          >
            <div className="relative aspect-square">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-secondary/20 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-tertiary rounded-2xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-300"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-secondary/20 to-primary rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={img}
                  alt="Rehman"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute -top-4 -right-4 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-secondary/20 rounded-full blur-md"
              ></motion.div>
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute -bottom-4 -left-4 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-secondary/30 rounded-full blur-md"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home; 