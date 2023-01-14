import React from "react";
import { LabelForminput, InputForminput } from "./FormInputCss";

function Forminput(props) {
  const { labelName, placeholder, inputType, id, ...rest } = props;
  return (
    <div>
      <LabelForminput htmlFor={id}>{labelName}</LabelForminput>
      <InputForminput
        placeholder={placeholder || "..."}
        id={id}
        type={inputType}
        {...rest}
        required
      />
    </div>
  );
}
export default Forminput;
