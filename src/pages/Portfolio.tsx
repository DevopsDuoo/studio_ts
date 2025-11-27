import { motion } from 'framer-motion'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <div className="portfolio-page">
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
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="page-hero-subtitle"
          >
            Explore our collection of completed projects
          </motion.p>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="portfolio-content">
        <div className="portfolio-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="coming-soon"
          >
            <h2>Portfolio Coming Soon</h2>
            <p>We're currently curating our best projects to showcase here.</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
