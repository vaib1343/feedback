"use client"
import { Jost } from 'next/font/google'
import Navbar from 'src/shared/components/common/navbar/navbar';
import Header from 'src/shared/components/common/header/header'
import MainSection from 'src/shared/pages/home/main-section/main-section';
import PrivateRoutes from '@/shared/utils/priavte-routes';
const jost = Jost({
  subsets: ['latin']
})

function Feedbacks() {
  return (
    <div className={`${jost.className} main_box`} style={{ height: '100%' }}>
      <Navbar />
      <Header />
      <MainSection />
    </div>
  )
}

export default PrivateRoutes(Feedbacks)