/* eslint-disable react/no-unescaped-entities */
import { Outlet } from 'react-router-dom'
import perfil from '../../../public/assets/img/icons/foto.jpg'
import { NavbarMain } from '../main/NavbarMain'
import FallowButton from './FallowButton'
import {Info} from './Info'
import Skills from './Skills'
import fondo from '../../../public/assets/img/icons/fondo.png'


 export const Header = () => {
    return (
        <div className="md:w-[60%]  mx-auto relative">
            <div className=" aspect-[4/1] mx-auto bg-black shadow-lg shadow-slate-400 flex justify-center">
                <img src={fondo} alt="" className=' w-[500px] h-[300px] ' />
            </div>
            <div className=" w-[85%] max-w-full mx-auto">
                <div className=" relative flex items-center min-h-half-avatar py-2">
                    <picture className='absolute mb-4'>
                        <img src={perfil} alt="" className='rounded-full bg-slate-50 shadow-lg shadow-slate-600/50 size-32 lg:size-40 ' />
                    </picture>
                </div>
                <div className='flex justify-end'>
                    <FallowButton />
                </div>
            </div>

            <div className='xl:mt-12 w-[85%] max-w-full mx-auto '>
                <div>
                    <div className='flex justify-between'>
                        <h1 className='text-2xl lg:text-4xl font-playFair text-zinc-600'>Eddy Juárez <br/> <span className='text-lg font-light'>I'am Full Stack Developer</span></h1>
                        <div className=" ">
                            <Skills />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[85%] max-w-full mx-auto'>
                <Info />
            </div>
            <div>
         <div className="md:w-[85%]  mx-auto flex flex-wrap justify-center gap-2 mt-10">
           <NavbarMain/>
           <Outlet/>
            
         </div>
    </div>
        </div>
    )
}
