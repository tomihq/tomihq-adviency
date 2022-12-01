import type { NextPage } from 'next'
import dynamic from 'next/dynamic';
import { IGift } from '../interfaces'
import { GIFTS } from '../utils'

const Layout = dynamic(() => import("../components/layouts/Layout"));
const HomePage: NextPage = () => {

  return (
    <>
      <Layout title={'Home Page'} pageDescription={'La página principal que muestra los regalos que quieras'}>
        <h1 className='text-5xl text-center font-semibold mb-4 mt-48'>Adviency</h1>
            <section id="gifts" className='flex flex-col gap-4 '>
                <h2 className='text-3xl text-sky-500 text-center'><strong>Regalos</strong></h2>
                <ol className='flex flex-col justify-center items-center'>
                    {GIFTS.map(({slug, name, emoji}:IGift) =>{
                        return (
                           <div key={slug} className='bg-white w-56 h-8 flex items-center justify-center gap-1 rounded-xl mt-3'>
                             <label htmlFor={slug}> {emoji} </label>
                             <li className="text-black text-center" id={slug}>{name}</li>
                           </div>
                        )
                    })}
                </ol>
            </section>
      </Layout>
    </>
  )
}

export default HomePage