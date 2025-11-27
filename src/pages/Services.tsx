import { motion } from 'framer-motion'
import { FaBuilding, FaHome, FaCouch, FaTree, FaPencilRuler, FaCube, FaCheck } from 'react-icons/fa'
import './Services.css'

// Animated SVG Components for each service
const ResidentialAnimation = () => (
  <svg viewBox="0 0 400 400" className="service-animation">
    <defs>
      <linearGradient id="houseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c9a961" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#2c3e50" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* House Base */}
    <motion.rect
      x="100" y="200" width="200" height="150"
      fill="url(#houseGrad)" stroke="#c9a961" strokeWidth="2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    />
    {/* Roof */}
    <motion.path
      d="M 90 200 L 200 120 L 310 200 Z"
      fill="#2c3e50" stroke="#c9a961" strokeWidth="2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    />
    {/* Windows */}
    {[0, 1].map((row) =>
      [0, 1, 2].map((col) => (
        <motion.rect
          key={`${row}-${col}`}
          x={130 + col * 50}
          y={230 + row * 50}
          width="30" height="35"
          fill="#c9a961" opacity="0.3" stroke="#2c3e50" strokeWidth="1"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, delay: col * 0.2 + row * 0.3, repeat: Infinity }}
        />
      ))
    )}
    {/* Door */}
    <motion.rect
      x="175" y="290" width="50" height="60"
      fill="#2c3e50" stroke="#c9a961" strokeWidth="2"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      style={{ transformOrigin: 'bottom' }}
    />
  </svg>
)

const CommercialAnimation = () => (
  <svg viewBox="0 0 400 400" className="service-animation">
    {/* Skyscraper */}
    <motion.rect
      x="150" y="80" width="100" height="270"
      fill="#2c3e50" opacity="0.7" stroke="#c9a961" strokeWidth="2"
      initial={{ height: 0, y: 350 }}
      animate={{ height: 270, y: 80 }}
      transition={{ duration: 1.5 }}
    />
    {/* Windows Grid */}
    {[...Array(9)].map((_, row) =>
      [...Array(3)].map((_, col) => (
        <motion.rect
          key={`${row}-${col}`}
          x={165 + col * 25}
          y={100 + row * 28}
          width="18" height="20"
          fill="#c9a961" opacity="0.4"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, delay: (row * 3 + col) * 0.1, repeat: Infinity }}
        />
      ))
    )}
    {/* Antenna */}
    <motion.line
      x1="200" y1="80" x2="200" y2="40"
      stroke="#c9a961" strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    />
    <motion.circle
      cx="200" cy="40" r="4" fill="#c9a961"
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </svg>
)

const InteriorAnimation = () => (
  <svg viewBox="0 0 400 400" className="service-animation">
    {/* Room Perspective */}
    <motion.path
      d="M 100 100 L 300 100 L 350 200 L 350 350 L 50 350 L 50 200 Z"
      fill="#f8f9fa" stroke="#2c3e50" strokeWidth="2" opacity="0.8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 1 }}
    />
    {/* Furniture - Sofa */}
    <motion.rect
      x="120" y="250" width="160" height="80" rx="10"
      fill="#c9a961" opacity="0.6" stroke="#2c3e50" strokeWidth="2"
      initial={{ x: 400 }}
      animate={{ x: 120 }}
      transition={{ duration: 1, delay: 0.5 }}
    />
    {/* Table */}
    <motion.ellipse
      cx="200" cy="300" rx="50" ry="20"
      fill="#2c3e50" opacity="0.5"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    />
    {/* Lamp */}
    <motion.line
      x1="280" y1="200" x2="280" y2="260"
      stroke="#2c3e50" strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.6, delay: 1.3 }}
    />
    <motion.path
      d="M 260 180 L 280 200 L 300 180 Z"
      fill="#c9a961" opacity="0.6"
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </svg>
)

const LandscapeAnimation = () => (
  <svg viewBox="0 0 400 400" className="service-animation">
    {/* Ground */}
    <motion.ellipse
      cx="200" cy="350" rx="180" ry="30"
      fill="#c9a961" opacity="0.3"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1 }}
    />
    {/* Trees */}
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <motion.rect
          x={120 + i * 80} y="280" width="15" height="70"
          fill="#2c3e50"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: i * 0.3 }}
          style={{ transformOrigin: 'bottom' }}
        />
        <motion.circle
          cx={127.5 + i * 80} cy="270" r="30"
          fill="#c9a961" opacity="0.5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: i * 0.3 + 0.4 }}
        />
      </g>
    ))}
    {/* Path */}
    <motion.path
      d="M 200 350 Q 180 280, 160 200"
      fill="none" stroke="#2c3e50" strokeWidth="3" strokeDasharray="5,5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 0.8 }}
    />
  </svg>
)

const UrbanAnimation = () => (
  <svg viewBox="0 0 400 400" className="service-animation">
    {/* City Skyline */}
    {[
      { x: 80, h: 180 },
      { x: 140, h: 220 },
      { x: 200, h: 160 },
      { x: 260, h: 200 }
    ].map((building, i) => (
      <motion.rect
        key={i}
        x={building.x} y={350 - building.h} width="50" height={building.h}
        fill="#2c3e50" opacity="0.7" stroke="#c9a961" strokeWidth="1"
        initial={{ height: 0, y: 350 }}
        animate={{ height: building.h, y: 350 - building.h }}
        transition={{ duration: 1, delay: i * 0.2 }}
      />
    ))}
    {/* Street Grid */}
    <motion.line
      x1="50" y1="350" x2="350" y2="350"
      stroke="#c9a961" strokeWidth="3"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.8 }}
    />
  </svg>
)

const VisualizationAnimation = () => (
  <svg viewBox="0 0 400 400" className="service-animation">
    {/* 3D Cube */}
    <motion.path
      d="M 200 150 L 280 190 L 280 270 L 200 310 L 120 270 L 120 190 Z"
      fill="#c9a961" opacity="0.3" stroke="#2c3e50" strokeWidth="2"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.3, scale: 1, rotateY: 360 }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
    />
    <motion.path
      d="M 200 150 L 280 190 L 200 230 L 120 190 Z"
      fill="#2c3e50" opacity="0.5" stroke="#c9a961" strokeWidth="2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
    />
    <motion.path
      d="M 200 230 L 280 270 L 280 190 L 200 150 Z"
      fill="#c9a961" opacity="0.4" stroke="#2c3e50" strokeWidth="2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 1, delay: 0.3 }}
    />
    {/* Wireframe */}
    {[0, 1, 2, 3].map((i) => (
      <motion.circle
        key={i}
        cx={200 + (i % 2) * 80 - 40} cy={190 + Math.floor(i / 2) * 80}
        r="5" fill="#c9a961"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
      />
    ))}
  </svg>
)

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
      ],
      animation: <ResidentialAnimation />
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
      ],
      animation: <CommercialAnimation />
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
      ],
      animation: <InteriorAnimation />
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
      ],
      animation: <LandscapeAnimation />
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
      ],
      animation: <UrbanAnimation />
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
      ],
      animation: <VisualizationAnimation />
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
                <div className="service-animation">
                  {service.animation}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services
