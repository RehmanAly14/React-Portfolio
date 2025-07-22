import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
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
        <div className="absolute w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -top-48 -right-48 animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bg-secondary/10 rounded-full blur-2xl bottom-0 -left-20 animate-pulse delay-1000"></div>
      </div>

      {/* Background Sphere */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20">
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <Sphere args={[1, 100, 200]}>
            <meshStandardMaterial color="#64FFDA" wireframe />
          </Sphere>
        </Canvas>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p
              variants={itemVariants}
              className="text-secondary font-mono mb-4 text-lg"
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="heading"
            >
              Rehman.
            </motion.h1>
            <motion.div
              variants={itemVariants}
              className="subheading"
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
              className="mt-6"
            >
             <p className="text-textSecondary text-lg mb-8 max-w-xl">
                  I'm a MERN Stack Developer specializing in building exceptional digital experiences.
                  Currently, I'm focused on building accessible, human-centered products.
                </p>
              
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex space-x-4"
            >
              <a href="#projects" className="btn-primary">
                Check out my work!
              </a>
              <a href="#contact" className="btn-primary bg-secondary/10">
                Get in touch
              </a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group hidden lg:block"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
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
                className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full blur-md"
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
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/30 rounded-full blur-md"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home; 