import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBuilding, FaHome, FaCouch, FaTree, FaPencilRuler, FaCube } from 'react-icons/fa'
import './Home.css'

const Home = () => {
  const [count, setCount] = useState({ projects: 0, clients: 0, years: 0 })

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    const counters = {
      projects: 150,
      clients: 200,
      years: 15
    }

    let step = 0
    const timer = setInterval(() => {
      step++
      setCount({
        projects: Math.floor((counters.projects / steps) * step),
        clients: Math.floor((counters.clients / steps) * step),
        years: Math.floor((counters.years / steps) * step)
      })

      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const services = [
    {
      icon: <FaHome />,
      title: 'Residential Design',
      description: 'Create your dream home with innovative and functional residential architecture tailored to your lifestyle.',
      link: '/services#residential'
    },
    {
      icon: <FaBuilding />,
      title: 'Commercial Architecture',
      description: 'Design inspiring commercial spaces that enhance productivity and reflect your brand identity.',
      link: '/services#commercial'
    },
    {
      icon: <FaCouch />,
      title: 'Interior Design',
      description: 'Transform interiors with elegant and practical design solutions that maximize space and comfort.',
      link: '/services#interior'
    },
    {
      icon: <FaTree />,
      title: 'Landscape Architecture',
      description: 'Create harmonious outdoor environments that blend nature with architectural excellence.',
      link: '/services#landscape'
    },
    {
      icon: <FaPencilRuler />,
      title: 'Urban Planning',
      description: 'Comprehensive urban design solutions for sustainable and livable communities.',
      link: '/services#urban'
    },
    {
      icon: <FaCube />,
      title: '3D Visualization',
      description: 'Bring your projects to life with stunning photorealistic 3D renderings and walkthroughs.',
      link: '/services#visualization'
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            Welcome to Architect Studio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Transforming visions into architectural masterpieces. We design spaces that inspire and endure.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-buttons"
          >
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
            <Link to="/portfolio" className="btn btn-secondary">View Portfolio</Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="stat-item"
          >
            <h2 className="stat-number">{count.projects}+</h2>
            <p className="stat-label">Projects Completed</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="stat-item"
          >
            <h2 className="stat-number">{count.clients}+</h2>
            <p className="stat-label">Happy Clients</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="stat-item"
          >
            <h2 className="stat-number">{count.years}+</h2>
            <p className="stat-label">Years of Excellence</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="stat-item"
          >
            <h2 className="stat-number">24/7</h2>
            <p className="stat-label">Support Available</p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="services-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="services-header"
          >
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive architectural solutions tailored to your vision and needs
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="service-card"
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <Link to={service.link} className="service-link">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="services-cta"
          >
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cta-title"
          >
            Ready to Transform Your Vision?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="cta-text"
          >
            Let's discuss how we can bring your architectural dreams to life
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/contact" className="btn btn-primary btn-large">Contact Us Today</Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
