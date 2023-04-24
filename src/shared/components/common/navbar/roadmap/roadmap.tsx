import React, { useMemo } from 'react'
import Link from 'next/link';
import styles from 'src/shared/components/common/navbar/roadmap/roadmap.module.scss';
import List from 'src/shared/components/shared/list/list';
import { useAppSelector } from '@/shared/store';

interface RoadMapType {
  id: number | string, label: string, color: string, count: number | string,
}



function Roadmap() {
  const { feedbacks } = useAppSelector(state => state.feedback)

  const numOfProgress = feedbacks.reduce((flag, currentValue) => currentValue.updateStatus === 'inprogress' ? flag + 1 : flag, 0)
  const numOfPlanned = feedbacks.reduce((flag, currentValue) => currentValue.updateStatus === 'planned' ? flag + 1 : flag, 0)
  const numOfLive = feedbacks.reduce((flag, currentValue) => currentValue.updateStatus === 'live' ? flag + 1 : flag, 0)

  const roadmapData = useMemo(() => [
    {
      id: 0, label: 'Planned', color: '#F49F85', count: numOfPlanned,
    },
    {
      id: 1, label: 'In-Progress', color: '#AD1FEA', count: numOfProgress,
    },
    {
      id: 2, label: 'Live', color: '#62BCFA', count: numOfLive,
    },
  ], [numOfPlanned, numOfProgress, numOfLive])

  return (
    <section>
      <div className={styles.heading}>
        <h2>
          Roadmap
        </h2>
        <Link href={'/'}>
          view
        </Link>
      </div>
      <List data={roadmapData} style={{ marginTop: '2.4rem' }}>
        {(element: RoadMapType) => <li key={element.id} className={styles.listItem} style={{ color: '#647196' }}>
          <span className={styles.indicator} style={{ backgroundColor: element.color }} />
          <h6 style={{ flex: '1', margin: '.4rem 1.6rem', }}>
            {element.label}
          </h6>
          <span style={{ fontWeight: '700' }}>{element.count}</span>
        </li>}
      </List>
    </section>
  )
}

export default Roadmap