import React from 'react'
import { IGift } from '../../interfaces'


interface ListItemProps{
    gift: IGift
    removeGift: any;
}

export const ListItem = ({gift, removeGift}:ListItemProps) => {
    const {id, emoji, name} = gift;

    return (
           <section className='flex flex-row relative gap-3 items-center justify-center ml-8'>
                <div key={id} className='bg-white w-56 h-8 flex items-center justify-center gap-1 rounded-xl mt-3'>
                    <label htmlFor={id.toString()}> {emoji} </label>
                    <li className="text-black text-center" id={id.toString()}>{name}</li>
                </div>
                <div className='flex items-center justify-center mt-2 bg-gray-700 rounded-xl w-8 h-8'>
                    <button onClick={() => removeGift(id)} aria-label={`Botón para eliminar el regalo ${name}`} >❌</button>
                </div>
           </section>
    )
   
  
}
