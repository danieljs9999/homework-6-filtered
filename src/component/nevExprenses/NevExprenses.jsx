import React from "react";
import ExspensForm from "../exspens-form/ExspensForm";
import { DivButtonAdd } from "./NevExprensesCss";
import Button from "../UL/button/Button";
import { useState } from "react";

function NevExprenses({ onNewExpenseAdd }) {
  const [showForm, setshowForm] = useState(false);

  const showExpenseForm = () => {
    setshowForm((prevState) => !prevState);
  };
  return (
    <div>
      {showForm ? (
        <ExspensForm
          onShowForm={showExpenseForm}
          onNewExpenseAdd={onNewExpenseAdd}
        />
      ) : (
        <DivButtonAdd>
          <Button
            style={"button"}
            title="Добавить новый расход"
            onClick={showExpenseForm}
          />
        </DivButtonAdd>
      )}
    </div>
  );
}

export default NevExprenses;
