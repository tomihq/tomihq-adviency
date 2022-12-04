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
      name: gift,
      emoji: ''
     }
     setGifts(current => [...current, newGift ]) 
  }

  return (
    <>
      <Layout title={'Inicio'} pageDescription={'La página principal que muestra los regalos que quieras'}>
        <h1 className='text-5xl text-center font-semibold mb-4 mt-48 text-white'>Adviency</h1>
            <section id="gifts" className='flex flex-col gap-4 mb-8'>
                <h2 className='text-3xl text-red-600 text-center'><strong>Regalos</strong></h2>
                <ol className='flex flex-col justify-center items-center'>
                  {gifts.map((gift:IGift) =>{
                    return <ListItem key={gift.id} gift={gift}/>
                  })}
                </ol>
            </section>
            
            <AddGift addGift={handleAddGifts}/>
      </Layout>
    </>
  )
}

export default HomePage