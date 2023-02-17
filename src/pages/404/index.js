import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import PageNotFound from '@/app/components/templates/pageNotFound/PageNotFound';

const Home = props => {
  return (
    <DefaultLayout>
      <PageNotFound/>
    </DefaultLayout>
  );
};

export default Home;
