import React from "react";
import "./ExprensesFiltersCss.js";
import {
  DivExprensesFilter_conteiner_label_select,
  LabelExprensesFilter_conteiner_label,
  SelectExprensesFilter_conteiner_select,
} from "./ExprensesFiltersCss.js";

function ExprensesFilter({ value, onChange }) {
  return (
    <div className="ExprensesFilter_conteiner">
      <DivExprensesFilter_conteiner_label_select>
        <LabelExprensesFilter_conteiner_label>
          Filter by year
        </LabelExprensesFilter_conteiner_label>
        <SelectExprensesFilter_conteiner_select
          onChange={onChange}
          value={value}
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </SelectExprensesFilter_conteiner_select>
      </DivExprensesFilter_conteiner_label_select>
    </div>
  );
}

export default ExprensesFilter;
