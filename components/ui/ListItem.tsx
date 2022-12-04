import React from 'react'
import { IGift } from '../../interfaces'

interface ListItemProps{
    gift: IGift
}

export const ListItem = ({gift}:ListItemProps) => {
    const {id, emoji, name} = gift;

    return (
           <div key={id} className='bg-white w-56 h-8 flex items-center justify-center gap-1 rounded-xl mt-3'>
             <label htmlFor={id.toString()}> {emoji} </label>
             <li className="text-black text-center" id={id.toString()}>{name}</li>
           </div>
    )
   
  
}
