"use client"
import { Jost } from 'next/font/google'
import Navbar from 'app/shared/components/common/navbar/navbar';
import Header from 'app/shared/components/common/Header/header'
import Card from 'app/shared/components/shared/card/card';

const jost = Jost({
  subsets: ['latin']
})

export default function Home() {
  return (
    <div className={jost.className} style={{ height: '100%' }}>
      <Navbar />
      <Header />
      <Card/>
    </div>
  )
}
