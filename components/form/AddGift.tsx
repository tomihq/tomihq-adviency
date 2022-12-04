import { useRef, useState, MutableRefObject } from 'react';
import dynamic from 'next/dynamic';
interface AddGift {
    addGift: any;
}

const Picker = dynamic(
    () => {
      return import('emoji-picker-react');
    },
    { ssr: false }
  );

export const AddGift = ({addGift}:AddGift) => {
  const [gift, setGift] = useState<string>("");
  const [emoji, setEmoji] = useState<any>("");
  const [openEmojiPicker, setOpenEmojiPicker] = useState<any>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSetEmoji = (e: any) =>{
    setEmoji(e);
    setOpenEmojiPicker(!openEmojiPicker)
  }

  const handleOpenEmojiPicker = () => setOpenEmojiPicker(!openEmojiPicker);
  
  const handleAddGift = () => {
    addGift({gift, emoji: emoji.emoji});
    setEmoji("");
    setGift("");
    if (inputRef.current !== null) {
        inputRef.current.value = "";
    }

  }
  

  return (
    <section className='text-center flex  flex-col items-center justify-center gap-3'>
        <div className='flex flex-row gap-3 ml-8'>
            {
                emoji && <p className='inline-block absolute mt-1 ml-4'> {emoji.emoji} </p> 
            }
            <input ref={inputRef} type="text" className='rounded-xl text-black text-center h-8 w-56' placeholder='Regalo que desees' onChange={(e)=>setGift(e.target.value)}/> 
            <button className='bg-gray-700 rounded-xl w-8 h-8' onClick={()=>handleOpenEmojiPicker()}>🔎</button>
        </div>
            {
                openEmojiPicker && <section className='absolute top-36'><Picker onEmojiClick={(e)=> handleSetEmoji(e)} lazyLoadEmojis={true} height={500} /></section>
            }
        <button 
            className='rounded-xl bg-red-600 text-white w-32 h-10 text-center flex items-center justify-center font-medium' 
            onClick={gift!==''?() => handleAddGift():()=>{}}
            aria-label={`Botón que nos permite añadir un regalo`}
        >Agregar 🎁</button>
   
    </section>  
  )
}
