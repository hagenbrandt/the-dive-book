import React from 'react'
import DiveLogs from './DiveLog'
import Footer from './Footer'

function App() {
  return (
    <div id="root">
      {/* <BackgroundLog> */}
      <DiveLogs />
      <DiveLogs />
      <DiveLogs />
      <Footer />
      {/* </BackgroundLog> */}
    </div>
  )
}

// const BackgroundLog = styled.div`
//   background-image: url(${img});
//   background-repeat: no-repeat;
//   background-size: cover;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   overflow: scroll;
//   height: 100%;
// `

export default App
