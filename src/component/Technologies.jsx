import { RiReactjsLine } from "react-icons/ri";
import {SiMongodb } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiHtml5 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';

import {delay, motion} from "framer-motion";
const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
export const Technologies = () => {
  return (
    <div className="select-text">
    <div className="border-b border-neutral-800 pb-35">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap item-center justify-center gap-4">
        <motion.div 
        variants={iconVarients(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
         variants={iconVarients(3)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-600"/>
        </motion.div>
        <motion.div 
        variants={iconVarients(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCss3 className="text-7xl text-blue-700"/>
        </motion.div>
        <motion.div 
        variants={iconVarients(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-600"/>
        </motion.div>
        <motion.div 
        variants={iconVarients(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiHtml5 className="text-7xl text-orange-600"/>
        </motion.div>
        <motion.div 
        variants={iconVarients(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiJavascript className="text-7xl text-yellow-300"/>
        </motion.div>
      </div>
    </div>
    </div>
  )
}
