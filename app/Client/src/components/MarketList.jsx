import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const MarketList = ({ data }) => {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="visible"
      className='grid grid-cols-5 gap-2.5'>
      {data.map((x, index) => (
        <motion.li key={index} className="bg-white" variants={item}>
          {x.date}
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default MarketList;