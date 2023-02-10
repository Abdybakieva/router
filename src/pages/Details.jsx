import {  useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components';
import Button from '../components/Button';

function Details({products}) {
   const {id} = useParams()
   const navigate=useNavigate()
   const goBack=()=>{
 navigate(-1);
   }
 
  return (
    <>
      <StyledDetail>{products[id - 1].title} </StyledDetail>
      
      <Button onClick={goBack} >Go Back</Button>
    </>
  );
}

export default Details

const StyledDetail = styled.div`
  box-shadow: 6px -2px 41px 8px rgba(34, 60, 80, 0.19);
  background-color: white;
  width: 500px;
  margin: 0 auto;
  height: 80px;
  border-radius: 10px;
  margin-top: 2rem;
`;