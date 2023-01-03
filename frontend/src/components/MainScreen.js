import React from 'react'
import { Container,Row } from 'react-bootstrap'
import './Mainscreen.css'
const MainScreen = ({title,Children}) => {
  return (
    <div className='mainback'>
       <Container>
        <Row>
          <div className='page'>
            {
                title && (
                    <>
                    <h1 className='heading'>{title}</h1>
                    <hr/>
                    </>
                )
            }
            {Children}
          </div>
        </Row>
       </Container>
    </div>
  )
}

export default MainScreen