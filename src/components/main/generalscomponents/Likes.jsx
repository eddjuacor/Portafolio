import { useState } from "react"
import likeicon from '../../../../public/assets/img/icons/like.svg'

export const Likes = () => {

    const  [like, setLike] = useState(5);
  return (
    <div className="flex gap-2">
        <img src={likeicon} alt="" onClick={()=>setLike(like + 1)} className="size-5 ml-4 cursor-pointer" />
        <p className=" font-mono text-gray-500">{like}</p>
    </div>
  )
}
