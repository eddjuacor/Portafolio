import { Target } from "./Target"
import { Target01 } from "./Target01"


export const Info = () => {
  return (
    <div className="md:w-[100%]  mx-auto flex flex-wrap justify-center gap-2 mt-10">
        <Target/>
        <Target01/>
    </div>
  )
  
}
