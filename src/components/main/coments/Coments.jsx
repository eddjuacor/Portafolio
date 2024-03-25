import { Target } from "./Target"
import { Target01 } from "./Target01"
import { Target02 } from "./Target02"
import { Target03 } from "./Target03"

export const Coments = () => {
  return (
    <div className="md:w-[100%]  mx-auto flex flex-wrap justify-center gap-2 mt-10">
        <Target03/>
        <Target/>
        <Target01/>
        <Target02/>
        
    </div>
  )
}
