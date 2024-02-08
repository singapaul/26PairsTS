import React from "react";

import { BaseLayout } from "@/components/Layouts/BaseLayout";
// @ts-ignore
import card from "@/assets/images/card_back.png";
import { RegisterForm } from "@/components/composed/RegisterForm";
 

 

const login = () => {
  return (
    <BaseLayout>
      <div>
        <img src={card} alt="logo card" className="max-h-32" />
      </div>
     <RegisterForm/>
    </BaseLayout>
  );
}

export default login;
