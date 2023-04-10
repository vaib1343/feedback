"use client"
import React, { useContext, useEffect, useState } from 'react';
import { IoCloseSharp, } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx';
import styles from 'src/shared/components/common/navbar/navbar.module.scss';
import Tag from 'src/shared/components/shared/tag/tag';
import Container from '@/shared/components/shared/container/container'
import Roadmap from './roadmap/roadmap';
import Button from '../../shared/button/button';
import { UserContext } from '@/shared/context/user-context';
import { logout } from '@/shared/utils/firebase/auth';
import { useRouter } from 'next/navigation';
import { User } from 'firebase/auth';

const Tags = [
  'All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'
]

function Navbar() {
  const [show, setShow] = useState(false)
  const [selectedTag, setSelectedTag] = useState('All');
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const handleLogout = async () => {
    const response = await logout();
    console.log(response)
    router.push('/login');
    setUser({} as User)
  }

  return (
    <>
      <nav className={styles.mobileContainer}>
        <div className={styles.headingContainer}>
          <h1>
            Frontend Mentor
          </h1>
          <p>Feedback Board</p>
        </div>
        <div className={styles.icon} onClick={() => setShow(!show)}>
          {show ? <IoCloseSharp /> : <RxHamburgerMenu />}
        </div>
      </nav>
      <div className={styles.sidebarContainer} data-show={show ? 'show' : 'hide'}>
        <div className={styles.sidebar} data-show={show ? 'show' : 'hide'}>
          <Container>
            <div className={styles.tagContainer}>
              {
                Tags.map((item) => <Tag selected={selectedTag === item} key={item} onClick={() => setSelectedTag(item)}>{item}</Tag>)
              }
            </div>
          </Container>
          <Container style={{ marginTop: '2.4rem' }}>
            <Roadmap />
          </Container>
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end', flexDirection: 'column' }}>
            <h4 style={{ marginBlock: '1rem' }}>{user.displayName}</h4>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        </div>
      </div>
      <div className={styles.bigScreenContainger}>
        <Container style={{
          background: `radial-gradient(128.88% 128.88% at 103.9% -10.39%,#e84d70 0%, #a337f6 53.09%,#28a7ed 100%)`, color: '#ffff',
          fontSize: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'end'
        }}>
          <h1>
            Frontend Mentor
          </h1>
          <p>Feedback Board</p>
        </Container>
        <Container style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {
            Tags.map((item) => <Tag selected={selectedTag === item} onClick={() => setSelectedTag(item)} key={item}>{item}</Tag>)
          }
        </Container>
        <Container>
          <Roadmap />
        </Container>
        <div className={styles.logoutContainer}>
          <h4>{user.displayName}</h4>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </div>
    </>
  )
}




export default Navbar