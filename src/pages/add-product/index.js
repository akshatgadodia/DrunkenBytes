import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import AddProductPage from '@/app/components/templates/addProductPage/AddProductPage';

const AddProduct = props => {
  return (
    <DefaultLayout>
      <AddProductPage/>
    </DefaultLayout>
  );
};

export default AddProduct;