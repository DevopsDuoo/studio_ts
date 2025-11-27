import { motion } from 'framer-motion'
import './ArchitecturalBackground.css'

const ArchitecturalBackground = () => {
  return (
    <div className="architectural-background">
      {/* Animated Grid Lines */}
      <div className="grid-lines">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="grid-line vertical"
            style={{ left: `${i * 5}%` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2, delay: i * 0.05 }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="grid-line horizontal"
            style={{ top: `${i * 5}%` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2, delay: i * 0.05 }}
          />
        ))}
      </div>

      {/* Animated Building Outlines */}
      <svg className="building-svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        {/* Building 1 - Modern Skyscraper */}
        <motion.g
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.15, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <path
            d="M 100 1080 L 100 300 L 200 280 L 200 1080 Z"
            fill="none"
            stroke="#c9a961"
            strokeWidth="2"
          />
          {[...Array(20)].map((_, i) => (
            <motion.rect
              key={`w1-${i}`}
              x="110"
              y={300 + i * 38}
              width="30"
              height="25"
              fill="none"
              stroke="#c9a961"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, delay: i * 0.1, repeat: Infinity }}
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <motion.rect
              key={`w2-${i}`}
              x="160"
              y={300 + i * 38}
              width="30"
              height="25"
              fill="none"
              stroke="#c9a961"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, delay: i * 0.1 + 0.5, repeat: Infinity }}
            />
          ))}
        </motion.g>

        {/* Building 2 - Residential Complex */}
        <motion.g
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.12, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <path
            d="M 1700 1080 L 1700 500 L 1750 500 L 1775 480 L 1800 500 L 1850 500 L 1850 1080 Z"
            fill="none"
            stroke="#2c3e50"
            strokeWidth="2"
          />
          <path
            d="M 1750 500 L 1775 480 L 1800 500"
            fill="none"
            stroke="#2c3e50"
            strokeWidth="2"
          />
          {[...Array(15)].map((_, i) => (
            <motion.rect
              key={`w3-${i}`}
              x="1710"
              y={520 + i * 36}
              width="25"
              height="22"
              fill="none"
              stroke="#2c3e50"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.08, 0.2, 0.08] }}
              transition={{ duration: 4, delay: i * 0.15, repeat: Infinity }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <motion.rect
              key={`w4-${i}`}
              x="1815"
              y={520 + i * 36}
              width="25"
              height="22"
              fill="none"
              stroke="#2c3e50"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.08, 0.2, 0.08] }}
              transition={{ duration: 4, delay: i * 0.15 + 0.7, repeat: Infinity }}
            />
          ))}
        </motion.g>

        {/* Building 3 - Commercial Building */}
        <motion.g
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.1 }}
        >
          <path
            d="M 850 1080 L 850 400 L 1050 400 L 1050 1080 Z"
            fill="none"
            stroke="#c9a961"
            strokeWidth="2"
          />
          {[...Array(5)].map((_, row) =>
            [...Array(4)].map((_, col) => (
              <motion.rect
                key={`w5-${row}-${col}`}
                x={870 + col * 45}
                y={430 + row * 130}
                width="35"
                height="100"
                fill="none"
                stroke="#c9a961"
                strokeWidth="1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.1, 0.25, 0.1] }}
                transition={{
                  duration: 3.5,
                  delay: (row * 4 + col) * 0.2,
                  repeat: Infinity,
                }}
              />
            ))
          )}
        </motion.g>

        {/* Floating Blueprint Lines */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          <motion.path
            d="M 300 200 L 600 200 L 600 400 L 500 500 L 300 500 Z"
            fill="none"
            stroke="#c9a961"
            strokeWidth="1"
            strokeDasharray="5,5"
            animate={{ strokeDashoffset: [0, -10] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle cx="300" cy="200" r="3" fill="#c9a961" />
          <motion.circle cx="600" cy="200" r="3" fill="#c9a961" />
          <motion.circle cx="600" cy="400" r="3" fill="#c9a961" />
          <motion.circle cx="500" cy="500" r="3" fill="#c9a961" />
          <motion.circle cx="300" cy="500" r="3" fill="#c9a961" />
        </motion.g>

        {/* Animated Measurement Lines */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          <motion.line
            x1="400"
            y1="150"
            x2="700"
            y2="150"
            stroke="#2c3e50"
            strokeWidth="1"
            animate={{ x2: [700, 720, 700] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.line x1="400" y1="145" x2="400" y2="155" stroke="#2c3e50" strokeWidth="1" />
          <motion.line x1="700" y1="145" x2="700" y2="155" stroke="#2c3e50" strokeWidth="1" />
        </motion.g>

        {/* Floating Architectural Symbols */}
        <motion.g
          animate={{ y: [0, -10, 0], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {/* Compass Rose */}
          <circle cx="1400" cy="200" r="30" fill="none" stroke="#c9a961" strokeWidth="1" />
          <line x1="1400" y1="170" x2="1400" y2="230" stroke="#c9a961" strokeWidth="1" />
          <line x1="1370" y1="200" x2="1430" y2="200" stroke="#c9a961" strokeWidth="1" />
          <polygon points="1400,170 1395,180 1405,180" fill="#c9a961" />
        </motion.g>

        {/* Scale Ruler */}
        <motion.g
          animate={{ opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <line x1="1200" y1="900" x2="1400" y2="900" stroke="#2c3e50" strokeWidth="2" />
          {[...Array(11)].map((_, i) => (
            <line
              key={`ruler-${i}`}
              x1={1200 + i * 20}
              y1="900"
              x2={1200 + i * 20}
              y2={i % 5 === 0 ? "915" : "908"}
              stroke="#2c3e50"
              strokeWidth="1"
            />
          ))}
        </motion.g>
      </svg>

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 3,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default ArchitecturalBackground
