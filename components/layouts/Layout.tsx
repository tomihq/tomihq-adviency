import Head from "next/head"
import { FC, PropsWithChildren } from "react";
interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    keywords?: string
}

export const Layout:FC<PropsWithChildren<Props>> = ({ children, title, pageDescription, imageFullUrl, keywords = "tomihq blog, programming blog, learn javascript, clean code javascript, good community" }) => {
  return (
    <>
        <Head>
            <title>{title + ' - Tomás Hernández'}</title>
            <meta name="keywords" content={keywords}></meta>
            <meta name="description" content={pageDescription}/>
            <meta name="og:title" content={title}/>
            <meta name="og:description" content={pageDescription}/>
            {
                imageFullUrl && (
                    <meta name="og:image" content={imageFullUrl}/>   
                )
            }
        </Head>

        <nav>
             {/* <Navbar/> */}
        </nav>

        {/* <SideMenu/> */}

        <main className='
                 max-w-2xl xl:max-w-4xl border-gray-200  mx-auto pt-5 pb-8 
                 sm:pb-0 bg-opacity-60 dark:text-gray-100'>
            {children}
        </main>

      <footer>
            {/* <Footer/> */}
      </footer> 
    </>
  )
}