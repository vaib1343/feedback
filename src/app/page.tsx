"use client"
import { Jost } from 'next/font/google'
import Navbar from 'app/shared/components/common/navbar/navbar';
import Header from 'app/shared/components/common/header/header'
import Card from 'app/shared/components/shared/card/card';
import MainSection from './shared/pages/home/main-section/main-section';
import Tag from './shared/components/shared/tag/tag';
import { FaComment } from 'react-icons/fa'
import Input from './shared/components/shared/input/input';
import FeedbackForm from './shared/pages/feedback-form/feedback-form';
const jost = Jost({
  subsets: ['latin']
})

export default function Home() {
  return (
    <div className={`${jost.className} main_box`} style={{ height: '100%' }}>
      <Navbar />
      <Header />
      <MainSection/>
      <FeedbackForm/>
    </div>
  )
}
