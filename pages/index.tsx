import type { NextPage } from 'next'
import { Layout } from '../components/layouts'
const HomePage: NextPage = () => {
  return (
    <>
      <Layout title={'Home Page'} pageDescription={'La página principal que muestra los regalos que quieras'}>
            <h1 className='text-4xl text-black text-center'><strong>Hello</strong>, from NextJS and TailwindCSS</h1>
      </Layout>
    </>
  )
}

export default HomePage