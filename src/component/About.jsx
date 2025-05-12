import Img from "../assets/seenu_img.jpg"
import {delay, motion} from "framer-motion";

const About = () => {
    return (
      <div className="text-white  pb-4 my-20">
        <h1 className=" text-center text-4xl">About Me</h1>
        
        <div className="flex flex-wrap">
          <motion.div 
          whileInView={{ opacity: 1, x: 0}}        
          initial={{ opacity:0,x: -100}}
          transition={{ duration: 0.5}}
          className="w-full my-20 lg:w-1/2 lg:p-1">
             <div className="flex items-center justify-center">
  <img
    src={Img}
    alt="about"
    className="rounded-3xl w-60 h-60 sm:w-72 sm:h-80 md:w-80 md:h-80 lg:w-96 lg:h-96"
  />
</div>

          </motion.div>
          <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p 
             whileInView={{ opacity: 1, x: 0}}        
             initial={{ opacity:1,x: -100}}
             transition={{ duration: 1}}
            
            className="my-20 max-w-xl py-6">I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.
          I have worked with a variety of technologies, including React, Node.js, MySQL, and MongoDB.
          My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges.
          I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.
          Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.</motion.p>

          </div>

          </div>
        </div>
        
      </div>
      
    )
  }
  
  export default About;
  