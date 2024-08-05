import logotipo from '../assets/Logotipo.JPG'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-2 w-14' src={logotipo} alt="logo"/>   
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
           <a href='https://www.linkedin.com/in/eddju/'><FaLinkedin/></a> 
           <a href='https://github.com/eddjuacor'><FaGithub/></a> 
        </div>
    </nav>
  )
}

export default Navbar
