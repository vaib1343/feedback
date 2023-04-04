"use client"
import React, { useState } from 'react';
import { IoCloseSharp, } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx';
import styles from 'app/shared/components/common/navbar/navbar.module.scss';
import Tag from 'app/shared/components/shared/tag/tag';
import Container from '../../shared/container/container';
import Roadmap from './roadmap/roadmap';

const Tags = [
  'All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'
]

function Navbar() {
  const [show, setShow] = useState(false)
  const [selectedTag, setSelectedTag] = useState('All');
  return (
    <>
      <React.Fragment>
        <nav className={styles.container}>
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
      </React.Fragment>
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
            <Roadmap/>
          </Container>
        </div>
      </div>
      {/* <S.container>
        <S.headingContainer>
          <h1>Frontend Mentor</h1>
          <h5>Feedback Board</h5>
        </S.headingContainer>
        <S.icon onClick={() => setShow(!show)}>
          {!show ? <RxHamburgerMenu /> : <IoCloseSharp />}
        </S.icon>
      </S.container>
      {<S.sidebarContainer isShow={show}>
        <S.sidebar>
          xyz
        </S.sidebar>
      </S.sidebarContainer>} */}
    </>
  )
}




export default Navbar