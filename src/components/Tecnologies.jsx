import { SiJavascript } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import {RiReactjsLine} from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import net from "../assets/net.png"
import { SiMysql } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { motion } from "framer-motion"


const inconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition:{
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }

  }
})



const Tecnologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
      whileInView={{ opacity: 1, y: 0}}
      initial={{ opacity: 0, y: -100}}
      transition={{ duration: 1.5 }}
      className="my-20 text-center text-4xl"> 
      Tecnologias
      </motion.h1>

      <motion.div 
      whileInView={{ opacity: 1, x:0}}
      initial={{ opacity: 0, x: -100}}
      transition={{ duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        
        <motion.div 
        variants={inconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiJavascript className="text-7xl text-yellow-400"/>
        </motion.div>

        <motion.div 
        variants={inconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoNodejs className="text-7xl text-cyan-400"/>
        </motion.div>

        <motion.div 
        variants={inconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-blue-500"/>
        </motion.div>

        <motion.div 
        variants={inconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPhp className="text-7xl text-blue-400"/>
        </motion.div>

        <motion.div 
        variants={inconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaLaravel className="text-7xl text-red-600"/>
        </motion.div>

        <motion.div 
        variants={inconVariants(5.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <img className="w-[72px]" src={net}/>
        </motion.div>

      </motion.div>

      <motion.div 
       whileInView={{ opacity: 1, x:0}}
       initial={{ opacity: 0, x: -100}}
       transition={{ duration: 1.5}}
       className="flex flex-wrap items-center justify-center gap-4 mt-4">
       
        <motion.div 
        variants={inconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl text-sky-800"/>
        </motion.div>

        <motion.div 
        variants={inconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMicrosoftsqlserver className="text-7xl text-red-800"/>
        </motion.div>
       
      </motion.div>
    </div>
  )
}

export default Tecnologies
