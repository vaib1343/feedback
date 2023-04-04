import React from 'react'
import Link from 'next/link';
import styles from 'app/shared/components/common/navbar/roadmap/roadmap.module.scss';
import List from 'app/shared/components/shared/list/list';

interface RoadMapType {
  id: number | string, label: string, color: string, count: number | string,
}

const roadmapData = [
  {
    id: 0, label: 'Planned', color: '#F49F85', count: 5,
  },
  {
    id: 1, label: 'In-Progress', color: '#AD1FEA', count: 10,
  },
  {
    id: 2, label: 'Live', color: '#62BCFA', count: 5,
  },
]

function Roadmap() {
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