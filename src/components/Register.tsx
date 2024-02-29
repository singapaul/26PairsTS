import React from "react";

// @ts-ignore
import card from "@/assets/images/card_back.png";
import { RegisterForm } from "@/components/composed/RegisterForm";
import { BaseLayout } from "@/components/Layouts/BaseLayout";
 


const Register = ({path}: {path:string}) => {
 

  return (
    <BaseLayout>
      <div>
        <img src={card} alt="logo card" className="max-h-32" />
      </div>
     <RegisterForm/>
    </BaseLayout>
  );
};

export default Register;
