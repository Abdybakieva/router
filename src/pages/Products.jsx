import { Outlet, useNavigate } from "react-router-dom"
import Button from "../components/Button"
import { ProductsList } from "./ProductsList"

export const Products = ({ PRODUCTS }) => {
   const navigate = useNavigate();
   const goBack = () => {
     navigate(-1);
   };
  return (
   
    <>
      <div>
        <ProductsList PRODUCTS={PRODUCTS} />
        <Button onClick={goBack}>Go Back</Button>
      </div>
      <Outlet />
    </>
  );
};