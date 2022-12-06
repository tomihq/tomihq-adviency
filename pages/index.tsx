import type { NextPage } from 'next'
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { AddGift } from '../components/form';
import { ListItem } from '../components/ui/';
import { IGift } from '../interfaces'
import { GIFTS } from '../utils'

const Layout = dynamic(() => import("../components/layouts/Layout"));
const HomePage: NextPage = () => {

  const [gifts, setGifts] = useState(GIFTS);

  const handleAddGifts = (gift: any) =>{
     const newGift = {
      id: gifts.length+1,
      name: gift.gift,
      emoji: gift.emoji || ""
     }
     setGifts(current => [...current, newGift ]) 
  }

  const handleRemoveGifts = (id: number) =>{
    setGifts(gifts.filter((gift: IGift)=>{
      return gift.id !== id;
    })) 
  }

  return (
    <>
      <Layout title={'Inicio'} pageDescription={'La página principal que muestra los regalos que quieras'}>
        <h1 className='text-6xl text-center font-semibold mb-4 mt-48 text-white'>Adviency</h1>
            <section id="gifts" className='flex flex-col gap-4 mb-8 justify-center items-center'>
                <h2 className='text-3xl text-white text-center'><strong>Regalos</strong></h2>

                {
                  gifts.length>0
                  ?(
                   <>
                     <button className='bg-red-600 w-56 h-9 flex justify-center items-center mr-2 text-white font-semibold rounded-xl' onClick={() => setGifts([])}> Borrar todo </button>
                      <ol className='flex flex-col justify-center items-center'>
                        {
                            gifts.map((gift:IGift) =>{
                              return <ListItem key={gift.id} gift={gift} removeGift={handleRemoveGifts} />
                            })
                        }
                      </ol>
                   </>
                   ):
                   (
                    <strong className='text-white font-sans text-2xl'>¡No hay regalos! Agregá alguno</strong>
                   )
                }
            
            </section>
            <AddGift addGift={handleAddGifts}/>
      </Layout>
    </>
  )
}

export default HomePage