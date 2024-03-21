import perfil from '../../../../public/assets/img/icons/foto.jpg'
import close from '../../../../public/assets/img/icons/close.svg'
import like from '../../../../public/assets/img/icons/like.svg'

export const Target = () => {
    return (
        <div className='w-[95%] bg-slate-50 shadow-lg shadow-slate-400/50 rounded-lg'>

            <div className=" flex justify-between items-center ">
                <div className='flex justify-center items-center m-4'>
                    <img src={perfil} alt="" className='size-8 rounded-full' />
                    <p className=' text-slate-400 ml-2 '>@eddjuacor</p>
                </div>
                <img src={close} alt="" className='size-5 mr-4 cursor-pointer ' />
            </div>
            <div className=" flex items-center w-[88%] mx-auto">
                <img src={perfil} alt="" className='size-16 rounded-full' />
                <p className=' text-slate-400 ml-2'>Eddy Ottoniel Juarez<br />
                    <span>Full Stack Developer <br /></span>
                    <span>Hace 4 horas</span>
                </p>
            </div>
            <div className=" w-[67%] mx-auto text-slate-70000 font-light mt-4">
                <p className=''>Trabajo como Encargado de facturacion<br/>
                   en Ingenieria Avanzada de Centroamerica.<br/>
                   <br/>    
                   Desde el 15 de Noviembre de 2021 <br/> 
                </p>
            </div>
            <div className="flex justify-between items-center">
                <img src={like} alt="" className='size-5 ml-4 cursor-pointer'/>
                <p className=' text-slate-500 mr-4 cursor-pointer'>51 comentarios</p>
            </div>

        </div>
    )
}

