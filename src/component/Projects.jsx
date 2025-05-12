import {PROJECTS} from '../contants';
import IMG from '../assets/nike.png'
import Img2 from '../assets/chrome3.png'
import Img3 from '../assets/project5.png'
import {delay, motion} from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-50 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center text-center">
            <div className='w-full lg:w-1/4 justify-center flex'>
            <motion.img 
            whileInView={{ opacity: 1, x: 0}}        
            initial={{ opacity:0,x: -100}}
            transition={{ duration: 0.5}}
            src={IMG}
            width={300}
            height={100}
            alt={project.title}
            className='mb-2 rounded'

            />
          </div>
          <motion.div
          whileInView={{ opacity: 1, x: 0}}        
          initial={{ opacity:1,x: -100}}
          transition={{ duration: 1}}
          className='w-full   max-w-xl lg:w-1/4 '>
               <h3 className='mb-2 font-semibold'>{project.title}</h3>
               <h3 className=' text-white my-15 '>{project.description}</h3>

          </motion.div>
          
          <div className='w-full lg:w-1/4 justify-center flex'>
            <motion.img 
            whileInView={{ opacity: 1, x: 0}}        
            initial={{ opacity:0,x: -100}}
            transition={{ duration: 0.5}}
            src={Img2}
            width={400}
            height={400}
            alt={project.title}
            className='mb-6 rounded'

            />
          </div>
          <motion.div 
          whileInView={{ opacity: 1, x: 0}}        
          initial={{ opacity:1,x: -100}}
          transition={{ duration: 1}}
          className='w-full   max-w-xl lg:w-1/4'>
               <h6 className='mb-2 font-semibold'>Attendence Automation RPA Uipath</h6>
               <p className=' text-white my-15 '>An attendance automation system uses React and Tailwind for the frontend, Node.js for backend processing, and UiPath to trigger voice calls to absent users via Twilio. Attendance is uploaded, absentees are identified, and UiPath automates calls. The system ensures prompt communication and reduces manual follow-up for absentee management.</p>

          </motion.div>
          <div className='w-full lg:w-1/4 justify-center flex'>
            <motion.img
            whileInView={{ opacity: 1, x: 0}}        
            initial={{ opacity:0,x: -100}}
            transition={{ duration: 0.5}} 
            src={Img3}
            width={400}
            height={200}
            alt={project.title}
            className='mb-6 rounded'

            />
          </div>
          <motion.div 
          whileInView={{ opacity: 1, x: 0}}        
          initial={{ opacity:1,x: -100}}
          transition={{ duration: 1}}
          className='w-full   max-w-xl lg:w-1/4 '>
               <h6 className='mb-2 font-semibold'>Keylogger application</h6>
               <h3 className='mb-4 text-white my-10'>A keylogger application built with Python captures keystrokes typed on a keyboard. It runs in the background using libraries like pynput or keyboard, recording input into a file for monitoring or analysis. Such tools are often used for parental control, security audits, or unethical spying, depending on intent.

               </h3>

          </motion.div>
          </div>
        ))}
        
    </div>
    </div>
  )
}
export default Projects;