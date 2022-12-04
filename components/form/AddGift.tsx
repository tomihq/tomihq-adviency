import { useState } from 'react';

interface AddGift {
    addGift: any;
}

export const AddGift = ({addGift}:AddGift) => {
  const [gift, setGift] = useState<string>("");

  return (
    <section className='text-center flex  flex-col items-center justify-center gap-3'>
        <input type="text" className='rounded-xl text-dark text-center h-8 w-56' placeholder='Regalo que desees' onChange={(e)=>setGift(e.target.value)}/> 
        <button 
            className='rounded-xl bg-red-600 text-white w-32 h-10 text-center flex items-center justify-center font-medium' 
            onClick={gift!==''?() => addGift(gift):()=>{}}
            aria-label={`Botón que nos permite añadir un regalo`}
        >Agregar 🎁</button>
    </section>  
  )
}
