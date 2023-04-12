"use client"
import { Jost } from 'next/font/google'
import Navbar from 'src/shared/components/common/navbar/navbar';
import Header from 'src/shared/components/common/header/header'
import MainSection from 'src/shared/pages/home/main-section/main-section';
import PrivateRoutes from '@/shared/utils/priavte-routes';
import { useEffect, useState } from 'react';
import { getFeedbacks } from '@/shared/utils/firebase/feedback';
import { Feedback } from '@/shared/types/feedback.types';
const jost = Jost({
  subsets: ['latin']
})

function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState<Array<Feedback & { vote: number, comments: Array<string>, id: string }>>();
  const fetchFeedback = async () => {
    const feedbacks = await getFeedbacks();
    setFeedbacks(feedbacks);
  }

  useEffect(() => {
    fetchFeedback();
  }, [])
  
  return (
    <div className={`${jost.className} main_box`} style={{ height: '100%' }}>
      <Navbar />
      <Header />
      <MainSection feedbacks={feedbacks} />
    </div>
  )
}

export default PrivateRoutes(Feedbacks)