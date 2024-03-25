import cv from '../../../public/assets/img/icons/download.svg'
import linkedin from '../../../public/assets/img/icons/linkedin.svg'
import github from '../../../public/assets/img/icons/github.svg'

export const Info = () => {
  return (
    <div className="flex  w-full pt-4">
      <div className="flex gap-2">
        <a href="" className=" no-underline font-mono text-slate-400 hover:text-slate-600"><img src={cv} alt="" className=" size-6 md:size-7"/></a>
        <a href="https://www.linkedin.com/in/eddju/" className="no-underline font-mono text-slate-400 hover:text-slate-600"><img src={linkedin} alt="" className=" size-6 md:size-7"/></a>
        <a href="https://github.com/eddjuacor" className="no-underline font-mono text-slate-400 hover:text-slate-600"><img src={github} alt="" className=" size-6 md:size-7" /></a>
      </div>
    </div>
  )
}
