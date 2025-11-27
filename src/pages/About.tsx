import { motion } from 'framer-motion'
import { FaAward, FaUsers, FaLightbulb, FaHeart } from 'react-icons/fa'
import './About.css'

const About = () => {
  const values = [
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'We push boundaries with cutting-edge design solutions'
    },
    {
      icon: <FaHeart />,
      title: 'Passion',
      description: 'Every project is crafted with dedication and enthusiasm'
    },
    {
      icon: <FaUsers />,
      title: 'Collaboration',
      description: 'We work closely with clients to bring their visions to life'
    },
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'Quality and attention to detail in everything we do'
    }
  ]

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="page-hero-title"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="page-hero-subtitle"
          >
            Creating exceptional spaces that inspire and endure
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="about-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="story-content"
          >
            <h2 className="section-title">Our Story</h2>
            <p className="story-text">
              Founded with a vision to transform the architectural landscape, Architect Studio has been at the forefront
              of innovative design for over 15 years. Our journey began with a simple belief: that great architecture
              has the power to transform lives and communities.
            </p>
            <p className="story-text">
              Today, we're proud to have completed over 150 projects, ranging from intimate residential spaces to
              large-scale commercial developments. Each project is a testament to our commitment to excellence,
              sustainability, and client satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="about-container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Our Values
          </motion.h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="value-card"
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="about-container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="team-intro"
          >
            Our diverse team of architects, designers, and engineers brings together decades of experience
            and a shared passion for creating exceptional spaces.
          </motion.p>
        </div>
      </section>
    </div>
  )
}

export default About
