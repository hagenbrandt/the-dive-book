import React from 'react'
import DiveLogs from './DiveLog'
import GlobalStyle from './common/GlobalStyles'
import styled from 'styled-components'
import img from './img/app_pg_one_bg.svg'
import Footer from './Footer'

function App() {
  return (
    <div id="root">
      <GlobalStyle />
      <BackgroundLog>
        <DiveLogs />
        <DiveLogs />
        <DiveLogs />
        <Footer />
      </BackgroundLog>
    </div>
  )
}

const BackgroundLog = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
  height: 100%;
`

export default App
