"use client"
import { useEffect } from 'react';
import { Jost } from 'next/font/google'
import Navbar from 'src/shared/components/common/navbar/navbar';
import Header from 'src/shared/components/common/header/header'
import MainSection from 'src/shared/pages/home/main-section/main-section';
import PrivateRoutes from '@/shared/utils/priavte-routes';
import { useAppDispatch, useAppSelector } from '@/shared/store';
import { fetchFeedbacksThunk } from '@/shared/store/feedbackSlice';
import { useSearchParams, useRouter } from 'next/navigation';
const jost = Jost({
  subsets: ['latin']
})

function Feedbacks() {
  const { feedbacks } = useAppSelector(state => state.feedback)
  const dispatch = useAppDispatch();
  const router = useRouter();
  const query = useSearchParams();
  const category = query.get('category');

  useEffect(() => {
    dispatch(fetchFeedbacksThunk())
  }, [dispatch])

  useEffect(() => {
    if (!category) {
      router.replace('/feedbacks?category=all&sortby=most_voted')
    }
  }, [category, router])

  return (
    <div className={`${jost.className} main_box`} style={{ height: '100%' }}>
      <Navbar />
      <Header />
      <MainSection feedbacks={feedbacks} />
    </div>
  )
}

export default PrivateRoutes(Feedbacks)