import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

export const MyCard = () => {
  const navigate=useNavigate()
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <StyledMyCard>My Card Page dfvgbhjk fvgbh rfegty</StyledMyCard>
      <Button onClick={goBack}>Go Back</Button>
    </>
  );
};

const StyledMyCard=styled.div`
  background-color: white;
  width: 500px;
  height: 120px;
  margin: 0 auto;
  margin-top: 2rem;
  padding-top: 2rem;
`