import { Inter } from 'next/font/google'
import Layout from '../components/layout/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title='Home'>
        <p className='text-3xl text-center font-bold'>Welcome!!!</p>
    </Layout>
  )
}
