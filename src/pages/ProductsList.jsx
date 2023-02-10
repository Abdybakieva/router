import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

export const ProductsList = ({ PRODUCTS }) => {
 const navigate= useNavigate()

  return (
    <>
      {PRODUCTS.map((item) => {
        return (
          <>
            <ContainerProducts>
              <h3>{item.title}</h3>
              <Button onClick={()=>{navigate(`/products/${item.id}/details`)}}>Details</Button>
            </ContainerProducts>
          </>
        );
      })}
    </>
  );
};

const ContainerProducts=styled.div`
margin: 0 auto;
    display: flex;
    width: 500px;
    height: 100px;
    text-align: center;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 2rem;
    background-color: white;
    margin-top: 1rem;
`
