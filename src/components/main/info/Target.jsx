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
                    <span>Hace 4 Semanas</span>
                </p>
            </div>
            <div className=" w-[67%] mx-auto text-slate-70000 font-light mt-4">
                <p className=''>Soy estudiante del 5to. semestre de Administracion de Empresas
                   en la Universidad San Carlos de Guatemala, Ciencias Economicas<br/><br/>
                   Tengo mas de 5 años de experiencia en puestos administrativos y Call Center.
                   <br/><br/>
                   En el año 2023 tome la desicion de empezar a adquirir conocimientos en la programacion
                   por lo que actualmente estoy tomando un curso en <span className='text-indigo-600'> INTECAP de Desarrollo Web con PHP y MySQL </span>
                   y otro Curso en <span className=' text-indigo-600'>KINAL de FULL STACK con .NET y Angular</span>. <br/><br/>
                   El objetivo para este 2024 es que al terminar estos cursos pueda conseguir una oportunidad
                   laboral en alguna empresa del sector y aplicar todo lo aprendido. 
                   
                </p>
            </div>
            <div className="flex justify-between items-center">
                <img src={like} alt="" className='size-5 ml-4 cursor-pointer'/>
                <p className=' text-slate-500 mr-4 cursor-pointer'>51 comentarios</p>
            </div>

        </div>
    )
}

