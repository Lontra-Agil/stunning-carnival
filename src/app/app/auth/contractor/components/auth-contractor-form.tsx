"use client";

import { FilledButton } from "@/components/filled-button/filled-button";
import { FloatingLabelInput } from "@/components/floating-label-input/floating-label-input";
import { useUser } from "@clerk/nextjs";
import { EyeIcon, EyeClosedIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function AuthConctractorForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <form className="space-y-5">
      <div className="space-y-2">
        <FloatingLabelInput label={"E-mail"} />
      </div>

      <div className="space-y-2">
        <FloatingLabelInput
          type={showPassword ? "text" : "password"}
          leftIcon={showPassword ? <EyeClosedIcon /> : <EyeIcon />}
          label={"Senha"}
          onClickLeft={() => {
            setShowPassword(!showPassword);
          }}
        />
      </div>

      <FilledButton
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          height: 52,
          width: "100%",
          padding: "4px 16px",
          borderWidth: 0,
          cursor: "pointer",
          font: "inherit",
        }}
        label={"Continuar"}
      />
    </form>
  );
}
