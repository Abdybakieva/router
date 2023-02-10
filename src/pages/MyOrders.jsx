import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'

function MyOrders() {
  const navigate=useNavigate()
  const goBack=()=>{
    navigate(-1)
  }
  return (
    <>
    <StyledMyOrders>
        My Orders Page  dfghj
    </StyledMyOrders>
    <Button onClick={goBack}>Go Back</Button>
    </>
  )
}

export default MyOrders
const StyledMyOrders=styled.div`
  background-color: white;
  width: 500px;
  height: 120px;
  margin: 0 auto;
  margin-top: 2rem;
  padding-top: 2rem;
  `