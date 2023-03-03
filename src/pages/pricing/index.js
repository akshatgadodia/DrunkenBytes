import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import PricingPage from '@/app/components/templates/pricingPage/PricingPage';

const Pricing = props => {
  return (
    <DefaultLayout>
      <PricingPage/>
    </DefaultLayout>
  );
};

export default Pricing;