import {delay, motion} from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100 , opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay
  }
}
});

const Hero = () => {
  return (
    <div className="borer-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
               <div className="flex flex-col items-center lg:items-start">
                     <motion.h1
                     variants={container(0)} 
                     initial="hidden"
                     animate="visible"
                       className="text-white pb-16 text-6xl  tracking-tight lg:mt-16 lg:text-8xl">S E E N U . A</motion.h1>
                     
                     <motion.h4
                     variants={container(0.5)} 
                     initial="hidden"
                     animate="visible"
                      className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
                       >
                       Full stack Developer
                       </motion.h4>

                     <motion.p
                     variants={container(1)} 
                     initial="hidden"
                     animate="visible"
                     
                     className="my-2 max-w-xl py tracking-tighter-6 text-white mt-12">Motivated and dedicated Full stack Developer with a solid
foundation in programming principles and a passion for creating
efficient, reliable, and scalable applications. Proficient in Java and
SQL with strong problem-solving skills and a proven ability to work
effectively in team environments. Eager to contribute technical
expertise and creativity to innovative software development projects.</motion.p>
               </div>

            </div>

        </div>
    </div>
  )
}
export default Hero;