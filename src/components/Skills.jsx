import { motion, useInView } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiRedux, SiGit } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { useRef } from 'react';

const FloatingSkill = ({ icon, name, index, containerHeight }) => {
  const yOffset = (index * (containerHeight / 10)) % (containerHeight - 100);
  
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ 
        x: [-100, window.innerWidth],
        y: [yOffset, yOffset + Math.sin(index) * 20],
        opacity: [0, 1, 1, 0]
      }}
      transition={{
        duration: 20 + Math.random() * 10,
        repeat: Infinity,
        ease: "linear",
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }}
      className="absolute flex items-center gap-2 bg-gradient-to-r from-tertiary/30 to-transparent backdrop-blur-sm px-6 py-3 rounded-full border border-secondary/20"
      style={{
        top: yOffset,
        left: "-100px",
        zIndex: 1
      }}
    >
      <span className="text-2xl text-secondary">{icon}</span>
      <span className="text-textSecondary text-sm font-medium">{name}</span>
    </motion.div>
  );
};

const SkillCard = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="bg-tertiary/30 backdrop-blur-sm rounded-xl p-6 border border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(100,255,218,0.1)] transform hover:-translate-y-1">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-secondary/10 rounded-lg transform group-hover:scale-110 transition-all duration-300">
              <span className="text-2xl text-secondary">{skill.icon}</span>
            </div>
            <div>
              <h4 className="text-textPrimary font-semibold">{skill.name}</h4>
              <p className="text-sm text-textSecondary">{skill.years}</p>
            </div>
          </div>
          <span className="text-secondary font-mono text-sm bg-secondary/5 px-3 py-1 rounded-full">
            {skill.level}%
          </span>
        </div>
        
        <div className="h-2 bg-tertiary/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-secondary via-secondary/70 to-secondary/50"
          />
        </div>
      </div>
    </motion.div>
  );
};

const CategoryTitle = ({ icon, title }) => (
  <div className="inline-flex items-center gap-3 bg-tertiary/30 backdrop-blur-sm px-6 py-3 rounded-full border border-secondary/20 mb-8">
    {icon}
    <h3 className="text-xl font-bold text-textPrimary">{title}</h3>
  </div>
);

const Skills = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const floatingSkills = [
    { icon: <FaReact />, name: 'React.js' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <SiJavascript />, name: 'JavaScript' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <SiRedux />, name: 'Redux' },
    { icon: <SiTailwindcss />, name: 'TailwindCSS' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiExpress />, name: 'Express.js' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <FaDatabase />, name: 'REST APIs' },
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode className="text-3xl text-secondary" />,
      skills: [
        { name: 'React.js', level: 90, icon: <FaReact />, years: '3 Years' },
        { name: 'Next.js', level: 85, icon: <SiNextdotjs />, years: '2 Years' },
        { name: 'JavaScript', level: 90, icon: <SiJavascript />, years: '4 Years' },
        { name: 'TypeScript', level: 80, icon: <SiTypescript />, years: '2 Years' },
        { name: 'Redux', level: 85, icon: <SiRedux />, years: '3 Years' },
        { name: 'TailwindCSS', level: 90, icon: <SiTailwindcss />, years: '2 Years' },
      ]
    },
    {
      title: "Backend Development",
      icon: <FaNodeJs className="text-3xl text-secondary" />,
      skills: [
        { name: 'Node.js', level: 85, icon: <FaNodeJs />, years: '3 Years' },
        { name: 'Express.js', level: 85, icon: <SiExpress />, years: '3 Years' },
        { name: 'MongoDB', level: 85, icon: <SiMongodb />, years: '3 Years' },
        { name: 'REST APIs', level: 90, icon: <FaDatabase />, years: '3 Years' },
      ]
    }
  ];

  const tools = [
    { name: 'VS Code', icon: <TbBrandVscode />, description: 'Primary IDE' },
    { name: 'Git', icon: <SiGit />, description: 'Version Control' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="relative min-h-screen py-20 px-4 md:px-8 lg:px-16 overflow-hidden bg-gradient-to-b from-primary via-tertiary to-primary"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] top-0 -right-64"></div>
        <div className="absolute w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] bottom-0 -left-32"></div>
      </div>

      {/* Floating Skills Container */}
      <div 
        ref={containerRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {floatingSkills.map((skill, index) => (
          <FloatingSkill 
            key={skill.name} 
            icon={skill.icon} 
            name={skill.name} 
            index={index}
            containerHeight={containerRef.current?.clientHeight || 1000}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading">Skills & Expertise</h2>
          <p className="subheading max-w-2xl mx-auto">
            A comprehensive showcase of my technical proficiency and years of hands-on experience in modern web development
          </p>
        </motion.div>

        <div className="grid gap-16 relative z-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              <CategoryTitle icon={category.icon} title={category.title} />
              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-textPrimary mb-8">Development Tools</h3>
          <div className="flex justify-center gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex flex-col items-center gap-2 group bg-tertiary/30 backdrop-blur-sm p-4 rounded-xl border border-secondary/10 hover:border-secondary/30 transition-all duration-300"
              >
                <div className="text-3xl text-secondary group-hover:text-secondary/80 transition-colors duration-300">
                  {tool.icon}
                </div>
                <span className="text-textPrimary font-medium group-hover:text-secondary transition-colors duration-300">
                  {tool.name}
                </span>
                <span className="text-sm text-textSecondary">
                  {tool.description}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 