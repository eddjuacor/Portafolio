import { Link } from "react-router-dom"



export const NavbarMain = () => {
  return (
    <div className="md:w-[60%]  mx-auto flex flex-wrap justify-center gap-2 mt-10">
      <nav className="flex gap-4 font-bold text-lg ">
        <Link to="/coments" className="no-underline text-slate-400 hover:text-slate-500">Coments</Link>
        <Link to="/info" className="no-underline text-slate-400 hover:text-slate-500 ">Info</Link>
        <Link to="/projects" className="no-underline text-slate-400 hover:text-slate-500 ">Projects</Link>
        <Link to="contact" className="no-underline  text-slate-400 hover:text-slate-500">Contact</Link>
      </nav>
      
    </div>
  )
}
