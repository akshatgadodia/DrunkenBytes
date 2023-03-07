import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import RegisterPage from '@/app/components/templates/registerPage/RegisterPage';

const Register = props => {
  return (
    <DefaultLayout>
      <RegisterPage/>
    </DefaultLayout>
  );
};

export default Register;