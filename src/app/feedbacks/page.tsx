"use client"
import { Jost } from 'next/font/google'
import Navbar from 'src/shared/components/common/navbar/navbar';
import Header from 'src/shared/components/common/header/header'
import MainSection from 'src/shared/pages/home/main-section/main-section';
const jost = Jost({
  subsets: ['latin']
})

export default function Feedbacks() {
  return (
    <div className={`${jost.className} main_box`} style={{ height: '100%' }}>
      <Navbar />
      <Header />
      <MainSection/>
    </div>
  )
}
