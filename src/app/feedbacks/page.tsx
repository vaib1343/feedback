"use client"
import { useEffect } from 'react';
import { Jost } from 'next/font/google'
import Navbar from 'src/shared/components/common/navbar/navbar';
import Header from 'src/shared/components/common/header/header'
import MainSection from 'src/shared/pages/home/main-section/main-section';
import { useAppDispatch, useAppSelector } from '@/shared/store';
import { fetchFeedbacksThunk } from '@/shared/store/feedbackSlice';
import { useRouter, useSearchParams } from 'next/navigation';
const jost = Jost({
  subsets: ['latin']
})

function Feedbacks() {
  const { feedbacks } = useAppSelector(state => state.feedback)
  const { user } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch();
  const router = useRouter();
  const query = useSearchParams();
  const category = query.get('category');
  const sortBy = query.get('sortby')

  useEffect(() => {
    dispatch(fetchFeedbacksThunk({ category, sortBy }))
  }, [dispatch, category, sortBy])

  return (
    <div className={`${jost.className} main_box`} style={{ height: '100%' }}>
      <Navbar />
      <Header />
      <MainSection feedbacks={feedbacks} />
    </div>
  )
}

export default Feedbacks