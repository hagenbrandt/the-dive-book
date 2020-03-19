import styled from 'styled-components'
import img from './img/app_pg_one_bg.svg'

const BackgroundLog = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll; */
  height: 100vh;
`
export default BackgroundLog
