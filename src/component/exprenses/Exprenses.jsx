import React from "react";
import { useState } from "react";
import Chart from "../chart/Chart";
import ExpenseItem from "../expenseItem/ExpenseItem";
import ExprensesFilter from "../exprensesFilter/ExprensesFilter";
import { ConteinerDivExp, DivExprenses_ExprensesFilter, ExprensesUl } from "./ExprensesCss"

export const Exprenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const yearChangeHandler = (event) => {
    setSelectedYear(event.target.value);
  };

  const filteredItem = expenses.filter((element) => {
    const stringifiedYear = new Date(element.date).getFullYear().toString();
    return stringifiedYear === selectedYear;
  });

  return (
    <ConteinerDivExp>
      <DivExprenses_ExprensesFilter>
        <ExprensesFilter value={selectedYear} onChange={yearChangeHandler} />
      </DivExprenses_ExprensesFilter>
      <Chart items={filteredItem} />
      <ExprensesUl>
        {filteredItem.map((elem) => {
          return (
            <ExpenseItem
              key={elem.title}
              title={elem.title}
              price={elem.price}
              date={elem.date}
            />
          );
        })}
      </ExprensesUl>
    </ConteinerDivExp>
  );
};
