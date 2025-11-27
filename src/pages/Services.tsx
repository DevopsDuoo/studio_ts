import { motion } from 'framer-motion'
import { FaBuilding, FaHome, FaCouch, FaTree, FaPencilRuler, FaCube, FaCheck } from 'react-icons/fa'
import './Services.css'

// Minimal Professional SVG Animations
const ResidentialAnimation = () => (
  <motion.svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* House Outline */}
    <motion.path
      d="M 200 80 L 320 160 L 320 320 L 80 320 L 80 160 Z"
      stroke="#c9a961"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    {/* Roof */}
    <motion.path
      d="M 60 160 L 200 60 L 340 160"
      stroke="#c9a961"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
    />
    {/* Door */}
    <motion.rect
      x="170" y="240" width="60" height="80"
      stroke="#c9a961" strokeWidth="2.5" rx="2"
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
      style={{ transformOrigin: "center bottom", transformBox: "fill-box" }}
    />
    {/* Windows */}
    <motion.rect x="100" y="180" width="50" height="50" stroke="#c9a961" strokeWidth="2.5"
      initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.5, ease: "backOut" }}
      style={{ transformOrigin: "center", transformBox: "fill-box" }}
    />
    <motion.rect x="250" y="180" width="50" height="50" stroke="#c9a961" strokeWidth="2.5"
      initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.7, ease: "backOut" }}
      style={{ transformOrigin: "center", transformBox: "fill-box" }}
    />
    {/* Window dividers */}
    <motion.line x1="125" y1="180" x2="125" y2="230" stroke="#c9a961" strokeWidth="1.5" opacity="0.6"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 2 }} />
    <motion.line x1="100" y1="205" x2="150" y2="205" stroke="#c9a961" strokeWidth="1.5" opacity="0.6"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 2 }} />
    <motion.line x1="275" y1="180" x2="275" y2="230" stroke="#c9a961" strokeWidth="1.5" opacity="0.6"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 2.1 }} />
    <motion.line x1="250" y1="205" x2="300" y2="205" stroke="#c9a961" strokeWidth="1.5" opacity="0.6"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 2.1 }} />
  </motion.svg>
);

const CommercialAnimation = () => (
  <motion.svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Base Line */}
    <motion.line x1="40" y1="340" x2="360" y2="340" stroke="#c9a961" strokeWidth="2"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.8 }} />
    
    {/* Main Tower */}
    <motion.rect x="140" y="60" width="120" height="280" stroke="#c9a961" strokeWidth="3"
      strokeLinecap="round" strokeLinejoin="round"
      initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      style={{ transformOrigin: "center bottom", transformBox: "fill-box" }}
    />
    
    {/* Side Buildings */}
    <motion.rect x="80" y="160" width="60" height="180" stroke="#c9a961" strokeWidth="2.5"
      initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      style={{ transformOrigin: "center bottom", transformBox: "fill-box" }}
    />
    <motion.rect x="260" y="200" width="60" height="140" stroke="#c9a961" strokeWidth="2.5"
      initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      style={{ transformOrigin: "center bottom", transformBox: "fill-box" }}
    />
    
    {/* Window Grid */}
    {[...Array(8)].map((_, row) => 
      [...Array(3)].map((_, col) => (
        <motion.rect
          key={`main-${row}-${col}`}
          x={155 + col * 30} y={80 + row * 30}
          width="20" height="20" fill="#c9a961" opacity="0"
          animate={{ opacity: [0, 0.4, 0.7, 0.4] }}
          transition={{
            duration: 3, delay: 1.5 + (row * 0.1) + (col * 0.05),
            repeat: Infinity, repeatType: "reverse"
          }}
        />
      ))
    )}
  </motion.svg>
);

const InteriorAnimation = () => (
  <motion.svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Room Perspective */}
    <motion.path d="M 60 100 L 200 60 L 340 100 L 340 340 L 60 340 Z"
      stroke="#c9a961" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    
    {/* Floor Lines */}
    <motion.line x1="60" y1="340" x2="200" y2="300" stroke="#c9a961" strokeWidth="1.5" opacity="0.3"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1 }} />
    <motion.line x1="340" y1="340" x2="200" y2="300" stroke="#c9a961" strokeWidth="1.5" opacity="0.3"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.1 }} />
    
    {/* Sofa */}
    <motion.path d="M 100 240 L 100 260 L 180 260 L 180 240 M 90 240 L 90 270 L 190 270 L 190 240"
      stroke="#c9a961" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
    />
    
    {/* Table */}
    <motion.ellipse cx="250" cy="260" rx="40" ry="20" stroke="#c9a961" strokeWidth="2.5"
      initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.8, ease: "backOut" }}
      style={{ transformOrigin: "center", transformBox: "fill-box" }}
    />
    
    {/* Lamp */}
    <motion.g initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}>
      <line x1="280" y1="180" x2="280" y2="220" stroke="#c9a961" strokeWidth="2" />
      <motion.path d="M 260 180 L 300 180 L 290 200 L 270 200 Z"
        stroke="#c9a961" strokeWidth="2" fill="none"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.g>
    
    {/* Window */}
    <motion.rect x="270" y="120" width="50" height="60" stroke="#c9a961" strokeWidth="2"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 2 }} />
    <motion.line x1="295" y1="120" x2="295" y2="180" stroke="#c9a961" strokeWidth="1.5" opacity="0.5"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 2.3 }} />
    <motion.line x1="270" y1="150" x2="320" y2="150" stroke="#c9a961" strokeWidth="1.5" opacity="0.5"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 2.3 }} />
  </motion.svg>
);

const LandscapeAnimation = () => (
  <motion.svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Ground */}
    <motion.path d="M 40 280 Q 100 270 200 280 T 360 280"
      stroke="#c9a961" strokeWidth="2.5" strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    
    {/* Tree 1 */}
    <motion.g initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1, ease: "backOut" }}
      style={{ transformOrigin: "120px 280px", transformBox: "fill-box" }}>
      <line x1="120" y1="280" x2="120" y2="200" stroke="#c9a961" strokeWidth="3" strokeLinecap="round" />
      <motion.circle cx="120" cy="180" r="35" stroke="#c9a961" strokeWidth="2.5"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "center", transformBox: "fill-box" }}
      />
      <circle cx="105" cy="190" r="25" stroke="#c9a961" strokeWidth="2" opacity="0.6" />
      <circle cx="135" cy="190" r="25" stroke="#c9a961" strokeWidth="2" opacity="0.6" />
    </motion.g>
    
    {/* Tree 2 */}
    <motion.g initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1.3, ease: "backOut" }}
      style={{ transformOrigin: "280px 280px", transformBox: "fill-box" }}>
      <line x1="280" y1="280" x2="280" y2="180" stroke="#c9a961" strokeWidth="3" strokeLinecap="round" />
      <motion.circle cx="280" cy="155" r="40" stroke="#c9a961" strokeWidth="2.5"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "center", transformBox: "fill-box" }}
      />
      <circle cx="260" cy="170" r="28" stroke="#c9a961" strokeWidth="2" opacity="0.6" />
      <circle cx="300" cy="170" r="28" stroke="#c9a961" strokeWidth="2" opacity="0.6" />
    </motion.g>
    
    {/* Path */}
    <motion.path d="M 200 280 Q 210 240 220 200 Q 225 180 230 140"
      stroke="#c9a961" strokeWidth="2" strokeDasharray="8 8" strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }}
      transition={{ duration: 2, delay: 1.8, ease: "easeInOut" }}
    />
    
    {/* Bench */}
    <motion.g initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}>
      <rect x="170" y="260" width="60" height="8" stroke="#c9a961" strokeWidth="2" rx="2" />
      <line x1="180" y1="268" x2="180" y2="280" stroke="#c9a961" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="220" y1="268" x2="220" y2="280" stroke="#c9a961" strokeWidth="2.5" strokeLinecap="round" />
    </motion.g>
    
    {/* Sun */}
    <motion.circle cx="320" cy="100" r="25" stroke="#c9a961" strokeWidth="2"
      initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.8 }}
      transition={{ duration: 1, delay: 2.5, ease: "backOut" }}
      style={{ transformOrigin: "center", transformBox: "fill-box" }}
    />
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ duration: 0.8, delay: 2.8 }}>
      {[...Array(8)].map((_, i) => (
        <line key={i} x1="320" y1="100" x2="320" y2="70" stroke="#c9a961" strokeWidth="2" strokeLinecap="round"
          style={{ transform: `rotate(${i * 45}deg)`, transformOrigin: "320px 100px" }}
        />
      ))}
    </motion.g>
  </motion.svg>
);

const UrbanAnimation = () => (
  <motion.svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Base Line */}
    <motion.line x1="40" y1="320" x2="360" y2="320" stroke="#c9a961" strokeWidth="3" strokeLinecap="round"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} />
    
    {/* Buildings */}
    <motion.rect x="60" y="220" width="50" height="100" stroke="#c9a961" strokeWidth="2.5" strokeLinejoin="round"
      initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      style={{ transformOrigin: "center bottom", transformBox: "fill-box" }}
    />
    <motion.rect x="120" y="160" width="45" height="160" stroke="#c9a961" strokeWidth="2.5" strokeLinejoin="round"
      initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      style={{ transformOrigin: "center bottom", transformBox: "fill-box" }}
    />
    <motion.rect x="175" y="80" width="50" height="240" stroke="#c9a961" strokeWidth="3" strokeLinejoin="round"
      initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
      style={{ transformOrigin: "center bottom", transformBox: "fill-box" }}
    />
    <motion.rect x="235" y="180" width="45" height="140" stroke="#c9a961" strokeWidth="2.5" strokeLinejoin="round"
      initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
      style={{ transformOrigin: "center bottom", transformBox: "fill-box" }}
    />
    <motion.rect x="290" y="240" width="50" height="80" stroke="#c9a961" strokeWidth="2.5" strokeLinejoin="round"
      initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
      style={{ transformOrigin: "center bottom", transformBox: "fill-box" }}
    />
    
    {/* Windows on tallest building */}
    {[...Array(7)].map((_, row) => 
      [...Array(2)].map((_, col) => (
        <motion.rect key={`b3-${row}-${col}`}
          x={185 + col * 20} y={100 + row * 30} width="10" height="15"
          fill="#c9a961" opacity="0"
          animate={{ opacity: [0, 0.5, 0.8, 0.5] }}
          transition={{
            duration: 2.5, delay: 1.5 + (row * 0.08),
            repeat: Infinity, repeatType: "reverse"
          }}
        />
      ))
    )}
    
    {/* Antenna */}
    <motion.line x1="200" y1="80" x2="200" y2="50" stroke="#c9a961" strokeWidth="2" strokeLinecap="round"
      initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.9, ease: "easeOut" }}
      style={{ transformOrigin: "center bottom", transformBox: "fill-box" }}
    />
    <motion.circle cx="200" cy="50" r="4" fill="#c9a961"
      initial={{ scale: 0 }} animate={{ scale: [0, 1.5, 1] }}
      transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
      style={{ transformOrigin: "center", transformBox: "fill-box" }}
    />
  </motion.svg>
);

const VisualizationAnimation = () => (
  <motion.svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 3D Isometric Cube */}
    <motion.g animate={{ rotateY: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
      {/* Front Face */}
      <motion.path d="M 150 180 L 250 180 L 250 280 L 150 280 Z"
        stroke="#c9a961" strokeWidth="2.5" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      {/* Top Face */}
      <motion.path d="M 150 180 L 200 140 L 300 140 L 250 180 Z"
        stroke="#c9a961" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(201, 169, 97, 0.05)"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
      />
      {/* Right Face */}
      <motion.path d="M 250 180 L 300 140 L 300 240 L 250 280 Z"
        stroke="#c9a961" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(201, 169, 97, 0.08)"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
      />
      {/* Grid Lines */}
      <motion.line x1="200" y1="220" x2="200" y2="160" stroke="#c9a961" strokeWidth="1.5" opacity="0.4"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 2 }} />
      <motion.line x1="150" y1="230" x2="250" y2="230" stroke="#c9a961" strokeWidth="1.5" opacity="0.4"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 2.1 }} />
      <motion.line x1="275" y1="210" x2="225" y2="170" stroke="#c9a961" strokeWidth="1.5" opacity="0.4"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 2.2 }} />
    </motion.g>
    
    {/* Corner Points */}
    <motion.circle cx="150" cy="180" r="4" fill="#c9a961"
      initial={{ scale: 0 }} animate={{ scale: [0, 1.3, 1] }} transition={{ duration: 0.6, delay: 2.5, ease: "backOut" }} />
    <motion.circle cx="250" cy="180" r="4" fill="#c9a961"
      initial={{ scale: 0 }} animate={{ scale: [0, 1.3, 1] }} transition={{ duration: 0.6, delay: 2.6, ease: "backOut" }} />
    <motion.circle cx="250" cy="280" r="4" fill="#c9a961"
      initial={{ scale: 0 }} animate={{ scale: [0, 1.3, 1] }} transition={{ duration: 0.6, delay: 2.7, ease: "backOut" }} />
    <motion.circle cx="150" cy="280" r="4" fill="#c9a961"
      initial={{ scale: 0 }} animate={{ scale: [0, 1.3, 1] }} transition={{ duration: 0.6, delay: 2.8, ease: "backOut" }} />
    <motion.circle cx="200" cy="140" r="4" fill="#c9a961"
      initial={{ scale: 0 }} animate={{ scale: [0, 1.3, 1] }} transition={{ duration: 0.6, delay: 2.9, ease: "backOut" }} />
    <motion.circle cx="300" cy="140" r="4" fill="#c9a961"
      initial={{ scale: 0 }} animate={{ scale: [0, 1.3, 1] }} transition={{ duration: 0.6, delay: 3.0, ease: "backOut" }} />
    <motion.circle cx="300" cy="240" r="4" fill="#c9a961"
      initial={{ scale: 0 }} animate={{ scale: [0, 1.3, 1] }} transition={{ duration: 0.6, delay: 3.1, ease: "backOut" }} />
    
    {/* Measurement Lines */}
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ duration: 0.8, delay: 3.5 }}>
      <line x1="130" y1="180" x2="130" y2="280" stroke="#c9a961" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="125" y1="180" x2="135" y2="180" stroke="#c9a961" strokeWidth="1.5" />
      <line x1="125" y1="280" x2="135" y2="280" stroke="#c9a961" strokeWidth="1.5" />
    </motion.g>
    
    {/* Orbit Circle */}
    <motion.circle cx="200" cy="210" r="120" stroke="#c9a961" strokeWidth="1" opacity="0.15"
      initial={{ scale: 0 }} animate={{ scale: 1 }}
      transition={{ duration: 2, delay: 1, ease: "easeOut" }}
      style={{ transformOrigin: "center", transformBox: "fill-box" }}
    />
  </motion.svg>
);

function Services() {
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
            className="page-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="page-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive architectural solutions tailored to your vision
          </motion.p>
        </div>
      </section>

      {/* Services Details */}
      <section className="services-details">
        <div className="services-details-container">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`service-detail ${index % 2 === 1 ? 'reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="service-detail-content">
                <div className="service-detail-icon">{service.icon}</div>
                <h2 className="service-detail-title">{service.title}</h2>
                <p className="service-detail-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheck />
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
