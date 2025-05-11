import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Hero = () => {
  return (
    <div className="  px-4 py-70 text-center">
      <div className="flex justify-center">
        <div className="w-full max-w-3xl">
          <div className="flex flex-col items-center text-center">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-white pb-12 text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-8xl"
            >
              S E E N U . A
            </motion.h1>

            <motion.h4
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl md:text-4xl text-transparent"
            >
              Full stack Developer
            </motion.h4>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mt-8 max-w-xl text-sm sm:text-base text-white"
            >
              Motivated and dedicated Full stack Developer with a solid foundation in programming principles and a passion for creating
              efficient, reliable, and scalable applications. Proficient in Java and SQL with strong problem-solving skills and a proven ability
              to work effectively in team environments. Eager to contribute technical expertise and creativity to innovative software
              development projects.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
