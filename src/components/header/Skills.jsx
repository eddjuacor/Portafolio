import html from '../../../public/assets/img/icons/html.svg'
import css from '../../../public/assets/img/icons/css.svg'
import js from '../../../public/assets/img/icons/js.svg'
import react from '../../../public/assets/img/icons/react.svg'
import angular from '../../../public/assets/img/icons/angular.svg'
import php from '../../../public/assets/img/icons/php.svg'
import laravel from '../../../public/assets/img/icons/laravel.svg'
import dotnet from '../../../public/assets/img/icons/dotnet.svg'
import mysql from '../../../public/assets/img/icons/mysql.svg'
import c from '../../../public/assets/img/icons/c.svg'

const Skills = () => {
  return (
    <div className="">
        <h2 className="text-2xl text-center lg:text-4xl font-playFair text-zinc-600">Skills</h2>
        <div className="flex  gap-2">
          <div><img src={html} alt=""className='size-6 md:size-8'/></div>
          <div><img src={css} alt=""className=' size-6 md:size-8'/></div>
          <div><img src={js} alt=""className=' size-6 md:size-8'/></div>
          <div><img src={react} alt=""className=' size-6 md:size-8'/></div>
          <div><img src={angular} alt=""className=' size-6 md:size-8'/></div>
        </div>
          <div className="flex gap-2">
          <div><img src={php} alt=""className='size-6 md:size-8'/></div>
          <div><img src={laravel} alt=""className='size-6 md:size-8'/></div>
          <div><img src={c} alt=""className='size-6 md:size-8'/></div>
          <div><img src={dotnet} alt=""className='size-6 md:size-8'/></div>
          <div><img src={mysql} alt=""className='size-6 md:size-8'/></div>
        </div>
      </div>
  )
}

export default Skills
