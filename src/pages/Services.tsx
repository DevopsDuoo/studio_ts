import { motion } from 'framer-motion'
import { FaBuilding, FaHome, FaCouch, FaTree, FaPencilRuler, FaCube, FaCheck } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const services = [
    {
      id: 'residential',
      icon: <FaHome />,
      title: 'Residential Design',
      description: 'Transform your living space into a personalized sanctuary that reflects your unique style and meets your family\'s needs.',
      features: [
        'Custom home design',
        'Home renovation & remodeling',
        'Space optimization',
        'Sustainable design solutions',
        'Smart home integration'
      ]
    },
    {
      id: 'commercial',
      icon: <FaBuilding />,
      title: 'Commercial Architecture',
      description: 'Create functional and inspiring commercial spaces that enhance your brand identity and boost productivity.',
      features: [
        'Office space design',
        'Retail & hospitality',
        'Mixed-use developments',
        'Adaptive reuse projects',
        'Corporate headquarters'
      ]
    },
    {
      id: 'interior',
      icon: <FaCouch />,
      title: 'Interior Design',
      description: 'Elevate your interiors with sophisticated design solutions that blend aesthetics with functionality.',
      features: [
        'Space planning & layout',
        'Material selection',
        'Lighting design',
        'Furniture & fixtures',
        'Color consultation'
      ]
    },
    {
      id: 'landscape',
      icon: <FaTree />,
      title: 'Landscape Architecture',
      description: 'Design outdoor environments that harmonize with nature and enhance the quality of life.',
      features: [
        'Site analysis & planning',
        'Sustainable landscapes',
        'Garden design',
        'Hardscape elements',
        'Water features'
      ]
    },
    {
      id: 'urban',
      icon: <FaPencilRuler />,
      title: 'Urban Planning',
      description: 'Develop comprehensive urban design strategies for sustainable and livable communities.',
      features: [
        'Master planning',
        'Zoning & regulations',
        'Transportation planning',
        'Public space design',
        'Community engagement'
      ]
    },
    {
      id: 'visualization',
      icon: <FaCube />,
      title: '3D Visualization',
      description: 'Bring your vision to life with photorealistic renderings and immersive virtual experiences.',
      features: [
        'Photorealistic renderings',
        '3D walkthroughs',
        'Virtual reality tours',
        'Animation services',
        'Interactive presentations'
      ]
    }
  ]

  return (
    <div className="services-page">
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="page-hero-subtitle"
          >
            Comprehensive architectural solutions for every vision
          </motion.p>
        </div>
      </section>

      {/* Services Details */}
      <section className="services-details">
        <div className="services-details-container">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`service-detail ${index % 2 === 1 ? 'reverse' : ''}`}
            >
              <div className="service-detail-content">
                <div className="service-detail-icon">{service.icon}</div>
                <h2 className="service-detail-title">{service.title}</h2>
                <p className="service-detail-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheck className="feature-check" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="service-detail-image">
                <div className="image-placeholder"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services
