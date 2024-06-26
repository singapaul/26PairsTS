import React from "react";

// @ts-ignore
import card from "@/assets/images/card_back.png";
import { LoginForm } from "@/components/composed/LoginForm";
import { BaseLayout } from "@/components/Layouts/BaseLayout";
 

 

const login = () => {
  return (
    <BaseLayout>
      <div>
        <img src={card} alt="logo card" className="max-h-40" />
      </div>
      <LoginForm />
    </BaseLayout>
  );
}

export default login;
