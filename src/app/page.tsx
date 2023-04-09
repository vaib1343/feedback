"use client"
import { Jost } from 'next/font/google'
const jost = Jost({
  subsets: ['latin']
})

export default function Home() {
  return (
    <div className={`${jost.className} main_box`} style={{ height: '100%' }}>
    </div>
  )
}
