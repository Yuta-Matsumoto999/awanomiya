import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title='Home'>
        <p className='text-4xl text-center'>Welcome awanomiya!!!</p>
    </Layout>
  )
}
