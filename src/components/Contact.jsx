import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const result = await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        form.current,
        emailjsConfig.publicKey
      );

      if (result.text === 'OK') {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setError('Failed to send message. Please try again later.');
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/RehmanAly14', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/sherry-rehman-2a42aa355', label: 'LinkedIn' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/rehmanaly_14', label: 'Instagram' },
    { icon: <FaEnvelope />, url: 'mailto:rehmanaly250@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-tertiary to-primary">
        <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-secondary/5 rounded-full blur-[100px] top-0 -right-64"></div>
        <div className="absolute w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-secondary/10 rounded-full blur-[80px] bottom-0 -left-32"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="heading">Get In Touch</h2>
          <p className="subheading">Let's work together</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-tertiary/30 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-secondary/10"
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {success && (
                <div className="bg-green-500/10 border border-green-500/50 text-green-500 px-3 sm:px-4 py-2 sm:py-3 rounded text-sm sm:text-base">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-3 sm:px-4 py-2 sm:py-3 rounded text-sm sm:text-base">
                  {error}
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-textSecondary text-sm sm:text-base mb-1 sm:mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-3 sm:px-4 py-2 bg-tertiary/50 border border-textSecondary/20 rounded focus:outline-none focus:border-secondary text-textPrimary text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-textSecondary text-sm sm:text-base mb-1 sm:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-3 sm:px-4 py-2 bg-tertiary/50 border border-textSecondary/20 rounded focus:outline-none focus:border-secondary text-textPrimary text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-textSecondary text-sm sm:text-base mb-1 sm:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  rows="5"
                  className="w-full px-3 sm:px-4 py-2 bg-tertiary/50 border border-textSecondary/20 rounded focus:outline-none focus:border-secondary text-textPrimary text-sm sm:text-base resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed relative"
              >
                <span className={loading ? 'opacity-0' : 'opacity-100'}>
                  Send Message
                </span>
                {loading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 border-2 border-secondary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between bg-tertiary/30 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-secondary/10"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-textPrimary mb-3 sm:mb-4">
                Let's create something amazing together
              </h3>
              <p className="text-sm sm:text-base text-textSecondary mb-6 sm:mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-textPrimary mb-3 sm:mb-4">
                Connect with me
              </h4>
              <div className="flex space-x-4 sm:space-x-6">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl text-textSecondary hover:text-secondary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    title={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 